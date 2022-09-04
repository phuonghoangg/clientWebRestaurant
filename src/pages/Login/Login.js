import styles from './Login.module.scss';
import classNames from 'classnames/bind';
import { useState } from 'react';
import { loginUser } from '~/redux/apiRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const cx = classNames.bind(styles);

function Login({ handleClose }) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleSubmit = async (e) => {
        e.preventDefault();
        const newUser = {
            email,
            password,
        };
        await loginUser(newUser, dispatch, navigate, handleClose);
    };
    return (
        <div className={cx('wrapper')}>
            <form onSubmit={handleSubmit}>
                <div className={cx('form-group')}>
                    <label>Email</label>
                    <input placeholder="Nhập tên đăng nhập" type="text" onChange={(e) => setEmail(e.target.value)} />
                    <div className={cx('alert-mess')}></div>
                </div>
                <div className={cx('form-group')}>
                    <label>Password</label>
                    <input placeholder="Nhập mật khẩu" type="password" onChange={(e) => setPassword(e.target.value)} />
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
