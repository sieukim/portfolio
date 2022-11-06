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
    role: '백엔드 개발자 1명과 함께 수행하며, 프론트엔드를 맡아 개발',
    link: '/project/3',
  },
];

const projects_detail = [
  {
    title: 'Sketch To Wireframe',
    subTitle: '쉽고 빠르게 UI 스케치를 Wireframe으로 변환!',
    duration: '2022-04 ~ 2022-05 약 2개월',
    skills: ['Python', 'Django', 'TypeScript', 'React'],
    role: '개인 프로젝트',
    background: 'loooo',
    description: 'dkqjwlkd',
    review: 'askdjlasda',
  },
  {
    title: 'Programmers Auto Submit',
    subTitle: '로컬 환경에서 쉽고 편하게!',
    duration: '2022-03 약 1주일',
    skills: ['Python', 'Selenium'],
    role: '개인 프로젝트',
    background: 'loooo',
    description: 'dkqjwlkd',
    review: 'askdjlasda',
  },
  {
    title: 'Koding',
    subTitle: '모든 정보를 한 곳에서!',
    duration: '2022-01 ~ 2022-02 약 2개월',
    skills: ['JavaScript', 'React'],
    role: '백엔드 개발자 1명과 함께 진행하며, 프론트엔드를 맡아 개발',
    background: '누구나 쉽고 편하게 정보를 얻는 개발자 커뮤니티를 만드는 것을 목표로 개발했습니다. ',
    description: 'dkqjwlkd',
    review: '',
  },
];

export { contacts, educations, certifications, skills, projects_summary, projects_detail };