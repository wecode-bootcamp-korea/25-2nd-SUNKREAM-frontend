import React from 'react';
import styled from 'styled-components';

const TradeTable = ({ currentPick, tableData }) => {
  const { tradeType } = currentPick;

  return (
    <Wrapper>
      <TradeTableBox>
        <thead>
          <tr header>
            {TABLE_HEADER[tradeType].map((name, idx) => (
              <TableHeader key={idx}>{name}</TableHeader>
            ))}
          </tr>
        </thead>
        {tableData[tradeType].map(data => {
          const { id, size, price, created_at, count } = data;
          return (
            <tr key={id}>
              <TableData>{size}</TableData>
              <TableData>
                {price && `${price.toLocaleString('kr-KO')}원`}
              </TableData>
              <TableData>{created_at || count}</TableData>
            </tr>
          );
        })}
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

const TABLE_HEADER = {
  orderList: ['사이즈', '거래가', '거래일'],
  sellList: ['사이즈', '판매 희망가', '수량'],
  buyList: ['사이즈', '구매 희망가', '수량'],
};
