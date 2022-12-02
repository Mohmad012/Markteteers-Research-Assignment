import styled, {css} from'styled-components'
import { mobile, smMobile, tablet } from "utils/responsive";

const commonTransition = () => css`
  transition: 0.3s color;
`;
const commonColor = () => css`
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;

const commonDisplay = () => css`
  display: flex;
`;

const commonLighting = (props) => css`
  @keyframes lighting {
    0% {
      box-shadow: ${(props) =>
        props.isDark === true
          ? `0px 0px ${props.type === "TopButton" ? "10px" : "25px"} #898989`
          : "none"};
    }
    20% {
      box-shadow: ${(props) =>
        props.isDark === true
          ? `0px 0px ${props.type === "TopButton" ? "10px" : "25px"} #875030`
          : "none"};
    }
    40% {
      box-shadow: ${(props) =>
        props.isDark === true
          ? `0px 0px ${props.type === "TopButton" ? "10px" : "25px"} #fd5201`
          : "none"};
    }
    60% {
      box-shadow: ${(props) =>
        props.isDark === true
          ? `0px 0px ${props.type === "TopButton" ? "10px" : "25px"} #d19478`
          : "none"};
    }
    80% {
      box-shadow: ${(props) =>
        props.isDark === true
          ? `0px 0px ${props.type === "TopButton" ? "10px" : "25px"} #603a28`
          : "none"};
    }
    100% {
      box-shadow: ${(props) =>
        props.isDark === true
          ? `0px 0px ${props.type === "TopButton" ? "10px" : "25px"} #898989`
          : "none"};
    }
  }
`;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  min-height: 100vh;
`;
const Title = styled.h1`
  font-weight: 300;
  text-align: ${(props) => props.type === "categories" ? "left" : "center"};
  text-transform: uppercase;
  margin: ${(props) => props.type === "categories" ? "2rem 0" : "auto"};
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Top = styled.div`
  ${commonDisplay()}
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  ${mobile({ flexDirection: "column", gap: "0.5rem" })};
  ${tablet({ flexDirection: "column", gap: "1.5rem" })};
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: ${(props) =>
    props.isDark === true ? "0px 0px 10px #898989" : "0px 1px 5px #000000"};

  &:hover {
    animation: ${(props) =>
      props.isDark === true && "lighting 5s linear infinite"};
  }

  ${commonLighting((props) => props)}

  background-color: ${(props) =>
    props.type === "filled" ? "#0000000a" : "transparent"};
  color: ${(props) =>
    props.type === "filled" ? "#000" : props.isDark === true ? "gray" : "#000"};
`;
const Bottom = styled.div`
  ${commonDisplay()}
  justify-content: space-between;
  ${mobile({ flexDirection: "column", gap: "3rem" })};
  ${tablet({ flexDirection: "column", gap: "3rem" })};
`;
const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  ${commonDisplay()}
  justify-content: space-between;
  margin-top: 2rem;
  ${mobile({ flexDirection: "column" })};
`;
const ProductDetail = styled.div`
  flex: 2;
  ${commonDisplay()}
`;

const RemoveBtn = styled.button`
  background-color: ${(props) =>
    props.isDark === true ? "#1b7ab1" : "#7e403b"};
  border: none;
  padding: 16px 2rem;
  cursor: pointer;
  color: rgb(255, 255, 255);
  transition: all 0.3s ease 0s;
  width: fit-content;
  &:hover {
    background-color: ${(props) =>
      props.isDark === true ? "#3ea8e5" : "rgb(201 146 141)"};
  }
`;

const Image = styled.img`
  width: 200px;
  ${smMobile({ margin: "0 auto" })};
`;

const Details = styled.div`
  padding: 20px;
  ${commonDisplay()}
  flex-direction: column;
  justify-content: center;
  gap: 1rem;
`;
const ProductName = styled.span`
  ${commonTransition()}
  ${commonColor((props) => props)}
  ${smMobile({ fontSize: "12px" })};
`;
const ProductId = styled.span`
  ${commonTransition()}
  ${commonColor((props) => props)}
  ${smMobile({ fontSize: "12px" })};
`;
const Hr = styled.hr`
  background-color: ${(props) => (props.isDark === true ? "#2c2c2c" : "#eee")};
  border: none;
  height: 1px;
  ${tablet({ display: "none" })};
`;
export {
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
};
