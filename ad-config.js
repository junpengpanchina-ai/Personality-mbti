// 广告配置文件
const AD_CONFIG = {
    // Google AdSense 配置
    googleAdsense: {
        enabled: true,
        publisherId: 'ca-pub-YOUR_PUBLISHER_ID', // 替换为你的发布商ID
        adSlotId: 'YOUR_AD_SLOT_ID', // 替换为你的广告位ID
        adFormat: 'auto',
        responsive: true
    },
    
    // 备用广告配置
    fallbackAd: {
        enabled: true,
        duration: 15, // 秒
        showProgress: true
    },
    
    // 广告展示策略
    adStrategy: {
        // 在测试过程中显示广告的位置（题目索引）
        adPositions: [3, 6, 9],
        // 广告展示的最小间隔（秒）
        minInterval: 30,
        // 是否允许跳过广告
        allowSkip: true
    },
    
    // 广告收入追踪
    tracking: {
        // Google Analytics 事件追踪
        googleAnalytics: {
            enabled: true,
            eventCategory: 'advertising',
            eventLabel: 'mbti_test_ad'
        },
        // 自定义统计
        customTracking: {
            enabled: true,
            endpoint: '/api/ad-tracking'
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AD_CONFIG;
} else {
    window.AD_CONFIG = AD_CONFIG;
}
