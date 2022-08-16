import classNames from 'classnames/bind';
import styles from './ProductLayout.scss';
import Aside from './Aside';
import Header from '../components/Header';
import Footer from '../components/Footer';

const cx = classNames.bind(styles);

function ProductLayout({ children }) {
    return (
        <div className={cx('wrapper')}>
            <Header>
                <div>Header them</div>
            </Header>
            <div className={cx('content')}>{children}</div>
            <Aside />
            <Footer />
        </div>
    );
}

export default ProductLayout;
