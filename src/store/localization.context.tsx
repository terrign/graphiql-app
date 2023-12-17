import { createContext, ReactNode, useCallback, useContext, useMemo, useState } from 'react';
import { localization } from './localization';

type Lang = 'ru' | 'en';

type LocalizationType = (typeof localization)['ru'];

interface LocalizationProviderProps {
  children: ReactNode;
}

interface LocalizationContextType {
  lang: string;
  changeLanguage: (value: Lang) => void;
  t: LocalizationType;
}

const _lang = localStorage.getItem('lang') as Lang | null;

export const LocalizationContext = createContext<LocalizationContextType | null>(null);

export const useLocalization = () => {
  const context = useContext(LocalizationContext);

  if (!context) {
    throw new Error('useLocalization must be used within a LocalizationProvider');
  }

  return context;
};

export const LocalizationProvider = ({ children }: LocalizationProviderProps) => {
  const [lang, setLang] = useState<Lang>(_lang ?? 'ru');

  const changeLanguage = useCallback((value: Lang) => {
    localStorage.setItem('lang', value);
    setLang(value);
  }, []);

  const value = useMemo(() => {
    const _localization = localization[lang];

    return {
      lang,
      changeLanguage,
      t: _localization,
    };
  }, [lang, changeLanguage]);

  return <LocalizationContext.Provider value={value}>{children}</LocalizationContext.Provider>;
};
