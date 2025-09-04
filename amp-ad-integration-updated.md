# AMP 广告集成指南 - 更新版

## 最新配置

### AdSense 广告单元
- **Publisher ID**: ca-pub-4198974976257818
- **Slot ID**: 7986197300
- **格式**: mcrspv (移动端响应式)
- **尺寸**: 100vw x 320

## 集成步骤

### 1. 在 HTML head 中添加 AMP 广告脚本

```html
<script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
```

### 2. 在 body 中添加 AMP 广告代码

```html
<amp-ad width="100vw" height="320"
     type="adsense"
     data-ad-client="ca-pub-4198974976257818"
     data-ad-slot="7986197300"
     data-auto-format="mcrspv"
     data-full-width="">
  <div overflow=""></div>
</amp-ad>
```

## 配置说明

### 属性说明
- `width="100vw"`: 全宽度显示
- `height="320"`: 固定高度 320px
- `type="adsense"`: 使用 AdSense 广告
- `data-ad-client`: AdSense 发布商 ID
- `data-ad-slot`: 广告单元 ID
- `data-auto-format="mcrspv"`: 移动端响应式格式
- `data-full-width`: 全宽度显示

### 移动端优化
- `mcrspv` 格式专为移动端优化
- 自动调整广告尺寸适应屏幕
- 提供更好的移动端用户体验

## 测试页面

### AMP 版本
- **本地**: http://localhost:8000/mbti-test-amp.html
- **线上**: https://personality-mbti-bzmbrlspm-junpen.vercel.app/mbti-test-amp.html

### 普通版本
- **本地**: http://localhost:8000/mbti-quick-test.html
- **线上**: https://personality-mbti-bzmbrlspm-junpen.vercel.app/mbti-quick-test.html

## 监控面板

- **本地**: http://localhost:8000/ad-dashboard.html
- **线上**: https://personality-mbti-bzmbrlspm-junpen.vercel.app/ad-dashboard.html

## 注意事项

1. **AMP 脚本加载**: 确保 AMP 广告脚本在 head 中正确加载
2. **广告格式**: 使用 `mcrspv` 格式获得最佳移动端体验
3. **响应式设计**: 广告会自动适应不同屏幕尺寸
4. **性能优化**: AMP 广告加载更快，用户体验更好

## 故障排除

### 常见问题
1. **广告不显示**: 检查 Slot ID 是否正确
2. **格式错误**: 确保使用 `mcrspv` 格式
3. **脚本加载失败**: 检查 AMP 脚本是否正确加载

### 调试方法
1. 打开浏览器开发者工具
2. 查看 Console 标签页
3. 检查 Network 标签页中的广告请求
4. 使用监控面板查看详细数据

## 更新历史

- **2024-01-XX**: 更新 Slot ID 为 7986197300
- **2024-01-XX**: 更新格式为 mcrspv
- **2024-01-XX**: 优化移动端响应式设计
