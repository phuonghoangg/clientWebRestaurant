import classNames from 'classnames/bind';
import styles from './Menu.module.scss';

import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ModalItem from './ModalItem';

const cx = classNames.bind(styles);

function Item({ data }) {
    const [show, setShow] = useState(false);

    const handleClick = () => {
        setShow(true);
    };
    const handleClose = () => {
        setShow(false);
    };

    return (
        <div className={cx('item')}>
            <div className={cx('wrapper-item')} onClick={handleClick}>
                <img src={data.imgUrl} alt="errorImgPizza" />
                <div className={cx('description-item')}>
                    <div className={cx('title-item')}>{data.name}</div>
                    <div className={cx('title-price')}>
                        {data.price}
                        <span>đ</span>
                    </div>
                </div>
            </div>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Body>
                    <ModalItem data={data} handleClose={handleClose} />
                </Modal.Body>
            </Modal>
        </div>
    );
}

export default Item;
