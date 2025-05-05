import { useState } from 'react';
import {CORE_CONCEPTS} from './data.js';
import Header from '../components/Header.jsx'
import CoreConcept from '../components/CoreConcept.jsx'; 
import TabButton from '../components/TabButtion.jsx'
import { EXAMPLES } from './data.js';

function App() {
  const [selectTopic, setSelectedTopic] =  useState();

  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton)
    // console.log(selectTopic);
  }

  let tabContent = <p>Please select the topic.</p>

  if (selectTopic) {
    tabContent = (
      <div id = "tab-content">
                <h3>{EXAMPLES[selectTopic].title} </h3>
                <p>{EXAMPLES[selectTopic].description} </p>
                <pre>
                  <code>
                  {EXAMPLES[selectTopic].code} 
                  </code>
                </pre>
              </div>
    )
  }

  return (
    <div>
      <Header/>
      <main>
        <section id = "core-concepts">
          <h2>Core Concept</h2>
          <ul>
            {CORE_CONCEPTS.map((conceptItem)=> <CoreConcept {...conceptItem}/>)}
          </ul>
        </section>
        <section id ="examples">
          <h2>
            examples
          </h2>
          <menu>
            <TabButton isSelected={selectTopic === 'components'} onSelect={() => handleSelect('components')} >Components</TabButton>
            <TabButton isSelected={selectTopic === 'jsx'} onSelect={() => handleSelect('jsx')} >JSX</TabButton>
            <TabButton isSelected={selectTopic === 'props'} onSelect={() => handleSelect('props')} >PROPS</TabButton>
            <TabButton isSelected={selectTopic === 'state'} onSelect={() => handleSelect('state')} >State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
