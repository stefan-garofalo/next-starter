import './globals.css'
import { Analytics } from '@vercel/analytics/react'
import { inter } from '@/lib/font'
import { LOCALE_LIST } from '@/feat/i18n/config'
import { Lang } from '@/feat/i18n/types'

export function generateStaticParams() {
	return LOCALE_LIST.map((lang) => ({ lang }))
}

type Props = {
	children: React.ReactNode
	lang: Lang
}
export default function RootLayout({ children, lang }: Props) {
	return (
		<html lang={lang}>
			<body className={inter.className}>
				<Analytics />
				{children}
			</body>
		</html>
	)
}
