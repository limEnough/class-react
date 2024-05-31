import { CORE_CONCEPTS } from "../../data";
import CoreConcept from './CoreConcept'

export default function CoreConcepts() {
  return (
    <section id="core-concepts">
      <h2>Core Concepts</h2> 

      <ul>
        {/* data의 key와 props의 key가 동일하다면 short-cut을 사용할 수 있다. */}
        {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/> */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]}/> */}
        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
      </ul>
    </section>
  )
}