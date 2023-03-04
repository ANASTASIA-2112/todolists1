import React from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";

function App ():JSX.Element {


    const tasks: TaskType[] =[
    {id: 1, title:"HTML & CSS", isDone:true},
    {id: 2, title:"CSS & SCSS", isDone:true},
    {id: 3, title:"ES6 & TS", isDone:false},

]
    const tasks1: TaskType[] =[
        {id: 1, title:" CSS", isDone:false},
        {id: 2, title:" SCSS", isDone:false},
        {id: 3, title:"TS", isDone:false},
    ]
    return (
        <div className="App">

            <TodoList title={"What to learn"} tasks={ tasks}/>
            <TodoList title={"What to buy"} tasks={tasks1}/>
            {/*<TodoList title={"What to read"}/>*/}
        </div>
    );
}

export default App;
