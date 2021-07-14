import React from 'react';

const Show= props =>{
    const CheckHandler = e =>{
        props.updateStatus(e.target.value);
    }
    const deleteTask = i =>{
        props.deleteItem(i)
    }
    return(
        <div>
            <table className="table table-striped">
                <tr>
                    <th>
                        Task to do
                    </th>
                </tr>
                {
                    props.myList.map((Tasks,i)=>{
                        return <tr>
                            <td>{Tasks.isDone ? <del>{Tasks.ToDo}</del> : Tasks.ToDo} <input type="checkbox" onChange={CheckHandler} value={i}/> <input onClick={()=>deleteTask(i)} type="submit" value="Delete" className="btn btn-dark"/></td>
                        </tr>
                    })
                }
            </table>
        </div>
    )
}


export default Show