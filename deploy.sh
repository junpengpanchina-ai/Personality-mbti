#!/bin/bash

# 🚀 MBTI Personality Test 部署脚本
# 目标域名: personalitymbti.com

echo "🚀 开始部署 MBTI Personality Test 到 personalitymbti.com..."

# 检查是否有未提交的更改
if [ -n "$(git status --porcelain)" ]; then
    echo "⚠️  检测到未提交的更改，正在提交..."
    git add .
    git commit -m "Update for personalitymbti.com deployment - $(date '+%Y-%m-%d %H:%M:%S')"
fi

# 推送到主分支
echo "📤 推送到 GitHub..."
git push origin main

echo "✅ 部署完成！"
echo "🌐 网站将在几分钟内更新到: https://personalitymbti.com"
echo "🔗 备用域名: https://www.personalitymbti.com"

# 等待几秒后检查部署状态
echo "⏳ 等待部署完成..."
sleep 10

echo "🎉 部署流程完成！请访问 https://personalitymbti.com 查看结果"
