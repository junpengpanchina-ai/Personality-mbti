# AdSense 自动化脚本运行指南

## 快速启动

### 方法 1：使用可视化界面（推荐）
1. 打开 `adsense-automation-runner.html` 文件
2. 在浏览器中访问该页面
3. 按照界面提示操作

### 方法 2：使用浏览器控制台
1. 打开任意页面
2. 按 F12 打开开发者工具
3. 在控制台中运行脚本

## 详细操作步骤

### 第一步：打开自动化工具
```bash
# 在项目根目录启动本地服务器
python -m http.server 8000

# 访问自动化工具页面
http://localhost:8000/adsense-automation-runner.html
```

### 第二步：生成配置指南
在页面中点击 **"生成控制台指南"** 按钮，或运行：
```javascript
adsenseAutomation.generateConsoleGuide();
```

### 第三步：创建 AdSense 广告单元
按照生成的指南在 AdSense 后台创建7个广告单元：
1. 登录 [AdSense 控制台](https://www.google.com/adsense/)
2. 进入 "广告" → "按广告单元"
3. 点击 "创建广告单元"
4. 按照指南创建每个广告单元
5. 获取所有 Slot ID

### 第四步：更新 Slot ID
在页面中填入你的 Slot ID，然后点击 **"更新 Slot ID"** 按钮，或运行：
```javascript
adsenseAutomation.updateSlotIds({
    topBanner: '你的顶部横幅Slot ID',
    sidebar: '你的侧边栏Slot ID',
    native: '你的信息流Slot ID',
    stickyBottom: '你的底部粘性Slot ID',
    testInterstitial: '你的测试插播Slot ID',
    resultPage: '你的结果页Slot ID',
    video: '你的视频广告Slot ID'
});
```

### 第五步：运行完整测试
点击 **"运行完整测试"** 按钮，或运行：
```javascript
adsenseAutomation.runFullTest();
```

## 自动化脚本功能

### 1. 配置生成
- **generateConsoleGuide()** - 生成 AdSense 控制台配置指南
- **generateConfigFiles()** - 生成配置文件内容
- **updateSlotIds()** - 更新 Slot ID 配置

### 2. 测试验证
- **validateConfig()** - 验证配置正确性
- **testAdDisplay()** - 测试广告显示
- **runFullTest()** - 运行完整测试套件

### 3. 优化建议
- **generateOptimizationSuggestions()** - 生成优化建议
- **generateTestReport()** - 生成测试报告
- **exportConfig()** - 导出配置文件

## 使用示例

### 完整配置流程
```javascript
// 1. 生成配置指南
adsenseAutomation.generateConsoleGuide();

// 2. 更新 Slot ID（替换为你的真实 Slot ID）
adsenseAutomation.updateSlotIds({
    topBanner: '1234567890',
    sidebar: '1234567891',
    native: '1234567892',
    stickyBottom: '1234567893',
    testInterstitial: '1234567894',
    resultPage: '1234567895',
    video: '1234567896'
});

// 3. 验证配置
adsenseAutomation.validateConfig();

// 4. 运行完整测试
adsenseAutomation.runFullTest();

// 5. 导出配置
adsenseAutomation.exportConfig();
```

### 单独功能使用
```javascript
// 只生成配置文件
adsenseAutomation.generateConfigFiles();

// 只测试广告显示
adsenseAutomation.testAdDisplay();

// 只生成优化建议
adsenseAutomation.generateOptimizationSuggestions();
```

## 故障排除

### 问题 1：脚本无法加载
**解决方案**：
- 确保 `adsense-automation-script.js` 文件存在
- 检查文件路径是否正确
- 使用本地服务器而不是直接打开文件

### 问题 2：Slot ID 更新失败
**解决方案**：
- 检查 Slot ID 格式是否正确（10位数字）
- 确保没有包含空格或特殊字符
- 验证 AdSense 配置对象是否存在

### 问题 3：测试失败
**解决方案**：
- 检查 AdSense 脚本是否正确加载
- 验证配置文件是否正确引入
- 确认广告容器是否存在

### 问题 4：配置验证失败
**解决方案**：
- 检查发布商 ID 格式
- 验证域名配置
- 确认所有必填字段都已填写

## 输出说明

### 控制台输出
脚本运行后会在控制台输出：
- 配置指南
- 验证结果
- 测试报告
- 优化建议
- 错误信息

### 配置文件生成
脚本会生成以下配置内容：
- `amp-ad-config.js` - AMP 广告配置
- `ad-config.js` - 普通广告配置
- 配置验证报告
- 测试结果报告

### 导出文件
使用 `exportConfig()` 会导出：
- `adsense-config.json` - 完整配置数据
- 包含所有 Slot ID 和测试结果
- 可用于备份和恢复

## 最佳实践

### 1. 配置前准备
- 确保 AdSense 账户正常
- 验证网站已通过审核
- 准备所有必要的 Slot ID

### 2. 测试验证
- 在本地环境先测试
- 验证所有广告位显示
- 检查移动端和桌面端

### 3. 部署上线
- 部署到生产环境
- 监控广告展示数据
- 持续优化广告策略

### 4. 定期维护
- 定期检查配置状态
- 监控收入数据
- 更新广告策略

## 联系支持

如果遇到问题：
- 查看控制台错误信息
- 检查 AdSense 后台状态
- 参考故障排除指南
- 联系技术支持

---

**使用自动化脚本可以大大简化 AdSense 配置流程！**
