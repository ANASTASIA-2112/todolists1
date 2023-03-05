import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";


export type FilterValuesType = "All" | "Active" | "Completed"

function App() {

    const todoListTitle: string = "What to learn"


    const [tasks, setTasks] = useState<TaskType []>([
            {id: 1, title: "HTML & CSS", isDone: true},
            {id: 2, title: "CSS & SCSS", isDone: true},
            {id: 3, title: "ES6 & TS", isDone: false},
            {id: 4, title: "CSS & SCSS", isDone: true},
            {id: 5, title: "ES6 & TS", isDone: false},
        ]
    )

    const removeTask = (taskId: number) => {
        const updateTasks = tasks.filter(t => t.id !== taskId)
        setTasks(updateTasks)
    }


    const [filter, setFilter] = useState<FilterValuesType>("Completed")
    const changeFilterType = (filter: FilterValuesType) => setFilter(filter)

    let filteredTask: TaskType[] = []
    if (filter === "All") {
        filteredTask = tasks
    }
    if (filter === "Active") {
        filteredTask = tasks.filter(t => t.isDone === false)
    }

    if (filter === "Completed") {
        filteredTask = tasks.filter(t => t.isDone === true)
    }
    return (
        <div className="App">

            <TodoList
                title={todoListTitle}
                tasks={filteredTask}
                changeFilterType={changeFilterType}
                removeTask={removeTask}
            />

        </div>
    );
}

export default App;
