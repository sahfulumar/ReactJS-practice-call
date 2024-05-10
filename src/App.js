import logo from './logo.svg';
import './App.css';
import TodoInput from './components/TodoInput';
import { useState } from 'react';
import TodoList from './components/ReactPractice';
// import TodoList from './components/TodoList';

function App() {
  // const [list, setList] = useState([])

  // const addList = (text) => {
  //   const updateList = [...list, text]
  //   setList(updateList)
  //   localStorage.setItem('todoList', JSON.stringify(updateList));
  // }

  // const deleteTodo = (key)=> {
  //   const newTodoList = [...list]
  //   newTodoList.splice(key,1)
  //   setList(newTodoList)
  // }
  return (
    <div className="App">
      {/* <TodoInput addList={addList} /> */}

      {/* {list.map((listItem, i) => {
        return (

          <TodoList key={i} index={i} item={listItem} delete={deleteTodo}/>
        )
      })} */}

    <TodoList/>
    </div>
  );
}

export default App;
