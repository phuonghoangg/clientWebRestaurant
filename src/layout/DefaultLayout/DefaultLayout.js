import { useState, useEffect } from 'react';

import classNames from 'classnames/bind';
import styles from './DefaultLayout.module.scss';
import Footer from '../components/Footer';
import Header from '../components/Header';

import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    // const [loading, setLoading] = useState(false);
    // useEffect(() => {
    //     setLoading(true);
    //     setTimeout(() => {
    //         setLoading(false);
    //     }, 300);
    // }, [children]);
    return (
        // <div className={cx('bla')}>
        //     {loading ? (
        //         <ClimbingBoxLoader color={'#F37A24'} loading={loading} size={30} />
        //     ) : (
        <div className={cx('wrapper')}>
            <Header className={cx('header')} />
            <div className={cx('content')}>{children}</div>
            <Footer />
        </div>
        //     )}
        // </div>
    );
}

export default DefaultLayout;
