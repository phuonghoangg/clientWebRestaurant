import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Item from './Item';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

function Menu({ data }) {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inline')}>
                    <div className={cx('header')}>
                        <div className={cx('one')}>Hôm Nay Ăn Gì?</div>
                        <Link to="/promotion" className={cx('two')}>
                            Khuyến Mãi Mỗi Ngày
                        </Link>
                        <div className={cx('three')}>Best Seller</div>
                    </div>
                    <div className={cx('body')}>
                        {data.map((item) => {
                            return <Item key={item.id} data={item} />;
                        })}
                    </div>

                    <div className={cx('btn-more')}>
                        <Link className={cx('btn-to-product')} to="/product">
                            Xem Thêm
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Menu;
