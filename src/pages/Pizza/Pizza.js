import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import ListProduct from '../components/ListProduct';
import Title from '../components/Title';
import MenuBtn from './MenuBtn';
import styles from './Pizza.module.scss';

const cx = classNames.bind(styles);

const dataMenuBtn = [
    { id: 1, imgUrl: null, title: 'Tất cả' },
    { id: 2, imgUrl: 'https://img.dominos.vn/fried-shrimp_1f364.png', title: 'Hải sản' },
    { id: 3, imgUrl: 'https://img.dominos.vn/cut-of-meat_1f969.png', title: 'Bò' },
    { id: 4, imgUrl: 'https://img.dominos.vn/poultry-leg_1f357.png', title: 'Gà' },
    { id: 5, imgUrl: 'https://img.dominos.vn/bacon_1f953.png', title: 'Heo' },
    { id: 6, imgUrl: 'https://img.dominos.vn/leafy-green_1f96c.png', title: 'Ăn chay' },
];
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
        {
            id: 5,
            imgUrl: 'https://img.dominos.vn/Pizza-Hai-San-Xot-Mayonnaise-Ocean-Mania.jpg',
            imgUrlZoom: 'https://img.dominos.vn/Ocean-mania-thong-tin.jpg',
            name: 'Pizza Hải Sản cá đuổi bla xốt ble- Pizzamin Sea',
            description: 'Xốt Cà Chua, Phô Mai Mozzarella, Tôm, Mực, Thanh Cua, Hành Tây',
            price: '99,000',
        },
    ],
};
function Pizza() {
    const [selected, setSelected] = useState(1);
    //fetch du lieu
    // console.log(dataMenuBtn[selected - 1].title);
    useEffect(() => {
        console.log(dataMenuBtn[selected - 1].title);
    }, [selected]);
    return (
        <div className={cx('wrapper')}>
            <div className={cx('inline')}>
                <div className={cx('inline-content')}>
                    <div className={cx('filter-product')}>
                        <MenuBtn>
                            {dataMenuBtn.map((item) => (
                                <button
                                    key={item.id}
                                    className={selected === item.id ? cx('button-item-active') : cx('button-item')}
                                    onClick={() => setSelected(item.id)}
                                >
                                    {item.imgUrl && <img src={item.imgUrl} alt="err" />}
                                    <span className={cx('title')}>{item.title}</span>
                                </button>
                            ))}
                        </MenuBtn>
                    </div>
                    <div className={cx('category-header')}>
                        <div className={cx('header-inline')}>
                            <div className={cx('hr')}>
                                <h4>
                                    <span>⭐</span>
                                    <span className={cx('px-2')}>premium</span>
                                    <span>⭐</span>
                                </h4>
                            </div>
                        </div>
                    </div>
                    <div className={cx('product-type')}>
                        <div className={cx('content-center')}>
                            <div className={cx('content-item')}>
                                <img src="https://dominos.vn/img/icon/pizza-small.svg" alt="error" />
                                <p>
                                    Nhỏ (7"): <span>99.000₫</span>
                                </p>
                            </div>
                            <div className={cx('content-item')}>
                                <img src="https://dominos.vn/img/icon/pizza-medium.svg" alt="error" />
                                <p>
                                    Vừa (7"): <span>189.000₫</span>
                                </p>
                            </div>
                            <div className={cx('content-item')}>
                                <img src="https://dominos.vn/img/icon/pizza-big.svg" alt="error" />
                                <p>
                                    Lớn (7"): <span>279.000₫</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <ListProduct data={dataProduct.data} type={dataProduct.type} />
                </div>
            </div>
        </div>
    );
}

export default Pizza;
