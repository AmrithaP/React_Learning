import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {

  const [alertVisible, setAlertVisibility] = useState(false);
  // Button component
  return(
    <div>
      {alertVisible && <Alert onClose={() => setAlertVisibility(false)}>My alert</Alert>}
      <Button color="danger" onclick={()=> setAlertVisibility(true)} >My button</Button>
    </div>
  );
  
  
  //Alert component
  /*return(
    <div className="alert alert-primary">
      <Alert>
      Hello <span>world</span>
        </Alert>
    </div>
  )*/
  
  // component App - ListGroup
  /*let items = ["New York", "San Francisco", "Tokyo", "London", "Paris"];

  const handleSelectItem = (item:String) =>{
    console.log(item);
  }

  return (
    <div>
      <ListGroup
        items={items}
        heading="Cities"
        onselectItem={handleSelectItem}
      ></ListGroup>
    </div>
  );*/



}

export default App; // can be used somewher else hence exported
