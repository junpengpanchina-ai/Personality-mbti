import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { translations, Translations } from '../lib/translations';

interface LanguageContextType {
  currentLanguage: string;
  t: Translations;
  setLanguage: (language: string) => void;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

interface LanguageProviderProps {
  children: ReactNode;
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [currentLanguage, setCurrentLanguage] = useState('en');
  const [t, setT] = useState<Translations>(translations.en as Translations);

  useEffect(() => {
    // 从localStorage获取保存的语言设置
    if (typeof window !== 'undefined') {
      const savedLanguage = localStorage.getItem('preferred-language') || 'en';
      setCurrentLanguage(savedLanguage);
      setT((translations[savedLanguage] || translations.en) as Translations);
    }
  }, []);

  // 监听语言变化，确保组件重新渲染
  useEffect(() => {
    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === 'preferred-language' && e.newValue) {
        setCurrentLanguage(e.newValue);
        setT((translations[e.newValue] || translations.en) as Translations);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('storage', handleStorageChange);
      
      // 定期检查语言变化（用于同页面内的语言切换）
      const interval = setInterval(() => {
        const savedLanguage = localStorage.getItem('preferred-language') || 'en';
        if (savedLanguage !== currentLanguage) {
          setCurrentLanguage(savedLanguage);
          setT((translations[savedLanguage] || translations.en) as Translations);
        }
      }, 1000);

      return () => {
        window.removeEventListener('storage', handleStorageChange);
        clearInterval(interval);
      };
    }
  }, [currentLanguage]);

  const setLanguage = (language: string) => {
    if (typeof window !== 'undefined') {
      localStorage.setItem('preferred-language', language);
    }
    setCurrentLanguage(language);
    setT((translations[language] || translations.en) as Translations);
  };

  return (
    <LanguageContext.Provider value={{ currentLanguage, t, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
