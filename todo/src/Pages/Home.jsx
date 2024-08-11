import { useState, useEffect } from "react";
import Form from "../components/form";
import Items from "../components/Items";

export default function Home() {
    const [onGoingTasks, setOnGoingTasks] = useState([]);
    const [completedTasks, setCompletedTasks] = useState([]);

    useEffect(() => {
        const storedOnGoingTasks = JSON.parse(localStorage.getItem("onGoingTasks"));
        const storedCompletedTasks = JSON.parse(localStorage.getItem("completedTasks"));
        console.log('Loaded onGoingTasks:', storedOnGoingTasks);
        console.log('Loaded completedTasks:', storedCompletedTasks);
        if (storedOnGoingTasks) setOnGoingTasks(storedOnGoingTasks);
        if (storedCompletedTasks) setCompletedTasks(storedCompletedTasks);
    }, []);

    useEffect(() => {
        localStorage.setItem("onGoingTasks", JSON.stringify(onGoingTasks));
    }, [onGoingTasks]);

    useEffect(() => {
        localStorage.setItem("completedTasks", JSON.stringify(completedTasks));
    }, [completedTasks]);


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
