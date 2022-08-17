import classNames from 'classnames/bind';
import Content from './Content';
import styles from './Home.module.scss';
import NavSlick from './NavSlick';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('wrapper')}>
            <NavSlick />
            <Content />
        </div>
    );
}

export default Home;
