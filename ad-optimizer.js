// 广告策略优化工具
class AdOptimizer {
    constructor() {
        this.config = window.AD_CONFIG || {};
        this.analytics = window.adAnalytics;
        this.optimizationRules = {
            // 基于点击率的优化
            clickRateThreshold: 2.0, // 2% 点击率阈值
            // 基于填充率的优化
            fillRateThreshold: 80, // 80% 填充率阈值
            // 基于收益的优化
            revenueThreshold: 0.01, // $0.01 收益阈值
            // 基于性能的优化
            loadTimeThreshold: 3000, // 3秒加载时间阈值
            // 基于用户行为的优化
            bounceRateThreshold: 70, // 70% 跳出率阈值
        };
        this.init();
    }

    init() {
        this.loadOptimizationData();
        this.setupOptimizationRules();
        console.log('AdOptimizer initialized');
    }

    // 加载优化数据
    loadOptimizationData() {
        const saved = localStorage.getItem('adOptimization');
        if (saved) {
            try {
                const data = JSON.parse(saved);
                this.optimizationRules = { ...this.optimizationRules, ...data };
            } catch (e) {
                console.warn('Failed to load optimization data:', e);
            }
        }
    }

    // 保存优化数据
    saveOptimizationData() {
        localStorage.setItem('adOptimization', JSON.stringify(this.optimizationRules));
    }

    // 设置优化规则
    setupOptimizationRules() {
        // 基于设备类型的优化
        this.optimizationRules.deviceOptimization = {
            mobile: {
                adSize: '320x50',
                refreshInterval: 60000, // 1分钟
                maxAdsPerPage: 2
            },
            desktop: {
                adSize: '728x90',
                refreshInterval: 30000, // 30秒
                maxAdsPerPage: 4
            }
        };

        // 基于时间的优化
        this.optimizationRules.timeOptimization = {
            peakHours: [9, 10, 11, 14, 15, 16, 19, 20, 21], // 高峰时段
            offPeakHours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 22, 23], // 低峰时段
            peakMultiplier: 1.5, // 高峰时段广告密度倍数
            offPeakMultiplier: 0.7 // 低峰时段广告密度倍数
        };

