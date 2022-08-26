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
      name: 'Food',
      url: '/food-order'
    },
    // {
    //   name: 'Contact Us',
    //   url: '/contact'
    // },
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

export const pricingAndFeatures = [
  {
    name: 'One Time',
    price: 'INR 400*',
    features: [
      'test',
      'test',
      'test',
      'test'
    ]
  },
  {
    name: 'Monthly',
    price: 'INR 1350*',
    features: [
      'Customised Diets',
      'Weekly Follow Ups',
      'Change in plan based on outcome'
    ]
  },
  {
    name: 'Quarterly',
    price: 'INR 3600*',
    features: [
      'Customised Diets',
      'Weekly Follow Ups',
      'Change in plan based on outcome'
    ]
  },
  {
    name: 'Half Yearly',
    price: 'INR 7600*',
    features: [
      'Customised Diets',
      'Weekly Follow Ups',
      'Change in plan based on outcome'
    ]
  }
];


export const consultationTypes = [
  {
    name: 'Weight Loss',
    value: '1'
  },
  {
    name: 'Weight Gain',
    value: '2'
  },
  {
    name: 'Musle Gain',
    value: '3'
  },
  {
    name: 'Other',
    value: '4'
  },
]