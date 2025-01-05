import { Component } from "react";
import './styles/addNewTodo.css'

export default class AddNewTodo extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newTask: "",
        }
    }


    inputValueChange = (e) => {
        this.setState({newTask: e.target.value});
    }

    addNewTasks = (e) => {
        e.preventDefault();
        const {newTask} = this.state

        if(!newTask.length) return;
        
        this.props.AddNewTodo(newTask)
            this.setState({newTask: ""})
    }

    render() {
       const {todoList=[], completedTaskCount} = this.props
        return (
            <div className="add-new-todo"> 
            
            <h3>React Todo</h3>

            <p>
                Completed: {completedTaskCount} / Total:  {todoList.length}
            </p>

            <form 
            onSubmit={this.addNewTasks}
            className="add-new-todo-group"
            >
                
                
                <input 
                type="text"
                name="newTask"
                value={this.state.newTask}
                placeholder="type your task"
                onChange={this.inputValueChange}
              />

              <button type="submit" >Add</button>
            </form>

        </div>
        )
    }

}



