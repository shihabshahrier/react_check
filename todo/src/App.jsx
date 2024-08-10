import "./style.css";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");
  const [waitinglist, setwaitinglist] = useState([]);
  const [editingcheck, seteditingcheck] = useState(false);
  const [editingwhichone, seteditingwhichone] = useState(null);

  const addtowaitlist = (event) => {
    event.preventDefault();

    const makingobj = {
      id: Date.now(),
      val: value
    };

    setwaitinglist([...waitinglist, makingobj]);
    setValue("");
    seteditingcheck(false);
    seteditingwhichone(null);
  };

  const editfunc = (id) => {
    const editing = waitinglist.find(item => item.id === id);
    seteditingcheck(true);
    seteditingwhichone(editing);
    setValue(editing.val);

  };

  const editthevalue = (id) => {
    event.preventDefault();

    editingwhichone.val = value;
    setValue("");

  };

  const deleteval = (id) => {
    const newlist = waitinglist.filter(item => item.id !== id);
    console.log(newlist);
    setwaitinglist(newlist);

  };


  return (
    <div className="title">
      <h1>Todo App</h1>
      {/* <TodoList /> */}
      <div className="container">
        <form>
        <input value={value} type="text" name = "textSection" onChange={(event) => setValue(event.target.value)} />
        <button onClick={(event) => editingcheck === true? editthevalue(event): addtowaitlist(event)}> {editingcheck === true? "Update value":"Add value"} </button>
        </form>
        <ul>
          {waitinglist.map(item => (
            <li>
              <span>
              {item.val}
              </span>
              <button onClick={() => editfunc(item.id)}> Edit </button>
              <button onClick={() => deleteval(item.id)}> Delete </button>

            </li>
          ))}
          
        </ul>
        </div>
    </div>
  );
}
