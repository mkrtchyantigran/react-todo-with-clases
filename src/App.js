
import { Component } from 'react';
import './App.css';
import AddNewTodo from './components/addNewTodo';
import TodoList from './components/todoList';

export default class App extends Component  {
  constructor(props) {
    super(props)
    this.state = {
      todoList: [],
      completedTaskCount:0
      
    }
    this.todoId = 0;
  }

  AddNewTodo = (newTask) => {
    const {todoList} = this.state
    this.setState(({
      todoList: [
        ...todoList, 
        {
            id: this.todoId++,
            newTask,
            completed: false

        }
      ]
    }))
  }

  toggleTaskCompleted = (taskId) => {
    this.setState((prevState) => {
      const updatedList = prevState.todoList.map((task) =>
        task.id === taskId ? { ...task, completed: !task.completed } : task
   );

    const completedCount = updatedList.filter((task) => task.completed).length;

    return {
      todoList: updatedList,
      completedTaskCount: completedCount,
    }
  
  });

  };





  deleteTasks = (taskId) => {
    this.setState((prevState) => {
      const updatedList = prevState.todoList.filter((task) => task.id !== taskId);

      const completedCount = updatedList.filter((task) => task.completed).length;
      

      return {
        todoList: updatedList,
        completedTaskCount: completedCount
      }

    })
   
  };

  deleteAllTasks = () => {
    this.setState(({
      todoList: [],
      completedTaskCount: 0,
    }));
  };



  render( ) {

    const {todoList, completedTaskCount} = this.state;

    return (
      <div className='app-container'>
        
        <div className='app'>
          < AddNewTodo 
            AddNewTodo={this.AddNewTodo} 
            completedTaskCount={completedTaskCount}
            todoList={todoList}
            
          />
          < TodoList 
            deleteTasks={this.deleteTasks} 
            todoList={this.state.todoList} 
            toggleTaskCompleted={this.toggleTaskCompleted}
            todoId={this.todoId}
            deleteAllTasks={this.deleteAllTasks}
          /> 
         
        </div>
       
      </div>
    )

  }
}


