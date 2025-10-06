# 🚀 Vercel 部署指南

## 域名配置

### 主要域名
- **生产域名**: `personalitymbti.com`
- **备用域名**: `www.personalitymbti.com` (自动重定向到主域名)

## Vercel 配置步骤

### 1. 在 Vercel 控制台添加域名

1. 登录 [Vercel Dashboard](https://vercel.com/dashboard)
2. 选择您的项目 `personality-mbti`
3. 进入 **Settings** → **Domains**
4. 添加以下域名：
   - `personalitymbti.com`
   - `www.personalitymbti.com`

### 2. DNS 配置

#### 如果使用 Vercel 的 DNS：
- 在 Vercel 控制台中配置 DNS 记录
- 确保 A 记录指向 Vercel 的 IP

#### 如果使用外部 DNS 提供商：
```
Type: A
Name: @
Value: 76.76.19.61

Type: CNAME  
Name: www
Value: cname.vercel-dns.com
```

### 3. SSL 证书
- Vercel 会自动为所有域名提供 SSL 证书
- 确保域名验证通过

## 部署命令

### 本地部署测试
```bash
npm run build
npm start
```

### 推送到 Vercel
```bash
git add .
git commit -m "Update for personalitymbti.com deployment"
git push origin main
```

## 环境变量配置

在 Vercel 控制台中设置以下环境变量：

```
NEXT_PUBLIC_ADSENSE_AD_UNIT_ID=ca-pub-4198974976257818
NEXT_PUBLIC_ADSENSE_PUBLISHER_ID=pub-4198974976257818
```

## 验证部署

1. 访问 `https://personalitymbti.com`
2. 检查所有功能是否正常
3. 测试语言切换功能
4. 验证测试页面工作正常

## 性能优化

- 已配置适当的缓存头
- 静态资源使用 CDN 加速
- 自动 HTTPS 重定向

## 监控和维护

- 使用 Vercel Analytics 监控性能
- 定期检查域名状态
- 监控 SSL 证书过期时间
