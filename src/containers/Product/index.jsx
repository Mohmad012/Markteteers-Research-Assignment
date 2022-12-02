import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

import Layout from "layouts";

import {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Author,
  Format,
  Status,

} from "./style";
import Spinner from "components/Spinner";

const ProductContainer = () => {
  const location = useLocation();
  const id = location.pathname.split("/")[2];
  const isDark = useSelector((state) => state.mode.isDark);
  const books = useSelector((state) => state.books.books);

  const [product, setProduct] = useState({});

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getRightProducts = async () => {
      setLoading(true);
      setProduct(books[id]);
    };
    getRightProducts();
  }, [id, books]);

  return (
    <Container isDark={isDark}>
      <Layout>
        {Object.keys(product).length === 0 ? (
          !loading ? (
            <Wrapper type="no data">
              <Status isDark={isDark}>There Is No Item!!</Status>
            </Wrapper>
          ) : (
            <Wrapper type="Loading">
              <Spinner />
            </Wrapper>
          )
        ) : (
          <Wrapper>
            <ImgContainer>
              <Image loading="lazy" src={product?.image_url} />
            </ImgContainer>
            <InfoContainer>
              <Title isDark={isDark}>{product?.title}</Title>
              <Desc isDark={isDark}>{product?.description}</Desc>

              <Author isDark={isDark}>Author: {product?.authors}</Author>
              <Format isDark={isDark}>Format: {product?.format}</Format>
            </InfoContainer>
          </Wrapper>
        )}
      </Layout>
    </Container>
  );
};

export default ProductContainer;
