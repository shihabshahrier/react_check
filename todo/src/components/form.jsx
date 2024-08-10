import { useState } from "react";
export default function Form({ onGoingTasks, setOnGoingTasks }) {
    const [newtask, setNewTask] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        if (newtask.trim() === "") return;
        setOnGoingTasks(onGoingTasks => [
            ...onGoingTasks,
            { id: crypto.randomUUID(), title: newtask, status: "onGoing" }
        ]);
        setNewTask("");
    }
    return (
        <form onSubmit={handleSubmit} className="form 1">
            <input type="text" value={newtask} onChange={e => setNewTask(e.target.value)} placeholder="Enter a task" />
            <button type="submit" >Add Task</button>
        </form>

    );
}