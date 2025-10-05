# MBTI Next.js 项目部署指南 (Node.js 14 兼容)

## 🚀 项目概述

这是一个使用 Next.js 12 构建的 MBTI 人格测试网站，专门针对 Node.js 14 环境进行了优化。

## 📋 系统要求

- **Node.js**: 14.0.0 或更高版本
- **npm**: 6.0.0 或更高版本
- **内存**: 至少 512MB RAM
- **磁盘空间**: 至少 1GB 可用空间

## 🛠️ 安装步骤

### 1. 检查 Node.js 版本
```bash
node --version
# 应该显示 v14.x.x 或更高版本
```

### 2. 安装依赖
```bash
# 进入项目目录
cd mbti-nextjs

# 安装依赖包
npm install

# 如果遇到网络问题，可以尝试：
npm install --registry https://registry.npmmirror.com
```

### 3. 开发环境启动
```bash
npm run dev
```

访问 [http://localhost:3000](http://localhost:3000) 查看应用。

## 🏗️ 项目结构

```
mbti-nextjs/
├── pages/                 # Next.js Pages Router
│   ├── index.tsx         # 首页
│   ├── _app.tsx          # 应用入口
│   └── test/             # 测试页面
│       └── quick.tsx     # 快速测试
├── components/           # 可复用组件
│   └── AdGate.tsx       # 广告门槛组件
├── styles/              # 样式文件
│   └── globals.css      # 全局样式
├── public/              # 静态资源
├── package.json         # 项目配置
├── next.config.js       # Next.js 配置
├── tailwind.config.js   # Tailwind 配置
└── tsconfig.json        # TypeScript 配置
```

## 🚀 部署选项

### 选项 1: Vercel 部署 (推荐)

1. **安装 Vercel CLI**
```bash
npm install -g vercel
```

2. **部署到 Vercel**
```bash
vercel --prod
```

3. **配置环境变量** (如需要)
```bash
vercel env add NEXT_PUBLIC_APP_URL
```

### 选项 2: 自托管部署

1. **构建生产版本**
```bash
npm run build
```

2. **启动生产服务器**
```bash
npm start
```

3. **使用 PM2 管理进程** (推荐)
```bash
# 安装 PM2
npm install -g pm2

# 启动应用
pm2 start npm --name "mbti-nextjs" -- start

# 查看状态
pm2 status

# 重启应用
pm2 restart mbti-nextjs
```

### 选项 3: Docker 部署

1. **创建 Dockerfile**
```dockerfile
FROM node:14-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

RUN npm run build

EXPOSE 3000

CMD ["npm", "start"]
```

2. **构建和运行**
```bash
docker build -t mbti-nextjs .
docker run -p 3000:3000 mbti-nextjs
```

## 🔧 配置说明

### Next.js 配置 (next.config.js)
```javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: false  // 使用 Pages Router
  },
  images: {
    domains: ['localhost'],
  }
}

module.exports = nextConfig
```

### Tailwind CSS 配置
项目使用 Tailwind CSS 3.3.6，配置文件位于 `tailwind.config.js`。

### TypeScript 配置
项目使用 TypeScript 4.9.5，配置文件位于 `tsconfig.json`。

## 🐛 常见问题解决

### 1. Node.js 版本不兼容
```bash
# 使用 nvm 切换 Node.js 版本
nvm install 14
nvm use 14
```

### 2. 依赖安装失败
```bash
# 清除缓存
npm cache clean --force

# 删除 node_modules 和 package-lock.json
rm -rf node_modules package-lock.json

# 重新安装
npm install
```

### 3. 构建失败
```bash
# 检查 TypeScript 错误
npm run lint

# 修复类型错误
# 然后重新构建
npm run build
```

### 4. 内存不足
```bash
# 增加 Node.js 内存限制
export NODE_OPTIONS="--max-old-space-size=4096"
npm run build
```

## 📊 性能优化

### 1. 生产环境优化
- 启用 SWC 编译器 (`swcMinify: true`)
- 使用 React Strict Mode
- 优化图片加载

### 2. 缓存策略
- 静态资源缓存
- API 响应缓存
- 浏览器缓存优化

### 3. 监控和日志
```bash
# 使用 PM2 监控
pm2 monit

# 查看日志
pm2 logs mbti-nextjs
```

## 🔒 安全配置

### 1. 环境变量
```bash
# 创建 .env.local 文件
NEXT_PUBLIC_APP_URL=https://your-domain.com
```

### 2. HTTPS 配置
在生产环境中确保使用 HTTPS。

### 3. 安全头设置
在 `next.config.js` 中配置安全头：
```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
        ],
      },
    ]
  },
}
```

## 📈 监控和维护

### 1. 健康检查
```bash
# 检查应用状态
curl http://localhost:3000/api/health
```

### 2. 日志管理
```bash
# 使用 PM2 管理日志
pm2 logs mbti-nextjs --lines 100
```

### 3. 性能监控
- 使用 Vercel Analytics (如果部署在 Vercel)
- 集成 Google Analytics
- 监控 Core Web Vitals

## 🎯 功能特性

- ✅ **响应式设计**: 支持移动端和桌面端
- ✅ **TypeScript**: 类型安全
- ✅ **Tailwind CSS**: 现代化样式
- ✅ **广告系统**: 内置广告门槛
- ✅ **SEO 优化**: 服务端渲染
- ✅ **性能优化**: 代码分割和懒加载

## 📞 技术支持

如果遇到问题，请检查：
1. Node.js 版本是否符合要求
2. 依赖是否正确安装
3. 构建过程是否有错误
4. 服务器配置是否正确

---

**注意**: 此项目专门为 Node.js 14 环境优化，确保在部署前检查 Node.js 版本。
