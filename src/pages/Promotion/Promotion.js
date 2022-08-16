import classNames from 'classnames/bind';
import styles from './Promotion.scss';

const cx = classNames.bind(styles);

function Promotion() {
    return <div className={cx('wrapper')}>Promotion page</div>;
}

export default Promotion;
