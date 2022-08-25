import styles from './Register.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Register({ handleClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label>Họ tên</label>
                    <input placeholder="Nhập họ và tên của bạn" type="text" />
                    <div className={cx('alert-mess')}></div>
                </div>
                <div className={cx('form-group')}>
                    <label>Số điện thoại</label>
                    <input placeholder="Nhập số điện thoại của bạn" type="text" />
                    <div className={cx('alert-mess')}></div>
                </div>
                <div className={cx('form-group')}>
                    <label>Email</label>
                    <input placeholder="Nhập email của bạn" type="text" />
                    <div className={cx('alert-mess')}></div>
                </div>

                <div className={cx('form-group')}>
                    <label>Mật khẩu</label>
                    <input placeholder="Nhập mật khẩu của bạn" type="password" />
                    <span className={cx('alert-mess')}></span>
                </div>
                <div className={cx('form-group')}>
                    <label>Xác nhận mật khẩu</label>
                    <input placeholder="Xác nhận mật khẩu của bạn" type="password" />
                    <span className={cx('alert-mess')}></span>
                </div>

                <div className={cx('btn')}>
                    <button className={cx('btn-submit')} type="submit">
                        Tạo tài khoản
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Register;
