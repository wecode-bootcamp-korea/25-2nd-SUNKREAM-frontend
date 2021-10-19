import React, { useState } from 'react';
import styled from 'styled-components';
import DropDown from './Dropdown';
import Guideline from './Guideline';

const CheckList = props => {
  const [currentToggle, setCurrentToggle] = useState(-1);

  const handleDropdown = id => {
    setCurrentToggle(currentToggle === id ? -1 : id);
  };

  return (
    <CheckListBox>
      <Header>구매 전 꼭 확인해주세요!</Header>
      {DROPDOWN_LIST.map((item, idx) => (
        <DropDown
          id={idx}
          key={idx}
          item={item}
          currentToggle={currentToggle}
          handleDropdown={handleDropdown}
        />
      ))}
      <GuideLineBox>
        {GUIDELINE_LIST.map((item, idx) => (
          <Guideline key={idx} item={item} />
        ))}
      </GuideLineBox>
      <Notice>{NOTICE}</Notice>
    </CheckListBox>
  );
};

export default CheckList;

const Header = styled.h3`
  padding-bottom: 12px;
  font-size: 18px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.lightgray};
`;

const CheckListBox = styled.div`
  padding-top: 39px;
`;

const GuideLineBox = styled.div`
  margin-top: 40px;
`;

const Notice = styled.p`
  margin-top: 20px;
  padding-top: 40px;
  word-break: keep-all;
  border-top: 1px solid ${({ theme }) => theme.lightgray};
  font-size: 12px;
  color: ${({ theme }) => theme.gray};
`;

// 상수 데이터

const DROPDOWN_LIST = [
  {
    title: '배송 기간 안내',
    contents: [
      {
        main: 'SHOE-KREAM은 최대한 빠르게 모든 상품을 배송하기 위해 노력하고 있습니다. 배송 시간은 판매자가 검수를 위하여 상품을 검수센터로 보내는 속도에 따라 차이가 있습니다',
        content: [
          '- 거래가 체결된 시점부터 48시간(일요일•공휴일 제외) 내에 판매자가 상품을 발송해야 하며, 통상적으로 발송 후 1-2일 내에 SHOE-KREAM 검수센터에 도착합니다.',
          '- 검수센터에 도착한 상품은 입고 완료 후 3영업일 이내에 검수를 진행합니다. 검수 합격시 배송을 준비합니다.',
          '* 상품 종류 및 상태에 따라 검수 소요 시간은 상이할 수 있으며, 구매의사 확인에 해당할 경우 구매자와 상담 진행으로 인해 지연이 발생할 수 있습니다.',
          '- 검수센터 출고는 매 영업일에 진행하고 있으며, 출고 마감시간은 오후 5시입니다. 출고 마감시간 이후 검수 완료건은 운송장번호는 입력되지만 다음 영업일에 출고됩니다.',
        ],
      },
    ],
  },
  {
    title: '검수 안내',
    contents: [
      {
        main: '판매자의 상품이 검수센터에 도착하면 전담 검수팀이 철저한 분석과 검사로 정가품 확인을 진행합니다.',
        content: [
          '- 검수센터에서는 정가품 여부를 확인하기 위하여, 지속적으로 데이터를 쌓고 분석하여 기록하고 있습니다.',
          '- 업계 전문가로 구성된 검수팀은 박스와 상품의 라벨에서 바느질, 접착, 소재 등 모든 것을 검수합니다.',
        ],
      },
      {
        main: '검수 결과는 불합격•검수 보류•합격의 세가지 상태로 결과가 변경됩니다.',
        content: [
          '* 검수 합격: SHOE-KREAM 검수택(Tag)이 부착되어 배송을 준비함',
          '* 검수 보류: 앱에서 사진으로 상품의 상태 확인 및 구매 여부를 선택. (24시간 이후 자동 검수 합격)',
          '* 검수 불합격: 즉시 거래가 취소되고 구매하신 금액을 환불 처리함.(환불 수단은 결제 수단과 동일)',
        ],
      },
    ],
  },
  {
    title: '구매 환불/취소/교환 안내',
    contents: [
      {
        main: 'SHOE-KREAM은 익명 거래를 기반으로 판매자가 판매하는 상품을 구매자가 실시간으로 구매하여 거래를 체결합니다.',
        content: [
          '- 단순 변심이나 실수에 의한 취소/교환/반품이 불가능합니다. 상품을 원하지 않으시는 경우 언제든지 SHOE-KREAM에서 재판매를 하실 수 있습니다.',
          '- 상품 수령 후, 이상이 있는 경우 SHOE-KREAM 고객센터로 문의해주시기 바랍니다.',
        ],
      },
    ],
  },
];

const GUIDELINE_LIST = [
  {
    icon: 'far fa-check-circle',
    title: '100% 정품 보증',
    content:
      'SHOE-KREAM에서 검수한 상품이 정품이 아닐 경우, 구매가의 3배를 보상합니다.',
  },
  {
    icon: 'fas fa-search',
    title: '엄격한 다중 검수',
    content:
      '모든 상품은 검수센터에 도착한 후, 상품별 전문가 그룹의 체계적인 시스템을 거쳐 검수를 진행합니다.',
  },
  {
    icon: 'fas fa-box-open',
    title: '정품 인증 패키지',
    content:
      '검수에 합격한 경우에 한하여 SHOE-KREAM의 정품 인증 패키지가 포함된 상품이 배송됩니다.',
  },
];

const NOTICE =
  '슈크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아닙니다. 본 상품은 개별판매자가 등록한 상품으로 상품, 상품정보, 거래에 관한 의무와 책임은 각 판매자에게 있습니다. 단, 거래과정에서 검수하고 보증하는 내용에 대한 책임은 슈크림(주)에 있습니다.';
