import { useState, useEffect } from "react";
import Form from "../components/form";
import Items from "../components/Items";

export default function Home() {
    const [onGoingTasks, setOnGoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    return (
        <>
            <Form onGoingTasks={onGoingTasks} setOnGoingTasks={setOnGoingTasks} />
            <div className="Container">
                <Items
                    className="OnGoing"
                    tasks={onGoingTasks}
                    setTasks={setOnGoingTasks}
                    completedTasks={completedTasks}
                    setCompletedTasks={setCompletedTasks}
                />
                <Items
                    className="Completed"
                    tasks={onGoingTasks}
                    setTasks={setOnGoingTasks}
                    completedTasks={completedTasks}
                    setCompletedTasks={setCompletedTasks}
                />
            </div>
        </>
    );
}
