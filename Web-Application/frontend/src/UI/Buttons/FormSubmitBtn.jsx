import styles from './FormSubmitBtn.module.css'

const FormSubmitBtn = ({ children }) => {
    return (
        <button type="submit" className={styles["submit-btn"]}>{children}</button>
    )
}

export default FormSubmitBtn
