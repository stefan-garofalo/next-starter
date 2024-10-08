import { Suspense } from 'react'
import { generate } from '@/lib/metadata'

import type { SearchParams } from '@/feat/search/types'
import SearchBar from '@/feat/search/components/Searchbar'
import Results, { ResultsSkeleton } from '@/feat/search/components/Results'
import Pagination, { PaginationSkeleton } from '@/feat/search/components/Pagination'
import Sort from '@/feat/search/components/Sort'
import { LangParams } from '@/feat/i18n/types'

export const experimental_ppr = true
export function generateMetadata({ params: { lang } }: { params: LangParams }) {
	return generate({
		title: 'Optimistic Git',
		description:
			'All the new React and Next jazz to power Github Search API. ft: PPR, Suspense, Streaming, optimistic updates and auth',
		canonical: '/',
		lang
	})
}
export default function Home({ searchParams }: { searchParams: SearchParams }) {
	searchParams.q = searchParams.q || 'git'
	searchParams.page = +(searchParams.page || 1)

	return (
		<main className="group/query p-container">
			<SearchBar q={searchParams.q} className="w-full lg:w-1/2" />
			<Suspense fallback={<PaginationSkeleton />}>
				<Pagination
					className="lg:h-full"
					searchParams={searchParams}
					page={searchParams.page}
				/>
			</Suspense>
			<Sort />
			<Suspense fallback={<ResultsSkeleton />}>
				<Results searchParams={searchParams} />
			</Suspense>
		</main>
	)
}
