import classNames from 'classnames/bind';
import Item from '~/pages/components/Item';
import styles from './ListProduct.module.scss';

const cx = classNames.bind(styles);

function ListProduct({ data, type }) {
    return (
        <div className={cx('wrapper')}>
            {data.map((item) => {
                return <Item key={item.id} data={item} type={type} />;
            })}
        </div>
    );
}

export default ListProduct;
