/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import ProjectList from '../components/ProjectList';
import { certifications, educations, skills } from '../constants/data';
import List from '../components/List';
import ContactList from '../components/ContactList';
import { darkColor } from '../constants/color';
import { Divider } from 'primereact/divider';

function Essay() {
  return <p className='essay'>
    <span className='bold'> 불편한 세상 편하게 살자 </span>라는 모토 아래, 생활 속 불편함을 찾고 이를 해결하기 위한
    프로그램을 개발합니다. 또한 다양한 관점으로 문제에 접근하거나 문제 해결을 위해 스스럼없이 새로운
    기술을 배우는 등 더 나은 프로그램을 개발하도록 노력합니다.
  </p>;
}

function About() {
  const style = css`
    h1, h2 {
      color: black;
    }

    .container {
      display: flex;
      justify-content: space-between;

      & > div, .essay {
        width: 45%;
      }
    }

    .container-essay {
      align-items: center;
    }

    .bold {
      font-size: 18px;
      font-weight: bold;
      color: ${darkColor};
    }

    .container-row {
      display: flex;
      flex-direction: row;
      justify-content: space-between;

      & > div, .essay {
        width: 47%;
      }
    }

    .container-column {
      display: flex;
      flex-direction: column;
    }

    .essay {
      margin: 40px 0;
    }

  `;

  return <div css={style}>
    <h1>About Me</h1>
    <Divider />
    <div className='container-row'>
      <Essay />
      <ContactList />
    </div>
    <div className='container-row'>
      <List title='Education' data={educations} />
      <div className='container-column'>
        <List title='Certification' data={certifications} />
        <List title='Skill' data={skills} />
      </div>
    </div>
    <ProjectList />
  </div>
}

export default About;