import React, {FC} from 'react';
import TaskList from "./TaskList";
import {FilterValuesType} from "./App";


type TodoListPropsType = {
    title: string
    tasks: TaskType[]
    changeFilterType : (filter:  FilterValuesType ) => void
    removeTask: (taskId:number) => void

}

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

const TodoList : FC <TodoListPropsType> = (props):JSX.Element=> {

    return (
        <div className={ "todolist"}>
            <h3>{props.title}</h3>
            <div>
                <input/>
                <button>+</button>
            </div>

           <TaskList tasks={props.tasks}removeTask={props.removeTask}/>
            <div>
                <button onClick={()=>props.changeFilterType("All")}>All</button>
                <button onClick={()=>props.changeFilterType("Active")}>Active </button>
                <button onClick={()=>props.changeFilterType("Completed")}>Completed</button>
            </div>
        </div>
    );
};

export default TodoList;