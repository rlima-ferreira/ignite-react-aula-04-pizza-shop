import { NavLink as NavLinkBase, NavLinkProps } from 'react-router-dom'

export default function NavLink(props: NavLinkProps) {
  return (
    <NavLinkBase
      className={({ isActive }) =>
        [
          'flex items-center gap-1.5 text-sm font-medium hover:text-foreground',
          isActive ? 'text-foreground' : 'text-muted-foreground',
        ].join(' ')
      }
      {...props}
    />
  )
}
