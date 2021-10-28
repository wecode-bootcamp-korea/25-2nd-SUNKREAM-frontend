import CategoryFilter from './CategoryFilter/CategoryFilter';
import styled from 'styled-components';

export default function Category({
  FILTER_TITLE,
  setProductItem,
  showFilterContents,
  filterToggleHandler,
}) {
  return (
    <Container>
      <CategoryTitle>필터</CategoryTitle>
      {FILTER_TITLE.map(title => (
        <CategoryFilter
          filterToggleHandler={filterToggleHandler}
          setProductItem={setProductItem}
          key={title.id}
          id={title.id}
          titleName={title.titleName}
          placeholder={title.Placeholder}
          filterList={title.filterList}
          showFilterContents={showFilterContents}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  width: 210px;
  margin-right: 15px;
  padding-right: 10px;
  overflow-x: hidden;
  overflow-y: auto;
`;

const CategoryTitle = styled.div`
  height: 60px;
  padding: 25px 0 15px;
  font-size: 14px;
  font-weight: bold;
`;
