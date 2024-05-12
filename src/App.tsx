import { CORE_CONCEPTS } from './data.ts';
import './App.css'
import Header from './components/Header/Header.tsx';
import CoreConcept from './components/CoreConcept/CoreConcept.tsx';
import TabButton from './components/TabButton.tsx';


function App() {
  function handleSelect(selectedButton: string) {
    console.log(selectedButton);
  }

  return (
    <>
      <div>
        <Header />

        <main>
          {/* core concept */}
          <section id="core-concepts">
            <h2>Core Concepts</h2> 

            <ul>
              {/* data의 key와 props의 key가 동일하다면 short-cut을 사용할 수 있다. */}
              {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/> */}
              <CoreConcept {...CORE_CONCEPTS[0]}/>
              <CoreConcept {...CORE_CONCEPTS[1]}/>
              <CoreConcept {...CORE_CONCEPTS[2]}/>
              <CoreConcept {...CORE_CONCEPTS[3]}/>
            </ul>
          </section>

          {/* menu tab */}
          <section id="examples">
            <h2>Examples</h2>

            <menu>
              {/* 컴포넌트 텍스트 사이에 있는 내용은 컴포넌트에서 props.children 으로 접근 가능 */}
              {/* <TabButton >Components</TabButton> */}
              <TabButton onSelect={() => handleSelect('Component')} label="Component"></TabButton>
              <TabButton onSelect={() => handleSelect('Jsx')} label="Jsx"></TabButton>
              <TabButton onSelect={() => handleSelect('Props')} label="Props"></TabButton>
              <TabButton onSelect={() => handleSelect('State')} label="State"></TabButton>
            </menu>
          </section>
        </main>
      </div>
    </>
  )
}

export default App
