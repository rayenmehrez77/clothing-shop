import styled from "styled-components";

export const CardDropdownContainer = styled.div`
  position: absolute;
  top: 72px;
  right: 60px;
  width: 246px;
  height: 334px;
  display: -webkit-flex;
  display: flex;
  -webkit-flex-direction: column;
  flex-direction: column;
  padding: 9px;
  border: 1px solid #948b8b;
  background-color: white;
  z-index: 5;
  border-radius: 10px;

  button {
    margin-top: auto;
  }
`;

export const CartItemsContainer = styled.div`
  height: 240px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
`;

export const EmptyCard = styled.span`
  margin: 30px auto;
`;
