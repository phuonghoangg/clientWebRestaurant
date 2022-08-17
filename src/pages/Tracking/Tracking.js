import classNames from 'classnames/bind';
import styles from './Tracking.module.scss';

const cx = classNames.bind(styles);

function Tracking() {
    return <div className={cx('wrapper')}>Tracking page</div>;
}

export default Tracking;
