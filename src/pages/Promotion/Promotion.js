import classNames from 'classnames/bind';
import styles from './Promotion.module.scss';

const cx = classNames.bind(styles);

function Promotion() {
    return <div className={cx('wrapper')}>Promotion page</div>;
}

export default Promotion;
