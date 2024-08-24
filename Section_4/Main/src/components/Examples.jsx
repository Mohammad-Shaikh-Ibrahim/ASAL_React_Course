import { useState } from "react";
import { EXAMPLES } from "../data";
import TabButton from "./TabButton";
import Tabs from "./Tabs";
import Section from "../Sections/Section";
export default function Examples(){
    const [selectedTopic,setSelectedTopic] =useState();

  function handelSelect(selectedButton){
    //selectedButton => Components,JSX,Props,State
    // tabContent=selectedButton
    // console.log(tabContent);

    setSelectedTopic(selectedButton);
  }

  let tabContent=<p>Please Select a Topic</p>;
  
  if(selectedTopic){
    tabContent=(<div id="tab-content">
      <h3>{EXAMPLES[selectedTopic].title}</h3>
      <p>{EXAMPLES[selectedTopic].description}</p>
      <pre>
        <code>
        {EXAMPLES[selectedTopic].code}
        </code>
      </pre>
     </div>);
  }

  return(
<Section title="Examples" id='examples'>
         <Tabs 
         ButtonsContainer="menu"
         buttons={<>
         <TabButton isSelected={selectedTopic ==='components'} label='Components' onClick={ () => handelSelect('components')}/>
            <TabButton isSelected={selectedTopic ==='jsx'} label='JSX' onClick={() => handelSelect('jsx')}/>
            <TabButton isSelected={selectedTopic ==='props'} label='Props' onClick={() => handelSelect('props')}/>
            <TabButton isSelected={selectedTopic ==='state'} label='State' onClick={() => handelSelect('state')}/> 
          
         </>}
         >{tabContent}</Tabs> 
        </Section>
  );
}