# AMP 广告集成指南

## 概述
本指南说明如何在你的 MBTI 测试网站中集成 AMP 广告，以在 AMP 页面上展示广告。

## 文件说明

### 1. amp-ad-config.js
AMP 广告配置文件，包含：
- 广告位尺寸和 ID 配置
- 广告展示策略
- 样式配置

### 2. amp-ad-manager.js
AMP 广告管理器，提供：
- AMP 脚本加载
- 广告位创建和管理
- 事件追踪

## 集成步骤

### 1. 在 AMP 页面中引入脚本
```html
<!DOCTYPE html>
<html ⚡>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width,minimum-scale=1,initial-scale=1">
    <title>MBTI Test - AMP</title>
    
    <!-- AMP 必需脚本 -->
    <script async src="https://cdn.ampproject.org/v0.js"></script>
    
    <!-- AMP 广告组件 -->
    <script async custom-element="amp-ad" src="https://cdn.ampproject.org/v0/amp-ad-0.1.js"></script>
    
    <!-- 你的广告配置 -->
    <script src="amp-ad-config.js"></script>
    <script src="amp-ad-manager.js"></script>
</head>
```

### 2. 在页面中添加广告容器
```html
<body>
    <!-- 顶部横幅广告 -->
    <div id="top-banner-ad"></div>
    
    <!-- 主要内容 -->
    <main>
        <!-- 你的测试内容 -->
    </main>
    
    <!-- 侧边栏广告 -->
    <div id="sidebar-ad"></div>
    
    <!-- 信息流广告 -->
    <div id="native-ad"></div>
    
    <!-- 底部粘性广告 -->
    <div id="sticky-bottom-ad"></div>
</body>
```

### 3. 配置你的 AdSense 信息
在 `amp-ad-config.js` 中更新：
```javascript
ampAdSlots: {
    topBanner: {
        width: 320,
        height: 50,
        slotId: '你的真实slot ID', // 替换为你的 AdSense slot ID
        type: 'adsense'
    },
    // ... 其他广告位
}
```

## AMP 广告特性

### 1. 自动优化
- AMP 自动优化广告加载性能
- 支持懒加载和视口检测
- 自动处理广告尺寸

### 2. 占位符和错误处理
- 广告加载时显示占位符
- 加载失败时显示 fallback 内容
- 避免布局偏移

### 3. 性能监控
- 自动追踪广告加载时间
- 监控广告填充率
- 记录用户交互

## 配置选项

### 广告位类型
- `topBanner`: 顶部横幅 (320x50)
- `sidebar`: 侧边栏 (300x250)
- `native`: 信息流 (320x100)
- `stickyBottom`: 底部粘性 (320x50)

### 展示策略
- `positions`: 广告展示位置
- `minInterval`: 最小展示间隔
- `enableSticky`: 是否启用粘性广告
- `enableNative`: 是否启用信息流广告

## 测试和验证

### 1. 本地测试
```bash
# 启动本地服务器
python -m http.server 8000

# 访问 AMP 页面
http://localhost:8000/your-amp-page.html
```

### 2. AMP 验证
- 使用 [AMP Validator](https://validator.ampproject.org/)
- 检查控制台错误
- 验证广告是否正确加载

### 3. AdSense 验证
- 登录 AdSense 后台
- 检查广告展示报告
- 验证收入数据

## 最佳实践

### 1. 广告密度
- 保持合理的广告密度
- 避免影响用户体验
- 遵循 AdSense 政策

### 2. 移动优化
- 确保广告在移动设备上正常显示
- 使用响应式广告尺寸
- 测试不同屏幕尺寸

### 3. 性能优化
- 使用 AMP 的懒加载特性
- 避免阻塞页面渲染
- 监控 Core Web Vitals

## 故障排除

### 常见问题

#### 1. 广告不显示
- 检查 AdSense 配置
- 验证 slot ID 是否正确
- 确认域名已授权

#### 2. AMP 验证失败
- 检查 HTML 结构
- 验证必需属性
- 使用 AMP 验证工具

#### 3. 性能问题
- 减少广告数量
- 优化广告尺寸
- 使用 AMP 缓存

## 更新记录
- 初始版本：基础 AMP 广告集成
- 支持多种广告位类型
- 包含完整的错误处理和追踪
