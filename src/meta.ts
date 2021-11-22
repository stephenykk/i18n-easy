export const EXT_NAMESPACE = 'i18n-easy'
export const EXT_ID = 'lokalise.i18n-easy'
export const EXT_NAME = 'i18n Ally'
export const EXT_EDITOR_ID = 'i18n-easy-editor'
export const EXT_REVIEW_ID = 'i18n-easy-review'

export const EXT_LEGACY_NAMESPACE = 'vue-i18n-easy'

export const KEY_REG_DEFAULT = '[\\w\\d\\. \\-\\[\\]\\/:]*?'
export const KEY_REG_ALL = '.*?'

export const QUOTE_SYMBOLS = '\'"`'

export const THROTTLE_DELAY = 800
export const FILEWATCHER_TIMEOUT = 100

export const linkKeyMatcher = /(?:@(?:\.[a-z]+)?:(?:[\w\-_|.]+|\([\w\-_|.]+\)))/g // @.hello:other-words , @.hello:(other-words)
export const linkKeyPrefixMatcher = /^@(?:\.([a-z]+))?:/ // @.hello: $1 -> hello , @:
export const bracketsMatcher = /[()]/g
export const linkedKeyModifiers = {
  upper: (str: string) => str.toLocaleUpperCase(),
  lower: (str: string) => str.toLocaleLowerCase(),
} as Record<string, (str: string) => string>

export const DEFAULT_LOCALE_COUNTRY_MAP = {
  en: 'us',
  zh: 'cn',
  de: 'de',
  fr: 'fr',
  ja: 'ja',
  es: 'es',
  vi: 'vn',
}
