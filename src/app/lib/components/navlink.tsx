"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

interface IProps {
    className: string
    href: string
    children: React.ReactNode
}
export const NavLink = (props: IProps) => {
    const { className, href, children } = props;
    const path = usePathname();

    const styleName = className + (path == href ? " has-background-success" : "")
    return <>
        <Link className={className} href={href}>{children}</Link>
    </>
}