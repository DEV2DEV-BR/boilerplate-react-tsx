import useGlobalContext from '../../hooks/useGlobalContext';
import styles from './styles.module.scss';

function Counter() {
  const { count, setCount } = useGlobalContext();

  return (
    <div className={styles.container}>
      <h1>{count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Incrementar
      </button>
    </div>
  )
}

export default Counter;