import Link from 'next/link'
import kebabCase from '@/lib/utils/kebabCase'

const Tag = ({ text }) => {
  return (
    <Link href={`/tags/${kebabCase(text)}`}>
      <a className="mr-3 text-sm font-medium uppercase text-gray-900 drop-shadow-at hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-600">
        {text.split(' ').join('-')}
      </a>
    </Link>
  )
}

export default Tag
