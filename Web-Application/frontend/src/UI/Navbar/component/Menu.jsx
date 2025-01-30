import { useNavigate } from 'react-router-dom';
import styles from './menu.module.css';
import technologyRoutes from '../../../Data/Technology';

const Menu = ({ isMenuOpen }) => {
    const navigate = useNavigate();

    const { frontendRoutes, backendRoutes, databaseRoutes } = technologyRoutes;

    return (
        <div className={`${styles.menu} ${isMenuOpen ? styles.open : ''}`}>
            <div className={styles['menu-column']}>
                <h3 onClick={() => navigate('/frontend')}>Front-end</h3>
                <ul>
                    {frontendRoutes.map((technology) =>
                        <li key={technology.name} onClick={() => navigate(`/frontend/${technology.path}`)}>
                            {technology.name}
                        </li>)}
                </ul>
            </div>
            <div className={styles['menu-column']}>
                <h3 onClick={() => navigate('/backend')}>Back-end</h3>
                <ul>
                    {backendRoutes.map((technology) =>
                        <li key={technology.name} onClick={() => navigate(`/backend/${technology.path}`)}>
                            {technology.name}
                        </li>)}
                </ul>
            </div>
            <div className={styles['menu-column']}>
                <h3 onClick={() => navigate('/database')}>Database</h3>
                <ul>
                    {databaseRoutes.map((technology) =>
                        <li key={technology.name} onClick={() => navigate(`/database/${technology.path}`)}>
                            {technology.name}
                        </li>)}
                </ul>
                <a className={styles['browse-link']} onClick={() => navigate('/all-subjects')}>Browse all subjects</a>
            </div>
        </div>
    )
}

export default Menu;