        // 基于用户行为的优化
        this.optimizationRules.behaviorOptimization = {
            newUser: {
                adFrequency: 'high',
                adTypes: ['banner', 'interstitial']
            },
            returningUser: {
                adFrequency: 'medium',
                adTypes: ['banner', 'native']
            },
            engagedUser: {
                adFrequency: 'low',
                adTypes: ['native', 'video']
            }
        };
    }

    // 分析当前表现
    analyzePerformance() {
        if (!this.analytics) return null;

        const report = this.analytics.getReport();
        const analysis = {
            performance: {
                clickRate: parseFloat(report.summary.clickRate),
                fallbackRate: parseFloat(report.summary.fallbackRate),
                avgLoadTime: parseFloat(report.summary.avgLoadTime),
                totalRevenue: report.summary.totalRevenue
            },
            recommendations: [],
            optimizations: []
        };

        // 点击率分析
        if (analysis.performance.clickRate < this.optimizationRules.clickRateThreshold) {
            analysis.recommendations.push({
                type: 'click_rate',
                priority: 'high',
                message: `点击率 ${analysis.performance.clickRate}% 低于阈值 ${this.optimizationRules.clickRateThreshold}%`,
                suggestions: [
                    '优化广告位置和尺寸',
                    '改善广告内容相关性',
                    '调整广告刷新频率'
                ]
            });
        }

        // 填充率分析
        if (analysis.performance.fallbackRate > (100 - this.optimizationRules.fillRateThreshold)) {
            analysis.recommendations.push({
                type: 'fill_rate',
                priority: 'high',
                message: `填充率 ${100 - analysis.performance.fallbackRate}% 低于阈值 ${this.optimizationRules.fillRateThreshold}%`,
                suggestions: [
                    '检查 AdSense 配置',
                    '优化广告单元设置',
                    '考虑添加更多广告网络'
                ]
            });
        }

        // 加载时间分析
        if (analysis.performance.avgLoadTime > this.optimizationRules.loadTimeThreshold) {
            analysis.recommendations.push({
                type: 'performance',
                priority: 'medium',
                message: `平均加载时间 ${analysis.performance.avgLoadTime}ms 超过阈值 ${this.optimizationRules.loadTimeThreshold}ms`,
                suggestions: [
                    '启用广告懒加载',
                    '优化广告脚本加载',
                    '减少同时加载的广告数量'
                ]
            });
        }

        // 收益分析
        if (analysis.performance.totalRevenue < this.optimizationRules.revenueThreshold) {
            analysis.recommendations.push({
                type: 'revenue',
                priority: 'high',
                message: `总收益 $${analysis.performance.totalRevenue} 低于阈值 $${this.optimizationRules.revenueThreshold}`,
                suggestions: [
                    '提高广告展示频率',
                    '优化广告位置',
                    '增加高价值广告类型'
                ]
            });
        }

        return analysis;
    }

    // 生成优化建议
    generateOptimizations() {
        const analysis = this.analyzePerformance();
        if (!analysis) return null;

        const optimizations = [];

        // 基于设备优化
        const deviceType = this.getDeviceType();
        const deviceRules = this.optimizationRules.deviceOptimization[deviceType];
        if (deviceRules) {
            optimizations.push({
                type: 'device_optimization',
                action: 'adjust_ad_size',
                value: deviceRules.adSize,
                reason: `优化 ${deviceType} 设备广告尺寸`
            });
        }

        // 基于时间优化
        const currentHour = new Date().getHours();
        const isPeakHour = this.optimizationRules.timeOptimization.peakHours.includes(currentHour);
        const multiplier = isPeakHour 
            ? this.optimizationRules.timeOptimization.peakMultiplier
            : this.optimizationRules.timeOptimization.offPeakMultiplier;

        if (multiplier !== 1) {
            optimizations.push({
                type: 'time_optimization',
                action: 'adjust_frequency',
                value: multiplier,
                reason: `${isPeakHour ? '高峰' : '低峰'}时段优化`
            });
        }

        // 基于用户行为优化
        const userType = this.getUserType();
        const behaviorRules = this.optimizationRules.behaviorOptimization[userType];
        if (behaviorRules) {
            optimizations.push({
                type: 'behavior_optimization',
                action: 'adjust_ad_types',
                value: behaviorRules.adTypes,
                reason: `优化 ${userType} 用户广告类型`
            });
        }

        return {
            analysis,
            optimizations,
            appliedAt: new Date().toISOString()
        };
    }

    // 获取设备类型
    getDeviceType() {
        const width = window.innerWidth;
        return width < 768 ? 'mobile' : 'desktop';
    }

    // 获取用户类型
    getUserType() {
        const sessionCount = this.analytics?.analytics?.userSessions?.size || 0;
        const impressionCount = this.analytics?.analytics?.impressions || 0;
        
        if (sessionCount === 1) return 'newUser';
        if (impressionCount > 10) return 'engagedUser';
        return 'returningUser';
    }

    // 应用优化
    applyOptimization(optimization) {
        switch (optimization.type) {
            case 'device_optimization':
                this.applyDeviceOptimization(optimization);
                break;
            case 'time_optimization':
                this.applyTimeOptimization(optimization);
                break;
            case 'behavior_optimization':
                this.applyBehaviorOptimization(optimization);
                break;
        }
    }

    // 应用设备优化
    applyDeviceOptimization(optimization) {
        if (optimization.action === 'adjust_ad_size') {
            // 调整广告尺寸
            const adElements = document.querySelectorAll('.adsbygoogle');
            adElements.forEach(el => {
                el.style.width = optimization.value.split('x')[0] + 'px';
                el.style.height = optimization.value.split('x')[1] + 'px';
            });
        }
    }

    // 应用时间优化
    applyTimeOptimization(optimization) {
        if (optimization.action === 'adjust_frequency') {
            // 调整广告刷新频率
            const newInterval = this.config.adStrategy.refreshInterval * optimization.value;
            this.config.adStrategy.refreshInterval = Math.max(10000, newInterval); // 最少10秒
        }
    }

    // 应用行为优化
    applyBehaviorOptimization(optimization) {
        if (optimization.action === 'adjust_ad_types') {
            // 调整广告类型优先级
            this.config.adStrategy.preferredAdTypes = optimization.value;
        }
    }

    // 自动优化
    autoOptimize() {
        const optimizations = this.generateOptimizations();
        if (!optimizations) return;

        console.log('Auto-optimization results:', optimizations);

        // 应用高优先级优化
        optimizations.optimizations
            .filter(opt => opt.priority === 'high')
            .forEach(opt => this.applyOptimization(opt));

        // 保存优化结果
        this.saveOptimizationData();
    }

    // 获取优化报告
    getOptimizationReport() {
        const analysis = this.analyzePerformance();
        const optimizations = this.generateOptimizations();
        
        return {
            timestamp: new Date().toISOString(),
            analysis,
            optimizations,
            appliedOptimizations: this.optimizationRules
        };
    }
}

// 初始化优化器
window.adOptimizer = new AdOptimizer();

// 导出供其他模块使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdOptimizer;
}
