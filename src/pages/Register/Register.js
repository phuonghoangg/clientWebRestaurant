import styles from './Register.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { registerUser } from '~/redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
const cx = classNames.bind(styles);

function Register({ handleClose }) {
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (password === confirmPassword) {
            const newUser = {
                email,
                phone,
                username,
                password,
            };
            registerUser(newUser, dispatch, navigate, handleClose);
        }
    };
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label>Họ tên</label>
                    <input
                        placeholder="Nhập họ và tên của bạn"
                        type="text"
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <div className={cx('alert-mess')}></div>
                </div>
                <div className={cx('form-group')}>
                    <label>Số điện thoại</label>
                    <input
                        placeholder="Nhập số điện thoại của bạn"
                        type="text"
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    <div className={cx('alert-mess')}></div>
                </div>
                <div className={cx('form-group')}>
                    <label>Email</label>
                    <input placeholder="Nhập email của bạn" type="text" onChange={(e) => setEmail(e.target.value)} />
                    <div className={cx('alert-mess')}></div>
                </div>

                <div className={cx('form-group')}>
                    <label>Mật khẩu</label>
                    <input
                        placeholder="Nhập mật khẩu của bạn"
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <span className={cx('alert-mess')}></span>
                </div>
                <div className={cx('form-group')}>
                    <label>Xác nhận mật khẩu</label>
                    <input
                        placeholder="Xác nhận mật khẩu của bạn"
                        type="password"
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
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
