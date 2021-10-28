import React, { Component } from 'react';
import styled from 'styled-components';

class NotResult extends Component {
  render() {
    return (
      <div>
        <Wrapper>
          <NotResultTitle>검색하신 결과가 없습니다.</NotResultTitle>
          <NoteResultContent>
            상품 등록 요청은 앱 1:1 문의하기 로 요청해주세요
          </NoteResultContent>
        </Wrapper>
      </div>
    );
  }
}

export default NotResult;

const Wrapper = styled.div`
  width: 100%;
  align-content: center;
  text-align: center;
`;
const NotResultTitle = styled.div`
  font-size: 16px;
  letter-spacing: -0.16px;
  color: rgba(34, 34, 34, 0.8);
`;
const NoteResultContent = styled.dv`
  padding-top: 6px;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
`;
