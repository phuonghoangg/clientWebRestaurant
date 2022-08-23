import classNames from 'classnames/bind';
import styles from './Voucher.module.scss';

import { faX, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
const cx = classNames.bind(styles);

function Voucher() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('tab-active')}>
                <div className={cx('inline-tab')}>
                    <div className={cx('question')}>Bạn có mã E-voucher tại Domino's Pizza?</div>
                    <div className={cx('answer')}>Nhập mã E-voucher của bạn ở khung dưới đây để được ưu đãi</div>
                    <div className={cx('search-input')}>
                        <input placeholder="Nhập mã E-voucher" />

                        <button className={cx('search-btn')}>Áp dụng</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Voucher;
