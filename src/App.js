/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import Page from './Page';
import MenuBar from './components/MenuBar';

function App() {
  const style = css`
    display: flex;
    justify-content: center;
    min-height: 100%;
    padding: 0 100px;
  `;
  return (
    <div css={style}>
      <div style={{ width: '90px' }} />
      <Page />
      <MenuBar />
    </div>
  );
}

export default App;
