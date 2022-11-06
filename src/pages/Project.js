/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider } from 'primereact/divider';
import { darkColor } from '../constants/color';

function Project({ data }) {
  const style = css`
    h1 {
      display: inline;
    }

    a {
      text-decoration: none;
    }

    .pi-github {
      color: ${darkColor};
      font-size: 25px;
      margin: 5px;
    }

    h2 {
      color: ${darkColor};
    }

    .container-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      img {
        width: 50%;
      }

      .p-divider {
        width: 0;
      }
    }

    .container-column-small {
      width: 23%;
    }

    .container-column-big {
      width: 45%;
    }

    .bold {
      font-weight: 600;
    }

  `;

  return <div css={style}>
    <h1>{data.title}</h1>
    <a href={data.github}><i className='pi pi-github'></i></a>
    <Divider />
    <div className='container-row'>
      {data.demo}
      <Divider layout='vertical' />
      <div className='container-column container-column-small'>
        <h2>언제?</h2>
        <p>{data.when}</p>
        <h2>누가?</h2>
        <p>{data.who}</p>
        <h2>무엇을?</h2>
        <p>{data.what}</p>
      </div>
      <Divider layout='vertical' />
      <div className='container-column container-column-small'>
        <h2>어떻게?</h2>
        {data.how}
        {data.id !== 1 && <>
          <div className='container-column'>
            <h2>왜?</h2>
            {data.why}
          </div>
        </>
        }
      </div>
    </div>
    <Divider />
    <div className='container-row'>
      {data.id === 1 && <>
        <div className='container-column container-column-big'>
          <h2>왜?</h2>
          {data.why}
        </div>
        <Divider layout='vertical' />
      </>
      }
      <div className={`container-column container-column-${data.id === 1 ? 'big' : undefined}`}>
        <h2>그래서?</h2>
        {data.then}
      </div>
    </div>
  </div>;
}

export default Project;