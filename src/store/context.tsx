import { createContext, ReactNode, useContext, useState } from 'react';
import { localization } from '../utils/localization';

type LocalizationType = (typeof localization)['ru'];
// Пропсы для LanguageProvider
interface LanguageProviderProps {
  children: ReactNode;
}

interface LanguageContextType {
  lang: string;
  changeLanguage: React.Dispatch<React.SetStateAction<'ru' | 'en'>>;
  t: LocalizationType;
}

export const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLocalization = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

// Компонент провайдера языка
export const LocalizationProvider = ({ children }: LanguageProviderProps) => {
  const [lang, setLang] = useState<'ru' | 'en'>('en');

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
