import styled from'styled-components'
import { mobile, tablet, lap } from "utils/responsive";

export const Container = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  position: relative;
  overflow: hidden;
  ${mobile({ display: "none" })};

  .SliderBox{
    width: 100%;
    height: 100%;

    .swiper-slide {
      text-align: center;
      font-size: 18px;
      background: #fff;
    
      display: -webkit-box;
      display: -ms-flexbox;
      display: -webkit-flex;
      display: flex;
      -webkit-box-pack: center;
      -ms-flex-pack: center;
      -webkit-justify-content: center;
      justify-content: center;
      -webkit-box-align: center;
      -ms-flex-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    
    .swiper-slide img {
      display: block;
      width: 300px;
      height: 400px;
      margin: 20% auto;
    }
  }

`;

export const ImgContainer = styled.div`
  height: 100%;
  flex: 1;
  align-items: center;
  background-color: ${(props) => props.isDark ? "#0a0c16" : "#00000033"} ;
  ${lap({ display: "flex" })};
  
`;
export const Image = styled.img`
  ${tablet({ width: "95%" })};
  ${lap({ width: "auto", margin: "40px auto" })};
`;

export const NoItemFuond = styled.p`
  text-align: center;
  text-transform: capitalize;
  transition: 0.3s color;
  color: ${(props) => (props.isDark === true ? "#8899A6" : "#000")};
`;