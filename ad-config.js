// 广告配置文件
const AD_CONFIG = {
    // Google AdSense 配置
    googleAdsense: {
        enabled: true,
        publisherId: 'ca-pub-4198974976257818', // 你的发布商ID
        adSlots: {
            // 侧边栏广告
            sidebar: {
                slotId: '1234567890',
                format: 'auto',
                responsive: true,
                style: { display: 'block' }
            },
            // 测试结果页广告
            resultPage: {
                slotId: '1234567891',
                format: 'auto',
                responsive: true,
                style: { display: 'block' }
            },
            // 信息流广告
            native: {
                slotId: '1234567892',
                format: 'fluid',
                responsive: true,
                style: { display: 'block' }
            },
            // 视频广告
            video: {
                slotId: '1234567893',
                format: 'auto',
                responsive: true,
                style: { display: 'block' }
            }
        }
    },
    
    // 广告展示策略
    adStrategy: {
        // 在测试过程中显示广告的位置（题目索引）
        adPositions: [3, 6, 9, 12],
        // 广告展示的最小间隔（秒）
        minInterval: 30,
        // 是否允许跳过广告
        allowSkip: true,
        // 视频广告时长（秒）
        videoAdDuration: 15,
        // 是否显示进度条
        showProgress: true
    },
    
    // 广告收入追踪
    tracking: {
        // Google Analytics 事件追踪
        googleAnalytics: {
            enabled: true,
            eventCategory: 'advertising',
            eventLabel: 'personality_test_ad'
        },
        // 自定义统计
        customTracking: {
            enabled: true,
            endpoint: '/api/ad-tracking'
        }
    },
    
    // 广告样式配置
    styles: {
        // 侧边栏广告样式
        sidebar: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            width: '300px',
            zIndex: 1000,
            borderRadius: '8px',
            overflow: 'hidden'
        },
        // 信息流广告样式
        native: {
            margin: '20px 0',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        },
        // 视频广告样式
        video: {
            position: 'fixed',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '90%',
            maxWidth: '600px',
            zIndex: 9999,
            borderRadius: '12px',
            overflow: 'hidden'
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AD_CONFIG;
} else {
    window.AD_CONFIG = AD_CONFIG;
}
