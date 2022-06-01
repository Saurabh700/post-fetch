import React, { useEffect, useState } from "react";

// agar main useState ka use karunga tab vo dom ko rerender karega jiske karan fetch infinite loop main chalajayega--> isilye mko useEffect ka use karna padega taki main fetch ko independent bana saku by passing [] to it.. and then fetch will only execute once when component is mounted

const Todos = () => {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState([]);

  const saveInfo = () => {
    // call api to save this info to backend
    fetch("http://localhost:7437/todos", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({
        value: newTodo,
        isCompleted: false,
      }),
    })
      .then((res) => res.json())
      .then((d) => {
        setTodos([...todos, d]);
        setNewTodo("");
      });
  };

  useEffect(() => {
    fetch("http://localhost:7437/todos")
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setTodos(d);
      });
  }, []);
  return (
    <div>
      Todos
      <div>
        <div>
          <input
            value={newTodo}
            onChange={({ target }) => setNewTodo(target.value)}
          />
          <button onClick={saveInfo}>add input value to backend</button>
        </div>
        {todos.map((todo) => (
          <div key={todo.id}>{todo.value}</div>
        ))}
      </div>
    </div>
  );
};
// read about patch and delete API--> this is used to delete backend data
export default Todos;
