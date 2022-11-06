/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import About from '../pages/About';
import Project from '../pages/Project';
import { projects_detail } from '../constants/data';

function Content() {
  const style = css`
    width: 70%;
    padding: 60px;
    background-color: white;
    border-radius: 32px;
    overflow: auto;
  `;
  return <div css={style}>
    <Routes>
      <Route path='/' element={<About />} />
      <Route path='/project/1' element={<Project data={projects_detail[0]} />} />
      <Route path='/project/2' element={<Project data={projects_detail[1]} />} />
      <Route path='/project/3' element={<Project data={projects_detail[2]} />} />
    </Routes>
  </div>
}

export default Content;