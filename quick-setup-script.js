// AdSense 快速配置脚本
// 运行此脚本可以快速更新配置文件中的 Slot ID

const QUICK_SETUP_CONFIG = {
    // 在这里填入你从 AdSense 后台获取的真实 Slot ID
    slotIds: {
        topBanner: '1234567890',        // 替换为你的顶部横幅 Slot ID
        sidebar: '1234567891',          // 替换为你的侧边栏 Slot ID
        native: '1234567892',           // 替换为你的信息流 Slot ID
        stickyBottom: '1234567893',     // 替换为你的底部粘性 Slot ID
        testInterstitial: '1234567894', // 替换为你的测试插播 Slot ID
        resultPage: '1234567895',       // 替换为你的结果页 Slot ID
        video: '1234567896'             // 替换为你的视频广告 Slot ID
    },
    
    // 发布商 ID (通常不需要修改)
    publisherId: 'ca-pub-4198974976257818',
    
    // 是否启用广告
    enabled: true
};

// 自动更新配置的函数
function updateAdConfig() {
    console.log('开始更新广告配置...');
    
    // 更新 AMP 广告配置
    if (window.AMP_AD_CONFIG) {
        Object.keys(QUICK_SETUP_CONFIG.slotIds).forEach(key => {
            if (window.AMP_AD_CONFIG.ampAdSlots[key]) {
                window.AMP_AD_CONFIG.ampAdSlots[key].slotId = QUICK_SETUP_CONFIG.slotIds[key];
                console.log(`更新 AMP 广告位 ${key}: ${QUICK_SETUP_CONFIG.slotIds[key]}`);
            }
        });
    }
    
    // 更新普通广告配置
    if (window.AD_CONFIG) {
        // 更新发布商 ID
        window.AD_CONFIG.googleAdsense.publisherId = QUICK_SETUP_CONFIG.publisherId;
        window.AD_CONFIG.googleAdsense.enabled = QUICK_SETUP_CONFIG.enabled;
        
        // 更新广告位 Slot ID
        if (window.AD_CONFIG.googleAdsense.adSlots) {
            const slotMapping = {
                sidebar: 'sidebar',
                resultPage: 'resultPage',
                native: 'native',
                video: 'video'
            };
            
            Object.keys(slotMapping).forEach(key => {
                const configKey = slotMapping[key];
                if (window.AD_CONFIG.googleAdsense.adSlots[configKey]) {
                    window.AD_CONFIG.googleAdsense.adSlots[configKey].slotId = QUICK_SETUP_CONFIG.slotIds[key];
                    console.log(`更新普通广告位 ${configKey}: ${QUICK_SETUP_CONFIG.slotIds[key]}`);
                }
            });
        }
    }
    
    console.log('广告配置更新完成！');
    console.log('当前配置:', {
        AMP: window.AMP_AD_CONFIG,
        Regular: window.AD_CONFIG
    });
}

// 验证配置的函数
function validateAdConfig() {
    console.log('验证广告配置...');
    
    const issues = [];
    
    // 检查 Slot ID 格式
    Object.keys(QUICK_SETUP_CONFIG.slotIds).forEach(key => {
        const slotId = QUICK_SETUP_CONFIG.slotIds[key];
        if (!slotId || slotId === '1234567890' || slotId.length < 10) {
            issues.push(`${key} 的 Slot ID 需要更新: ${slotId}`);
        }
    });
    
    // 检查发布商 ID
    if (!QUICK_SETUP_CONFIG.publisherId || !QUICK_SETUP_CONFIG.publisherId.startsWith('ca-pub-')) {
        issues.push('发布商 ID 格式不正确');
    }
    
    if (issues.length === 0) {
        console.log('✅ 配置验证通过！');
        return true;
    } else {
        console.log('❌ 配置验证失败:');
        issues.forEach(issue => console.log(`  - ${issue}`));
        return false;
    }
}

// 生成配置文件的函数
function generateConfigFiles() {
    console.log('生成配置文件...');
    
    // 生成 amp-ad-config.js 内容
    const ampConfigContent = `// AMP 广告配置
const AMP_AD_CONFIG = {
    ampAdSlots: {
        topBanner: {
            width: 320,
            height: 50,
            slotId: '${QUICK_SETUP_CONFIG.slotIds.topBanner}',
            type: 'adsense'
        },
        sidebar: {
            width: 300,
            height: 250,
            slotId: '${QUICK_SETUP_CONFIG.slotIds.sidebar}',
            type: 'adsense'
        },
        native: {
            width: 320,
            height: 100,
            slotId: '${QUICK_SETUP_CONFIG.slotIds.native}',
            type: 'adsense'
        },
        stickyBottom: {
            width: 320,
            height: 50,
            slotId: '${QUICK_SETUP_CONFIG.slotIds.stickyBottom}',
            type: 'adsense'
        },
        testInterstitial: {
            width: 300,
            height: 250,
            slotId: '${QUICK_SETUP_CONFIG.slotIds.testInterstitial}',
            type: 'adsense'
        }
    },
    ampAdStrategy: {
        positions: ['top', 'middle', 'bottom'],
        minInterval: 30,
        enableSticky: true,
        enableNative: true,
        testAdPositions: [2, 4],
        showResultPageAds: true
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AMP_AD_CONFIG;
} else {
    window.AMP_AD_CONFIG = AMP_AD_CONFIG;
}`;

    // 生成 ad-config.js 内容
    const adConfigContent = `// 广告配置文件
const AD_CONFIG = {
    googleAdsense: {
        enabled: ${QUICK_SETUP_CONFIG.enabled},
        publisherId: '${QUICK_SETUP_CONFIG.publisherId}',
        adSlots: {
            sidebar: {
                slotId: '${QUICK_SETUP_CONFIG.slotIds.sidebar}',
                format: 'auto',
                responsive: true
            },
            resultPage: {
                slotId: '${QUICK_SETUP_CONFIG.slotIds.resultPage}',
                format: 'auto',
                responsive: true
            },
            native: {
                slotId: '${QUICK_SETUP_CONFIG.slotIds.native}',
                format: 'fluid',
                responsive: true
            },
            video: {
                slotId: '${QUICK_SETUP_CONFIG.slotIds.video}',
                format: 'auto',
                responsive: true
            }
        }
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AD_CONFIG;
} else {
    window.AD_CONFIG = AD_CONFIG;
}`;

    console.log('生成的配置文件内容:');
    console.log('amp-ad-config.js:', ampConfigContent);
    console.log('ad-config.js:', adConfigContent);
    
    return { ampConfigContent, adConfigContent };
}

// 使用说明
console.log(`
🚀 AdSense 快速配置脚本

使用方法:
1. 在 QUICK_SETUP_CONFIG.slotIds 中填入你的真实 Slot ID
2. 运行 updateAdConfig() 更新配置
3. 运行 validateAdConfig() 验证配置
4. 运行 generateConfigFiles() 生成配置文件

示例:
QUICK_SETUP_CONFIG.slotIds.topBanner = '你的真实Slot ID';
updateAdConfig();
validateAdConfig();
`);

// 导出函数供外部使用
if (typeof window !== 'undefined') {
    window.updateAdConfig = updateAdConfig;
    window.validateAdConfig = validateAdConfig;
    window.generateConfigFiles = generateConfigFiles;
    window.QUICK_SETUP_CONFIG = QUICK_SETUP_CONFIG;
}
