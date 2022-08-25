import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { faShoppingBasket, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import ModalBody from './ModalBody';

const cx = classNames.bind(styles);

const listTab = [
    { id: 1, content: 'Mã E-Voucher', to: '/voucher' },
    { id: 2, content: 'Khuyến Mãi', to: '/promotion' },
    { id: 3, content: 'Thực Đơn', to: '/product' },
    { id: 4, content: 'Theo dõi đơn hàng', to: '/tracking' },
];

function Header({ className }) {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    const classes = cx('wrapper', {
        [className]: className,
    });
    return (
        <div className={classes}>
            <div className={cx('inner')}>
                <Link to="/" className={cx('logo')}>
                    <img src="https://dominos.vn/img/logo/domino-horizontal-dark.svg" alt="dominoPizza" />
                </Link>
                <div className={cx('tab')}>
                    {listTab.map((tab) => {
                        return (
                            <Link to={tab.to} key={tab.id} className={cx('tab-item')}>
                                {tab.content}
                            </Link>
                        );
                    })}
                </div>
                <div className={cx('actions')}>
                    <img src="https://dominos.vn/img/icon/flag-vn.png" alt="flag-vn" />
                    <img src="https://dominos.vn/img/icon/flag-en.png" alt="flag-en" />

                    <button className={cx('icon')} onClick={handleClick}>
                        <FontAwesomeIcon icon={faUser} />
                    </button>

                    <Link to="/cart" className={cx('icon-shop')}>
                        <FontAwesomeIcon icon={faShoppingBasket} />
                        <span className={cx('number')}>1</span>
                    </Link>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <ModalBody handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Header;
