import { LANGS } from '@/feat/i18n/config'

export function path(url: string, lang: keyof typeof LANGS) {
	return `/${lang}${url}`
}
export function dict(label: string, lang: keyof typeof LANGS) {
	return LANGS[lang]?.[label] || label
}
