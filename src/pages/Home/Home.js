import classNames from 'classnames/bind';
import Content from './Content';
import styles from './Home.module.scss';
import Menu from './Menu';
import NavSlick from './NavSlick';

const cx = classNames.bind(styles);

const dataProduct = [
    {
        id: 1,
        imgUrl: 'https://img.dominos.vn/pizza-lap-xuong-2.jpg',
        imgUrlZoom: 'https://img.dominos.vn/Pizza-lap-xuong-1.jpg',
        name: 'PIZZA LẠP XƯỞNG XỐT TRỨNG MUỐI MAYONNAISE - SAIGON MANIA PIZZA',
        description:
            'Lạp xưởng tươi, xốt trứng muối, xốt Mayonnaise dịu ngọt, ruốc khô (tép khô), bắp ngọt, hành lá, phô mai Mozzarella, xốt cà chua.',
        price: '99,000',
    },
    {
        id: 2,
        imgUrl: 'https://img.dominos.vn/Pizzaminsea-Hai-San-Nhiet-Doi-Xot-Tieu.jpg',
        imgUrlZoom: 'https://img.dominos.vn/Pizzaminsea-thong-tin-1.jpg',
        name: 'PIZZA LẠP XƯỞNG SAIGON MANIA PIZZA',
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
];
function Home() {
    return (
        <div className={cx('wrapper')}>
            <NavSlick />
            <Content />
            <Menu data={dataProduct} />
        </div>
    );
}

export default Home;
