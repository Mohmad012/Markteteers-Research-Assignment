import styled, {css} from'styled-components'
import { mobile, tablet, smMobile } from "utils/responsive";

const commonTransition = () => css`
  transition: 0.3s color;
`;
const commonColor = () => css`
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;

const Container = styled.div``;
const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  min-height: 100vh;
  ${tablet({ padding: "10px", flexDirection: "column", textAlign: "center" })};
  ${smMobile({ textAlign: "center" })};
  ${mobile({ padding: "10px", flexDirection: "column", textAlign: "center" })};
`;
const ImgContainer = styled.div`
  flex: 1;
  height: 50vh;
`;
const Image = styled.img`
  max-width: 100%;
  height: 100%;
  object-fit: cover;
  ${mobile({ height: "40vh" })};
`;
const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })};
`;
const Title = styled.h1`
  font-weight: 200;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Desc = styled.p`
  margin: 20px 0px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Author = styled.p`
  margin: 20px 0px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Format = styled.p`
  margin: 20px 0px;
  ${commonTransition()}
  ${commonColor((props) => props)}
`;
const Status = styled.p`
  width: 100%;
  text-align: center;
  margin: 2rem auto;
  color: ${(props) => (props.isDark === true ? "gray" : "#000")};
`;

export {
  Container,
  Wrapper,
  ImgContainer,
  Image,
  InfoContainer,
  Title,
  Desc,
  Author,
  Format,
  Status
};