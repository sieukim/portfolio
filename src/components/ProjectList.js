/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { Timeline } from 'primereact/timeline';
import { darkColor, grayColor } from '../constants/color';
import { Card } from 'primereact/card';
import { projects_summary } from '../constants/data';
import { Link } from 'react-router-dom';
import { Divider } from 'primereact/divider';

function ProjectList() {
  const style = css`
    margin-top: 50px;

    .p-timeline {

      margin-left: 1vw;
    }

    .p-timeline-event-opposite {
      display: none;
    }

    .p-timeline-event-marker {
      border: 2px solid ${darkColor};
    }

    .p-card {
      width: 20vw;
      min-width: 448px;
      min-height: 10vw;
      margin-bottom: 2vw;
      overflow: auto;
      box-shadow: none;
      border: 1px solid ${grayColor};
    }

    .p-card-footer {
      text-align: right;

      a {
        color: ${darkColor};
        text-decoration: none;
      }
    }
  `;
  const events = projects_summary.map(project => ({
    content: <Card title={project.title} subTitle={project.subTitle}
                   footer={<Link to={project.link}>더 보기</Link>}>
      <div>📆 {project.duration}</div>
      <div>🛠 {project.skills.join(' ')}</div>
      <div>👥 {project.role}</div>
    </Card>,
  }));
  return <div css={style}>
    <h1>Project</h1>
    <Divider />
    <Timeline value={events} content={(item) => item.content} />;
  </div>;
}

export default ProjectList;
