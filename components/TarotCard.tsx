import { useState, useEffect } from 'react';
import { Star, Sparkles, Moon, Sun } from 'lucide-react';

interface TarotCardProps {
  card: {
    name: string;
    symbol: string;
    element: string;
    meaning: string;
    traits: string[];
  };
  isSelected?: boolean;
  isFlipped?: boolean;
  onSelect?: () => void;
  onFlip?: () => void;
  disabled?: boolean;
  className?: string;
}

export default function TarotCard({ 
  card, 
  isSelected = false, 
  isFlipped = false, 
  onSelect, 
  onFlip,
  disabled = false,
  className = ''
}: TarotCardProps) {
  const [isAnimating, setIsAnimating] = useState(false);
  const [showGlow, setShowGlow] = useState(false);

  const handleClick = () => {
    if (disabled) return;
    
    if (onFlip && !isFlipped) {
      setIsAnimating(true);
      onFlip();
      
      // 添加翻牌音效
      if (typeof window !== 'undefined') {
        try {
          // 创建翻牌音效
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(400, audioContext.currentTime + 0.3);
          
          gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.3);
        } catch (error) {
          // 静默处理音效错误
          console.log('Audio not available');
        }
      }
      
      setTimeout(() => {
        setIsAnimating(false);
        setShowGlow(true);
        setTimeout(() => setShowGlow(false), 1000);
      }, 600);
    } else if (onSelect && isFlipped) {
      onSelect();
      
      // 添加选择音效
      if (typeof window !== 'undefined') {
        try {
          const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
          const oscillator = audioContext.createOscillator();
          const gainNode = audioContext.createGain();
          
          oscillator.connect(gainNode);
          gainNode.connect(audioContext.destination);
          
          oscillator.frequency.setValueAtTime(600, audioContext.currentTime);
          oscillator.frequency.exponentialRampToValueAtTime(1200, audioContext.currentTime + 0.2);
          
          gainNode.gain.setValueAtTime(0.15, audioContext.currentTime);
          gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
          
          oscillator.start(audioContext.currentTime);
          oscillator.stop(audioContext.currentTime + 0.2);
        } catch (error) {
          console.log('Audio not available');
        }
      }
    }
  };

  const getElementColor = (element: string) => {
    switch (element.toLowerCase()) {
      case 'fire': return 'from-red-500 to-orange-500';
      case 'water': return 'from-blue-500 to-cyan-500';
      case 'air': return 'from-purple-500 to-pink-500';
      case 'earth': return 'from-green-500 to-emerald-500';
      default: return 'from-gray-500 to-slate-500';
    }
  };

  const getElementIcon = (element: string) => {
    switch (element.toLowerCase()) {
      case 'fire': return '🔥';
      case 'water': return '💧';
      case 'air': return '💨';
      case 'earth': return '🌍';
      default: return '✨';
    }
  };

  return (
    <div 
      className={`relative cursor-pointer transition-all duration-300 ${className}`}
      onClick={handleClick}
    >
      {/* 卡片容器 */}
      <div 
        className={`
          relative w-48 h-72 mx-auto perspective-1000
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-105'}
          ${isSelected ? 'ring-4 ring-purple-400 ring-opacity-50' : ''}
          ${showGlow ? 'animate-pulse' : ''}
        `}
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* 卡片正面（背面） */}
        <div 
          className={`
            absolute inset-0 w-full h-full rounded-xl shadow-2xl
            bg-gradient-to-br from-purple-900 via-indigo-900 to-blue-900
            border-2 border-purple-300
            flex flex-col items-center justify-center
            transition-transform duration-700 ease-in-out
            ${isFlipped ? 'rotate-y-180' : ''}
            ${isAnimating ? 'animate-bounce' : ''}
          `}
          style={{ 
            transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* 背面图案 */}
          <div className="text-center">
            <div className="text-6xl mb-4 animate-spin-slow">🔮</div>
            <div className="text-white text-lg font-bold mb-2">塔罗牌</div>
            <div className="text-purple-200 text-sm">点击翻牌</div>
            <div className="mt-4 flex justify-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400 animate-pulse" />
              <Sparkles className="h-4 w-4 text-pink-400 animate-pulse" />
              <Moon className="h-4 w-4 text-blue-400 animate-pulse" />
              <Sun className="h-4 w-4 text-orange-400 animate-pulse" />
            </div>
          </div>
        </div>

        {/* 卡片背面（正面） */}
        <div 
          className={`
            absolute inset-0 w-full h-full rounded-xl shadow-2xl
            bg-gradient-to-br ${getElementColor(card.element)}
            border-2 border-white
            flex flex-col items-center justify-between p-4
            transition-transform duration-700 ease-in-out
            ${isFlipped ? '' : 'rotate-y-180'}
            ${isSelected ? 'ring-4 ring-yellow-400 ring-opacity-70' : ''}
          `}
          style={{ 
            transform: isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)',
            backfaceVisibility: 'hidden'
          }}
        >
          {/* 牌名 */}
          <div className="text-center">
            <div className="text-4xl mb-2">{card.symbol}</div>
            <div className="text-white text-sm font-bold text-center leading-tight">
              {card.name}
            </div>
          </div>

          {/* 元素信息 */}
          <div className="text-center">
            <div className="text-2xl mb-1">{getElementIcon(card.element)}</div>
            <div className="text-white text-xs font-semibold">
              {card.element}
            </div>
          </div>

          {/* 选择指示 */}
          {isFlipped && !isSelected && (
            <div className="text-center">
              <div className="text-white text-xs animate-bounce">
                点击选择
              </div>
            </div>
          )}

          {/* 已选择指示 */}
          {isSelected && (
            <div className="text-center">
              <div className="text-yellow-300 text-sm font-bold animate-pulse">
                ✓ 已选择
              </div>
            </div>
          )}
        </div>
      </div>

      {/* 卡片信息（仅在翻牌后显示） */}
      {isFlipped && (
        <div className="mt-4 text-center">
          <div className="text-gray-800 text-sm font-semibold mb-1">
            {card.name}
          </div>
          <div className="text-gray-600 text-xs mb-2">
            {card.meaning}
          </div>
          <div className="flex flex-wrap justify-center gap-1">
            {card.traits.slice(0, 3).map((trait, index) => (
              <span 
                key={index}
                className="px-2 py-1 bg-purple-100 text-purple-700 text-xs rounded-full"
              >
                {trait}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// 塔罗牌网格组件
interface TarotCardGridProps {
  cards: Array<{
    name: string;
    symbol: string;
    element: string;
    meaning: string;
    traits: string[];
  }>;
  selectedCard?: string;
  onCardSelect?: (cardName: string) => void;
  onCardFlip?: (cardName: string) => void;
  flippedCards?: string[];
  disabled?: boolean;
}

export function TarotCardGrid({ 
  cards, 
  selectedCard, 
  onCardSelect, 
  onCardFlip,
  flippedCards = [],
  disabled = false 
}: TarotCardGridProps) {
  const [flippedCardsState, setFlippedCardsState] = useState<string[]>(flippedCards);

  const handleCardFlip = (cardName: string) => {
    if (!flippedCardsState.includes(cardName)) {
      setFlippedCardsState(prev => [...prev, cardName]);
      onCardFlip?.(cardName);
    }
  };

  const handleCardSelect = (cardName: string) => {
    onCardSelect?.(cardName);
  };

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {cards.map((card, index) => (
        <TarotCard
          key={card.name}
          card={card}
          isSelected={selectedCard === card.name}
          isFlipped={flippedCardsState.includes(card.name)}
          onSelect={() => handleCardSelect(card.name)}
          onFlip={() => handleCardFlip(card.name)}
          disabled={disabled}
          className="transform transition-all duration-300 hover:scale-105"
        />
      ))}
    </div>
  );
}

// 翻牌动画样式
export const tarotCardStyles = `
  @keyframes spin-slow {
    from { transform: rotate(0deg); }
    to { transform: rotate(360deg); }
  }
  
  .animate-spin-slow {
    animation: spin-slow 3s linear infinite;
  }
  
  .perspective-1000 {
    perspective: 1000px;
  }
  
  .rotate-y-180 {
    transform: rotateY(180deg);
  }
  
  .backface-hidden {
    backface-visibility: hidden;
  }
`;
