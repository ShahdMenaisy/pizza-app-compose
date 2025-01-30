import styles from './LearnMoreBtn.module.css'

const learnMoreBtn = ({ children }) => {
    return (
        <button className={styles["learn-more-btn"]}>{children}</button>
    )
}

export default learnMoreBtn
