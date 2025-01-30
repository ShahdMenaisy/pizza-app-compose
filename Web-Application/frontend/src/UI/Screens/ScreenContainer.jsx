import styles from './ScreenContainer.module.css'

const ScreenContainer = ({ children }) => {
    return (
        <div className={styles["screen-container"]}>{children}</div>
    )
}

export default ScreenContainer
