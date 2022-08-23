import classNames from 'classnames/bind';
import styles from './Tracking.module.scss';

import { faX, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
const cx = classNames.bind(styles);

function Tracking() {
    const [value, setValue] = useState('0854468179');
    console.log(value);
    const handleChange = (e) => {
        setValue(e.target.value);
    };
    const handleClick = () => {
        setValue('');
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('image-tracking')}>
                    <img src="https://dominos.vn/img/stock-stracking.png" alt="err" />
                </div>
                <div className={cx('input-tracking')}>
                    <div className={cx('input-title')}>Kiểm tra đơn hàng của bạn</div>
                    <div className={cx('search-content')}>
                        <input
                            type="text"
                            value={value}
                            onChange={(e) => handleChange(e)}
                            placeholder="Vui lòng nhập số điện thoại của bạn"
                        />
                        {value && (
                            <button className={cx('clear')} onClick={handleClick}>
                                <FontAwesomeIcon icon={faX} />
                            </button>
                        )}
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>

                    {!value && <div className={cx('mess')}>Vui lòng nhập số điện thoại của bạn!</div>}
                </div>
            </div>
        </div>
    );
}

export default Tracking;
