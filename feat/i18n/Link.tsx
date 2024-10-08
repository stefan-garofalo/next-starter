"use client"

import useLocalePath from "./hooks/useLocalePath"
import Link, { LinkProps } from "next/link"

type LocalizedLinkProps = LinkProps &
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: React.ReactNode
    href: string
  }

export default function LocalizedLink({
  children,
  href,
  ...props
}: LocalizedLinkProps) {
  const url = useLocalePath(href)
  return (
    <Link {...props} href={url}>
      {children}
    </Link>
  )
}
