import React from 'react';

function ChildComponent(props) {
  return (
    <p>{props.message}</p>
  );
}

function ParentComponent() {

  return (
    <div> 
      <ChildComponent message="I am sending you the message from parent component, it's an hi!" />  
    </div>
  );
}

export default ParentComponent;


