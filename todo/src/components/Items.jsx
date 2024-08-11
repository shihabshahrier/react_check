import React from 'react';
import { FaTrash, FaCheck, FaUndo, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


export default function Items({
    className,
    tasks = [],
    setTasks,
    completedTasks = [],
    setCompletedTasks,
}) {
    const navigate = useNavigate();
    const isOnGoing = className === "OnGoing";
    const itemsToDisplay = isOnGoing ? tasks : completedTasks;
    const displayTitle = isOnGoing ? "On Going Tasks" : "Completed Tasks";

    const handleDelete = (id) => {
        if (isOnGoing) {
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
        } else {
            setCompletedTasks((prevCompleted) => prevCompleted.filter(task => task.id !== id));
        }
    };

    const handleDone = (id) => {
        if (isOnGoing) {
            const taskToMove = tasks.find(task => task.id === id);
            setTasks((prevTasks) => prevTasks.filter(task => task.id !== id));
            setCompletedTasks((prevCompleted) => [...prevCompleted, taskToMove]);

        } else {
            const taskToMove = completedTasks.find(task => task.id === id);
            setCompletedTasks((prevCompleted) => prevCompleted.filter(task => task.id !== id));
            setTasks((prevTasks) => [...prevTasks, taskToMove]);
        }
    };

    const handleEdit = (id) => {
        navigate(`/update-task/${id}`);
    }

    return (
        <div className={`box ${className}`}>
            <h3>{displayTitle}</h3>
            {itemsToDisplay.length > 0 ? (
                <ul>
                    {itemsToDisplay.map((item) => (
                        <li key={item.id} className="list-item">
                            {item.title}
                            {isOnGoing ? (
                                <FaCheck
                                    className="icon done-icon"
                                    onClick={() => handleDone(item.id)}
                                    title="Done"
                                />) :
                                (
                                    <FaUndo
                                        className="icon done-icon"
                                        onClick={() => handleDone(item.id)}
                                        title="Undo"
                                    />
                                )}

                            <FaEdit
                                className="icon edit-icon"
                                onClick={() => handleEdit(item.id)}
                                title="Edit"
                            />

                            <FaTrash
                                className="icon delete-icon"
                                onClick={() => handleDelete(item.id)}
                                title="Delete"
                            />
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No tasks available</p>
            )}
        </div>
    );
}
