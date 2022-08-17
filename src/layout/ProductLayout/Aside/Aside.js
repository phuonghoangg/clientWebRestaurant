import classNames from 'classnames/bind';
import styles from './Aside.module.scss';

const cx = classNames.bind(styles);

function Aside() {
    return <div className={cx('wrapper')}>Aside </div>;
}

export default Aside;
