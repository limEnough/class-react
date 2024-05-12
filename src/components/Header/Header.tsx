// 이미지를 자바스크립트 변수로 불러와 사용한다.
import reactImg from '/src/assets/react-core-concepts.png'
import './Header.css';

const reactDescriptions = ['Fundametal', 'Crucial', 'Core'];

function genRandomInt(max: number) {
  return Math.floor(Math.random() * (max + 1))
}

export default function Header() {
  // MEMO: 이처럼 표현 결과는 다른 곳에 저장하고 JSX에서는 상수로 불러와 사용하는 것을 좋은 관례로 여긴다.
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      {/* 
        MEMO: 아래와 같이 경로를 정의하여 이미지를 불러올 경우, 
        1. 배포 과정에서 이미지가 이미지가 유실 될 가능성이 있다.
        2. 이미지 최적화를 사용할 수 없다.
      */}
      {/* <img src="src/assets/react.svg" alt="react logo"></img> */}
      <img src={reactImg} alt="react logo"></img>

      <h1>React Essentials</h1>

      <p>{description} React concepts you will need for almost any app you are going to build!</p>
    </header>
  )
}