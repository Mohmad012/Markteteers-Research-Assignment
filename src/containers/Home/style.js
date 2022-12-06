import styled from'styled-components'


export const Main = styled.main`
  padding: 1rem;
  min-height: calc(100vh - 60px);
  margin-top: 2rem;

  .swiper-container {
    box-shadow: 0 0 10px #006785;
    border-radius: 10px;
    width: 100%;
    background-image: linear-gradient(to bottom,#000000,#000000,#000000,#8899a6,#8899a6);
    padding-top: 50px;
    padding-bottom: 200px;

    .swiper-slide {
      background-position: center;
      background-size: cover;
      width: 300px;

      -webkit-box-reflect: below 2px linear-gradient(transparent,transparent,#0006);

      img{
        max-width: 100%;
        width: 100%;
      }
    }
  }
`;

export const NoItemFuond = styled.p`
  text-align: center;
  text-transform: capitalize;
  transition: 0.3s color;
  color: ${(props) => (props.isDark === true ? "#8899A6" : "#000")};
`;

export const PaginationBox = styled.div`
  margin: 2rem auto;
  display: flex;
  justify-content: center;
  gap: 0.5rem;
`;

export const PaginationBtn = styled.button`
  padding: 10px;
  border-radius: 8px;
  transition: 0.5s background-color;
  background-color: ${(props) => (props.isDark === true ? "#50648f" : "#92879b")};
  color: #fff;
  border: none;
  cursor: pointer;
`;