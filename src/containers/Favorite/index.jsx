import React from "react";
import Layout from "layouts";

import {
    Container,
    Wrapper,
    Title,
    Top,
    TopButton,
    Bottom,
    Info,
    Product,
    ProductDetail,
    Image,
    Details,
    ProductName,
    ProductId,
    Hr,
    RemoveBtn,
} from "./style";

import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFav } from "store/favReducer";

const FavoriteContainer = () => {
    const fav = useSelector((state) => state.fav);
    const categories = useSelector((state) => state.books.categories);

    const isDark = useSelector((state) => state.mode.isDark);

    const dispatch = useDispatch();

    const history = useHistory();

    const handleRemoveItems = (id) => dispatch(removeFav(id));


    return (
        <Container isDark={isDark}>
            <Layout>
                <Wrapper isDark={isDark}>
                    <Title isDark={isDark}>your favorite items</Title>
                    <Top isDark={isDark}>
                        <TopButton
                            onClick={() => history.push("/")}
                            type="TopButton"
                            isDark={isDark}>
                            CONTINUE SHOPPING
                        </TopButton>
                    </Top>
                    <Bottom isDark={isDark}>
                        <Info isDark={isDark}>
                            {categories.map((item, key) => {
                                let authorsBooks = Object.values(fav?.books)?.filter((itemF) => itemF.authors === item)
                                if (authorsBooks?.length) {
                                    return (
                                        <>
                                            <Title type="categories" isDark={isDark} key={key}>{item}</Title>
                                            {
                                                authorsBooks?.map((product, key) => (
                                                    <React.Fragment key={key}>
                                                        <Product isDark={isDark}>
                                                            <ProductDetail isDark={isDark}>
                                                                <Image loading="lazy" isDark={isDark} src={product.image_url} />
                                                                <Details isDark={isDark}>
                                                                    <ProductName isDark={isDark}>
                                                                        {" "}
                                                                        <b> Product: </b> {product.title}
                                                                    </ProductName>
                                                                    <ProductId isDark={isDark}>
                                                                        {" "}
                                                                        <b> ID:</b> {product.id}
                                                                    </ProductId>
                                                                    <RemoveBtn
                                                                        isDark={isDark}
                                                                        onClick={() => handleRemoveItems(product.id)}>
                                                                        remove
                                                                    </RemoveBtn>
                                                                </Details>
                                                            </ProductDetail>
                                                        </Product>
                                                        <Hr isDark={isDark} />
                                                    </React.Fragment>
                                                ))
                                            }
                                        </>
                                    )
                                }

                                return ""
                            })}
                        </Info>
                    </Bottom>
                </Wrapper>
            </Layout>
        </Container>
    );
};

export default FavoriteContainer;