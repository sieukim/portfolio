/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import 'primeicons/primeicons.css';


function Photo() {
  const style = css`
    width: 180px;
    margin: 0 auto 30px;

    img {
      max-width: 100%;
      min-width: 100%;
      background-color: white;
      border: 3px solid white;
      border-radius: 300px;
    }
  `;
  return <div css={style}>
    <img src={'img/profile.png'} alt='김시은' />
  </div>;
}

function Link() {
  const items = [
    {
      icon: 'github',
      link: 'https://github.com/sieukim',
    },
    {
      icon: 'file-edit',
      link: 'https://talking-potato.me',
    },
    {
      icon: 'send',
      link: 'mailto:watasieun@gmail.com',
    },
  ];
  const style = css`
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    padding-inline-start: 0;

    li {
      margin: 0 20px;

      i {
        color: white;
        font-size: 30px;
      }
    }
  `;
  return (<ul css={style}>
    {items.map((item, key) => <li key={key}>
      <a title={item.title} href={item.link}>
        <i className={`pi pi-${item.icon}`}></i>
      </a>
    </li>)}
  </ul>);
}

function Profile() {
  const style = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 30%;
    text-align: center;
    padding: 70px 30px 45px;

    .name {
      color: #fff;
      font-size: 45px;
      font-weight: 600;
      margin: 10px 0;
      width: 100%;
      min-height: 40px;
    }

    .job {
      font-size: 18px;
      font-weight: 400;
      color: #fff;
      margin: 3px 0;
    }
  `;
  return <div css={style}>
    <Photo />
    <h1 className='name'>김시은</h1>
    <h4 className='job'>Software Engineer</h4>
    <Link />
  </div>;
}

export default Profile;