// AMP 广告配置
const AMP_AD_CONFIG = {
    // AMP 广告位配置
    ampAdSlots: {
        // 顶部横幅
        topBanner: {
            width: 320,
            height: 50,
            slotId: '9310887265', // 真实 slot ID
            type: 'adsense'
        },
        // 侧边栏
        sidebar: {
            width: 300,
            height: 250,
            slotId: '9310887265', // 真实 slot ID
            type: 'adsense'
        },
        // 信息流
        native: {
            width: 320,
            height: 100,
            slotId: '9310887265', // 真实 slot ID
            type: 'adsense'
        },
        // 底部粘性
        stickyBottom: {
            width: 320,
            height: 50,
            slotId: '9310887265', // 真实 slot ID
            type: 'adsense'
        },
        // 测试中插播
        testInterstitial: {
            width: 300,
            height: 250,
            slotId: '1234567894', // 替换为你的真实 slot ID
            type: 'adsense'
        }
    },
    
    // AMP 广告策略
    ampAdStrategy: {
        // 广告展示位置
        positions: ['top', 'middle', 'bottom'],
        // 最小间隔（秒）
        minInterval: 30,
        // 是否启用粘性广告
        enableSticky: true,
        // 是否启用信息流广告
        enableNative: true,
        // 测试中插播广告位置（题目索引）
        testAdPositions: [2, 4],
        // 是否在结果页显示广告
        showResultPageAds: true
    },
    
    // AMP 广告样式
    ampStyles: {
        topBanner: {
            margin: '10px auto',
            display: 'block'
        },
        sidebar: {
            position: 'fixed',
            top: '20px',
            right: '20px',
            zIndex: 1000
        },
        native: {
            margin: '20px 0',
            borderRadius: '8px',
            overflow: 'hidden'
        },
        stickyBottom: {
            position: 'fixed',
            bottom: '0',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 9999
        },
        testInterstitial: {
            margin: '20px auto',
            borderRadius: '8px',
            overflow: 'hidden',
            boxShadow: '0 4px 12px rgba(0,0,0,0.1)'
        }
    }
};

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AMP_AD_CONFIG;
} else {
    window.AMP_AD_CONFIG = AMP_AD_CONFIG;
}
