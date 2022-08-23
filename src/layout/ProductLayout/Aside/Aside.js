import classNames from 'classnames/bind';
import { useState } from 'react';
import styles from './Aside.module.scss';

const cx = classNames.bind(styles);

function Aside() {
    const [value, setValue] = useState(false);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                {value ? (
                    <div>asdasd </div>
                ) : (
                    <div className={cx('none-product')}>
                        <img src="https://dominos.vn/img/illustration/empty-cart.svg" alt="asdasd" />
                        <h6>Giỏ hàng chưa có sản phẩm. Xin mời bạn mua hàng</h6>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Aside;
