import styles from './Music.module.css';
export default function Music():JSX.Element{
    return(
        <>
        <h1 className= {styles.caption}>Виды музыки: </h1>
        <ul>
            <li  className={styles.list}>Рок</li>
            <li  className={styles.list}>Поп</li>
            <li  className={styles.list}>Реп</li>
            <li  className={styles.list}>Этно</li>
            <li  className={styles.list}>Классика</li>
        </ul>
        </>
    )
}