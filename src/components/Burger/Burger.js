import {
  BurgerBtnWrap,
  BurgerContainer,
  BurgerLink,
  BurgerMenu,
  BurgerRoute,
  BurgerWrapper,
  CloseIcon,
  Icon,
} from "./burgerStyles";

const Burger = ({ isOpen, toggle }) => {
  return (
    <BurgerContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <BurgerWrapper>
        <BurgerMenu>
          <BurgerLink to="about" onClick={toggle}>
            About
          </BurgerLink>
          <BurgerLink to="discover" onClick={toggle}>
            Discover
          </BurgerLink>
          <BurgerLink to="services" onClick={toggle}>
            Services
          </BurgerLink>
          <BurgerLink to="signup" onClick={toggle}>
            Sign Up
          </BurgerLink>
        </BurgerMenu>
        <BurgerBtnWrap>
          <BurgerRoute to="/" onClick={toggle}>
            Sign In
          </BurgerRoute>
        </BurgerBtnWrap>
      </BurgerWrapper>
    </BurgerContainer>
  );
};

export default Burger;
