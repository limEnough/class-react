import './App.css'
import Header from './components/Header/Header.tsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.tsx';
import Examples from './components/Examples.tsx';
        
function App() {
  return (
    <>
      <Header />
      
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </>
  )
}

export default App
