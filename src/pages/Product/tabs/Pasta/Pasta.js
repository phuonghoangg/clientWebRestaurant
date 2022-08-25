import classNames from 'classnames/bind';
import ListProduct from '~/pages/components/ListProduct';
import styles from './Pasta.module.scss';
import Title from '~/pages/components/Title';
const cx = classNames.bind(styles);

const dataProduct = {
    type: 'pasta',
    data: [
        {
            id: 1,
            imgUrl: 'https://img.dominos.vn/pasta-h%E1%BA%A3i-s%E1%BA%A3n.jpg',
            imgUrlZoom: 'https://img.dominos.vn/pasta-h%E1%BA%A3i-s%E1%BA%A3n.jpg',
            name: 'Mỳ ý hải sản đút lò',
            description:
                'Lạp xưởng tươi, xốt trứng muối, xốt Mayonnaise dịu ngọt, ruốc khô (tép khô), bắp ngọt, hành lá, phô mai Mozzarella, xốt cà chua.',
            price: '89,000',
            priceC: 89000,
        },
        {
            id: 2,
            imgUrl: 'https://img.dominos.vn/pasta-rau-cu.jpg',
            imgUrlZoom: 'https://img.dominos.vn/pasta-rau-cu.jpg',
            name: 'Mỳ ý rau củ đút lò',
            description:
                'Sauce mỳ cay nhẹ, nấm, ớt chuông xanh, cà chua, dứa, Olive đen, phô mai Mozzarella.                ',
            price: '79,000',
            priceC: 79000,
        },
        {
            id: 3,
            imgUrl: 'https://img.dominos.vn/pasta-bo-bam.jpg',
            imgUrlZoom: 'https://img.dominos.vn/pasta-bo-bam.jpg',
            name: 'Mỳ ý đút lò bò bằm',
            description: 'Sauce mỳ bò bằm, phô mai Mozzarella                ',
            price: '89,000',
            priceC: 89000,
        },
    ],
};

function Pasta() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('category-header')}>
                <div className={cx('header-inline')}>
                    <Title title={dataProduct.type} />
                    <ListProduct data={dataProduct.data} type={dataProduct.type} />
                </div>
            </div>
        </div>
    );
}

export default Pasta;
