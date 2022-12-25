import Favorite from "components/Icons/Favorite";
import Info from "components/Icons/Info";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Container,
  Top,
  FavBtn,
  Icon,
  Contents,
  Text,
  TextBox,
  Inside,
} from "./style";

const Product = ({
  item,
  handleAddRemoveFavProd,
  FavProd,
}) => {

  const textShow = (item, target) => item[target].length > 15
    ? item[target].slice(0, 22).length === item[target].length
      ? item[target].slice(0, 22)
      : `${item[target].slice(0, 22)}...`
    : item[target]

  return (
    <Wrapper>
      <Container>
        <Link to={`/product/${item.id}`}>
          <Top loading="lazy" src={item.image_url} alt={item.title} />
        </Link>
        <FavBtn
          inFavProds={FavProd[item.id]}
          onClick={() => handleAddRemoveFavProd(item)}
        >
          <Favorite style={FavProd[item.id] ? "#fff" : "red"} />
        </FavBtn>
      </Container>
      <Inside>
        <Icon>
          <Info />
        </Icon>
        <Contents>
          <TextBox>
            Title: <Text>
              {textShow(item, "title")}
            </Text>
          </TextBox>
          <TextBox>
            Desc: <Text>
              {textShow(item, "description")}
            </Text>
          </TextBox>
          <TextBox>
            Author: <Text>
              {item.authors}
            </Text>
          </TextBox>
        </Contents>
      </Inside>
    </Wrapper>
  );
};

export default Product;