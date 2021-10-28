import React from 'react';
import { withRouter } from 'react-router-dom';
import styled from 'styled-components';

function SearchList({ searchList, filterItem }) {
  return (
    <Container searchList={searchList}>
      {filterItem.map(e => {
        return (
          <Inner key={e.id} id={e.id}>
            <SearchImg>
              <img alt="filterItem" src={e.thumbnail_url} />
            </SearchImg>
            <SearchInfo>
              <p>{e.name}</p>
              <p>{e.release_price}</p>
            </SearchInfo>
          </Inner>
        );
      })}
    </Container>
  );
}

export default withRouter(SearchList);

const Container = styled.div`
  position: relative;
  top: 10px;
  height: 469px;
  margin: 0 auto;
  display: ${props => (props.searchList ? 'block' : 'none')};
  background: white;
  box-shadow: 0 3px 6px rgb(0 0 0 / 5%), 0 12px 24px rgb(0 0 0 / 5%);
  overflow: scroll;
`;

const Inner = styled.div`
  display: flex;
  align-items: center;
  margin: 10px;
  cursor: pointer;

  &:hover {
    background-color: #fafafa;
    font-weight: bold;
  }
`;

const SearchImg = styled.div`
  width: 60px;
  height: 60px;

  img {
    width: 100%;
  }
`;
const SearchInfo = styled.div`
  margin-left: 5px;

  p:last-child {
    padding-top: 5px;
    color: #22222280;
  }
`;
