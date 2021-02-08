import styled from "styled-components";
import { CustomButtonStyles } from "../CustomButton/CustomButton.Styles";

export const CollectionItemStyles = styled.div`
  width: 22vw;
  display: flex;
  flex-direction: column;
  height: 350px;
  align-items: center;
  position: relative;
  margin: 1rem;

  ${CustomButtonStyles} {
    position: absolute;
    top: 250px;
    opacity: 0.7;
    display: none;
  }

  &:hover {
    .image {
      opacity: 0.85;
    }

    ${CustomButtonStyles} {
      display: flex;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 95%;
  background-size: cover;
  background-position: center;
  margin-bottom: 5px;
`;

export const CollectionFooter = styled.div`
  width: 100%;
  height: 5%;
  display: flex;
  justify-content: space-between;
  font-size: 18px;

  .name {
    width: 90%;
    margin-bottom: 15px;
  }

  .price {
    width: 10%;
  }
`;
