import styles from './Login.module.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

function Login({ handleClose }) {
    const handleSubmit = (e) => {
        e.preventDefault();
        handleClose();
    };
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label>Email</label>
                    <input placeholder="Nhập tên đăng nhập" type="text" />
                    <div className={cx('alert-mess')}></div>
                </div>
                <div className={cx('form-group')}>
                    <label>Password</label>
                    <input placeholder="Nhập mật khẩu" type="password" />
                    <span className={cx('alert-mess')}></span>
                </div>
                <div className={cx('btn')}>
                    <button className={cx('btn-submit')} type="submit">
                        Đăng nhập
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Login;
