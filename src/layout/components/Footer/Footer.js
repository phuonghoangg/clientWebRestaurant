import { faInstagram, faFacebookF } from '@fortawesome/fontawesome-free-brands';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Footer.module.scss';

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('title')}>
                    <span>Kết nối Domino's Pizza Việt Nam: </span>
                    <a
                        href="https://www.facebook.com/hoangphuong291199/"
                        target="_blank"
                        rel="noreferrer"
                        className={cx('icon-facebook')}
                    >
                        <FontAwesomeIcon icon={faFacebookF} />
                    </a>
                    <button className={cx('icon-insta')}>
                        <FontAwesomeIcon icon={faInstagram} />
                    </button>
                </div>
                <div className={cx('content')}>
                    <div className={cx('logo')}>
                        <img src="https://dominos.vn/img/logo/domino.svg" alt="error" />
                        <div className={cx('contact')}>
                            <div className={cx('contact-title')}>
                                <span>
                                    <FontAwesomeIcon icon={faPhone} />
                                </span>{' '}
                                Hotline Đặt Hàng
                            </div>
                            <button onClick={(e) => alert('ád')} className={cx('contact-number')}>
                                1900 6099
                            </button>
                        </div>
                    </div>

                    <div className={cx('menu')}>
                        <div className={cx('menu-col')}>
                            <div className={cx('menu-item')}>Cam kết</div>
                            <div className={cx('menu-item')}>Lịch sử</div>
                            <div className={cx('menu-item')}>Tuyển dụng</div>
                        </div>
                        <div className={cx('menu-col')}>
                            <div className={cx('menu-item')}>Thực đơn</div>
                            <div className={cx('menu-item')}>Mã e-voucher</div>
                            <div className={cx('menu-item')}>Khuyến mãi</div>
                        </div>
                        <div className={cx('menu-col')}>
                            <div className={cx('menu-item')}>Theo dõi đơn hàng</div>
                            <div className={cx('menu-item')}>Danh sách cửa hàng</div>
                        </div>
                    </div>
                    <div className={cx('master-card')}>
                        <img src="https://dominos.vn/img/credentials.png" alt="asdasd" />
                    </div>
                </div>
                <div className={cx('setting')}>
                    <div className={cx('coppy-right')}>&copy;2020 Domino's Vietnam | Privacy Policy</div>
                    <div className={cx('switch-language')}>Switch to English version</div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
