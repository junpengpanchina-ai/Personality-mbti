import React from 'react';
import { Brain, Star, Zap, Shield, Heart, Sparkles } from 'lucide-react';

export default function TailwindShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-secondary-50 to-accent-50 p-8">
      <div className="max-w-6xl mx-auto space-y-12">
        
        {/* 标题部分 */}
        <div className="text-center space-y-4">
          <h1 className="text-6xl font-bold text-gradient-primary animate-fade-in">
            Tailwind CSS 3.3.6
          </h1>
          <p className="text-xl text-gray-600 animate-fade-in-up">
            完整的现代化 CSS 框架配置
          </p>
        </div>

        {/* 颜色系统展示 */}
        <div className="card p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-gradient-secondary">颜色系统</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="space-y-2">
              <h3 className="font-semibold text-primary-700">Primary</h3>
              <div className="space-y-1">
                <div className="h-8 bg-primary-500 rounded"></div>
                <div className="h-6 bg-primary-400 rounded"></div>
                <div className="h-4 bg-primary-300 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-secondary-700">Secondary</h3>
              <div className="space-y-1">
                <div className="h-8 bg-secondary-500 rounded"></div>
                <div className="h-6 bg-secondary-400 rounded"></div>
                <div className="h-4 bg-secondary-300 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-accent-700">Accent</h3>
              <div className="space-y-1">
                <div className="h-8 bg-accent-500 rounded"></div>
                <div className="h-6 bg-accent-400 rounded"></div>
                <div className="h-4 bg-accent-300 rounded"></div>
              </div>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold text-success-700">Success</h3>
              <div className="space-y-1">
                <div className="h-8 bg-success-500 rounded"></div>
                <div className="h-6 bg-success-400 rounded"></div>
                <div className="h-4 bg-success-300 rounded"></div>
              </div>
            </div>
          </div>
        </div>

        {/* 按钮组件展示 */}
        <div className="card p-8 animate-slide-in-left">
          <h2 className="text-3xl font-bold mb-6 text-gradient-accent">按钮组件</h2>
          <div className="flex flex-wrap gap-4">
            <button className="btn-primary">Primary Button</button>
            <button className="btn-secondary">Secondary Button</button>
            <button className="btn-success">Success Button</button>
            <button className="btn-warning">Warning Button</button>
            <button className="btn-error">Error Button</button>
          </div>
        </div>

        {/* 卡片组件展示 */}
        <div className="card p-8 animate-slide-in-right">
          <h2 className="text-3xl font-bold mb-6 text-gradient-warm">卡片组件</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="card-hover p-6">
              <Brain className="h-12 w-12 text-primary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">基础卡片</h3>
              <p className="text-gray-600">这是一个基础卡片组件，具有悬停效果。</p>
            </div>
            <div className="card-interactive p-6">
              <Star className="h-12 w-12 text-secondary-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">交互卡片</h3>
              <p className="text-gray-600">这是一个交互式卡片，具有缩放效果。</p>
            </div>
            <div className="card p-6 shadow-glow">
              <Zap className="h-12 w-12 text-accent-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">发光卡片</h3>
              <p className="text-gray-600">这是一个具有发光效果的卡片。</p>
            </div>
          </div>
        </div>

        {/* 渐变背景展示 */}
        <div className="card p-8 animate-scale-in">
          <h2 className="text-3xl font-bold mb-6 text-gradient-cool">渐变背景</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="gradient-primary p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-2">Primary Gradient</h3>
              <p>主要渐变背景效果</p>
            </div>
            <div className="gradient-secondary p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-2">Secondary Gradient</h3>
              <p>次要渐变背景效果</p>
            </div>
            <div className="gradient-warm p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-2">Warm Gradient</h3>
              <p>温暖渐变背景效果</p>
            </div>
            <div className="gradient-cool p-8 rounded-xl text-white">
              <h3 className="text-2xl font-bold mb-2">Cool Gradient</h3>
              <p>凉爽渐变背景效果</p>
            </div>
          </div>
        </div>

        {/* 动画效果展示 */}
        <div className="card p-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-gradient-primary">动画效果</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center p-6">
              <div className="loading-lg mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">加载动画</h3>
              <p className="text-sm text-gray-600">旋转加载效果</p>
            </div>
            <div className="text-center p-6">
              <div className="animate-bounce-gentle">
                <Heart className="h-12 w-12 text-error-500 mx-auto mb-4" />
              </div>
              <h3 className="font-semibold mb-2">弹跳动画</h3>
              <p className="text-sm text-gray-600">温和的弹跳效果</p>
            </div>
            <div className="text-center p-6">
              <div className="animate-pulse-gentle">
                <Sparkles className="h-12 w-12 text-warning-500 mx-auto mb-4" />
              </div>
              <h3 className="font-semibold mb-2">脉冲动画</h3>
              <p className="text-sm text-gray-600">柔和的脉冲效果</p>
            </div>
          </div>
        </div>

        {/* 徽章组件展示 */}
        <div className="card p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-gradient-secondary">徽章组件</h2>
          <div className="flex flex-wrap gap-4">
            <span className="badge-primary">Primary</span>
            <span className="badge-secondary">Secondary</span>
            <span className="badge-success">Success</span>
            <span className="badge-warning">Warning</span>
            <span className="badge-error">Error</span>
          </div>
        </div>

        {/* 输入框组件展示 */}
        <div className="card p-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-gradient-accent">输入框组件</h2>
          <div className="max-w-md space-y-4">
            <div>
              <label className="label">普通输入框</label>
              <input type="text" className="input" placeholder="请输入内容" />
            </div>
            <div>
              <label className="label-success">成功状态</label>
              <input type="text" className="input-success" placeholder="输入成功" />
            </div>
            <div>
              <label className="label-error">错误状态</label>
              <input type="text" className="input-error" placeholder="输入错误" />
            </div>
          </div>
        </div>

        {/* 响应式设计展示 */}
        <div className="card p-8 animate-fade-in-up">
          <h2 className="text-3xl font-bold mb-6 text-gradient-warm">响应式设计</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-primary-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-primary-700">XS</div>
              <div className="text-sm text-primary-600">475px+</div>
            </div>
            <div className="bg-secondary-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-secondary-700">SM</div>
              <div className="text-sm text-secondary-600">640px+</div>
            </div>
            <div className="bg-accent-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-accent-700">MD</div>
              <div className="text-sm text-accent-600">768px+</div>
            </div>
            <div className="bg-success-100 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-success-700">LG</div>
              <div className="text-sm text-success-600">1024px+</div>
            </div>
          </div>
        </div>

        {/* 工具类展示 */}
        <div className="card p-8 animate-fade-in">
          <h2 className="text-3xl font-bold mb-6 text-gradient-cool">工具类</h2>
          <div className="space-y-4">
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">滚动条隐藏</h3>
              <div className="h-20 overflow-y-auto scrollbar-hide bg-white p-4 rounded">
                <div className="space-y-2">
                  <div>内容 1</div>
                  <div>内容 2</div>
                  <div>内容 3</div>
                  <div>内容 4</div>
                  <div>内容 5</div>
                </div>
              </div>
            </div>
            <div className="p-4 bg-gray-100 rounded-lg">
              <h3 className="font-semibold mb-2">文本平衡</h3>
              <p className="text-balance text-lg">
                这是一个使用文本平衡工具类的长文本，它会自动调整文本的换行，使每一行的长度更加均匀。
              </p>
            </div>
          </div>
        </div>

        {/* 总结 */}
        <div className="text-center card p-8 animate-fade-in">
          <Shield className="h-16 w-16 text-primary-600 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4 text-gradient-primary">
            Tailwind CSS 3.3.6 配置完成
          </h2>
          <p className="text-lg text-gray-600 mb-6">
            完整的现代化 CSS 框架，包含自定义颜色、组件、动画和工具类
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="badge-primary">自定义颜色</span>
            <span className="badge-secondary">组件系统</span>
            <span className="badge-success">动画效果</span>
            <span className="badge-warning">响应式设计</span>
            <span className="badge-accent">工具类</span>
          </div>
        </div>
      </div>
    </div>
  );
}
