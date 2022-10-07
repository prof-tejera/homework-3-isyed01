
import { useState } from "react";
import Panel from "components/Panel/Panel";
import Button from "components/Button/Button";
import "./RadioButtons.css";


const defaultState = [
  { id:"f1", name:"Apple", active:true, disabled:false },
  { id:"f2", name:"Banana", active:false, disabled:false },
  { id:"f3", name:"Cherry", active:false, disabled:false },
  { id:"f4", name:"Pear", active:false, disabled:false },
  { id:"f5", name:"Orange", active:false, disabled:true },
];



const RadioButtons = () => {
  // Initialize the state with the default data
  const [state,setState] = useState(defaultState)

  // Chnage the active state of the items within the state based on the id just selected
  const handleSelect = (e) => setState(
      state.map(item => ({ ...item, active:item.id===e.target.id}) ) );

  
  return (
    <Panel backgroundColor="blue">
      {
        // Loop through state and render a button for each item
        state.map(({id, name, disabled, active}, index) => 
            <Button 
            key={index} 
            id={id} 
              text={name}
              disabled={disabled}
              onClick={handleSelect}
              className={active?"active":""}
            /> 
          )
      }

    </Panel>
  );
};

export default RadioButtons;
