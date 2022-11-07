const contacts = [
  {
    title: 'Blog',
    link: 'https://talking-potato.me',
  },
  {
    title: 'Github',
    link: 'https://github.com/sieukim',
  },
  {
    title: 'Mail',
    link: 'watasieun@gmail.com',
  },
];

const educations = [
  {
    title: '숭실대학교',
    subTitle: '컴퓨터학부 학사 졸업예정',
    duration: '2018-03 ~ 2023-02',
    description: '데이터베이스, 알고리즘, 운영체제 등 CS 지식과 웹프로그래밍, 인공지능 등의 분야를 학습했습니다.',
  },
  {
    title: '42서울',
    subTitle: '이노베이션 아카데미',
    duration: '2020-09 ~ 2021-05',
    description: 'C언어 기초부터 시작하여 네트워크, 운영체제 등 기초 CS 지식을 학습했습니다. 또한 동료 학습과 코드 리뷰를 함께 수행하며, 타인의 코드를 읽고 생각을 나눔으로써 의사소통 능력을 길렀습니다. ',
  },
];

const certifications = [
  {
    title: '정보처리기사',
    subTitle: '산업인력공단',
    duration: '2022-06-17',
  }, {
    title: 'TOPCIT 수준 3',
    subTitle: '정보통신기획평가원',
    duration: '2022-06-20',
  },
];

const skills = [
  {
    title: 'JavaScript',
    subTitle: '\'웹 프로그래밍 설계 및 실습\' 강의를 수강하며 기초 문법을 학습하고, 웹 프로젝트를 수행하며 사용법을 익혔습니다.',
    duration: undefined,
  },
  {
    title: 'Python',
    subTitle: '프로젝트와 인공지능 공부, 알고리즘 문제 풀이 등에 활용하며 사용법을 익혔습니다.',
    duration: undefined,
  },
];

const projects_summary = [
  {
    title: 'Sketch To Wireframe',
    subTitle: '쉽고 빠르게 UI 스케치를 Wireframe으로 변환!',
    duration: '2022-04 ~ 2022-05 약 2개월',
    skills: ['Python', 'Django', 'TypeScript', 'React'],
    role: '개인 프로젝트',
    link: '/project/1',
  },
  {
    title: 'Programmers Auto Submit',
    subTitle: '로컬 환경에서 쉽고 편하게!',
    duration: '2022-03 약 1주일',
    skills: ['Python', 'Selenium'],
    role: '개인 프로젝트',
    link: '/project/2',
  },
  {
    title: 'Koding',
    subTitle: '모든 정보를 한 곳에서!',
    duration: '2022-01 ~ 2022-02 약 2개월',
    skills: ['JavaScript', 'React'],
    role: '백엔드 개발자 1명과 함께 수행했으며, 프론트엔드를 맡아 개발',
    link: '/project/3',
  },
];

