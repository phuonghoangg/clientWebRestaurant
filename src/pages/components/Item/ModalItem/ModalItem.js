import { faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import { useEffect, useState } from 'react';
import styles from './ModalItem.module.scss';
import OptionItem from './OptionItem';
import Total from './Total';

const cx = classNames.bind(styles);

const deBanh = [
    { id: 1, title: 'Đế mỏng giòn', price: 0 },
    { id: 2, title: 'Đế dày xốp', price: 0 },
    { id: 3, title: 'Đế vừa', price: 0 },
];

const coBanh = [
    { id: 1, title: 'Cỡ 7 inch = 99,000', price: 99000 },
    { id: 2, title: 'Cỡ 9 inch = 189,000', price: 189000 },
    { id: 3, title: 'Cỡ 12 inch = 279,000', price: 279000 },
];

const tuyChonThem = [
    { id: 1, title: 'Thêm phô mai 9"=15,000', price: 15000 },
    { id: 2, title: 'Thêm gấp đôi phô mai 9"=25,000', price: 25000 },
    { id: 3, title: 'Gấp 3 phô mai 9"=35,000', price: 35000 },
];

const tuyChonVien = [
    { id: 1, title: 'Viền phô mai 9"=59,000', price: 59000 },
    { id: 2, title: 'Viền xúc xích 9"=59,000', price: 59000 },
    { id: 3, title: 'Viền xúc xích phô mai 9"=79,000', price: 79000 },
];

function ModalItem({ data, handleClose }) {
    const [checkedDeBanh, setCheckedDeBanh] = useState(2);
    const [checkedCoBanh, setCheckedCoBanh] = useState(null);
    const [checkedChonThem, setCheckedChonThem] = useState(null);
    const [checkedChonVien, setCheckedChonVien] = useState(null);

    const [countVo, setCountVo] = useState(0);
    const [countCB, setCountCB] = useState(0);
    const [countThem, setCountThem] = useState(0);
    const [countVien, setCountVien] = useState(0);

    const [count, setCount] = useState(189000);

    const handleClick = () => {
        handleClose();
    };
    useEffect(() => {
        // lay cac option de luu vao`  gui vao <Total /> day len api
        // console.log(deBanh[checkedDeBanh - 1].title);
        // if (checkedCoBanh) {
        //     console.log(coBanh[checkedCoBanh - 1].title);
        // }
        let kq = countCB + countThem + countVien;
        setCount(kq);
    }, [countCB, countThem, countVien, countVo]);
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
                    <div className={cx('choose-option-pizza')}>
                        {/* List Option Chọn Đế bánh */}
                        <p className={cx('name-option')}>Chọn đế bánh</p>
                        <ul>
                            {deBanh.map((banh) => {
                                return (
                                    <OptionItem
                                        data={banh}
                                        key={banh.id}
                                        checked={checkedDeBanh}
                                        setChecked={setCheckedDeBanh}
                                        setCount={setCountVo}
                                    />
                                );
                            })}
                        </ul>
                        {/* List Option Chọn cỡ bánh */}
                        <p className={cx('name-option')}>Chọn cỡ bánh</p>
                        <ul>
                            {coBanh.map((coPanh) => {
                                return (
                                    <OptionItem
                                        data={coPanh}
                                        key={coPanh.id}
                                        checked={checkedCoBanh}
                                        setChecked={setCheckedCoBanh}
                                        setCount={setCountCB}
                                    />
                                );
                            })}
                        </ul>
                        {/*List Option Tùy Chọn Thêm */}
                        <p className={cx('name-option')}>Tùy chọn thêm</p>
                        <ul>
                            {tuyChonThem.map((them) => {
                                return (
                                    <OptionItem
                                        data={them}
                                        key={them.id}
                                        checked={checkedChonThem}
                                        setChecked={setCheckedChonThem}
                                        setCount={setCountThem}
                                    />
                                );
                            })}
                        </ul>
                        {/*List Option Tùy chọn viên */}
                        <p className={cx('name-option')}>Tùy chọn viền</p>
                        <ul>
                            {tuyChonVien.map((vien) => {
                                return (
                                    <OptionItem
                                        data={vien}
                                        key={vien.id}
                                        checked={checkedChonVien}
                                        setChecked={setCheckedChonVien}
                                        setCount={setCountVien}
                                    />
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <Total handleClick={handleClick} price={count} />
            </div>
        </div>
    );
}

export default ModalItem;
