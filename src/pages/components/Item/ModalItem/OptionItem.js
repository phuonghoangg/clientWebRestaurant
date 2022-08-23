import classNames from 'classnames/bind';

import styles from './ModalItem.module.scss';
const cx = classNames.bind(styles);

function OptionItem({ data, checked, setChecked, setCount }) {
    const handleClick = () => {
        setCount(data.price);
    };
    return (
        <li>
            <label className={cx('wrapper-radio')}>
                <input
                    onClick={handleClick}
                    className={cx('radio-input')}
                    type="radio"
                    checked={checked === data.id}
                    onChange={() => setChecked(data.id)}
                />
                <div className={cx('radio-radio')}></div>
                <label className={cx('item-option')}>{data.title}</label>
            </label>
        </li>
    );
}

export default OptionItem;
