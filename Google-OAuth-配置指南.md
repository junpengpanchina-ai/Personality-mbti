# Google OAuth 2.0 配置指南

## 概述

本指南将帮助你正确配置 Google OAuth 2.0，解决 "You can't sign in to this app because it doesn't comply with Google's OAuth 2.0 policy" 错误。

## 第一步：Google Cloud Console 配置

### 1. 创建/选择项目

1. 访问 [Google Cloud Console](https://console.cloud.google.com/)
2. 创建新项目或选择现有项目
3. 确保项目已启用计费（OAuth 需要）

### 2. 启用必要的 API

在"API 和服务" → "库"中搜索并启用：
- **Google+ API**
- **Google Identity Services API**
- **Google OAuth2 API**

### 3. 配置 OAuth 同意屏幕

1. 在"API 和服务" → "OAuth 同意屏幕"中：
   - 选择"外部"用户类型
   - 填写应用名称：`MBTI人格测试`
   - 添加用户支持邮箱
   - 添加开发者联系信息
   - 在"范围"中添加：
     - `openid`
     - `email`
     - `profile`

2. 在"测试用户"中添加你的邮箱地址

### 4. 创建 OAuth 2.0 客户端 ID

1. 在"凭据" → "创建凭据" → "OAuth 客户端 ID"中：
   - 选择"Web 应用程序"
   - 添加授权重定向 URI：
     - `http://localhost:3000`（开发环境）
     - `https://你的域名.com`（生产环境）
   - 记录下生成的客户端 ID

## 第二步：更新代码配置

### 1. 更新配置文件

编辑 `google-oauth-config.js` 文件：

```javascript
const GOOGLE_OAUTH_CONFIG = {
    // 替换为你的真实 Google OAuth 客户端 ID
    CLIENT_ID: '123456789-abcdefghijklmnop.apps.googleusercontent.com',
    
    // 其他配置...
};
```

### 2. 更新 HTML meta 标签

编辑 `index.html` 文件：

```html
<meta name="google-signin-client_id" content="123456789-abcdefghijklmnop.apps.googleusercontent.com">
```

### 3. 设置环境变量

创建 `.env` 文件：

```bash
GOOGLE_CLIENT_ID=123456789-abcdefghijklmnop.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=your_client_secret
APP_DOMAIN=your-domain.com
```

## 第三步：验证配置

### 1. 检查控制台输出

打开浏览器开发者工具，查看控制台是否有以下输出：
- ✅ Google OAuth 配置验证通过
- Client ID: 你的客户端ID

### 2. 测试 Google 登录

1. 点击"使用 Google 账号登录"按钮
2. 应该看到 Google 登录弹窗
3. 选择你的 Google 账号
4. 授权应用访问

## 常见问题解决

### 问题 1：仍然显示 OAuth 2.0 政策错误

**解决方案：**
1. 确保在 Google Cloud Console 中添加了测试用户
2. 等待几分钟让配置生效
3. 清除浏览器缓存和 Cookie

### 问题 2：Client ID 不匹配错误

**解决方案：**
1. 检查 `google-oauth-config.js` 中的 CLIENT_ID 是否正确
2. 检查 HTML meta 标签中的 client_id 是否正确
3. 确保环境变量 `GOOGLE_CLIENT_ID` 已设置

### 问题 3：重定向 URI 不匹配

**解决方案：**
1. 在 Google Cloud Console 中添加正确的重定向 URI
2. 确保 URI 完全匹配（包括协议、域名、端口）

### 问题 4：应用未验证

**解决方案：**
1. 在 OAuth 同意屏幕中添加测试用户
2. 测试用户可以使用应用，无需验证
3. 如需公开发布，需要提交 Google 验证

## 生产环境部署

### 1. 更新域名配置

在生产环境中，确保：
- 重定向 URI 使用 HTTPS
- 域名完全匹配
- 环境变量正确设置

### 2. 安全配置

- 启用 HTTPS
- 设置正确的 Content Security Policy
- 定期轮换客户端密钥

## 测试清单

- [ ] Google Cloud Console 项目创建
- [ ] 必要 API 已启用
- [ ] OAuth 同意屏幕配置完成
- [ ] OAuth 2.0 客户端 ID 已创建
- [ ] 重定向 URI 已配置
- [ ] 测试用户已添加
- [ ] 代码配置已更新
- [ ] 环境变量已设置
- [ ] Google 登录功能测试通过

## 联系支持

如果仍然遇到问题，请：
1. 检查 Google Cloud Console 的错误日志
2. 查看浏览器控制台的错误信息
3. 确认所有配置步骤已完成
4. 等待配置生效（通常需要几分钟）

## 参考链接

- [Google OAuth 2.0 文档](https://developers.google.com/identity/protocols/oauth2)
- [Google Identity Services 文档](https://developers.google.com/identity/gsi/web)
- [Google Cloud Console](https://console.cloud.google.com/)
