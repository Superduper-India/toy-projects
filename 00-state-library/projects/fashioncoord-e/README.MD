# FashionCoord-e
> [**팀 노션**](https://aged-zoo-eb6.notion.site/FashionCoord-e-c4df388705c6402380013d0f7b7f8049) <br>
> [**유튜브 링크**](https://youtu.be/lj1aNO16jEk) - 서버가 닫힌 관계로 부득이하게 링크로 참고 부탁드립니다.

리덕스를 사용하여 CRUD기능의 패션 공유 커뮤니티를 구현했습니다. 전체 기능을 맡아서 구현했고, 백엔드와의 협업을 진행했습니다. <br>
리액트 컴포넌트는 UI를 그려내는데 포인트를 두고, 비즈니스 로직은 가능한 리덕스에서 총괄적으로 처리하려고 했습니다. <br>
예를들어 api를 통해 데이터를 받아와서 가공하는 것은 Redux의 미들웨어를 통해 처리했습니다. <br>

## 💾 프로젝트 구조
```
📦 src
 ┣ 📂 assets // 이미지, 폰트 등 자원
 ┣ 📂 components // 재사용성을 고려한 모듈화 컴포넌트
 ┣ 📂 pages // 모듈 컴포넌트를 조합한 화면 UI를 담당하는 컴포넌트
 ┣ 📂 styles // 스타일 컴포넌트
 ┣ 📂 utils // 재사용이 가능한 자바스크립트 함수모음
 ┣ 📜 api.js // 서버데이터를 받아와서 처리해주는 비동기 함수모음
 ┣ 📜 App.jsx // 페이지별 라우팅 설정
 ┣ 📜 index.jsx // 모듈 임포트 및 앱 최상단에 설정
 ┣ 📜 slice.js
 ┣ 📜 storage.js
 ┣ 📜 store.js
 ┗ 📜 thunk.js
```

## 🛠 기술 스택 및 언어
* React, Redux-toolkit
* React-router-dom
* Axios, AWS S3
* Eslint
* Styled-components

## 📺 미리보기
<img width="1429" alt="스크린샷 2023-01-23 오후 4 04 15" src="https://user-images.githubusercontent.com/89244209/213982838-b449b4c4-050c-45f8-9ecd-d4a0d36887da.png">

## ⭐️ 포인트
### 공통 컴포넌트
컴포넌트 설계를 통해 버튼, 인풋, 리스트, 네비게이션바 등 작은 컴포넌트 단위로 쪼개어 공통되는 부분을 찾아나갔습니다. 때문에 처음부터 재사용을 고려한 컴포넌트 설계로 더 빠른 속도로 프로젝트를 진행할 수 있었습니다.
### 캐러셀
라이브러리 사용이 코드의 복잡성을 더 올리기 때문에 복잡한 css효과는 필요 없다고 생각하여 직접 구현했고, 최소한의 코드로 작성했습니다.
