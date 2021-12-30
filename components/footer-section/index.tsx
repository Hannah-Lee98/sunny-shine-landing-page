import React from 'react';
import { FooterWrapper } from './style';
import Link from 'next/link';
import { IMenuItem } from '../navbar';

const menuList: IMenuItem[] = [
  {
    href: '/about',
    title: 'About',
  },
  {
    href: '/services',
    title: 'Service',
  },
  {
    href: '/projects',
    title: 'Projects',
  },
];

const menuIconList = [
  {
    href: '/',
    iconImgURL: '/images/icon-facebook.svg',
  },
  {
    href: '/',
    iconImgURL: '/images/icon-instagram.svg',
  },
  {
    href: '/',
    iconImgURL: '/images/icon-twitter.svg',
  },
  {
    href: '/projects',
    iconImgURL: '/images/icon-pinterest.svg',
  },
];

const Footer = () => {
  return (
    <FooterWrapper>
      <div className={'footer-container'}>
        <h3>sunnyside</h3>
        <ul className={'text-list'}>
          {menuList.map(i => (
            <li key={i.href}>
              <Link href={i.href}>{i.title}</Link>
            </li>
          ))}
        </ul>
        <ul className={'icon-list'}>
          {menuIconList.map(i => (
            <li key={i.href}>
              <Link href={i.href} passHref={true}>
                <img src={i.iconImgURL} alt={''} />
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
