import React from "react";
import { DROPDOWN } from "./data";
import FindList from "../FindList/index.jsx";
import { Wrapper, Container, CategoryWrap } from "./styles";

const fetchData = (categories, cnt) => {
  const res = categories;
  res[cnt - 1].category = categories
    .filter((i, idx) => idx >= cnt - 1)
    .map(i => i.category);
  return res.slice(0, cnt);
};

const Dropdown = ({ isOpen, onMouseLeave }) => {
  const Data = JSON.parse(JSON.stringify(DROPDOWN));
  const DATA = fetchData(Data, 6);
  return (
    <Wrapper isOpen={isOpen} onMouseLeave={onMouseLeave}>
      <Container>
        <CategoryWrap>
          {DATA.map((item, index) => (
            <FindList
              key={index}
              category={item.category}
              subCategory={item.sub}
            />
          ))}
        </CategoryWrap>
      </Container>
    </Wrapper>
  );
};

export default Dropdown;
