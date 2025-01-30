import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Navbar.module.css';
import Menu from './component/Menu';

const Navbar = () => {
    const [isMenuOpen, setMenuOpen] = useState(false);

    const navigate = useNavigate();

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    };

    return (
        <header className={styles.navbar}>
            <div className={styles['navbar-left']}>
                <div className={styles['navbar-logo']} onClick={() => navigate('/')}>
                    <img src="logo.png" alt="Logo" className={styles.logo} />
                </div>
                <div onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                    <button className={styles['menu-button']}>
                        Explore ▼
                    </button>
                    <Menu isMenuOpen={isMenuOpen} />
                </div>
            </div>
            <div className={styles['navbar-right']}>
                <a onClick={() => navigate()} className={styles['navbar-link']}>Tools</a>
                <a onClick={() => navigate()} className={styles['navbar-link']}>Tools</a>
                <a onClick={() => navigate("/login")} className={styles['navbar-link']}>Log In</a>
                <a onClick={() => navigate("/signup")} className={styles['join-button']}>Join for Free</a>
            </div>
        </header >
    );
};

export default Navbar;
