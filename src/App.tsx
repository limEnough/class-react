import { CORE_CONCEPTS } from './data.ts';
import './App.css'
import Header from './components/Header.jsx';
import CoreConcept from './components/CoreConcept.jsx';


function App() {
  return (
    <>
      <div>
        <Header />

        <main>
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
        </main>
      </div>
    </>
  )
}

export default App
