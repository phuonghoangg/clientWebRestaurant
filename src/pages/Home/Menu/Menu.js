import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Item from '../../components/Item';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const dataProduct = {
    type: 'pizza',
    data: [
        {
            id: 1,
            imgUrl: 'https://img.dominos.vn/pizza-lap-xuong-2.jpg',
            imgUrlZoom: 'https://img.dominos.vn/Pizza-lap-xuong-1.jpg',
            name: 'PIZZA lạp xưởng xốt trứng muối MAYONNAISE - SAIGON MANIA PIZZA',
            description:
                'Lạp xưởng tươi, xốt trứng muối, xốt Mayonnaise dịu ngọt, ruốc khô (tép khô), bắp ngọt, hành lá, phô mai Mozzarella, xốt cà chua.',
            price: '99,000',
        },
        {
            id: 2,
            imgUrl: 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
            imgUrlZoom: 'https://img.dominos.vn/Pizzaminsea-thong-tin-1.jpg',
            name: 'PIZZA lạp xưởng SAIGON MANIA PIZZA',
            description:
                'Lạp xưởng tươi, xốt trứng muối, xốt Mayonnaise dịu ngọt, ruốc khô (tép khô), bắp ngọt, hành lá, phô mai Mozzarella, xốt cà chua.',
            price: '99,000',
        },
        {
            id: 3,
            imgUrl: 'https://img.dominos.vn/Okonomiyaki-banh-xeo-nhat.jpg',
            imgUrlZoom: 'https://img.dominos.vn/Okonomiyaki-hinh-chi-tiet-banh-xeo-nhat.jpg',
            name: 'PIZZAAYONNAISE - SAIGON MANIA PIZZA',
            description:
                'Lạp xưởng tươi, xốt trứng muối, xốt Mayonnaise dịu ngọt, ruốc khô (tép khô), bắp ngọt, hành lá, phô mai Mozzarella, xốt cà chua.',
            price: '99,000',
        },
        {
            id: 4,
            imgUrl: 'https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg',
            imgUrlZoom: 'https://img.dominos.vn/Ocean-mania-thong-tin.jpg',
            name: 'Pizza Hải Sản Nhiệt Đới  Xốt Tiêu - Pizzamin Sea',
            description: 'Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây',
            price: '99,000',
        },
    ],
};
function Menu() {
    return (
        <>
            <div className={cx('wrapper')}>
                <div className={cx('inline')}>
                    <div className={cx('inline-content')}>
                        <div className={cx('header')}>
                            <div className={cx('one')}>Hôm Nay Ăn Gì?</div>
                            <Link to="/promotion" className={cx('two')}>
                                Khuyến Mãi Mỗi Ngày
                            </Link>
                            <div className={cx('three')}>Best Seller</div>
                        </div>
                        <div className={cx('body')}>
                            {dataProduct.data.map((item) => {
                                return <Item key={item.id} data={item} type={dataProduct.type} />;
                            })}
                        </div>
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
