// AdSense 自动化配置脚本
// 此脚本可以自动生成 AdSense 配置、验证设置并提供测试工具

class AdSenseAutomation {
    constructor() {
        this.config = {
            publisherId: 'ca-pub-4198974976257818',
            siteName: 'Personality MBTI',
            domain: window.location.hostname,
            adUnits: [
                {
                    name: 'MBTI Top Banner',
                    size: '320x50',
                    type: 'display',
                    format: 'responsive',
                    position: 'top',
                    description: '页面顶部横幅广告，移动端友好'
                },
                {
                    name: 'MBTI Sidebar',
                    size: '300x250',
                    type: 'display',
                    format: 'responsive',
                    position: 'sidebar',
                    description: '桌面端右侧固定位置广告'
                },
                {
                    name: 'MBTI Native',
                    size: '320x100',
                    type: 'display',
                    format: 'responsive',
                    position: 'content',
                    description: '内容中自然插入的信息流广告'
                },
                {
                    name: 'MBTI Sticky Bottom',
                    size: '320x50',
                    type: 'display',
                    format: 'responsive',
                    position: 'sticky-bottom',
                    description: '移动端底部固定展示广告'
                },
                {
                    name: 'MBTI Test Interstitial',
                    size: '300x250',
                    type: 'display',
                    format: 'responsive',
                    position: 'test-interstitial',
                    description: '测试过程中插播展示广告'
                },
                {
                    name: 'MBTI Result Page',
                    size: '300x250',
                    type: 'display',
                    format: 'responsive',
                    position: 'result-page',
                    description: '结果页面展示广告'
                },
                {
                    name: 'MBTI Video Ad',
                    size: '300x250',
                    type: 'display',
                    format: 'responsive',
                    position: 'video',
                    description: '视频广告展示'
                }
            ]
        };
        
        this.slotIds = {};
        this.testResults = {};
    }

    // 生成 AdSense 控制台配置指南
    generateConsoleGuide() {
        console.log('🚀 AdSense 控制台配置指南');
        console.log('=====================================');
        
        this.config.adUnits.forEach((unit, index) => {
            console.log(`\n${index + 1}. ${unit.name}`);
            console.log(`   尺寸: ${unit.size}`);
            console.log(`   类型: ${unit.type}`);
            console.log(`   格式: ${unit.format}`);
            console.log(`   位置: ${unit.position}`);
            console.log(`   描述: ${unit.description}`);
            console.log(`   操作: 在 AdSense 后台创建此广告单元`);
        });
        
        console.log('\n📋 配置步骤:');
        console.log('1. 登录 AdSense 后台');
        console.log('2. 进入 "广告" → "按广告单元"');
        console.log('3. 点击 "创建广告单元"');
        console.log('4. 按照上述配置创建每个广告单元');
        console.log('5. 获取每个广告单元的 Slot ID');
        console.log('6. 使用 updateSlotIds() 方法更新配置');
    }

    // 更新 Slot ID
    updateSlotIds(slotIds) {
        this.slotIds = slotIds;
        console.log('✅ Slot ID 已更新:', this.slotIds);
        
        // 自动更新配置文件
        this.updateConfigFiles();
    }

    // 自动更新配置文件
    updateConfigFiles() {
        // 更新 AMP 配置
        if (window.AMP_AD_CONFIG) {
            Object.keys(this.slotIds).forEach(key => {
                if (window.AMP_AD_CONFIG.ampAdSlots[key]) {
                    window.AMP_AD_CONFIG.ampAdSlots[key].slotId = this.slotIds[key];
                }
            });
            console.log('✅ AMP 配置已更新');
        }

        // 更新普通配置
        if (window.AD_CONFIG) {
            window.AD_CONFIG.googleAdsense.publisherId = this.config.publisherId;
            window.AD_CONFIG.googleAdsense.enabled = true;
            
            const slotMapping = {
                sidebar: 'sidebar',
                resultPage: 'resultPage',
                native: 'native',
                video: 'video'
            };
            
            Object.keys(slotMapping).forEach(key => {
                const configKey = slotMapping[key];
                if (window.AD_CONFIG.googleAdsense.adSlots[configKey]) {
                    window.AD_CONFIG.googleAdsense.adSlots[configKey].slotId = this.slotIds[key];
                }
            });
            console.log('✅ 普通配置已更新');
        }
    }

