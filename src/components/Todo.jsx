import React, {useState} from 'react';

const Todo = props =>{
    const [Task, setTask] = useState({
        ToDo: "",
        isDone: false
    })
    const onChangeHandler = e =>{
        setTask({...Task, [e.target.name]: e.target.value})
    }
    const checkedHandler = e => {
        setTask({...Task, [e.target.name]: e.target.checked});
    }
    const onSubmitHandler = e =>{
        e.preventDefault();
        props.newTask(Task)
    }
    return(
        <div className="col-3 container">
            <form onSubmit={onSubmitHandler}>
                <div className="form-group">
                    <label htmlFor="ToDo"></label>
                    <input type="text" name="ToDo" className="form-control" onChange={onChangeHandler}/>
                </div>
                <div>
                    <input hidden type="checkbox" name="isDone" checked={Task.isDone} onChange={checkedHandler}/>
                </div>
                <input type="submit" value="Add" className="btn btn-primary mt-2"/>
            </form>
        </div>
    )
}

export default Todo