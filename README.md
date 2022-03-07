![img](https://user-images.githubusercontent.com/68781598/124507888-bc4a7400-de09-11eb-9476-149ac4ac613d.PNG)

## ✈️ Project

> 유기견 해외이동봉사 대상견 매칭 서비스, TAKE US

<a href="https://takeus-front-mobile.vercel.app/">DEPLOY URL</a>

### Tech Stack

[![TypeScript Badge](https://img.shields.io/badge/Typescript-235A97?style=flat-square&logo=Typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React Badge](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white)](https://reactjs.org/)
[![Next.js Badge](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org/)
[![styled Badge](https://img.shields.io/badge/Styled-DB7093?style=flat-square&logo=styled-components&logoColor=white)](https://www.apollographql.com/)
[![Sass Badge](https://img.shields.io/badge/Sass-CC6699?style=flat-square&logo=Sass&logoColor=white)](https://sass-lang.com/)

<br/>

## Portfolio

1. Reducer를 활용한 컴포넌트 내부 상태 TOP-DOWN 설계 관련 코드
   - `utils/Component.reducer.ts`
   - `pages/dogs/index.tsx`
2. Context를 활용한 파편화된 모달 및 드롭다운 통합 관리 관련 코드
   - `context/ModalsContext.tsx`
   - `context/ModalsProvider.tsx`
   - `hooks/useModals.ts`
   - `components/SearchBarForm/index.tsx`

## Structure

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
