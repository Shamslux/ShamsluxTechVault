export const languages = { 'en':'English', 'pt-br':'Português (Brasil)', 'fr':'Français', 'zh-cn':'简体中文', 'nb':'Norsk bokmål', 'nl':'Nederlands', 'de':'Deutsch', 'es':'Español', 'eo':'Esperanto' } as const;
export type Lang = keyof typeof languages;
export const defaultLang: Lang = 'en';
export const pages = ['home','about','career','data-projects','web-projects'] as const;
export type Page = typeof pages[number];
export function localizedPath(lang: Lang, page: Page) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}/${lang}/${page === 'home' ? '' : page + '/'}`;
}
