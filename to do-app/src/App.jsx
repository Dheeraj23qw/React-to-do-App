import Heading from "./components/appName";

import Todoitems from "./components/todoitems";
import TodoAdd from "./components/todoadd";
import "./app.css";
import { useState } from "react";
import WelcomeMessage from "./components/welcomemessage";
function App() {
 

  const [TodoItems, setTodoItems] = useState([]);

  
  const HandleNewItem = (itemName, itemDuedate) => {
    console.log("new item added:", itemName, "duedate:", itemDuedate);
    const NewTodoItems = [
      ...TodoItems,
      { name: itemName, duedate: itemDuedate },
    ];
    setTodoItems(NewTodoItems);
  };

  const handleDeleteItem = (todoItemName) => {
    const Newtodoitems = TodoItems.filter((x) => x.name !== todoItemName);
    setTodoItems(Newtodoitems);
  
  };
  return (
    <center className="todo-container">
      <Heading />
      <TodoAdd onNewitem={HandleNewItem} />
      {
        TodoItems.length === 0 && <WelcomeMessage/>
      }
    
      <Todoitems
        Todoitems={TodoItems}
        onDeleteclick={handleDeleteItem}
      ></Todoitems>
    </center>
  );
}

export default App;
