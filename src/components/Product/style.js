import styled from'styled-components'

export const Wrapper = styled.div`
  width: 300px;
  height: 400px;
  margin: auto;
  position: relative;
  overflow: hidden;
  border-radius: 10px 10px 10px 10px;
  box-shadow: 0;
  transform: scale(0.95);
  transition: box-shadow .3s, transform .3s;
  &:hover {
    transform: scale(1);
    box-shadow: 5px 20px 30px rgba(0, 0, 0, 0.2);
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Top = styled.img`
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

export const FavBtn = styled.span`
  position: absolute;
  bottom: 45px;
  left: 20px;
  background-color: #fff;
  border-radius: 50%;
  padding: 0.3rem;
  display: flex;
  cursor: pointer;
  transform: scale(0.95);
  transition: all .3s;
  background-color: ${(props) => props.inFavProds ? "#f50057" : "#fff"} ;
  &:hover {
    transform: scale(1);
  }
`;

export const Icon = styled.div`
  position: absolute;
  right: 85px;
  top: 85px;
  color: white;
  opacity: 1;
`;

export const Contents = styled.div`
  padding: 5%;
  opacity: 0;
  transform: scale(0.5);
  transform: translateY(-200%);
  transition: opacity 0.2s, transform 0.8s;

  h1,
  p,
  table {
    color: white;
  }
  p {
    font-size: 13px;
  }
`;
export const Text = styled.span`
  font-weight: bold;
  letter-spacing: 1px;
`
export const TextBox = styled.div`
  margin:1rem 0;
`


export const Inside = styled.div`
  z-index: 9;
  background: #92879b;
  width: 140px;
  height: 140px;
  position: absolute;
  top: -70px;
  right: -70px;
  border-radius: 0px 0px 200px 200px;
  transition: all 0.5s, border-radius 2s, top 1s;
  overflow: hidden;
  cursor: pointer;

  &:hover {
    width: 100%;
    right: 0;
    top: 0;
    border-radius: 0;
    height: 100%;
    ${Icon} {
      opacity: 0;
      right: 15px;
      top: 15px;
    }
    ${Contents} {
      opacity: 1;
      transform: scale(1);
      transform: translateY(0);
    }
  }
`;
