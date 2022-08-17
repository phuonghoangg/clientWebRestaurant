import classNames from 'classnames/bind';
import styles from './Content.module.scss';

import { faX, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const cx = classNames.bind(styles);

function Content() {
    const [style1, setStyle1] = useState(true);
    const [style2, setStyle2] = useState(false);
    const handleClick = () => {
        setStyle1(!style1);
        setStyle2(false);
    };
    const handleClick2 = () => {
        setStyle2(!style2);
        setStyle1(false);
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('tab-item')}>
                    <button onClick={handleClick} className={!style1 ? cx('item') : cx('item-active1')}>
                        Giao hàng tận nơi
                    </button>
                    <button onClick={handleClick2} className={!style2 ? cx('item') : cx('item-active2')}>
                        Đặt đến lấy
                    </button>
                </div>
                <div className={cx('tab-active')}>
                    <div className={cx('search-content')}>
                        <input placeholder="Vui lòng nhập địa chỉ nhận hàng" />
                        <button className={cx('clear')}>
                            <FontAwesomeIcon icon={faX} />
                        </button>
                        <button className={cx('search-btn')}>
                            <FontAwesomeIcon icon={faMagnifyingGlass} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Content;
