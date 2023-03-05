import React, {FC} from 'react';
import {TaskType} from "./TodoList";


type TaskList = {
    tasks: TaskType[]
    removeTask:(taskId:number) => void
}


const TaskList: FC<TaskList> = (props): JSX.Element => {
    const tasksItems: JSX.Element[] | JSX.Element = props.tasks.length
       ? props.tasks.map((tasks) => {
                return (
                    <li key={tasks.id}>
                        <input type="checkbox" checked={tasks.isDone}/>
                        <span>{tasks.title}</span>
                        <button onClick={()=> props.removeTask(tasks.id )}>X</button>
                    </li>
                )
            })
            : <span>Your tasklist is empty</span>
    return (
        <ul>
            {tasksItems}
        </ul>
    );
};

export default TaskList;