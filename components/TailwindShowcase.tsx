import React from 'react';
import { Brain, Users, BarChart3, Star, Heart, Zap, Shield, Sparkles } from 'lucide-react';

export default function TailwindShowcase() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 via-accent-50 to-secondary-50 p-8">
      <div className="container-responsive">
        {/* 标题区域 */}
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold text-gradient-primary mb-6 animate-fade-in">
            Tailwind CSS 3.3.6
          </h1>
          <p className="text-xl text-neutral-600 mb-8 animate-fade-in-up">
            现代化设计系统展示
          </p>
        </div>

        {/* 颜色系统展示 */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="card animate-fade-in-up">
            <div className="w-full h-20 bg-primary-500 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold text-primary-800">Primary</h3>
            <p className="text-sm text-neutral-600">主要品牌色</p>
          </div>
          
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <div className="w-full h-20 bg-secondary-500 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold text-secondary-800">Secondary</h3>
            <p className="text-sm text-neutral-600">辅助品牌色</p>
          </div>
          
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="w-full h-20 bg-accent-500 rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold text-accent-800">Accent</h3>
            <p className="text-sm text-neutral-600">强调色</p>
          </div>
          
          <div className="card animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="w-full h-20 bg-gradient-primary rounded-lg mb-4"></div>
            <h3 className="text-lg font-semibold text-neutral-800">Gradient</h3>
            <p className="text-sm text-neutral-600">渐变效果</p>
          </div>
        </div>

        {/* 按钮组件展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">按钮组件</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="btn btn-primary">Primary Button</button>
            <button className="btn btn-secondary">Secondary Button</button>
            <button className="btn btn-outline">Outline Button</button>
            <button className="btn btn-ghost">Ghost Button</button>
            <button className="btn btn-primary btn-sm">Small Button</button>
            <button className="btn btn-primary btn-lg">Large Button</button>
          </div>
        </div>

        {/* 卡片组件展示 */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="card animate-slide-in-left">
            <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
              <Brain className="h-6 w-6 text-primary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">智能分析</h3>
            <p className="text-neutral-600">基于先进算法的深度分析</p>
          </div>
          
          <div className="card card-elevated animate-fade-in-up">
            <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center mb-4">
              <Users className="h-6 w-6 text-secondary-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">用户友好</h3>
            <p className="text-neutral-600">直观易用的界面设计</p>
          </div>
          
          <div className="card animate-slide-in-right">
            <div className="w-12 h-12 bg-accent-100 rounded-lg flex items-center justify-center mb-4">
              <BarChart3 className="h-6 w-6 text-accent-600" />
            </div>
            <h3 className="text-xl font-semibold mb-2">数据可视化</h3>
            <p className="text-neutral-600">清晰的数据展示</p>
          </div>
        </div>

        {/* 徽章组件展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">徽章组件</h2>
          <div className="flex flex-wrap gap-4 justify-center">
            <span className="badge badge-primary">Primary</span>
            <span className="badge badge-secondary">Secondary</span>
            <span className="badge badge-success">Success</span>
            <span className="badge badge-warning">Warning</span>
            <span className="badge badge-error">Error</span>
          </div>
        </div>

        {/* 输入框组件展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">输入框组件</h2>
          <div className="max-w-md mx-auto space-y-4">
            <input type="text" placeholder="普通输入框" className="input" />
            <input type="text" placeholder="成功状态" className="input input-success" />
            <input type="text" placeholder="错误状态" className="input input-error" />
          </div>
        </div>

        {/* 动画效果展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">动画效果</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="card text-center animate-bounce-in">
              <Heart className="h-8 w-8 text-error-500 mx-auto mb-4" />
              <h3 className="font-semibold">Bounce In</h3>
            </div>
            
            <div className="card text-center animate-fade-in-up">
              <Zap className="h-8 w-8 text-warning-500 mx-auto mb-4" />
              <h3 className="font-semibold">Fade In Up</h3>
            </div>
            
            <div className="card text-center animate-slide-in-left">
              <Shield className="h-8 w-8 text-success-500 mx-auto mb-4" />
              <h3 className="font-semibold">Slide In Left</h3>
            </div>
            
            <div className="card text-center animate-slide-in-right">
              <Sparkles className="h-8 w-8 text-accent-500 mx-auto mb-4" />
              <h3 className="font-semibold">Slide In Right</h3>
            </div>
          </div>
        </div>

        {/* 玻璃效果展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">玻璃效果</h2>
          <div className="relative h-64 bg-gradient-primary rounded-2xl overflow-hidden">
            <div className="absolute inset-0 bg-black bg-opacity-20"></div>
            <div className="relative z-10 p-8 h-full flex items-center justify-center">
              <div className="glass rounded-2xl p-8 text-center">
                <h3 className="text-2xl font-bold text-neutral-900 mb-2">玻璃效果</h3>
                <p className="text-neutral-600">现代化的毛玻璃效果</p>
              </div>
            </div>
          </div>
        </div>

        {/* 加载状态展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">加载状态</h2>
          <div className="flex justify-center space-x-8">
            <div className="text-center">
              <div className="loading-spinner w-8 h-8 mx-auto mb-2"></div>
              <p className="text-sm text-neutral-600">旋转加载</p>
            </div>
            
            <div className="text-center">
              <div className="loading-dots mx-auto mb-2">
                <div></div>
                <div></div>
                <div></div>
              </div>
              <p className="text-sm text-neutral-600">点状加载</p>
            </div>
          </div>
        </div>

        {/* 响应式展示 */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-neutral-900 mb-8 text-center">响应式设计</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="card text-center">
              <div className="text-2xl font-bold text-primary-600 mb-2">1</div>
              <p className="text-sm text-neutral-600">移动端</p>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-secondary-600 mb-2">2</div>
              <p className="text-sm text-neutral-600">平板端</p>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-accent-600 mb-2">3</div>
              <p className="text-sm text-neutral-600">桌面端</p>
            </div>
            <div className="card text-center">
              <div className="text-2xl font-bold text-neutral-600 mb-2">4</div>
              <p className="text-sm text-neutral-600">大屏幕</p>
            </div>
          </div>
        </div>

        {/* 总结 */}
        <div className="text-center">
          <div className="card-elevated max-w-2xl mx-auto">
            <Star className="h-12 w-12 text-warning-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-neutral-900 mb-4">
              Tailwind CSS 3.3.6 完全匹配
            </h3>
            <p className="text-neutral-600 mb-6">
              现代化的设计系统，包含完整的颜色系统、组件库、动画效果和响应式设计
            </p>
            <div className="flex flex-wrap gap-2 justify-center">
              <span className="badge badge-primary">JIT 模式</span>
              <span className="badge badge-secondary">TypeScript</span>
              <span className="badge badge-success">响应式</span>
              <span className="badge badge-warning">动画</span>
              <span className="badge badge-error">组件化</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
