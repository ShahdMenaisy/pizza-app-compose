import styles from './FormSection.module.css'

const FormSection = ({ children }) => {
    return (
        <div className={styles["form-section"]}>
            {children}
        </div>
    )
}

export default FormSection
