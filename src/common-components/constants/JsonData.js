import {ReactComponent as FacebookIcon} from '../../assets/icons/facebook.svg'
import {ReactComponent as InstaIcon} from '../../assets/icons/insta.svg'
import {ReactComponent as TwitterIcon} from '../../assets/icons/twitter.svg'

export const  headerMenuItems = [
    {
      name: 'Plans',
      url: '/plans'
    },
    {
      name: 'About',
      url: '/about'
    },
    {
      name: 'Contact Us',
      url: '/contact'
    },
];

export const footerNavLinks = [
  {
    name: 'Facebook',
    url: 'https://www.instagram.com/diet_treats/',
    svg: <FacebookIcon />
  },
  {
    name: 'Instagram',
    url: 'https://www.instagram.com/diet_treats/',
    svg: <InstaIcon />
  },
  {
    name: 'Twitter',
    url: 'https://www.instagram.com/diet_treats/',
    svg: <TwitterIcon />
  },
];