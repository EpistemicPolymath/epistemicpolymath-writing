/* eslint-disable jsx-a11y/anchor-has-content */
import Link from 'next/link'
import type { LinkProps } from 'next/link'
import { AnchorHTMLAttributes } from 'react'

const CustomLink = ({ href, ...rest }: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => {
  const isInternalLink = href && href.startsWith('/')
  const isAnchorLink = href && href.startsWith('#')

  if (isInternalLink) {
    return <Link href={href} {...rest} />
  }

  if (isAnchorLink) {
    return <a href={href} {...rest} />
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="light:text-primary-950 light:drop-shadow-at light:hover:text-primary-600 dark:text-primary-500 dark:hover:text-primary-50"
      href={href}
      {...rest}
    />
  )
}

export default CustomLink
