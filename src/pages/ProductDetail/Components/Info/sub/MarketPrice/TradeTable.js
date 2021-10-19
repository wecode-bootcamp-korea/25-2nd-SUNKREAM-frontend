import React from 'react';
import styled from 'styled-components';

const TradeTable = props => {
  return (
    <Wrapper>
      <TradeTableBox>
        <thead>
          <tr header>
            {TABLE_HEADER.map((name, idx) => (
              <TableHeader key={idx}>{name}</TableHeader>
            ))}
          </tr>
        </thead>
        {TABLE_DATA.map(data => (
          <tr key={data.id}>
            <TableData>{data.size}</TableData>
            <TableData>{data.price}</TableData>
            <TableData>{data.date}</TableData>
          </tr>
        ))}
      </TradeTableBox>
    </Wrapper>
  );
};

export default TradeTable;

const Wrapper = styled.div`
  padding: 21px 0 20px;
`;

const TradeTableBox = styled.table`
  width: 100%;
`;

const TableHeader = styled.th`
  padding-bottom: 9px;
  text-align: right;
  font-size: 12px;
  border-bottom: 1px solid ${props => props.theme.lightgray};
  color: ${props => props.theme.gray};

  &:nth-child(1) {
    text-align: left;
  }
`;

const TableData = styled.td`
  padding-top: 9px;
  text-align: right;
  font-size: 14px;
  color: ${props => props.theme.deepgray};

  &:nth-child(1) {
    text-align: left;
  }
`;

const TABLE_HEADER = ['사이즈', '거래가', '거래일'];

const TABLE_DATA = [
  {
    id: '1',
    size: '280',
    price: '891,000원',
    date: '21/10/20',
  },
  {
    id: '2',
    size: '280',
    price: '891,000원',
    date: '21/10/20',
  },
  {
    id: '3',
    size: '280',
    price: '891,000원',
    date: '21/10/20',
  },
  {
    id: '4',
    size: '280',
    price: '891,000원',
    date: '21/10/20',
  },
  {
    id: '5',
    size: '280',
    price: '891,000원',
    date: '21/10/20',
  },
];
