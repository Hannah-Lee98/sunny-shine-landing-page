import React, { useCallback } from 'react';
import { NavWrapper } from './style';
import Link from 'next/link';
import { useRouter } from 'next/router';
import useWindowSize from '../../util/useWindowSize';
import { screenSizeNumber } from '../../type/general';

export interface IMenuItem {
  href: string;
  title: string;
}

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
  {
    href: '/contact',
    title: 'Contact',
  },
];

const Nav = () => {
  const { pathname } = useRouter();
  const { windowSize } = useWindowSize();
  const handleOpenMenu = useCallback(() => {}, []);

  return (
    <NavWrapper>
      <div className={'left-nav'}>
        <ul>
          <Link href={'/'}>sunnyside</Link>
        </ul>
      </div>

      <div className={'right-nav'}>
        {windowSize.width < screenSizeNumber.medium ? (
          <span onClick={handleOpenMenu}>
            <img src={'/images/icon-hamburger.svg'} />
          </span>
        ) : (
          <ul>
            {menuList.map(i => (
              <li key={i.href} className={pathname === i.href ? 'active' : ''}>
                <Link href={i.href}>{i.title}</Link>{' '}
              </li>
            ))}
          </ul>
        )}
      </div>
    </NavWrapper>
  );
};

export default Nav;
