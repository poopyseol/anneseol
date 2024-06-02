import Link from 'next/link'
import Image from 'next/image'

const navLinkInfo = [
  {
    path: '/#',
    label: 'Home',
  },
  {
    path: '/#about',
    label: 'About',
  },
  {
    path: '/#contact',
    label: 'Contact',
  },
]

function displayNavLink(navLink, i) {
  return (
    <li key={i}>
      <Link href={navLink.path}>
        {navLink.label}
      </Link>
    </li>
  )
}

const Header = () => (
  <header>
    <div
      style={
        {
          // height: 'calc(var(--website-container-border) - 20px)',
          // width: '100px',
          // position: 'relative',
        }
      }
    >
      <Link href="/">
        OHAANIKA
        {/* <Image
          src={'/images/logos/logo-name-black.svg'}
          alt="ohaanika-logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        /> */}
      </Link>
    </div>
    <nav>
      <ul>{navLinkInfo.map((navLink, i) => displayNavLink(navLink, i))}</ul>
    </nav>
  </header>
)

export default Header
