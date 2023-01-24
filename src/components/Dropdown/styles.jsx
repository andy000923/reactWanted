import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  position: absolute;
  top: 5rem;
  left: -15px;
  width: 200px;
  height: 1000px;
  border: 1px ridge;
`;
export const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1rem;
  background-color: #fff;
  box-shadow: 0 40em rgba(0, 0, 0, 0.5);
  margin-top: 0em;
`;
export const CategoryWrap = styled.ul`
  
`;
