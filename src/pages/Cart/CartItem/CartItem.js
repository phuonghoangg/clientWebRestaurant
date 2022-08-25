import classNames from 'classnames/bind';
import styles from './CartItem.module.scss';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function CardItem() {
    const [count, setCount] = useState(1);
    const handleMinus = () => {
        setCount((prev) => prev - 1);
    };

    const handlePlus = () => {
        setCount((prev) => prev + 1);
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('left')}>
                    <div className={cx('image')}>
                        <img src="https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg" alt="" />
                    </div>
                    <div className={cx('option')}>
                        <div className={cx('option-item')}>
                            <p>Pizza Hải Sản Xốt Mayonnaise - Ocean Mania</p>
                            <div className={cx('choose-item')}>Cỡ 9 inch</div>
                            <div className={cx('choose-item')}>Đế giày xốp</div>
                            <div className={cx('choose-item')}>Viền phô mike</div>
                            <div className={cx('choose-item')}>Gấp đôi phô mike</div>
                        </div>
                        <div className={cx('option-handle')}>
                            <button>Điều chỉnh</button>
                            <button>Xóa</button>
                        </div>
                    </div>
                </div>
                <div className={cx('right')}>
                    <div className={cx('right-top')}>
                        <div className={cx('total')}>
                            <span>273,000₫</span>
                        </div>
                        <div className={cx('total-right')}>
                            <button
                                className={count === 1 ? cx('btn-disable') : cx('btn-active')}
                                onClick={handleMinus}
                            >
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <input readOnly className={cx('count-order')} value={count} />
                            <button className={cx('btn-active')} onClick={handlePlus}>
                                <FontAwesomeIcon icon={faPlus} />{' '}
                            </button>
                        </div>
                    </div>
                    <div>1</div>
                </div>
            </div>
        </div>
    );
}

export default CardItem;
