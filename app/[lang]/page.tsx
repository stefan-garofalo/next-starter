import { generate } from '@/lib/metadata'
import { LangParams } from '@/feat/i18n/types'

export function generateMetadata({ params: { lang } }: { params: LangParams }) {
	return generate({
		title: 'Next starter',
		description: '',
		canonical: '',
		lang
	})
}

export default async function HomePage() {
	return <main className="grow px-container pb-12"></main>
}
