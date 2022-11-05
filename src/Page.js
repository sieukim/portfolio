/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Profile from './components/Profile';
import Content from './components/Content';
import { darkColor } from './constants/color';

function Page() {
  const style = css`
    display: flex;
    width: 100%;
    max-width: 1280px;
    min-height: 80vh;
    margin: 10vh 5vh;
    padding: 0;
    background-color: ${darkColor};
    border-radius: 32px;
    box-shadow: 0 0 100px -5px rgba(0, 0, 0, 0.25);
  `;

  return (
    <div css={style}>
      <Profile />
      <Content />
    </div>
  );
}

export default Page;