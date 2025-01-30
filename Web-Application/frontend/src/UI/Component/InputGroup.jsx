import styles from './InputGroup.module.css'

const InputGroup = ({ children }) => {
    return (
        <div className={styles["input-group"]}>
            {children}
        </div>
    )
}

export default InputGroup
