import '../globals.css'
import { Analytics } from '@vercel/analytics/react'
import { inter } from '@/lib/font'
import { LOCALE_LIST } from '@/feat/i18n/config'
import { LangParams } from '@/feat/i18n/types'

export function generateStaticParams() {
	return LOCALE_LIST.map((lang) => ({ lang }))
}

type LayoutProps = {
	children: React.ReactNode
	params: LangParams
}
export default function RootLayout({ children, params: { lang } }: LayoutProps) {
	return (
		<html lang={lang}>
			<body className={inter.className}>
				<Analytics />
				{children}
			</body>
		</html>
	)
}
