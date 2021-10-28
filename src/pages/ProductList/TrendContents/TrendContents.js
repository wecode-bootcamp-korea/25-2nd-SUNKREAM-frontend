import React from 'react';
import styled from 'styled-components';

export default function TrendContents({ searchToggleHandler }) {
  return (
    <Container>
      <BrandList>
        {SEARCH_CONTENTS_DATA.map(DATA => (
          <div
            className="brand-item"
            key={DATA.id}
            id={DATA.id}
            onClick={searchToggleHandler}
          >
            <div className="brand-img">
              <img alt="shoes" src={DATA.brandImg} />
            </div>
            <p className="brand-name">{DATA.brandName}</p>
          </div>
        ))}
      </BrandList>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  z-index: 2;
  height: 110px;
  background: white;
`;

const BrandList = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 0 0 16px;

  .brand-item {
    width: 10%;
    cursor: pointer;
  }
  .brand-img {
    display: flex;
    justify-content: center;
  }
  .brand-img img {
    width: 80px;
  }
  .brand-name {
    text-align: center;
    font-size: 13px;
    font-weight: bold;
  }
`;

const SEARCH_CONTENTS_DATA = [
  { id: 1, brandImg: 'images/img01.png', brandName: 'Jodan' },
  { id: 2, brandImg: 'images/img02.png', brandName: 'Dunk' },
  { id: 3, brandImg: 'images/img03.png', brandName: 'Dunk' },
  { id: 4, brandImg: 'images/img04.png', brandName: 'Dunk' },
  { id: 5, brandImg: 'images/img05.png', brandName: '뉴발란스' },
  { id: 6, brandImg: 'images/img06.png', brandName: '사카이' },
  { id: 7, brandImg: 'images/img07.png', brandName: 'Dunk' },
  { id: 8, brandImg: 'images/converse9.png', brandName: '컨버스' },
  { id: 9, brandImg: 'images/converse4.png', brandName: '컨버스' },
  { id: 10, brandImg: 'images/converse10.png', brandName: '컨버스' },
];
