/**
 * Google OAuth 2.0 配置文件
 * 
 * 使用说明：
 * 1. 在 Google Cloud Console 中创建 OAuth 2.0 客户端 ID
 * 2. 将下面的 YOUR_ACTUAL_GOOGLE_CLIENT_ID 替换为真实的客户端 ID
 * 3. 确保在 Google Cloud Console 中配置了正确的重定向 URI
 */

// Google OAuth 2.0 配置
const GOOGLE_OAUTH_CONFIG = {
    // 替换为你的真实 Google OAuth 客户端 ID
    CLIENT_ID: 'YOUR_ACTUAL_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
    
    // OAuth 同意屏幕配置
    SCOPES: [
        'openid',
        'email',
        'profile'
    ],
    
    // 授权重定向 URI（在 Google Cloud Console 中配置）
    REDIRECT_URIS: [
        'http://localhost:3000',           // 开发环境
        'http://localhost:5000',           // 开发环境（备用端口）
        'https://your-domain.com',         // 生产环境（替换为你的域名）
        'https://www.your-domain.com'      // 生产环境（带www）
    ],
    
    // 应用信息
    APP_NAME: 'MBTI人格测试',
    APP_DESCRIPTION: '探索你的性格类型，了解真实的自己',
    
    // 开发者信息
    DEVELOPER_EMAIL: 'your-email@example.com',  // 替换为你的邮箱
    SUPPORT_EMAIL: 'support@your-domain.com'    // 替换为支持邮箱
};

// 验证配置是否完整
function validateGoogleOAuthConfig() {
    const config = GOOGLE_OAUTH_CONFIG;
    
    if (!config.CLIENT_ID || config.CLIENT_ID.includes('YOUR_ACTUAL_GOOGLE_CLIENT_ID')) {
        console.error('❌ Google OAuth Client ID 未配置！');
        console.error('请在 google-oauth-config.js 中设置正确的 CLIENT_ID');
        return false;
    }
    
    if (!config.CLIENT_ID.endsWith('.apps.googleusercontent.com')) {
        console.error('❌ Google OAuth Client ID 格式错误！');
        console.error('Client ID 应该以 .apps.googleusercontent.com 结尾');
        return false;
    }
    
    if (!config.DEVELOPER_EMAIL || config.DEVELOPER_EMAIL.includes('your-email@example.com')) {
        console.warn('⚠️  开发者邮箱未配置，建议设置正确的邮箱地址');
    }
    
    console.log('✅ Google OAuth 配置验证通过');
    console.log('Client ID:', config.CLIENT_ID);
    return true;
}

// 获取配置
function getGoogleOAuthConfig() {
    return GOOGLE_OAUTH_CONFIG;
}

// 导出配置
if (typeof module !== 'undefined' && module.exports) {
    // Node.js 环境
    module.exports = {
        GOOGLE_OAUTH_CONFIG,
        validateGoogleOAuthConfig,
        getGoogleOAuthConfig
    };
} else {
    // 浏览器环境
    window.GOOGLE_OAUTH_CONFIG = GOOGLE_OAUTH_CONFIG;
    window.validateGoogleOAuthConfig = validateGoogleOAuthConfig;
    window.getGoogleOAuthConfig = getGoogleOAuthConfig;
}

// 自动验证配置
if (typeof window !== 'undefined') {
    // 在浏览器环境中自动验证
    window.addEventListener('load', () => {
        setTimeout(validateGoogleOAuthConfig, 1000);
    });
}
