import { Link } from "react-scroll";
import styled from "styled-components";

export const Button = styled(Link)`
  border-radius: 50px;
  padding: 8px 24px;
  background: ${({ primary }) => (primary ? "#01bf71" : "#010606")};
  color: ${({ dark }) => (dark ? "#010606" : "#01bf71")};
  white-space: nowrap;
  font-size: ${({ fontBig }) => (fontBig ? "20px" : "16px")};
  outline: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: ${({ primary }) => (primary ? "#fff" : "#01bf71")};
    color: ${({ dark }) => (dark ? "#01bf71" : "#010606")};
  }
`;
