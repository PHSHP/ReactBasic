 <h1>리액트</h1>
     -> 모든 componet를 id가 root인 div에 다 넣음

- react와 reactDOM의 차이!

* react = UI라이브러리, reactDOM = 리액트를 웹사이트에 출력을 도와주는 모델

- 리액트의 주요 특징 중 하나는 Virtual DOM을 사용하는 것이다.

- DOM이란? (Document Object Model)
  객체로 문서 구조를 표현하는 방법으로 XML이나 HTML로 작성한다. 웹 브라우저는 DOM을 활용하여 자바스크립트와 css를 적용한다.

- React는 Virtual DOM방식을 사용하여 DOM 업데이트를 추상화함으로써 DOM 처리 횟수를 최소화하고 효율적으로 진행한다.

- 동작방식

1. 데이터를 업데이트하면 전체 UI를 Virtual DOM에 리렌더링 한다.
2. 이전 Virtual dom에 있던 내용과 비교
3. 바뀐 부분만 실제 DOM에 적용

- 리액트는 단방향(Unidirectional) 데이터 플로우를 가지고 있다.
- 데이터는 항상 일정한 장소에 위치해있고, 그 장소에서만 변경 가능!
- UI가 바뀌지 않음.
- 데이터 -> 데이터 변경 -> UI변경
- reactDOM은 1개의 컴포넌트를 출력(render)하고, Component는 항상 render , return 해줘야 한다.

# 주요 Tip!!

- 함수에 언더스코어(\_)를 붙여서 만듬

* -> 이유는, 리액트는 자체 기능이 많기 때문에 리액트 자체기능과 구분하기 위해서

- 주석 : {/_ … _/} 사이에 넣거나, 태그 사이에 넣을 수 있다.

* 모든 Component는 render()함수를 가지고 있다.
* // Component에서 사용하는 유일한 function

* react application은 하나의 component만 rendering 한다.

# Props

- -> 부모 컴포넌트가 자식 컴포넌트에게 주는 값

- defaultProps값 설정으로 초기값 설정 가능!
- // https://velopert.com/3629

- propType 라이브러리 사용해서 입력값 검증한다.

- 함수형 컴포넌트 : props만 받아와서 보여주기만 하는 함수형 컴포넌트

# State

- state는 리액트 컴포넌트 안에 있는 상태

- state가 바뀔 때 마다 render가 발생한다.

- state를 직접 명시에서 바꾸면 안된다.
- state처음에 명시해주고, state를 바꿀떄는 setState를 설정한다.
- (setState는 DidMount안에 넣어줌)

- State 변경 방법
- ex1) this.setState(current => ({ count : current.count + 1})) // 이런 방식이 좋음

- ex2) this.setState(this.state.count + 1)

# JSX

- jsx란 리액트로 html쓰는 방법!

* jsx의 경우 명령을 실행시키려면 괄호{} 를 꼭 쳐야한다.

* JSX내부에서 조건부 렌더링을 할 때는 보통 삼항 연산자를 이용하거나, AND연산자를 이용한다.

# LifeCycle
