![img](https://user-images.githubusercontent.com/68781598/124507888-bc4a7400-de09-11eb-9476-149ac4ac613d.PNG)

## ✈️ Project

> 유기견 해외이동봉사 대상견 매칭 서비스, TAKE US

<a href="">DEPLOY URL</a>

### Tech Stack

<img alt="Python" src ="https://img.shields.io/badge/Typescript-235A97.svg?&style=for-the-badge&logo=TypeScript&logoColor=white"/>
<img alt="Nextjs" src ="https://img.shields.io/badge/nextjs-000000.svg?&style=for-the-badge&logo=Nextjs&logoColor=white"/>
<img alt="React" src ="https://img.shields.io/badge/React-61DAFB.svg?&style=for-the-badge&logo=React&logoColor=white"/>
<img alt="styled" src ="https://img.shields.io/badge/styled-DB7093.svg?&style=for-the-badge&logo=styled&logoColor=white"/>
<img alt="styled" src ="https://img.shields.io/badge/yarn-2C8EBB.svg?&style=for-the-badge&logo=yarn&logoColor=white"/>

<br/>

### Portfolio

1. Reducer를 활용한 컴포넌트 내부 상태 TOP-DOWN 설계
2. Context를 활용한 파편화된 모달 및 드롭다운 통합 관리

### Structure

```

├── README.md
├── components
│   ├── Common                      # 2번 이상 사용되는 컴포넌트
│   ├── DogCard
│   ├── DogCardContainer
│   ├── DogDetail
│   ├── Dropdown
│   ├── Header
│   ├── HeaderWithSearch
│   ├── MainPageInform
│   ├── Modals                      # 페이지에 종속적이지 않은 컴포넌트 관리
│   ├── SearchBar
│   ├── SearchBarForm
│   ├── SideBar
│   └── index.ts
├── context
│   ├── DepartureContext.tsx
│   ├── DepartureProvider.tsx
│   ├── ModalsContext.tsx
│   └── ModalsProvider.tsx
├── hooks                           # CustomHooks
│   ├── useDeparture.ts
│   └── useModals.ts
├── pages
├── types
├── utils
│   └── Component.reducer.ts        # 컴포넌트 상태 관리를 위한 Reducer 파일
├── service                         # api 관련 함수
│   ├── dogs.ts
│   ├── index.ts
│   └── utils.ts
├── styles
├── assets
├── public
├── next-env.d.ts
├── next.config.js                  # next.js config
├── package.json
├── tsconfig.json
├── coverage
└── yarn.lock

```
