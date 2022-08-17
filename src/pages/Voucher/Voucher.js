import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';

const cx = classNames.bind(styles);

function Voucher() {
    return <div className={cx('wrapper')}>Voucher page</div>;
}

export default Voucher;
