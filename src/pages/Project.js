/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Divider } from 'primereact/divider';

function Project({ data }) {
  const style = css``;

  return <div>
    <h1>{data.title}</h1>
    <Divider />
    <h2>배경</h2>
    <p>{data.background}</p>
    <h2>설명</h2>
    <p>{data.description}</p>
    <h2>후기</h2>
    <p>{data.review}</p>
  </div>;
}

export default Project;