    // 生成配置文件内容
    generateConfigFiles() {
        const ampConfig = this.generateAMPConfig();
        const adConfig = this.generateAdConfig();
        
        console.log('📄 生成的配置文件内容:');
        console.log('\n=== amp-ad-config.js ===');
        console.log(ampConfig);
        console.log('\n=== ad-config.js ===');
        console.log(adConfig);
        
        return { ampConfig, adConfig };
    }

    // 生成 AMP 配置
    generateAMPConfig() {
        return `// AMP 广告配置 - 自动生成
const AMP_AD_CONFIG = {
    ampAdSlots: {
        topBanner: {
            width: 320,
            height: 50,
            slotId: '${this.slotIds.topBanner || 'YOUR_SLOT_ID'}',
            type: 'adsense'
        },
        sidebar: {
            width: 300,
            height: 250,
            slotId: '${this.slotIds.sidebar || 'YOUR_SLOT_ID'}',
            type: 'adsense'
        },
        native: {
            width: 320,
            height: 100,
            slotId: '${this.slotIds.native || 'YOUR_SLOT_ID'}',
            type: 'adsense'
        },
        stickyBottom: {
            width: 320,
            height: 50,
            slotId: '${this.slotIds.stickyBottom || 'YOUR_SLOT_ID'}',
            type: 'adsense'
        },
        testInterstitial: {
            width: 300,
            height: 250,
            slotId: '${this.slotIds.testInterstitial || 'YOUR_SLOT_ID'}',
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
    }

    // 生成普通配置
    generateAdConfig() {
        return `// 广告配置文件 - 自动生成
const AD_CONFIG = {
    googleAdsense: {
        enabled: true,
        publisherId: '${this.config.publisherId}',
        adSlots: {
            sidebar: {
                slotId: '${this.slotIds.sidebar || 'YOUR_SLOT_ID'}',
                format: 'auto',
                responsive: true
            },
            resultPage: {
                slotId: '${this.slotIds.resultPage || 'YOUR_SLOT_ID'}',
                format: 'auto',
                responsive: true
            },
            native: {
                slotId: '${this.slotIds.native || 'YOUR_SLOT_ID'}',
                format: 'fluid',
                responsive: true
            },
            video: {
                slotId: '${this.slotIds.video || 'YOUR_SLOT_ID'}',
                format: 'auto',
                responsive: true
            }
        }
    },
    adStrategy: {
        adPositions: [3, 6, 9, 12],
        minInterval: 30,
        allowSkip: false,
        videoAdDuration: 30,
        showProgress: true
    }
};

if (typeof module !== 'undefined' && module.exports) {
    module.exports = AD_CONFIG;
} else {
    window.AD_CONFIG = AD_CONFIG;
}`;
    }

    // 验证配置
    validateConfig() {
        console.log('🔍 验证 AdSense 配置...');
        
        const issues = [];
        
        // 检查 Slot ID
        Object.keys(this.slotIds).forEach(key => {
            const slotId = this.slotIds[key];
            if (!slotId || slotId === 'YOUR_SLOT_ID' || slotId.length < 10) {
                issues.push(`${key} 的 Slot ID 需要更新: ${slotId}`);
            }
        });
        
        // 检查发布商 ID
        if (!this.config.publisherId || !this.config.publisherId.startsWith('ca-pub-')) {
            issues.push('发布商 ID 格式不正确');
        }
        
        // 检查域名
        if (!this.config.domain || this.config.domain === 'localhost') {
            issues.push('域名配置需要更新');
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

    // 测试广告显示
    async testAdDisplay() {
        console.log('🧪 测试广告显示...');
        
        const testResults = {};
        
        // 测试 AdSense 脚本加载
        testResults.adsenseLoaded = typeof adsbygoogle !== 'undefined';
        console.log(`AdSense 脚本加载: ${testResults.adsenseLoaded ? '✅' : '❌'}`);
        
        // 测试广告容器
        const adContainers = document.querySelectorAll('.adsbygoogle');
        testResults.adContainers = adContainers.length;
        console.log(`广告容器数量: ${testResults.adContainers}`);
        
        // 测试配置对象
        testResults.ampConfig = typeof window.AMP_AD_CONFIG !== 'undefined';
        testResults.adConfig = typeof window.AD_CONFIG !== 'undefined';
        console.log(`AMP 配置: ${testResults.ampConfig ? '✅' : '❌'}`);
        console.log(`普通配置: ${testResults.adConfig ? '✅' : '❌'}`);
        
        // 测试广告管理器
        testResults.adManager = typeof window.adManager !== 'undefined';
        testResults.ampAdManager = typeof window.ampAdManager !== 'undefined';
        console.log(`广告管理器: ${testResults.adManager ? '✅' : '❌'}`);
        console.log(`AMP 广告管理器: ${testResults.ampAdManager ? '✅' : '❌'}`);
        
        this.testResults = testResults;
        return testResults;
    }

    // 生成测试报告
    generateTestReport() {
        console.log('📊 AdSense 测试报告');
        console.log('=====================================');
        
        Object.keys(this.testResults).forEach(key => {
            const result = this.testResults[key];
            const status = typeof result === 'boolean' ? (result ? '✅' : '❌') : result;
            console.log(`${key}: ${status}`);
        });
        
        // 生成建议
        console.log('\n💡 优化建议:');
        
        if (!this.testResults.adsenseLoaded) {
            console.log('- 检查 AdSense 脚本是否正确加载');
        }
        
        if (this.testResults.adContainers === 0) {
            console.log('- 检查广告容器是否正确创建');
        }
        
        if (!this.testResults.ampConfig) {
            console.log('- 检查 AMP 配置文件是否正确引入');
        }
        
        if (!this.testResults.adConfig) {
            console.log('- 检查普通配置文件是否正确引入');
        }
    }

    // 自动优化建议
    generateOptimizationSuggestions() {
        console.log('🚀 自动优化建议');
        console.log('=====================================');
        
        const suggestions = [];
        
        // 基于测试结果生成建议
        if (this.testResults.adContainers < 5) {
            suggestions.push('增加广告容器数量以提高收入');
        }
        
        if (!this.testResults.ampConfig) {
            suggestions.push('启用 AMP 广告以提升移动端性能');
        }
        
        if (!this.testResults.adManager) {
            suggestions.push('集成广告管理器以优化广告展示');
        }
        
        // 基于配置生成建议
        if (Object.keys(this.slotIds).length < 7) {
            suggestions.push('创建更多广告单元以增加收入机会');
        }
        
        if (this.config.domain === 'localhost') {
            suggestions.push('部署到生产环境以测试真实广告');
        }
        
        suggestions.forEach((suggestion, index) => {
            console.log(`${index + 1}. ${suggestion}`);
        });
        
        return suggestions;
    }

    // 导出配置
    exportConfig() {
        const config = {
            publisherId: this.config.publisherId,
            domain: this.config.domain,
            slotIds: this.slotIds,
            adUnits: this.config.adUnits,
            testResults: this.testResults,
            timestamp: new Date().toISOString()
        };
        
        const blob = new Blob([JSON.stringify(config, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'adsense-config.json';
        a.click();
        URL.revokeObjectURL(url);
        
        console.log('📁 配置已导出为 adsense-config.json');
    }

    // 运行完整测试
    async runFullTest() {
        console.log('🚀 开始完整 AdSense 测试...');
        
        // 1. 生成控制台指南
        this.generateConsoleGuide();
        
        // 2. 验证配置
        const configValid = this.validateConfig();
        
        // 3. 测试广告显示
        await this.testAdDisplay();
        
        // 4. 生成测试报告
        this.generateTestReport();
        
        // 5. 生成优化建议
        this.generateOptimizationSuggestions();
        
        // 6. 生成配置文件
        this.generateConfigFiles();
        
        console.log('\n✅ 完整测试完成！');
        return {
            configValid,
            testResults: this.testResults,
            suggestions: this.generateOptimizationSuggestions()
        };
    }
}

// 创建全局实例
window.adsenseAutomation = new AdSenseAutomation();

// 使用说明
console.log(`
🚀 AdSense 自动化配置工具

使用方法:
1. 运行 adsenseAutomation.generateConsoleGuide() 查看配置指南
2. 在 AdSense 后台创建广告单元
3. 使用 adsenseAutomation.updateSlotIds({...}) 更新 Slot ID
4. 运行 adsenseAutomation.runFullTest() 进行完整测试
5. 使用 adsenseAutomation.exportConfig() 导出配置

示例:
adsenseAutomation.updateSlotIds({
    topBanner: '1234567890',
    sidebar: '1234567891',
    native: '1234567892',
    stickyBottom: '1234567893',
    testInterstitial: '1234567894',
    resultPage: '1234567895',
    video: '1234567896'
});
adsenseAutomation.runFullTest();
`);

// 导出类
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AdSenseAutomation;
}
