export default interface LocaleService {
  getCurrentLocale(): string;
  getLocales(): string[];
  setLocale(locale: string): void;
  translate(text: string, replacements?: { [key: string]: string }): string;
}
