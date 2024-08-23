import styles from './todoItem.module.scss';
import deleteIcon from '../../assets/delete.png';


export const TodoItem = ({ todo, deleteTodo }) => {
  return (
    <li className={styles.todoItem}>
      <span className={styles.todoText}>{todo.text}</span>
      <div className={styles.deleteContainer}>
        <div className={styles.verticalLine}></div>
        <button 
          className={styles.deleteButton}
          onClick={() => deleteTodo(todo.id)}
        >
          <img src={deleteIcon} alt="Delete" className={styles.deleteIcon} />
        </button>
      </div>
    </li>
  );
};