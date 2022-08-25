import classNames from 'classnames/bind';
import styles from './ProductLayout.module.scss';
import Aside from './Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';
import NavContent from './NavContent';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header />
            <div className={cx('inline')}>
                <div className={cx('inline-left')}>
                    <NavContent />
                    <div className={cx('content')}>{children}</div>
                </div>
                <Aside />
            </div>
            <Footer />
        </div>
    );
}

export default ProductLayout;
