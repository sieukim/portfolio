/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider } from 'primereact/divider';

function List({ title, data }) {
  const style = css`
    .list-title {
      font-size: 16px;
      font-weight: bold;
    }

    .list-subtitle {
      font-weight: lighter;
    }
  `;

  return <div className='list' css={style}>
    <h2>{title}</h2>
    <Divider />
    <ul>
      {data.map((item, key) => <li key={key}>
        <div className='list-title'>{item.title}</div>
        <div className='list-subtitle'>{[item.subTitle, item.duration].join(' ')}</div>
        <p className='list-description'>{item.description}</p>
      </li>)}
    </ul>
  </div>;
}

export default List;