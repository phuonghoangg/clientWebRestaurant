import styles from './ModalBody.module.scss';
import classNames from 'classnames/bind';
import Login from '~/pages/Login';
import { useState } from 'react';
import Register from '~/pages/Register';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faX } from '@fortawesome/free-solid-svg-icons';

const cx = classNames.bind(styles);

function ModalBody({ handleClose }) {
    const [show, setShow] = useState(1);
    const handleClickLogin = () => {
        setShow(1);
    };
    const handleClickRegister = () => {
        setShow(2);
    };
    return (
        <div className={show === 1 ? cx('wrapper') : cx('wrapper-2')}>
            <div className={cx('inline')}>
                <div className={cx('image')}></div>
                <div className={cx('right-modal')}>
                    <button className={cx('close')} onClick={() => handleClose()}>
                        <FontAwesomeIcon icon={faX} />
                    </button>
                    <div className={cx('inline-right')}>
                        <div className={cx('body-content')}>
                            <div className={cx('nav-content')}>
                                <button
                                    className={show === 1 ? cx('nav-item-active') : cx('nav-item-normal')}
                                    onClick={handleClickLogin}
                                >
                                    Đăng nhập
                                </button>
                                <button
                                    className={show === 2 ? cx('nav-item-active') : cx('nav-item-normal')}
                                    onClick={handleClickRegister}
                                >
                                    Tạo tài khoản
                                </button>
                            </div>
                            {show === 1 ? <Login handleClose={handleClose} /> : <Register handleClose={handleClose} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalBody;
