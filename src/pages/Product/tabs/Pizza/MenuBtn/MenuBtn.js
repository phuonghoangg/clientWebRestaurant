import classNames from 'classnames/bind';
import styles from './MenuBtn.module.scss';

const cx = classNames.bind(styles);

function MenuBtn({ children }) {
    return <nav className={cx('wrapper')}>{children}</nav>;
}

export default MenuBtn;
