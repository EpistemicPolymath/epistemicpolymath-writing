import { Authors, allAuthors } from 'contentlayer/generated'
import { MDXLayoutRenderer } from 'pliny/mdx-components'
import AuthorLayout from '@/layouts/AuthorLayout'
import { coreContent } from 'pliny/utils/contentlayer'
import { genPageMetadata } from 'app/seo'

export const metadata = genPageMetadata({ title: 'About' })

export default function Page() {
  // const author = allAuthors.find((p) => p.slug === 'default') as Authors
  const poly = allAuthors.find((p) => p.slug === 'default') as Authors
  const katie = allAuthors.find((p) => p.slug === 'katiequill') as Authors
  const mainContent = coreContent(poly)
  const additionalContent = coreContent(katie)

  return (
    <>
      <AuthorLayout content={mainContent}>
        <MDXLayoutRenderer code={poly.body.code} />
      </AuthorLayout>
      <AuthorLayout content={additionalContent}>
        <MDXLayoutRenderer code={katie.body.code} />
      </AuthorLayout>
    </>
  )
}
