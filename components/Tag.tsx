import Link from 'next/link'
import { slug } from 'github-slugger'
interface Props {
  text: string
}

const Tag = ({ text }: Props) => {
  return (
    <Link
      href={`/tags/${slug(text)}`}
      className="mr-3 text-sm font-medium uppercase light:drop-shadow-at light:hover:text-primary-600 light:focus:text-primary-600 dark:text-primary-500 dark:hover:text-primary-50
      dark:focus:text-primary-50"
    >
      {text.split(' ').join('-')}
    </Link>
  )
}

export default Tag
