import React, {useState} from 'react'

function TrelloFnc() {

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
    const [completedTasks, setcompletedTasks] = useState([]);
    const [draggedTask, setdraggedTask] = useState({});

    const onDrag = (event, todo) => {
        event.preventDefault();
        setdraggedTask(todo)
    }

    const onDragOver = (event) => {
        event.preventDefault();
    }

    const onDrop = (event) => {
        setcompletedTasks([...completedTasks, draggedTask]);
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
                {completedTasks.map((task, index) =>
                    <div key={task.taskID}>
                        {task.task}
                    </div>
                )}
            </div>
        </div>
    )
}

export default TrelloFnc