const projects_detail = [
  {
    id: 1,
    title: 'Sketch To Wireframe',
    demo: <img src='/img/project1.gif' alt='project1' />,
    when: '2022-04 ~ 2022-05 약 2개월',
    who: '개인 프로젝트로 프론트엔드, 백엔드, 인공지능 개발을 수행',
    what: 'UI 스케치를 입력 받아 Wireframe으로 변환하는 프로젝트',
    why: <div>
      학부 프로젝트를 수행하며 Wireframe을 작성한 경험이 있습니다. 프로그램의 기반이 되어 중요한 작업이지만,
      관련 도구를 학습하고 작성하는 시간이 개발자에게 불필요하다고 생각했습니다. 이러한 시간을 줄여 개발에 투자하고자
      &nbsp;<b>누구나 쉽고 빠르게 UI 스케치를 Wireframe으로 변환하도록 돕는</b> 해당 프로젝트를 제안했습니다.
    </div>,
    how: <div>
      <b>Backend</b><br />
      <ul>
        <li>Python</li>
        <li>Django</li>
      </ul>
      <b>Frontend</b>
      <ul>
        <li>TypeScript</li>
        <li>React</li>
      </ul>
      <b>Model</b>
      <ul>
        <li>MMDetection을<br />활용한 전이 학습</li>
      </ul>
    </div>,
    then: <div>
      다양한 분야를 동시에 개발하며, 각 분야가 상호작용하는 방식과 전체적인 프로그램 구조 등에 대해 배울 수 있었습니다.
      <br /><br />
      인공지능을 처음 공부하며, 데이터셋의 중요성을 깨닫지 못하고 모델을 구축했습니다. 데이터셋에 대한 테스트 성능은
      좋았지만, 실세계 데이터에 대한 성능은 좋지 않았습니다. 직접 데이터를 수집하고, 어노테이션하며, 데이터셋에 결함이
      발생했습니다. 교수님과 함께 모델을 개선해보았지만, 해결하지 못했습니다. 학업과 병행하며 직접 모델을 구축하지 않은 것도
      아쉬운 점 중 하나입니다. 추후 여유가 있다면 객체 검출을 다시 한번 공부하고, 모델을 직접 구축하고, 데이터셋을 다시 생성하는
      등 성능을 개선해보고 싶습니다.
    </div>,
    github: 'https://github.com/sieukim/sketch-to-wireframe',
  },
  {
    id: 2,
    title: 'Programmers Auto Submit',
    demo: <img src='/img/project2.gif' alt='project2' />,
    when: '2022-03 약 1주일',
    who: '개인 프로젝트',
    what: '코딩 테스트 플랫폼 \'프로그래머스\'의 연습 문제를 로컬 환경에서 풀고 제출하여 결과를 받아보는 동적 크롤링 스크립트 ',
    why: <div>
      자동 완성과 디버깅 기능을 제공하지 않아 다수 학생이 로컬 환경에서 문제를 풀고 제출하는데,
      이때 발생하는 <b>추가적인 시간을 조금이나마 줄이고자</b> 해당 스크립트를 제안했습니다.
    </div>,
    how: <div>
      <ul>
        <li>Python</li>
        <li>Selenium</li>
      </ul>
    </div>,
    then: <div>
      로컬 환경 내 사용자 코드를 코드 에디터에 삽입하는 것에 가장 큰 어려움을 겪었습니다. 이를 해결하기 위해
      코드 에디터의 HTML 구조를 살폈고, 입력 코드가 두 방식으로 존재함을 알게 되었습니다. 첫 번째는 id가
      'code'인 textarea 태그 내에 전체 코드가 존재하는 방식이었습니다. 두 번째는 전체 코드를 토크나이징하고,
      토큰마다 span 태그로 감싸고, 토큰의 특성에 따라 'cm-variable' 등의 class를 지정한 방식이었습니다.
      각 방식에 대하여 DOM을 조작하여 입력 코드를 변경했지만, 제출 코드는 변경되지 않았습니다.
      다른 방법을 찾고자 HTML 구조를 계속 분석하여, 코드 에디터 구현에 CodeMirror 라이브러리가 사용됐음을
      알게 되었습니다. 그 결과, 라이브러리 함수를 통해 코드 에디터에 설정된 코드를 변경하여 문제를 해결할 수
      있었습니다. 이 과정을 통해 문제 해결 능력이 향상될 수 있었습니다.
    </div>,
    github: 'https://github.com/sieukim/programmers-auto-submit',
  },
  {
    id: 3,
    title: 'Koding',
    demo: <img src='/img/project3.gif' alt='project3' />,
    when: '2022-01 - 2022-02 약 2개월',
    who: '백엔드 개발자 1명과 함께 수행했으며, 프론트엔드를 맡아 개발',
    what: '개발자 커뮤니티 웹 프로젝트',
    why: <div>
      국내 개발자 커뮤니티 대부분이 특정 분야에 국한되어 각 분야의 정보가 흩어져있다는 점이 아쉬워,
      &nbsp;<b>누구나 쉽고 편하게 정보를 얻는 개발자 커뮤니티</b> 프로젝트를 만들고자 했습니다.
    </div>,
    how: <div>
      <ul>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    </div>,
    then: <div>
      다양한 정보를 한데 모아 확인할 수 있는 개발자 커뮤니티를 목표로 했습니다. 질의응답 게시판 뿐만 아니라
      블로그, 채용 정보, 스터디 모집 게시판을 기획하며 프로젝트 규모가 커졌습니다. 하지만 리액트를 처음
      활용하며 이해가 더뎌 개발 속도가 부진했습니다. 이러한 문제를 해결하기 위해 다시 한번 개념을 정리하고,
      타인에게 설명하며, 블로그 글을 작성하는 등의 노력을 했습니다. 그 결과, 개발 속도를 개선해 목표를
      달성할 수 있었습니다. 또한, 이 과정을 통해 개발 공부법을 터득할 수 있었으며 프로젝트를 통해
      백엔드와의 통신 방법에 대해 익힐 수 있었습니다.
    </div>,
    github: 'https://github.com/sieukim/koding',
  },
];

export { contacts, educations, certifications, skills, projects_summary, projects_detail };