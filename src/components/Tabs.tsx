import { ReactElement, ReactNode } from "react"

interface TabsProps {
  children: ReactNode;
  buttons: ReactElement;
  // TODO: 올바른 타입 지정 필요
  ButtonsContainer?: any;
}

export default function Tabs({children, buttons, ButtonsContainer = 'menu'}: TabsProps) {
  // MEMO: 아래 과정을 skip 하려면 받을 때 부터 속성의 첫 문자를 대문자로 시작해 커스텀 컴포넌트로 식별하도록 한다.
  // buttonsContainer 라는 내장 요소를 찾는게 아닌, 커스텀 컴포넌트로 식별하게 하기위해 위에서 상수화 한다.
  // const ButtonsContainer = buttonsContainer;
  
  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  )
}