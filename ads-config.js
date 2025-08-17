// Google AdSense 配置文件
(function() {
    'use strict';
    
    // 动态加载AdSense脚本
    function loadAdSenseScript() {
        if (typeof adsbygoogle === 'undefined') {
            const script = document.createElement('script');
            script.async = true;
            script.src = 'https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4198974976257818';
            script.crossOrigin = 'anonymous';
            document.head.appendChild(script);
            
            console.log('AdSense脚本已动态加载');
        }
    }
    
    // 检查AdSense是否可用
    function checkAdSenseAvailability() {
        if (typeof adsbygoogle !== 'undefined') {
            console.log('AdSense脚本已可用');
            return true;
        } else {
            console.log('AdSense脚本未加载，尝试加载...');
            loadAdSenseScript();
            return false;
        }
    }
    
    // 初始化AdSense
    function initAdSense() {
        // 等待脚本加载完成
        const checkInterval = setInterval(() => {
            if (typeof adsbygoogle !== 'undefined') {
                clearInterval(checkInterval);
                console.log('AdSense初始化完成');
                
                // 触发所有广告单元
                (adsbygoogle = window.adsbygoogle || []).push({});
            }
        }, 100);
        
        // 设置超时
        setTimeout(() => {
            clearInterval(checkInterval);
            if (typeof adsbygoogle === 'undefined') {
                console.error('AdSense脚本加载超时');
            }
        }, 10000); // 10秒超时
    }
    
    // 页面加载完成后初始化
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initAdSense);
    } else {
        initAdSense();
    }
    
    // 导出函数供外部使用
    window.AdSenseConfig = {
        loadScript: loadAdSenseScript,
        checkAvailability: checkAdSenseAvailability,
        init: initAdSense
    };
    
})();
