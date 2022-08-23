import classNames from 'classnames/bind';
import styles from './NavSlick.module.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';

import 'slick-carousel/slick/slick-theme.css';
import None from './None';

const cx = classNames.bind(styles);

const dataImg = [
    { id: 1, linkImg: 'https://img.dominos.vn/Meat-Free-Menu-PC.jpg' },
    { id: 2, linkImg: 'https://img.dominos.vn/BOGOSUN-PC.jpg' },
    { id: 3, linkImg: 'https://img.dominos.vn/Giam-70-pizza-thu-2-PC.jpg' },
    { id: 4, linkImg: 'https://img.dominos.vn/Mix-Match-89k-PC.jpg' },
    { id: 5, linkImg: 'https://img.dominos.vn/Mua-1-tang-1-PC.jpg' },
];
function NavSlick() {
    var settings = {
        className: 'center',
        centerMode: true,
        dots: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1,
        slidesToScroll: 1,
        rows: 1,
        slidesPerRow: 1,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 4000,
        pauseOnHover: true,
        nextArrow: <None />,
        prevArrow: <None />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <div className={cx('wrapper')}>
            <Slider {...settings}>
                {dataImg.map((item) => {
                    return (
                        <div key={item.id} className={cx('card')}>
                            <img src={item.linkImg} alt="error" />
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}

export default NavSlick;
