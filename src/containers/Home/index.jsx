import { useEffect, useState } from "react";
import Slider from "./Slider";
import { Main, NoItemFuond, PaginationBox, PaginationBtn } from "./style";
import Spinner from "components/Spinner";


import SwiperCore, { EffectCoverflow, Autoplay } from 'swiper';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import { getBooks } from "utils/apis";
import Product from "components/Product";
import { useDispatch, useSelector } from "react-redux";
import { addFav, removeFav } from "store/favReducer";
import { addBook, addCategory } from "store/booksReducer";

// install Swiper modules
SwiperCore.use([EffectCoverflow, Autoplay]);



const HomeContainer = () => {

    const isDark = useSelector((state) => state.mode.isDark);
    const books = useSelector((state) => state.books.books);
    const FavProd = useSelector((state) => state.fav.inFavProds);
    const dispatch = useDispatch();

    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const getRightProducts = async () => {
            setLoading(true);
            if (Object.keys(books).length) {
                setProducts(Object.values(books))
                setLoading(false);
            } else {
                try {
                    const res = await getBooks()
                    if (res.status === 200) {
                        setProducts(res?.data);
                        res?.data?.forEach((item) => {
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
        getRightProducts();
    }, [dispatch, books]);

    const handleAddRemoveFavProd = (item) => {
        const id = item.id;

        if (FavProd[id]) {
            dispatch(removeFav(id));
        } else {
            dispatch(addFav({ ...item, quantity: 1 }));
        }
    };

    const handlePagination = async (key) => {
        let paginateBooks = key * 10;
        let isInBooks = paginateBooks <= Object.keys(books).length

        setLoading(true);
        if (!isInBooks) {
            try {
                const res = await getBooks(paginateBooks)
                if (res.status === 200) {
                    const visibleBooks = res?.data?.slice((paginateBooks) - 10, paginateBooks)
                    setProducts(visibleBooks);
                    res?.data?.forEach((item) => {
                        dispatch(addBook(item));
                        dispatch(addCategory(item.authors));
                    })
                    setLoading(false);
                }
            } catch (err) {
                setLoading(false);
                console.log(err);
            }
        } else {
            const visibleBooks = Object.values(books)?.slice((paginateBooks) - 10, paginateBooks)
            setProducts(visibleBooks);
            setLoading(false);
        }
    }

    return (
        <>
            <Slider />
            <Main>

                {loading ? (
                    <Spinner />
                ) : products.length ? (
                    <Swiper
                        effect='coverflow'
                        spaceBetween={50}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 20,
                            stretch: 0,
                            depth: 200,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        pagination={{ clickable: true }}
                        scrollbar={{ draggable: true }}
                        loop={true}
                        autoplay={{ delay: 3000, disableOnInteraction: false }}

                    >
                        {products?.map((item) => (
                            <SwiperSlide className="item" key={item.id}>
                                <Product
                                    dispatch={dispatch}
                                    FavProd={FavProd}
                                    handleAddRemoveFavProd={handleAddRemoveFavProd}
                                    isDark={isDark}
                                    item={item}
                                    key={item.id}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                ) : (
                    <NoItemFuond isDark={isDark}>
                        there is no products right now!!
                    </NoItemFuond>
                )}
                <PaginationBox>
                    {Array(5)?.fill()?.map((_i, key) => <PaginationBtn onClick={() => handlePagination(key + 1)} key={key} isDark={isDark}>{key + 1}</PaginationBtn>)}
                </PaginationBox>
            </Main>
        </>
    );
};

export default HomeContainer;