# ads.txt 部署修复指南

## 问题描述
Google AdSense 显示"找不到 ads.txt"错误，需要确保文件正确部署到网站根目录。

## 已完成的修复

### 1. ✅ 优化 ads.txt 文件内容
- 移除了重复的 RESELLER 条目
- 保留标准的 DIRECT 关系
- 确保格式符合规范

### 2. ✅ 优化 Vercel 配置
- 更新了 `vercel.json` 中的 ads.txt 处理配置
- 设置了正确的 Content-Type: `text/plain; charset=utf-8`
- 调整了缓存策略为 1 小时
- 添加了 CORS 支持

### 3. ✅ 创建验证脚本
- 提供了 `verify-ads-txt.js` 脚本用于测试文件可访问性
- 包含内容格式验证
- 提供详细的故障排除信息

## 部署步骤

### 1. 重新部署到 Vercel
```bash
# 提交更改
git add .
git commit -m "修复 ads.txt 部署配置"
git push origin main

# 或者直接部署
vercel --prod
```

### 2. 验证部署结果
```bash
# 运行验证脚本（需要先设置域名）
node verify-ads-txt.js
```

### 3. 手动验证
访问您的网站：
```
https://您的域名.vercel.app/ads.txt
```

应该看到：
```
google.com, pub-4198974976257818, DIRECT, f08c47fec0942fa0
```

## 验证清单

- [ ] ads.txt 文件在项目根目录
- [ ] 文件内容格式正确
- [ ] 可以通过 https://域名/ads.txt 访问
- [ ] 返回正确的 Content-Type: text/plain
- [ ] 没有 HTML 标签或额外内容
- [ ] 发布商 ID 与 AdSense 账户匹配

## 常见问题解决

### Q: 仍然显示"找不到 ads.txt"
**解决方案：**
1. 等待 24-48 小时让 Google 重新抓取
2. 清除浏览器缓存
3. 使用无痕模式测试
4. 检查域名是否正确

### Q: 文件返回 404 错误
**解决方案：**
1. 确认文件在项目根目录
2. 检查 Vercel 部署日志
3. 验证 vercel.json 配置
4. 重新部署项目

### Q: Content-Type 不正确
**解决方案：**
1. 检查 vercel.json 中的 headers 配置
2. 确认文件扩展名是 .txt
3. 重新部署后清除 CDN 缓存

## 第三方验证工具

1. **Google 官方检查器**
   - 登录 AdSense 后台
   - 进入"网站" → "广告" → "广告资源"
   - 查看 ads.txt 状态

2. **在线验证工具**
   - https://www.ads.txt-validator.com/
   - https://support.google.com/adsense/answer/7532444

3. **命令行验证**
   ```bash
   curl -I https://您的域名/ads.txt
   ```

## 预期结果

部署成功后，您应该看到：
- ✅ ads.txt 文件可正常访问
- ✅ 内容格式正确
- ✅ Google AdSense 在 24-48 小时内识别文件
- ✅ AdSense 后台显示 ads.txt 状态为正常

## 联系支持

如果问题仍然存在，请提供：
1. 您的网站域名
2. ads.txt 文件的直接访问链接
3. 错误截图
4. 部署日志（如果有）
