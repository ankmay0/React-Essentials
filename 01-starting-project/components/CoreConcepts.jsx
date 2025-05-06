import CoreConcept from "./CoreConcept.jsx";
import { CORE_CONCEPTS } from "../src/data.js";

export default function CoreConcepts(){
    return (
    <section id = "core-concepts">
        <h2>Core Concept</h2>
        <ul>
          {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept {...conceptItem}/>)}
        </ul>
      </section>
    )
}