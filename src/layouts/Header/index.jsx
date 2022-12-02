import {
  Container,
  Wrapper,
  Left,
  Logo,
  Right,
  Icon,
} from "./style";

import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { changeMode } from "store/modeReducer";
import Dark from "./Dark";
import Light from "./Light";
import Favorite from "components/Icons/Favorite";

const Header = () => {
  const isDark = useSelector((state) => state.mode.isDark);

  const dispatch = useDispatch();

  return (
    <Container>
      <Wrapper>
        <Left>
          <Link to="/">
            <Logo isDark={isDark}>SHOW BOOKS</Logo>
          </Link>
        </Left>
        <Right>
          {!isDark ?
            <Dark
              dispatch={dispatch}
              changeMode={changeMode}
            />
            :
            <Light
              dispatch={dispatch}
              changeMode={changeMode}
            />
          }

          <Link to="/favorite">
            <Icon isDark={isDark}>
              <Favorite style={isDark ? "#000" : "#fff"} />
            </Icon>
          </Link>

        </Right>
      </Wrapper>
    </Container >
  );
};

export default Header;
