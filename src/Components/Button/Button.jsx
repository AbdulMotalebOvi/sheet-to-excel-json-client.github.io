import styles from './Button1.module.css';
export default function Button({ title }) {

    return (
        <button className={styles.btn}>{title}</button>
    )
}
