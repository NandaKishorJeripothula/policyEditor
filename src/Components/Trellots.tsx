import React, {useState} from 'react'

function Trellots() {

    const [todos, setTodos] = useState([
        {
            taskID: 1,
            task: 'Walk the walk'
        },
        {
            taskID: 2,
            task: 'Talk the talk'
        },
        {
            taskID: 3,
            task: 'Jump the jump'
        }
    ]);
    let cmpleteTask:any = [];
    let drgTask:any = [];
    const [completedTasks, setcompletedTasks] = useState(cmpleteTask);
    const [draggedTask, setdraggedTask] = useState(drgTask);

    const onDrag = (event:any, todo:any) => {
        event.preventDefault();
        setdraggedTask(todo)
    }

    const onDragOver = (event:any) => {
        event.preventDefault();
    }

    const onDrop = (event:any) => {
        let dragged:any = [...completedTasks, draggedTask];
        setcompletedTasks(dragged);
        setTodos(todos.filter(task => task.taskID !== draggedTask.taskID));
        setdraggedTask({})
    }

    return (
        <div className="App">
            <div className="todos">
                {todos.map(todo =>
                    <div key={todo.taskID} draggable onDrag={(event) => onDrag(event, todo)}>
                        {todo.task}
                    </div>
                )}
            </div>
            <div className="done" onDrop={event => onDrop(event)}
                onDragOver={(event => onDragOver(event))}>
                {completedTasks.map((task:any) =>
                    <div key={task.taskID}>
                        {task.task}
                    </div>
                )}
            </div>
        </div>
    )
}

export default Trellots
