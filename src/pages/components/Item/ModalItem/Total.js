import { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './ModalItem.module.scss';
const cx = classNames.bind(styles);

function Total({ handleClick, price }) {
    const [count, setCount] = useState(1);
    const handleMinus = () => {
        setCount((prev) => prev - 1);
    };

    const handlePlus = () => {
        setCount((prev) => prev + 1);
    };
    const handleAdd = () => {
        handleClick();
    };
    return (
        <div className={cx('total')}>
            <div className={cx('inline')}>
                <div className={cx('total-left')}>
                    <button className={count === 1 ? cx('btn-disable') : cx('btn-active')} onClick={handleMinus}>
                        <FontAwesomeIcon icon={faMinus} />
                    </button>
                    <input readOnly className={cx('count-order')} value={count} />
                    <button className={cx('btn-active')} onClick={handlePlus}>
                        <FontAwesomeIcon icon={faPlus} />{' '}
                    </button>
                </div>
                <div className={cx('total-right')}>
                    <button className={cx('add-product')} onClick={handleAdd}>
                        Thêm vào giỏ hàng {price * count}
                        <span>đ</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Total;
