import styled from "styled-components";

export const CartIconContainer = styled.div`
  width: 60px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  & .shopping-icon {
    width: 95px;
    height: 34px;
  }

  & .item-count {
    position: absolute;
    font-size: 14px;
    font-weight: bold;
    color: rgb(0, 0, 0);
    bottom: 17px;
  }
`;
