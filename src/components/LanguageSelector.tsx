import { useState, useEffect, useRef } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';

export interface Language {
  code: string;
  name: string;
  nativeName: string;
  flag: string;
}

export const LANGUAGES: Language[] = [
  { code: 'en', name: 'English', nativeName: 'English', flag: '🇬🇧' },
  { code: 'ta', name: 'Tamil', nativeName: 'தமிழ்', flag: '🇮🇳' },
  { code: 'hi', name: 'Hindi', nativeName: 'हिन्दी', flag: '🇮🇳' },
  { code: 'kn', name: 'Kannada', nativeName: 'ಕನ್ನಡ', flag: '🇮🇳' },
  { code: 'te', name: 'Telugu', nativeName: 'తెలుగు', flag: '🇮🇳' },
  { code: 'ml', name: 'Malayalam', nativeName: 'മലയാളം', flag: '🇮🇳' },
  { code: 'bn', name: 'Bengali', nativeName: 'বাংলা', flag: '🇮🇳' },
  { code: 'mr', name: 'Marathi', nativeName: 'मराठी', flag: '🇮🇳' },
  { code: 'gu', name: 'Gujarati', nativeName: 'ગુજરાતી', flag: '🇮🇳' },
  { code: 'pa', name: 'Punjabi', nativeName: 'ਪੰਜਾਬੀ', flag: '🇮🇳' },
];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: any;
  }
}

interface LanguageSelectorProps {
  isMobileDrawer?: boolean;
  onSelectCallback?: () => void;
}

export default function LanguageSelector({ isMobileDrawer = false, onSelectCallback }: LanguageSelectorProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLang, setSelectedLang] = useState<Language>(LANGUAGES[0]);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Helper to read stored/active language code
  const getActiveLangCode = (): string => {
    try {
      const stored = localStorage.getItem('lithintransport_lang');
      if (stored && LANGUAGES.some((l) => l.code === stored)) {
        return stored;
      }

      // Check googtrans cookie
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
        const cookie = cookies[i].trim();
        if (cookie.startsWith('googtrans=')) {
          const val = cookie.substring('googtrans='.length);
          const parts = val.split('/');
          const last = parts[parts.length - 1];
          if (last && LANGUAGES.some((l) => l.code === last)) {
            return last;
          }
        }
      }
    } catch (e) {
      // ignore
    }
    return 'en';
  };

  // Sync state on load
  useEffect(() => {
    const code = getActiveLangCode();
    const match = LANGUAGES.find((l) => l.code === code) || LANGUAGES[0];
    setSelectedLang(match);

    // Initialize Google Translate Script
    if (!document.getElementById('google-translate-script')) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate?.TranslateElement) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: 'en',
              includedLanguages: 'en,ta,hi,kn,te,ml,bn,mr,gu,pa',
              autoDisplay: false,
              layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
            },
            'google_translate_element'
          );
        }
      };

      const script = document.createElement('script');
      script.id = 'google-translate-script';
      script.src = 'https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const changeLanguage = (lang: Language) => {
    setSelectedLang(lang);
    setIsOpen(false);

    try {
      localStorage.setItem('lithintransport_lang', lang.code);
    } catch (e) {
      // ignore
    }

    // Set Google Translate Cookies across domain & path
    const domain = window.location.hostname;
    document.cookie = `googtrans=/en/${lang.code}; path=/; domain=${domain}`;
    document.cookie = `googtrans=/en/${lang.code}; path=/`;

    if (onSelectCallback) {
      onSelectCallback();
    }

    // Trigger select change in Google Translate Combo element if present, or reload page
    const selectEl = document.querySelector('.goog-te-combo') as HTMLSelectElement;
    if (selectEl) {
      selectEl.value = lang.code;
      selectEl.dispatchEvent(new Event('change'));
    } else {
      window.location.reload();
    }
  };

  return (
    <div className="relative notranslate" translate="no" ref={dropdownRef}>
      {/* Hidden Google Translate Target Element */}
      <div id="google_translate_element" className="hidden" />

      {/* Trigger Button (Header style vs Mobile Drawer style) */}
      {isMobileDrawer ? (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center justify-between px-4 py-3 bg-[#0c122b] border border-emerald-500/40 rounded-xl text-white text-xs font-bold w-full cursor-pointer notranslate"
          translate="no"
        >
          <div className="flex items-center gap-2.5">
            <Globe className="w-4 h-4 text-emerald-400" />
            <div className="flex flex-col text-left">
              <span className="text-[9px] font-black uppercase tracking-widest text-emerald-400">SELECT LANGUAGE</span>
              <span className="text-xs font-extrabold text-white flex items-center gap-1.5">
                <span>{selectedLang.flag}</span>
                <span className="notranslate" translate="no">{selectedLang.nativeName} ({selectedLang.name})</span>
              </span>
            </div>
          </div>
          <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      ) : (
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3.5 py-2 bg-transparent hover:bg-emerald-500/10 border border-emerald-500/30 rounded-full text-white text-xs font-bold tracking-wider transition-all cursor-pointer shadow-md group notranslate"
          translate="no"
          title="Select Language / மொழி தேர்வு"
        >
          <Globe className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
          <span className="text-emerald-300 font-extrabold uppercase notranslate" translate="no">
            {selectedLang.nativeName}
          </span>
          <ChevronDown className={`w-3 h-3 text-emerald-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>
      )}

      {/* Dropdown Menu UI */}
      {isOpen && (
        <div
          className={`absolute ${
            isMobileDrawer
              ? 'left-0 right-0 top-full mt-2 w-full'
              : 'right-0 sm:right-auto sm:left-1/2 sm:-translate-x-1/2 top-full mt-2.5 w-56'
          } bg-[#060b1e]/98 backdrop-blur-2xl border-2 border-emerald-500/40 rounded-2xl p-2 shadow-2xl z-50 flex flex-col gap-1 animate-in fade-in slide-in-from-top-2 duration-200 max-h-80 overflow-y-auto notranslate`}
          translate="no"
        >
          <div className="px-3 py-1.5 border-b border-emerald-500/20 text-[10px] font-black text-emerald-400 uppercase tracking-widest flex items-center justify-between notranslate" translate="no">
            <span>Select Language / மொழி</span>
            <Globe className="w-3 h-3 text-emerald-400" />
          </div>

          {LANGUAGES.map((lang) => {
            const isSelected = selectedLang.code === lang.code;
            return (
              <button
                key={lang.code}
                onClick={() => changeLanguage(lang)}
                className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-xs font-semibold transition-all cursor-pointer notranslate ${
                  isSelected
                    ? 'bg-emerald-500/20 border border-emerald-400/50 text-emerald-300 font-black shadow-inner'
                    : 'text-gray-200 hover:bg-white/10 hover:text-white'
                }`}
                translate="no"
              >
                <div className="flex items-center gap-2.5 notranslate" translate="no">
                  <span className="text-sm shrink-0">{lang.flag}</span>
                  <div className="flex flex-col text-left notranslate" translate="no">
                    <span className="leading-none text-xs font-bold text-white notranslate" translate="no">
                      {lang.nativeName}
                    </span>
                    <span className="text-[9.5px] text-emerald-400/90 font-medium notranslate" translate="no">
                      {lang.name}
                    </span>
                  </div>
                </div>
                {isSelected && <Check className="w-4 h-4 text-emerald-400 shrink-0" />}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}
