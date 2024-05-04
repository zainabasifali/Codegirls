import React, { useState, useMemo } from "react";
import arr from '../data';

let Cal = () => {
    const [todo, setTodo] = useState(arr);

    const dataloop = (todo) => {
        return todo.map((e, i) => (
            <div key={i}>
                <h3>{e.title}</h3>
            </div>
        ));
    };

    const calculation = useMemo(() => dataloop(todo), [todo]);

    function addTodo() {
        setTodo((prevTodo) => [...prevTodo, { title: "New Todo" }]);
    }

    return (
        <div>
            <h2>My Todos</h2>
            {calculation}
            <button onClick={addTodo}>Add Todo</button>
        </div>
    );
}

export default Cal;
