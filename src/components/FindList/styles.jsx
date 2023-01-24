import styled from "@emotion/styled";

export const Wrapper = styled.li`
 
`;
export const CategoryWrap = styled.div`
  margin-top: 100px;
  display: flex;
  flex-direction: column;
`;

export const Category = styled.a`
  padding-bottom: 2.5rem;
  padding-top: 2rem;
  cursor: pointer;
  text-decoration: none;
  
`;
export const CategoryTitle = styled.h3`
  position: relative;
  font-size: 1.3rem;
  font-weight: 700;
  line-height: 0.1em;
  text-align: left;
  margin-left: 2.5em;
  color: #000;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    right: 0;
    width: 1rem;
    height: 1rem;
    transform: translateY(-50%);
  }
`;
export const SubCategoryWrap = styled.ul`
display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
position: absolute;
top: -1px;
left: 199px;
width: 200px;
height: 1000px;
border: 1px ridge;
background-color: #fff;

`;
export const SubCategory = styled.li`
 
`;
export const SubCategoryLink = styled.a`
  position: relative;
  display: flex;
  width: 100%;
  font-size: 0.9rem;
  line-height: 1.1;
  color: #bdbdbd;
  text-decoration: none;
`;
