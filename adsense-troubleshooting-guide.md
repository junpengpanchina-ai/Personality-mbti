# AdSense 故障排除指南

## 常见问题及解决方案

### 1. 广告不显示

#### 问题描述
广告位显示空白或占位符，没有实际广告内容。

#### 可能原因
- Slot ID 配置错误
- 域名未授权
- ads.txt 文件问题
- AdSense 账户状态异常
- 广告过滤设置过严

#### 解决步骤
1. **检查 Slot ID**
   ```javascript
   // 确认配置文件中的 Slot ID 正确
   console.log('当前 Slot ID:', window.AD_CONFIG.googleAdsense.adSlots.sidebar.slotId);
   ```

2. **验证域名授权**
   - 登录 AdSense 后台
   - 进入 "网站" → "广告" → "广告资源"
   - 确认你的域名状态为 "已授权"

3. **检查 ads.txt 文件**
   - 访问 `https://你的域名.com/ads.txt`
   - 确认文件内容正确
   - 检查发布商 ID 是否匹配

4. **检查账户状态**
   - 登录 AdSense 后台
   - 查看账户状态和警告
   - 确认没有政策违规

5. **测试广告显示**
   ```javascript
   // 在浏览器控制台运行
   console.log('AdSense 状态:', typeof adsbygoogle !== 'undefined');
   ```

#### 验证方法
- 使用 AdSense 后台的 "广告预览" 功能
- 检查浏览器控制台错误信息
- 使用 [AdSense 诊断工具](https://support.google.com/adsense/answer/7532444)

---

### 2. 广告尺寸异常

#### 问题描述
广告显示尺寸不正确，影响页面布局。

#### 可能原因
- 广告单元尺寸配置错误
- CSS 样式冲突
- 响应式设置问题
- 容器尺寸限制

#### 解决步骤
1. **检查广告单元配置**
   ```javascript
   // 确认广告单元尺寸设置
   const adConfig = window.AD_CONFIG.googleAdsense.adSlots.sidebar;
   console.log('广告尺寸:', adConfig.width, 'x', adConfig.height);
   ```

2. **检查 CSS 样式**
   ```css
   /* 确保广告容器样式正确 */
   .ad-container {
       width: 100%;
       min-height: 250px;
       overflow: hidden;
   }
   ```

3. **验证响应式设置**
   ```javascript
   // 检查响应式配置
   console.log('响应式设置:', adConfig.responsive);
   ```

4. **测试不同屏幕尺寸**
   - 使用浏览器开发者工具
   - 测试移动端和桌面端
   - 检查不同分辨率下的显示

#### 验证方法
- 使用浏览器开发者工具检查元素
- 测试不同设备和屏幕尺寸
- 检查广告容器的实际尺寸

---

### 3. 收入数据异常

#### 问题描述
AdSense 后台显示的收入数据与预期不符。

#### 可能原因
- 广告展示率低
- 点击率异常
- 流量质量差
- 广告密度过高
- 用户行为异常

#### 解决步骤
1. **检查广告展示率**
   - 登录 AdSense 后台
   - 查看 "广告" → "按广告单元" 报告
   - 分析展示率和填充率

2. **分析点击率**
   - 检查点击率是否在正常范围内 (0.5%-2%)
   - 分析点击来源和用户行为
   - 确认没有异常点击

3. **优化广告密度**
   ```javascript
   // 调整广告展示策略
   adStrategy: {
       minInterval: 60, // 增加间隔时间
       adPositions: [3, 6, 9] // 减少广告位置
   }
   ```

4. **改善用户体验**
   - 优化广告位置
   - 减少广告干扰
   - 提高内容质量

#### 验证方法
- 使用 AdSense 后台报告分析
- 监控用户行为数据
- 对比行业基准数据

---

### 4. 页面加载缓慢

#### 问题描述
广告加载影响页面性能，导致加载缓慢。

#### 可能原因
- 广告脚本加载阻塞
- 广告数量过多
- 网络连接问题
- 广告服务器响应慢

#### 解决步骤
1. **优化广告加载**
   ```javascript
   // 使用懒加载
   const observer = new IntersectionObserver((entries) => {
       entries.forEach(entry => {
           if (entry.isIntersecting) {
               // 加载广告
           }
       });
   });
   ```

2. **减少广告数量**
   ```javascript
   // 调整广告策略
   adStrategy: {
       adPositions: [3, 6], // 减少广告位置
       minInterval: 120 // 增加间隔时间
   }
   ```

3. **优化广告脚本**
   ```html
   <!-- 异步加载广告脚本 -->
   <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
   ```

4. **使用 AMP 优化**
   - 使用 AMP 页面
   - 启用 AMP 广告
   - 优化 AMP 性能

#### 验证方法
- 使用 [PageSpeed Insights](https://pagespeed.web.dev/)
- 检查 Core Web Vitals
- 监控广告加载时间

---

### 5. 移动端显示问题

#### 问题描述
广告在移动端显示异常或影响用户体验。

#### 可能原因
- 广告尺寸不适合移动端
- 触摸交互问题
- 响应式设置错误
- 移动端广告策略不当

#### 解决步骤
1. **优化移动端广告尺寸**
   ```javascript
   // 移动端专用广告配置
   mobileAdSlots: {
       topBanner: { width: 320, height: 50 },
       native: { width: 320, height: 100 }
   }
   ```

2. **改善触摸体验**
   ```css
   /* 确保广告可点击 */
   .ad-container {
       touch-action: manipulation;
       cursor: pointer;
   }
   ```

3. **优化响应式设置**
   ```javascript
   // 检查设备类型
   const isMobile = window.innerWidth < 768;
   if (isMobile) {
       // 使用移动端广告配置
   }
   ```

4. **测试移动端体验**
   - 使用真实设备测试
   - 检查不同移动浏览器
   - 验证触摸交互

#### 验证方法
- 使用移动设备测试
- 检查移动端浏览器兼容性
- 验证触摸交互体验

---

## 调试工具

### 1. 浏览器开发者工具
```javascript
// 检查广告状态
console.log('AdSense 加载状态:', typeof adsbygoogle !== 'undefined');
console.log('广告配置:', window.AD_CONFIG);
console.log('广告历史:', window.adManager.getAdStats());
```

### 2. AdSense 诊断工具
- [AdSense 诊断工具](https://support.google.com/adsense/answer/7532444)
- [ads.txt 验证器](https://www.ads.txt-validator.com/)
- [AMP 验证器](https://validator.ampproject.org/)

### 3. 性能监控工具
- [PageSpeed Insights](https://pagespeed.web.dev/)
- [Core Web Vitals](https://web.dev/vitals/)
- [AdSense 后台报告](https://www.google.com/adsense/)

## 预防措施

### 1. 定期检查
- 每日检查广告显示状态
- 每周分析收入数据
- 每月优化广告策略

### 2. 监控指标
- 广告展示率
- 点击率 (CTR)
- 收入数据
- 页面性能

### 3. 备份配置
- 保存配置文件备份
- 记录配置变更
- 维护故障排除日志

## 联系支持

### AdSense 支持渠道
- 帮助中心：https://support.google.com/adsense/
- 社区论坛：https://support.google.com/adsense/community
- 联系支持：https://support.google.com/adsense/contact

### 技术文档
- AdSense 政策：https://support.google.com/adsense/answer/23921
- 广告格式指南：https://support.google.com/adsense/answer/6002585
- 移动端优化：https://support.google.com/adsense/answer/3213019

---

**使用此指南快速解决 AdSense 相关问题！**
