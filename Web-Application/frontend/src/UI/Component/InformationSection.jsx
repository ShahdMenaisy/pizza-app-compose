import styles from './InformationSection.module.css'

const InformationSection = ({ children }) => {
    return (
        <div className={styles["info-section"]}>{children}</div>
    )
}

export default InformationSection
