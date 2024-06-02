import Image from 'next/image'

const SocialMediaIconInfo = [
  {
    name: 'GitHub',
    link: 'https://github.com/ohaanika',
    img: '/images/icons/social-github.svg',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/aanikarahman',
    img: '/images/icons/social-linkedin.svg',
  },
  {
    name: 'Instagram',
    link: 'https://www.instagram.com/ohaanika',
    img: '/images/icons/social-instagram.svg',
  },
  {
    name: 'Pinterest',
    link: 'https://www.pinterest.ca/ohaanika/',
    img: '/images/icons/social-pinterest.svg',
  },
  {
    name: 'Goodreads',
    link: 'https://www.goodreads.com/ohaanika',
    img: '/images/icons/social-goodreads.svg',
  },
  {
    name: 'Spotify',
    link: 'https://open.spotify.com/user/1180930840',
    img: '/images/icons/social-spotify.svg',
  },
  // {
  //   name: 'Flickr',
  //   link: 'https://www.flickr.com/photos/aanikarahman',
  //   img: '/images/icons/social-flickr.svg',
  // },
  // {
  //   name: 'Medium',
  //   link: 'https://medium.com/@ohaanika',
  //   img: '/images/icons/social-medium.svg',
  // },
]

function displaySocialMediaIcon(SocialMediaIcon, i) {
  return (
    <div
      key={i}
      style={{
        position: 'relative',
        height: '1.2em',
        width: '1.2em',
        marginLeft: '10px',
      }}
    >
      <a href={SocialMediaIcon.link} target="_blank" rel="noreferrer">
        <Image
          src={SocialMediaIcon.img}
          alt={SocialMediaIcon.name}
          layout="fill"
          objectFit="contain"
          objectPosition="right"
        />
      </a>
    </div>
  )
}

function displayCopyrightMessage() {
  let currentYear = new Date().getFullYear()
  return <p>© {currentYear} OHAANIKA. All Rights Reserved.</p>
}

const Footer = () => {
  return (
    <footer>
      <div>{displayCopyrightMessage()}</div>
      <div className="icons">
        {SocialMediaIconInfo.map((SocialMediaIcon, i) =>
          displaySocialMediaIcon(SocialMediaIcon, i),
        )}
      </div>
    </footer>
  )
}

export default Footer
