import classNames from 'classnames/bind';
import { NavLink } from 'react-router-dom';
import styles from './Menu.module.scss';
const cx = classNames.bind(styles);

function MenuItem({ title, to }) {
    return (
        <NavLink to={to} className={(nav) => cx('menu-item', { active: nav.isActive })}>
            <span className={cx('title')}>{title}</span>
        </NavLink>
    );
}

export default MenuItem;
