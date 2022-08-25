import classNames from 'classnames/bind';
import styles from './ItemBill.module.scss';

const cx = classNames.bind(styles);

function ItemBill() {
    return (
        <table className={cx('wrapper')}>
            <tbody>
                <tr>
                    <td className={cx('one')}>1</td>
                    <td className={cx('two')}>x</td>
                    <td className={cx('three')}>
                        <div className={cx('title')}>
                            <p>Pizza Bánh xèo nhật - onomiyaky</p>
                            <div className={cx('price')}>
                                189,000<span>₫</span>
                            </div>
                        </div>
                        <div className={cx('option')}>
                            <div className={cx('option-choose')}>
                                <div className={cx('option-type')}>Đế dày xốp</div>
                                <div className={cx('option-type')}>Cỡ 12 inch</div>
                                <div className={cx('option-type')}>Gấp 3 phô mike</div>
                                <div className={cx('option-type')}>Viền xúc xích</div>

                                <div className={cx('handle-type')}>
                                    <button href="#">Điều chỉnh</button>
                                    <button href="#">xóa</button>
                                </div>
                            </div>
                            <div className={cx('img-product')}>
                                <img src="https://img.dominos.vn/Okonomiyaki-banh-xeo-nhat.jpg" alt="asd" />
                            </div>
                        </div>
                        <div></div>
                    </td>
                </tr>
            </tbody>
        </table>
    );
}

export default ItemBill;
