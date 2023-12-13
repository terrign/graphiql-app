import { createContext, ReactNode, useContext, useState } from 'react';
import { localization } from './localization';

type LocalizationType = (typeof localization)['ru'];
// Пропсы для LanguageProvider
interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextType {
  lang: string;
  changeLanguage: React.Dispatch<React.SetStateAction<'ru' | 'eng'>>;
  t: LocalizationType;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Компонент провайдера языка
export const LanguageProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<'ru' | 'eng'>('ru');

  // Подгрузка локализации для текущего языка
  const _localization = localization[lang];

  // Значение контекста
  const value = {
    lang,
    changeLanguage: setLang,
    t: _localization,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};
