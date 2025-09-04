# AdSense 广告单元配置模板

## 配置前准备
1. 登录 [AdSense 控制台](https://www.google.com/adsense/)
2. 确保你的网站已通过审核
3. 准备好你的发布商 ID：`ca-pub-4198974976257818`

## 广告单元配置详情

### 1. 顶部横幅广告 (Top Banner)
**用途**：页面顶部展示，移动端友好

**配置步骤**：
1. 进入 "广告" → "按广告单元" → "创建广告单元"
2. 选择 "显示广告"
3. 填写配置：
   - **名称**：`MBTI Top Banner`
   - **尺寸**：`320x50` (移动横幅)
   - **类型**：`显示广告`
   - **广告格式**：`自适应`
   - **颜色**：`默认`
   - **文字广告样式**：`默认`

**生成代码示例**：
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4198974976257818"
     data-ad-slot="1234567890"
     data-ad-format="auto"></ins>
```

**Slot ID**：`1234567890` (替换为实际生成的ID)

---

### 2. 侧边栏广告 (Sidebar)
**用途**：桌面端右侧固定位置

**配置步骤**：
1. 创建新的显示广告单元
2. 填写配置：
   - **名称**：`MBTI Sidebar`
   - **尺寸**：`300x250` (中矩形)
   - **类型**：`显示广告`
   - **广告格式**：`自适应`
   - **颜色**：`默认`
   - **文字广告样式**：`默认`

**生成代码示例**：
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4198974976257818"
     data-ad-slot="1234567891"
     data-ad-format="auto"></ins>
```

**Slot ID**：`1234567891` (替换为实际生成的ID)

---

### 3. 信息流广告 (Native)
**用途**：内容中自然插入

**配置步骤**：
1. 创建新的显示广告单元
2. 填写配置：
   - **名称**：`MBTI Native`
   - **尺寸**：`320x100` (大移动横幅)
   - **类型**：`显示广告`
   - **广告格式**：`自适应`
   - **颜色**：`默认`
   - **文字广告样式**：`默认`

**生成代码示例**：
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4198974976257818"
     data-ad-slot="1234567892"
     data-ad-format="auto"></ins>
```

**Slot ID**：`1234567892` (替换为实际生成的ID)

---

### 4. 底部粘性广告 (Sticky Bottom)
**用途**：移动端底部固定展示

**配置步骤**：
1. 创建新的显示广告单元
2. 填写配置：
   - **名称**：`MBTI Sticky Bottom`
   - **尺寸**：`320x50` (移动横幅)
   - **类型**：`显示广告`
   - **广告格式**：`自适应`
   - **颜色**：`默认`
   - **文字广告样式**：`默认`

**生成代码示例**：
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4198974976257818"
     data-ad-slot="1234567893"
     data-ad-format="auto"></ins>
```

**Slot ID**：`1234567893` (替换为实际生成的ID)

---

### 5. 测试插播广告 (Test Interstitial)
**用途**：测试过程中插播展示

**配置步骤**：
1. 创建新的显示广告单元
2. 填写配置：
   - **名称**：`MBTI Test Interstitial`
   - **尺寸**：`300x250` (中矩形)
   - **类型**：`显示广告`
   - **广告格式**：`自适应`
   - **颜色**：`默认`
   - **文字广告样式**：`默认`

**生成代码示例**：
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4198974976257818"
     data-ad-slot="1234567894"
     data-ad-format="auto"></ins>
```

**Slot ID**：`1234567894` (替换为实际生成的ID)

---

## 配置完成后的操作

### 1. 更新配置文件
将获取到的真实 Slot ID 更新到以下文件：

**amp-ad-config.js**：
```javascript
ampAdSlots: {
    topBanner: {
        width: 320,
        height: 50,
        slotId: '你的真实slot ID', // 替换这里
        type: 'adsense'
    },
    // ... 其他广告位
}
```

**ad-config.js**：
```javascript
adSlots: {
    sidebar: {
        slotId: '你的真实slot ID', // 替换这里
        format: 'auto',
        responsive: true
    },
    // ... 其他广告位
}
```

### 2. 验证配置
1. 部署到生产环境
2. 访问你的网站
3. 检查广告是否正确显示
4. 在 AdSense 后台查看展示报告

### 3. 监控和优化
1. 监控广告展示率
2. 检查点击率 (CTR)
3. 优化广告位置和密度
4. 调整广告尺寸

## 高级配置选项

### 1. 广告过滤
在 AdSense 后台设置：
- 阻止不合适的广告类别
- 设置敏感内容过滤
- 配置广告屏蔽列表

### 2. 收入优化
- 启用自动广告
- 设置广告密度
- 优化广告位置
- 监控收入报告

### 3. 移动端优化
- 使用响应式广告
- 测试不同屏幕尺寸
- 优化触摸体验
- 确保加载速度

## 故障排除

### 常见问题
1. **广告不显示**：检查 Slot ID 和域名授权
2. **尺寸异常**：确认广告单元尺寸配置
3. **收入异常**：检查流量质量和广告密度
4. **加载缓慢**：优化广告加载策略

### 联系支持
- AdSense 帮助中心
- 社区论坛
- 官方文档

## 配置检查清单
- [ ] 创建所有5个广告单元
- [ ] 获取真实的 Slot ID
- [ ] 更新配置文件
- [ ] 测试广告显示
- [ ] 验证收入数据
- [ ] 优化广告位置
- [ ] 监控性能指标

完成这些步骤后，你的网站将拥有完整的广告展示系统！
