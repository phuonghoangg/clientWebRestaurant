import classNames from 'classnames/bind';
import styles from './NavContent.module.scss';
import Menu, { MenuItem } from './Menu';

const cx = classNames.bind(styles);

function NavContent() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('address')}></div>
            <Menu>
                <MenuItem title="Khuyến mãi mỗi ngày" to="/promotion" />
                <MenuItem title="Pizza" to="/product/pizza" />
                <MenuItem title="Mỳ ý" to="/product/pasta" />
                <MenuItem title="Món phụ" to="/product/sides" />
                <MenuItem title="Tráng miệng" to="/product/dessert" />
                <MenuItem title="Nước uống" to="/product/drinks" />
            </Menu>
        </div>
    );
}

export default NavContent;
