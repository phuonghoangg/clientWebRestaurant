import classNames from 'classnames/bind';
import styles from './Product.scss';

const cx = classNames.bind(styles);

function Menu() {
    return <div className={cx('wrapper')}>Product page</div>;
}

export default Menu;
