import { RiDeleteBin2Line, RiRefreshLine } from 'react-icons/ri';
import Button from '../UI/Button';
import styles from './TodosActions.module.css';

function TodosActions({resetTodos, deleteCompletedTodos, completedTodosExist}) {
    return (
        <div className={styles.todosActionsContainer}>
        <Button onClick={resetTodos} title='Reset Todos' ><RiDeleteBin2Line /></Button>
        <Button onClick={deleteCompletedTodos} disabled={!completedTodosExist} title='Clear Completed Todos' ><RiRefreshLine/></Button>
        </div>
    )
}

export default TodosActions;