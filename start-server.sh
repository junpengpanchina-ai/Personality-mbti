#!/bin/bash

echo "🚀 启动Java HTTP服务器..."

# 检查Java是否安装
if ! command -v java &> /dev/null; then
    echo "❌ Java未安装，请先安装Java"
    exit 1
fi

# 编译Java文件
echo "📝 编译Java文件..."
javac StartServer.java

if [ $? -eq 0 ]; then
    echo "✅ 编译成功！"
    echo "🌐 启动服务器..."
    echo "📍 访问地址: http://localhost:8080"
    echo "⏹️  按 Ctrl+C 停止服务器"
    echo ""
    
    # 启动服务器
    java StartServer
else
    echo "❌ 编译失败！"
    exit 1
fi
