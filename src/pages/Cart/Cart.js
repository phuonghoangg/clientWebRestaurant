import classNames from 'classnames/bind';
import styles from './Cart.module.scss';
import CartItem from './CartItem';

const cx = classNames.bind(styles);

function Card() {
    return (
        <section className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('inline-content')}>
                    <div className={cx('title')}>
                        <h6>Giỏ hàng của bạn</h6>
                        <h6>3 món</h6>
                    </div>
                    <CartItem />

                    <div className={cx('total')}>
                        <div className={cx('total-inline')}>
                            <div className={cx('search-input')}>
                                <input placeholder="Nhập mã E-voucher" />

                                <button className={cx('search-btn')}>Áp dụng</button>
                            </div>
                            <div className={cx('cash')}>
                                <div className={cx('cash-type')}>
                                    <div className={cx('title-type-cash')}>Tổng</div>
                                    <div className={cx('cash-total')}>935,000₫</div>
                                </div>
                                <div className={cx('cash-type')}>
                                    <div className={cx('title-type-cash')}>Giảm khuyến mãi</div>
                                    <div className={cx('cash-promotion')}>0₫</div>
                                </div>
                                <div className={cx('cash-type')}>
                                    <div className={cx('title-type-cash')}>Giảm voucher</div>
                                    <div className={cx('cash-promotion')}>0₫</div>
                                </div>
                                <div className={cx('cash-type')}>
                                    <div className={cx('title-type-cash')}>Phí giao hàng</div>
                                    <div className={cx('cash-promotion')}>0₫</div>
                                </div>
                            </div>
                            <button className={cx('btn-tt')}>
                                Thanh toán <span>273,000₫</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Card;
