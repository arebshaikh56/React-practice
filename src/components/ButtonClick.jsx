import React from "react";

function ButtonClick() {
  const handleClick = () => {
    alert('Button was clicked');
  };

  return (  
    <div>
        <h1>Handling Event</h1>
        <button onClick={handleClick}>CLICK ME</button>
    </div>
  );
}

export default ButtonClick;
