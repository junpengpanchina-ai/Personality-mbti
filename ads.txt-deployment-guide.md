# ads.txt 部署指南

## 当前配置
你的 `ads.txt` 文件已配置为：
```
google.com, pub-4198974976257818, DIRECT, f08c47fec0942fa0
google.com, pub-4198974976257818, RESELLER, f08c47fec0942fa0
```

## 部署步骤

### 1. 确保文件在域名根路径
- 文件必须放在 `https://你的域名.com/ads.txt`
- 不能放在子目录，如 `https://你的域名.com/path/ads.txt` ❌

### 2. Vercel 部署
如果使用 Vercel：
- 确保 `ads.txt` 在项目根目录
- 部署后访问 `https://你的域名.vercel.app/ads.txt` 验证

### 3. 其他平台
- **GitHub Pages**: 放在仓库根目录
- **Netlify**: 放在 `public/` 或项目根目录
- **自建服务器**: 放在网站根目录

## 验证方法

### 1. 直接访问
```
https://你的域名.com/ads.txt
```
应该看到两行内容，无 HTML 标签。

### 2. Google AdSense 验证
- 登录 AdSense 后台
- 进入 "网站" → "广告" → "广告资源"
- 查看是否有 "ads.txt 文件" 状态提示

### 3. 第三方验证工具
- [ads.txt Validator](https://www.ads.txt-validator.com/)
- [Google ads.txt Checker](https://support.google.com/adsense/answer/7532444)

## 常见问题

### Q: 为什么需要 ads.txt？
A: 防止广告欺诈，确保只有授权的广告商能在你的网站投放广告。

### Q: 文件格式要求？
A: 
- 纯文本文件，无 HTML
- 每行一个条目
- 格式：`域名, 发布商ID, 关系类型, 认证机构ID`

### Q: 多久生效？
A: 通常 24-48 小时内，Google 会抓取并验证。

## 故障排除

### 1. 404 错误
- 检查文件路径是否正确
- 确认服务器配置允许访问 `.txt` 文件

### 2. 格式错误
- 确保没有多余的空格或特殊字符
- 每行结尾不要有多余的逗号

### 3. 发布商 ID 不匹配
- 确认 `pub-4198974976257818` 是你的真实 AdSense 发布商 ID
- 在 AdSense 后台 "账户" → "账户信息" 中查看

## 更新记录
- 初始配置：包含 DIRECT 和 RESELLER 关系
- 发布商 ID：pub-4198974976257818
