import { Component } from "react";
import "./styles/deleteTasks.css"


export default class DeleteTasks extends Component  {
    

    handledeleteTask = (e) => {
        e.stopPropagation();
        const { taskId, deleteTask} = this.props;
        deleteTask(taskId)
    }


    render() {

        return (
            
               <>
                <button
                className="delete-taskBtn"
                onClick={this.handledeleteTask}
                >
                    Delete
                </button>

               </>
            
        )
    }
}