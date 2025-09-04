# AdSense Slot ID 配置指南

## 当前配置状态
你的 AMP 广告配置已优化，包含以下广告位：

### 1. 广告位配置
```javascript
ampAdSlots: {
    topBanner: {
        width: 320, height: 50,
        slotId: '1234567890' // 需要替换
    },
    sidebar: {
        width: 300, height: 250,
        slotId: '1234567891' // 需要替换
    },
    native: {
        width: 320, height: 100,
        slotId: '1234567892' // 需要替换
    },
    stickyBottom: {
        width: 320, height: 50,
        slotId: '1234567893' // 需要替换
    },
    testInterstitial: {
        width: 300, height: 250,
        slotId: '1234567894' // 需要替换
    }
}
```

## 获取真实 Slot ID 步骤

### 1. 登录 AdSense 后台
- 访问 [AdSense 控制台](https://www.google.com/adsense/)
- 使用你的 Google 账户登录

### 2. 创建广告单元
- 进入 "广告" → "按广告单元"
- 点击 "创建广告单元"
- 选择 "显示广告"

### 3. 配置广告单元
为每个广告位创建对应的广告单元：

#### 顶部横幅 (320x50)
- 名称：`MBTI Top Banner`
- 尺寸：`320x50` (移动横幅)
- 类型：`显示广告`

#### 侧边栏 (300x250)
- 名称：`MBTI Sidebar`
- 尺寸：`300x250` (中矩形)
- 类型：`显示广告`

#### 信息流 (320x100)
- 名称：`MBTI Native`
- 尺寸：`320x100` (大移动横幅)
- 类型：`显示广告`

#### 底部粘性 (320x50)
- 名称：`MBTI Sticky Bottom`
- 尺寸：`320x50` (移动横幅)
- 类型：`显示广告`

#### 测试插播 (300x250)
- 名称：`MBTI Test Interstitial`
- 尺寸：`300x250` (中矩形)
- 类型：`显示广告`

### 4. 获取 Slot ID
创建完成后，每个广告单元会生成一个 Slot ID，格式如：`1234567890`

## 更新配置文件

### 1. 更新 amp-ad-config.js
将获取到的真实 Slot ID 替换配置中的占位符：

```javascript
// 替换这些值
slotId: '你的真实slot ID'
```

### 2. 更新 ad-config.js
同样更新普通页面的广告配置：

```javascript
adSlots: {
    sidebar: {
        slotId: '你的真实slot ID'
    },
    // ... 其他广告位
}
```

## 验证配置

### 1. 本地测试
```bash
# 启动本地服务器
python -m http.server 8000

# 访问 AMP 页面
http://localhost:8000/mbti-test-amp.html
```

### 2. 检查广告显示
- 打开浏览器开发者工具
- 查看控制台是否有广告相关错误
- 检查网络请求是否正常

### 3. AdSense 验证
- 登录 AdSense 后台
- 查看 "广告" → "按广告单元" 报告
- 确认广告展示数据

## 优化建议

### 1. 广告密度控制
- 测试中插播：第2题和第4题后
- 结果页：侧边栏 + 信息流 + 底部粘性
- 最小间隔：30秒

### 2. 移动端优化
- 使用响应式广告尺寸
- 确保在小屏幕上正常显示
- 测试不同设备

### 3. 性能监控
- 监控广告加载时间
- 检查 Core Web Vitals
- 优化广告密度

## 故障排除

### 常见问题

#### 1. 广告不显示
- 检查 Slot ID 是否正确
- 确认域名已授权
- 验证 AdSense 账户状态

#### 2. 尺寸不匹配
- 确保广告单元尺寸与配置一致
- 检查 CSS 样式是否影响显示
- 测试不同屏幕尺寸

#### 3. 收入异常
- 检查广告展示报告
- 确认点击率是否正常
- 验证用户流量质量

## 下一步
1. 创建 AdSense 广告单元
2. 获取真实 Slot ID
3. 更新配置文件
4. 测试广告显示
5. 监控收入数据

需要帮助创建具体的广告单元配置吗？
