import classNames from 'classnames/bind';
import styles from './Item.module.scss';

import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import ModalItem from './ModalItem';
import ModalNonOption from './ModalNonOption';

const cx = classNames.bind(styles);

function Item({ data, type }) {
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
                <div className={cx('wrapper-inline')}>
                    <div className={cx('wrapper-img')}>
                        <img src={data.imgUrl} alt="errorImgPizza" />
                    </div>
                    <div className={cx('description-item')}>
                        <div className={cx('title-item')}>{data.name}</div>
                        <div className={cx('title-price')}>
                            {data.price}
                            <span>đ</span>
                        </div>
                    </div>
                </div>
            </div>
            {type === 'pizza' ? (
                <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <ModalItem data={data} handleClose={handleClose} />
                    </Modal.Body>
                </Modal>
            ) : (
                <Modal
                    show={show}
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="contained-modal-title-vcenter"
                    centered
                >
                    <Modal.Body>
                        <ModalNonOption data={data} handleClose={handleClose} />
                    </Modal.Body>
                </Modal>
            )}
        </div>
    );
}

export default Item;
