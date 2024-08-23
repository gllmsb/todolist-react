import { useState } from "react";
import { TodoItem } from "../TodoItem/todoItem";
import styles from './todoApp.module.scss';
import addIcon from '../../assets/add.png';
  
export const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const addTodo = () => {
    if (inputValue.trim()) {
      setTodos([...todos, { id: Date.now(), text: inputValue }]);
      setInputValue('');
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const clearTodos = () => {
    setTodos([]);
  };

  return (
    <div className={styles.todoAppContainer}>
      <div className={styles.todoApp}>
        <h1>To Do</h1>
        <div className={styles.todoDiv}>
          <ul className={styles.todoList}>
            {todos.map(todo => (
              <TodoItem
                key={todo.id} 
                todo={todo} 
                deleteTodo={deleteTodo} 
              />
            ))}
          </ul>
        </div>
        <div className={styles.inputContainer}>
          <button onClick={addTodo} className={styles.addButton}>
            <img src={addIcon} className={styles.addIcon} alt="Add" />
          </button>
          <input 
            type="text" 
            value={inputValue} 
            onChange={(e) => setInputValue(e.target.value)} 
            placeholder="Add new" 
            className={styles.input}
          />
        </div>
        <div className={styles.clearButtonContainer}>
          <button onClick={clearTodos} className={styles.clearButton}>Clear All</button>
        </div>
      </div>
    </div>
  );
};