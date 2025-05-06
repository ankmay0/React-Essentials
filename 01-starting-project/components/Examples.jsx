import { useState } from "react";
import { EXAMPLES } from "../src/data.js";
import TabButton from "./TabButtion.jsx";
import Section from "./Section.jsx";
import Tabs from "./Tabs.jsx";

export default function Examples () {
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

    return(
        <Section title = "Examples" id ="examples">
          <Tabs 
          buttons={
                          <>
                            <TabButton isSelected={selectTopic === 'components'} onClick={() => handleSelect('components')} >Components</TabButton>
                            <TabButton isSelected={selectTopic === 'jsx'} onClick={() => handleSelect('jsx')} >JSX</TabButton>
                            <TabButton isSelected={selectTopic === 'props'} onClick={() => handleSelect('props')} >PROPS</TabButton>
                            <TabButton isSelected={selectTopic === 'state'} onClick={() => handleSelect('state')} >State</TabButton>
                          </>}>
            {tabContent}
            
          </Tabs>

          
        </Section>
    )
}