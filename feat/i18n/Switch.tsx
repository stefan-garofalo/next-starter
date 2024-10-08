'use client'

import Link from 'next/link'
import { useParams, usePathname } from 'next/navigation'

import { merge } from '@/lib/tailwind'
import { LangParams } from './types'

type Props = {
	children: React.ReactNode
	lang: string
	className?: string
}

export default function LocalizedSwitch({ children, lang, className = '' }: Props) {
	const { lang: currentLang } = useParams<LangParams>()
	const pathname = usePathname()

	return (
		<Link
			href={pathname.replace(currentLang, lang)}
			className={merge(
				className,
				currentLang === lang && 'pointer-events-none opacity-50'
			)}
		>
			{children}
		</Link>
	)
}
