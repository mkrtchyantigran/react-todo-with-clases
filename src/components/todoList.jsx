import { Component } from "react";
import './styles/todoList.css'
import DeleteTasks from "./deleteTasks";

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            activeKeyTask: [],

        }
    }

    toggleTask = (key) => {
        this.setState((prevState) => {
            const isActive = prevState.activeKeyTask.includes(key)
            if (isActive) {
                return {
                    activeKeyTask: prevState.activeKeyTask.filter((i) => i !== key),
                };
            } else {
                return {
                    activeKeyTask: [...prevState.activeKeyTask, key],
                }
            }
        });
    }

    render() {
        const {todoList, deleteTasks, toggleTaskCompleted, deleteAllTasks} = this.props
        const { activeKeyTask } = this.state

        return (
            <div className="todo-list">
                <ul>
                    {todoList.map((data) => (
                            <li 
                                key={data.id}
                                className={`task-box ${activeKeyTask.includes(data.id) ? "active" : ""}`}
                                onClick={() => {
                                    this.toggleTask(data.id);
                                    toggleTaskCompleted(data.id);
                                }}
                            >
                                <span className={activeKeyTask.includes(data.id) ? "dot active" : "dot"}></span>
                                <div className="task-content">{data.newTask}</div>
                                <DeleteTasks 
                                    taskId={data.id}
                                    deleteTask={deleteTasks}
                                />
                            </li>
                        ))}
                </ul>

                <button 
                className="delete-all-btn"
                 onClick={deleteAllTasks}
                >
                    Delete All
                </button>
            </div>
        )
    }
}