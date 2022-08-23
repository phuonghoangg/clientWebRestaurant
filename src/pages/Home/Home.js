import classNames from 'classnames/bind';
import Content from './Content';
import styles from './Home.module.scss';
import Menu from './Menu';
import NavSlick from './NavSlick';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('wrapper-slick')}>
                <NavSlick />
            </div>
            <Content />
            <Menu />
        </div>
    );
}

export default Home;
