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


const FindList = ({ category, subCategory }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Wrapper>
      {Array.isArray(category) ? (
        <CategoryWrap>
          {category.map(i => (
            <Category >
              <CategoryTitle key={i.title} onMouseEnter={setIsOpen}>{i.title}</CategoryTitle>
              <SubCategoryWrap isOpen={isOpen} onMouseLeave={() => setIsOpen(false)} >
              {subCategory.map(i => (
           <>
           <Category>
             <CategoryTitle>{category.title}</CategoryTitle>
           </Category>
           
             {subCategory.map(i => (
               
                 <SubCategoryLink>{i.title}</SubCategoryLink>
               
             ))}
           
         </>
        ))}
              </SubCategoryWrap>
            </Category>
          ))}
        </CategoryWrap>
      ) : (
        <>
          
        </>
        
      )}
      <SubCategoryWrap>
        {subCategory.map(i => (
          <SubCategory key={i.title}>
            <SubCategoryLink>{i.title}</SubCategoryLink>
          </SubCategory>
        ))}
      </SubCategoryWrap>
    </Wrapper>
  );
};

export default FindList;
