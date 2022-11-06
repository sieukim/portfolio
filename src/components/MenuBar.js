/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { darkColor } from '../constants/color';
import { Tooltip } from 'primereact/tooltip';

function MenuBar() {
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
    height: 300px;

    i {
      color: #b5b6b7;
      font-size: 30px;

      &.active, &:hover {
        color: ${darkColor};
      }
    }
    
  `;
  const items = [
    {
      icon: 'home',
      name: 'Home',
      link: '/',
    },
    {
      icon: 'cloud',
      name: 'Sketch To Wireframe',
      link: '/project/1',
    },
    {
      icon: 'bolt',
      name: 'Programmers Auto Submit',
      link: '/project/2',
    },
    {
      icon: 'moon',
      name: 'Koding',
      link: '/project/3',
    },
  ];
  return <ul css={style}>
    {items.map((item, key) => <li key={key}>
      <Tooltip target={`.pi-${item.icon}`}>{item.name}</Tooltip>
      <NavLink to={item.link}>
        {({ isActive }) => <i className={
          isActive ? `pi pi-${item.icon} active` : `pi pi-${item.icon}`
        }></i>}
      </NavLink>
    </li>)}
  </ul>;
}

export default MenuBar;