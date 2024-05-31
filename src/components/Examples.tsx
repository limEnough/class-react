import { useState } from "react";
import { CORE_CONCEPTS_CONTENTS } from "../data";
import TabButton from "./TabButton";

export default function Examples() {
  const [selectedTopic, setSelectedTopic ] = useState('');

   let tabContent = <p>Please select a topic.</p>;

   if (selectedTopic) {
    tabContent = (<>
      <h3>{ CORE_CONCEPTS_CONTENTS[selectedTopic].title }</h3>
      <p>{ CORE_CONCEPTS_CONTENTS[selectedTopic].description }</p>
      <pre>
        <code>{ CORE_CONCEPTS_CONTENTS[selectedTopic].code }</code>
      </pre>
    </>);
   }

  function handleSelect(selectedButton: string) {
    setSelectedTopic(selectedButton);
    
    /**
     * NOTI: 아래 console.log에 찍히는 값이 변경된 현재 값이 아니라, 현재 선택 이전의 값인 이유
     * 상태 업데이트 함수(setSelectedTopic)를 부를 때, 리액트는 상태 업데이트의 스케줄을 조정하며 컴포넌트 함수를 재실행한다.
     * 즉, App컴포넌트 함수를 다시 실행하고 나서야 업데이트 된 값을 사용할 수 있는것. 다시말해 console.log에 찍힌 값은 업데이트 이전의 App에 있는 것이다.
     */
    // console.log('handleSelect', selectedTopic);
  }

  return (
    <section id="examples">
      <h2>Examples</h2>

      <menu>
        {/* 컴포넌트 텍스트 사이에 있는 내용은 컴포넌트에서 props.children 으로 접근 가능 */}
        {/* <TabButton >Components</TabButton> */}
        <TabButton isSelected={selectedTopic === 'components' } onSelect={() => handleSelect('components')} label="Components"></TabButton>
        <TabButton isSelected={selectedTopic === 'jsx' } onSelect={() => handleSelect('jsx')} label="JSX"></TabButton>
        <TabButton isSelected={selectedTopic === 'props' } onSelect={() => handleSelect('props')} label="Props"></TabButton>
        <TabButton isSelected={selectedTopic === 'state' } onSelect={() => handleSelect('state')} label="State"></TabButton>
      </menu>
        
      <div id="tab-content">{tabContent}</div>
    </section>
  )
}