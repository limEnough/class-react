import { CORE_CONCEPTS } from "../../data";
import CoreConcept from './CoreConcept'
import Section from "../Section";

export default function CoreConcepts() {
  return (
    <Section  title="Core Concepts" id="core-concepts">
      <ul>
        {/* data의 key와 props의 key가 동일하다면 short-cut을 사용할 수 있다. */}
        {/* <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image}/> */}
        {/* <CoreConcept {...CORE_CONCEPTS[0]}/> */}
        {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem}/>)}
      </ul>
    </Section>
  )
}