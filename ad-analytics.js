// 广告分析监控系统
class AdAnalytics {
    constructor() {
        this.config = window.AD_CONFIG || {};
        this.analytics = {
            impressions: 0,
            clicks: 0,
            fallbacks: 0,
            errors: 0,
            revenue: 0,
            userSessions: new Set(),
            adTypes: {
                adsense: 0,
                fallback: 0
            },
            performance: {
                loadTime: [],
                renderTime: []
            }
        };
        this.init();
    }

    init() {
        this.loadAnalytics();
        this.setupEventListeners();
        this.startSessionTracking();
        console.log('AdAnalytics initialized');
    }

    // 加载历史数据
    loadAnalytics() {
        const saved = localStorage.getItem('adAnalytics');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.analytics = { ...this.analytics, ...data };
                // 转换 Set 数据
                if (data.userSessions) {
                    this.analytics.userSessions = new Set(data.userSessions);
                }
            } catch (e) {
                console.warn('Failed to load analytics data:', e);
            }
        }
    }

    // 保存数据
    saveAnalytics() {
        const dataToSave = {
            ...this.analytics,
            userSessions: Array.from(this.analytics.userSessions)
        };
        localStorage.setItem('adAnalytics', JSON.stringify(dataToSave));
    }

    // 设置事件监听
    setupEventListeners() {
        // 监听广告事件
        document.addEventListener('adEvent', (e) => {
            this.trackEvent(e.detail.type, e.detail.data);
        });

        // 监听页面卸载
        window.addEventListener('beforeunload', () => {
            this.saveAnalytics();
        });

        // 定期保存
        setInterval(() => {
            this.saveAnalytics();
        }, 30000); // 每30秒保存一次
    }

    // 开始会话跟踪
    startSessionTracking() {
        const sessionId = this.generateSessionId();
        this.analytics.userSessions.add(sessionId);
        this.trackEvent('session_start', { sessionId });
    }

    // 生成会话ID
    generateSessionId() {
        return Date.now().toString(36) + Math.random().toString(36).substr(2);
    }

    // 跟踪事件
    trackEvent(type, data = {}) {
        const timestamp = Date.now();
        
        switch (type) {
            case 'ad_impression':
                this.analytics.impressions++;
                this.analytics.adTypes[data.adType || 'adsense']++;
                break;
                
            case 'ad_click':
                this.analytics.clicks++;
                break;
                
            case 'ad_fallback':
                this.analytics.fallbacks++;
                this.analytics.adTypes.fallback++;
                break;
                
            case 'ad_error':
                this.analytics.errors++;
                break;
                
            case 'ad_revenue':
                this.analytics.revenue += data.amount || 0;
                break;
                
            case 'ad_load_time':
                this.analytics.performance.loadTime.push({
                    timestamp,
                    duration: data.duration
                });
                break;
                
            case 'ad_render_time':
                this.analytics.performance.renderTime.push({
                    timestamp,
                    duration: data.duration
                });
                break;
        }

        // 发送到服务器（如果配置了）
        this.sendToServer(type, { ...data, timestamp });
        
        console.log(`Analytics: ${type}`, data);
    }

    // 发送到服务器
    sendToServer(eventType, data) {
        if (window.location.protocol === 'file:') return;
        
        const endpoint = this.config.analytics?.endpoint || '/api/analytics';
        
        fetch(endpoint, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                event: eventType,
                data: data,
                url: window.location.href,
                userAgent: navigator.userAgent,
                timestamp: Date.now()
            })
        }).catch(e => {
            console.warn('Analytics server error:', e);
        });
    }

    // 获取统计报告
    getReport() {
        const totalSessions = this.analytics.userSessions.size;
        const totalImpressions = this.analytics.impressions;
        const clickRate = totalImpressions > 0 ? (this.analytics.clicks / totalImpressions * 100).toFixed(2) : 0;
        const fallbackRate = totalImpressions > 0 ? (this.analytics.fallbacks / totalImpressions * 100).toFixed(2) : 0;
        
        const avgLoadTime = this.analytics.performance.loadTime.length > 0 
            ? (this.analytics.performance.loadTime.reduce((a, b) => a + b.duration, 0) / this.analytics.performance.loadTime.length).toFixed(2)
            : 0;

        return {
            summary: {
                totalSessions,
                totalImpressions,
                totalClicks: this.analytics.clicks,
                totalRevenue: this.analytics.revenue,
                clickRate: `${clickRate}%`,
                fallbackRate: `${fallbackRate}%`,
                avgLoadTime: `${avgLoadTime}ms`
            },
            breakdown: {
                adTypes: this.analytics.adTypes,
                errors: this.analytics.errors
            },
            performance: this.analytics.performance
        };
    }

    // 显示报告
    showReport() {
        const report = this.getReport();
        console.table(report.summary);
        console.table(report.breakdown);
        return report;
    }

    // 重置数据
    reset() {
        this.analytics = {
            impressions: 0,
            clicks: 0,
            fallbacks: 0,
            errors: 0,
            revenue: 0,
            userSessions: new Set(),
            adTypes: {
                adsense: 0,
                fallback: 0
            },
            performance: {
                loadTime: [],
                renderTime: []
            }
        };
        this.saveAnalytics();
        console.log('Analytics data reset');
    }

    // 导出数据
    exportData() {
        const data = {
            ...this.analytics,
            userSessions: Array.from(this.analytics.userSessions),
            exportedAt: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `ad-analytics-${Date.now()}.json`;
        a.click();
        URL.revokeObjectURL(url);
    }
}

// 初始化分析系统
window.adAnalytics = new AdAnalytics();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdAnalytics;
}
