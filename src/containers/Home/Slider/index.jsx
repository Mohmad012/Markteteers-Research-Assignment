import {
    Container,
    ImgContainer,
    Image,
    NoItemFuond
} from "./style";
import { useEffect, useState } from "react";
import { getBooks } from "utils/apis";
import { useDispatch, useSelector } from "react-redux";
import { addBook, addCategory } from "store/booksReducer";
import Spinner from "components/Spinner";

import SwiperCore, { Navigation } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';


// install Swiper modules
SwiperCore.use([Navigation]);

const Slider = () => {

    const [sliders, setSliders] = useState([]);
    const [loading, setLoading] = useState(false);

    const isDark = useSelector((state) => state.mode.isDark);
    const books = useSelector((state) => state.books.books);
    const dispatch = useDispatch();

    useEffect(() => {
        const getRightSliders = async () => {
            setLoading(true);
            if (Object.keys(books).length) {
                setSliders(Object.values(books))
                setLoading(false);
            } else {
                try {
                    const res = await getBooks()
                    if (res.status === 200) {
                        setSliders(res.data);
                        res.data.forEach((item) => {
                            dispatch(addBook(item));
                            dispatch(addCategory(item.authors));
                        })
                        setLoading(false);
                    }
                } catch (err) {
                    setLoading(false);
                    console.log(err);
                }
            }
        };

        getRightSliders();
    }, [books, dispatch]);

    return (
        <Container>
            <Swiper
                className="SliderBox"
                navigation={true}
                modules={[Navigation]}
                grabCursor={true}
                centeredSlides={true}
                pagination={{ clickable: true }}
                scrollbar={{ draggable: true }}
                loop={true}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
            >
                {loading ? (
                    <Spinner />
                ) : sliders.length ? (
                    sliders?.map((sliderItem, key) => (
                        <SwiperSlide key={key}>
                            <ImgContainer isDark={isDark}>
                                <Image loading="lazy" src={sliderItem.image_url} alt={sliderItem.title} />
                            </ImgContainer>
                        </SwiperSlide>
                    ))
                ) : (
                    <NoItemFuond isDark={isDark}>
                        there is no sliders right now!!
                    </NoItemFuond>
                )}

            </Swiper>
        </Container>
    );
};
export default Slider;