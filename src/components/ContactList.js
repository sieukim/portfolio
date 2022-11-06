/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { darkColor } from '../constants/color';
import { contacts } from '../constants/data';

function ContactList() {
  const style = css`
    ul {
      list-style: none;
      padding-left: 10px;
    }

    li {
      margin-bottom: 5px;
    }

    .list-title {
      font-size: 17px;
      font-weight: bold;
      color: ${darkColor};
    }

    .list-subtitle {
      font-size: 16px;
    }
  `;

  return <div className='list' css={style}>
    <h2>Contact</h2>
    <ul>
      {contacts.map((item, key) => <li key={key}>
        <span className='list-title'>{item.title}</span>
        &nbsp;&nbsp;
        <span className='list-subtitle'>{item.link}</span>
      </li>)}
    </ul>
  </div>;
}

export default ContactList;