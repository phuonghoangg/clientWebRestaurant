import classNames from 'classnames/bind';
import styles from './DefaultLayout.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';
const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
    );
}

export default DefaultLayout;
