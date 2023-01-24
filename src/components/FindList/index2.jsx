import React,{useState}from "react";
import {
  Wrapper,
  CategoryWrap,
  Category,
  CategoryTitle,
  SubCategoryWrap,
  SubCategory,
  SubCategoryLink,
} from "./styles";

export const SubCate = ({ category, subCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (

<Wrapper>
{Array.isArray(category) ? (
    <CategoryWrap>
      {category.map(i => (
        <Category >
          <CategoryTitle>{i.title}</CategoryTitle>
        </Category>
      ))}
    </CategoryWrap>
  ) : (
    <>
      <Category>
        <CategoryTitle>{category.title}</CategoryTitle>
      </Category>
      <SubCategoryWrap>
        {subCategory.map(i => (
          <SubCategory key={i.title}>
            <SubCategoryLink>{i.title}</SubCategoryLink>
          </SubCategory>
        ))}
      </SubCategoryWrap>
    </>
  )}
  </Wrapper>);
}