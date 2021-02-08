import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;
  padding: 0.2rem;

  img {
    width: 30%;
    object-fit: contain;
  }
`;

export const CartItemDetailsContainer = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 0 10px;

  .name {
    font-size: 16px;
  }
`;
