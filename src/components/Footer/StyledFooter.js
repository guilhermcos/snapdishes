import styled from "styled-components";

export const StyledFooter = styled.div`
  width: 100vw;
  min-height: 44px;
  height: 7vh;
  position: fixed;
  left: 0;
  bottom: 0;
  background-color: #000000;
`;

export const NewPostIcon = styled.div`
  position: fixed;
  left: calc(50% - 3vh);
  svg {
    color: #f62e8e;
    font-size: 6vh;
  }
`;

export const IconsList = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 25px;
  padding-right: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  a {
    :nth-child(2) {
      margin-right: 15vw;
    }
    svg {
      font-size: 28px;
    }
  }
`;
