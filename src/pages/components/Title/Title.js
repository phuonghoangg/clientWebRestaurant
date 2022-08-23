import classNames from 'classnames/bind';
import styles from './Title.module.scss';

const cx = classNames.bind(styles);

function Title({ title }) {
    return (
        <div className={cx('hr')}>
            <h4>
                <span className={cx('px-2')}>{title}</span>
            </h4>
        </div>
    );
}

export default Title;
