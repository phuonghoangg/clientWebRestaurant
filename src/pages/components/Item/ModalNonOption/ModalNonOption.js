import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import classNames from 'classnames/bind';
import styles from './ModalNonOption.module.scss';
import Total from './Total';

const cx = classNames.bind(styles);

function ModalNonOption({ data, handleClose }) {
    const handleClick = () => {
        handleClose();
    };
    return (
        <div className={cx('wrapper')}>
            <div className={cx('left')}>
                <img src={data.imgUrlZoom} alt="error" />
            </div>
            <div className={cx('right')}>
                <button className={cx('btn-close')} onClick={handleClick}>
                    <FontAwesomeIcon icon={faX} />
                </button>
                <div className={cx('title-option')}>
                    <div className={cx('title')}>{data.name}</div>
                    <div className={cx('description')}>{data.description}</div>
                    <hr className={cx('title-hr')} />
                </div>
                <Total handleClick={handleClick} price={data.priceC} />
            </div>
        </div>
    );
}

export default ModalNonOption;
