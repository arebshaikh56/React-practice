import React from "react";
import Counter from "./components/Count"; // Assuming you have a Counter component
import ButtonClick from "./components/ButtonClick"; // Use an uppercase letter for component names
import InputField from "./components/InputField";
import ToggleButton from "./ToggleButton";
import NumberList from "./components/NumberList";
import TodoList from "./components/TodoList";
import ContactForm from "./components/ContactForm";
import Timer from "./components/Timer";

function App() {
  return (
    <div>
      <Counter />
      <ButtonClick />
      <InputField/>
      <ToggleButton/>
      <NumberList/>
      <TodoList/>
      <ContactForm/>
      <Timer/>
    </div>
  );
}

export default App;
