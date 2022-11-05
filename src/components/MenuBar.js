/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { darkColor } from '../constants/color';

function MenuBar() {
  const items = [
    {
      icon: 'home',
      link: '/',
    },
    {
      icon: 'user',
      link: '/about',
    },
    {
      icon: 'clone',
      link: '/project',
    },
  ];
  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: white;
    border-radius: 35px;
    margin: 10vh 0;
    padding: 15px;
    width: 60px;
    list-style: none;
    box-shadow: 0 0 100px -5px rgba(0, 0, 0, 0.25);
    text-align: center;
    height: 200px;

    i {
      color: #b5b6b7;
      font-size: 30px;

      &.active, &:hover {
        color: ${darkColor};
      }
    }
  `;
  return <ul css={style}>
    {items.map((item, key) => <li key={key}>
      <NavLink to={item.link}>
        {({ isActive }) => <i className={
          isActive ? `pi pi-${item.icon} active` : `pi pi-${item.icon}`
        }></i>}
      </NavLink>
    </li>)}
  </ul>;
}

export default MenuBar;