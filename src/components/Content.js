/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Project from '../pages/Project';
import Home from '../pages/Home';

function Content() {
  const style = css`
    width: 70%;
    padding: 60px;
    background-color: white;
    border-radius: 32px;
  `;
  return <div css={style}>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/project' element={<Project />} />
    </Routes>
  </div>;
}

export default Content;