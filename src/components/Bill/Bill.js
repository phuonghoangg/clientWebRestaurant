import classNames from 'classnames/bind';
import styles from './Bill.module.scss';
import ItemBill from './ItemBill';

const cx = classNames.bind(styles);

function Bill({ value }) {
    console.log('abc');
    return (
        <div className={cx('wrapper')}>
            <div className={cx('cart-content')}>
                <div className={cx('item-confirm')}>
                    <div className={cx('title')}>
                        <span>Đơn hàng của bạn</span>
                        <span>1 món</span>
                    </div>
                    <div className={cx('search-input')}>
                        <input placeholder="Nhập mã E-voucher" />

                        <button className={cx('search-btn')}>Áp dụng</button>
                    </div>
                    <ItemBill />
                    <ItemBill />
                </div>
                <div className={cx('cart-confirm')}>
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
                        Hoàn tất đơn hàng <span>273,000₫</span>
                    </button>
                    <div className={cx('')}></div>
                </div>
            </div>
        </div>
    );
}

export default Bill;
