import React, { Component } from 'react';
import styled from 'styled-components';

class Footer extends Component {
  render() {
    return (
      <FooterWrapper>
        <FooterBanner>
          <Banner1 src="/images/footer001.png" />
          <Banner2 src="/images/footer002.png" />
        </FooterBanner>
        <Wrapper>
          <Inner>
            <InnerTop>
              <InnerTopLeft>
                <MenuBox>
                  <MenuTitle>이용안내</MenuTitle>
                  <MenuList>
                    <MenuItem>검수기준</MenuItem>
                    <MenuItem>이용정책</MenuItem>
                    <MenuItem>패널티 정책</MenuItem>
                    <MenuItem>커뮤니티 가이드라인</MenuItem>
                  </MenuList>
                </MenuBox>
                <MenuBox>
                  <MenuTitle>고객지원</MenuTitle>
                  <MenuList>
                    <MenuItem>공지사항</MenuItem>
                    <MenuItem>서비스소개</MenuItem>
                    <MenuItem>쇼룸안내</MenuItem>
                    <MenuItem>판매자 방문접수</MenuItem>
                  </MenuList>
                </MenuBox>
              </InnerTopLeft>
              <InnerTopRight>
                <ServiceTitle>
                  고객센터
                  <ServicePhone>1588-7813</ServicePhone>
                </ServiceTitle>
                <ServiceTime>
                  <TimeBox>
                    <TimeTerm>운영시간</TimeTerm>
                    <TimeDescription>
                      평일 11:00 - 18:00 (토 ∙ 일, 공휴일 휴무)
                    </TimeDescription>
                  </TimeBox>
                  <TimeBox>
                    <TimeTerm>점심시간</TimeTerm>
                    <TimeDescription>평일 13:00 - 14:00</TimeDescription>
                  </TimeBox>
                </ServiceTime>
                <ServiceNotic>1:1문의는 앱에서만 가능합니다.</ServiceNotic>
                <ServiceBtnWrapper>
                  <ServiceBtn>자주묻는 질문</ServiceBtn>
                </ServiceBtnWrapper>
              </InnerTopRight>
            </InnerTop>
            <InnerMid>
              <MidWrapper>
                <TermList>
                  <TermItem>회사소개</TermItem>
                  <TermItem>인재채용</TermItem>
                  <TermItem>제휴제안</TermItem>
                  <TermItem>이용약관</TermItem>
                  <TermItem>개인정보처리방침</TermItem>
                </TermList>
                <SNS>
                  <SNSItem>
                    <i className="fab fa-instagram" />
                  </SNSItem>
                  <SNSItem>
                    <i className="fab fa-facebook" />
                  </SNSItem>
                  <SNSItem>
                    <i className="fab fa-twitter" />
                  </SNSItem>
                </SNS>
              </MidWrapper>
              <BusinessInfo>
                <InfoList>
                  <BusinessTitle>슈크림 주식회사 대표</BusinessTitle>
                  <BusinessExplain>
                    <Git userName="71summernight">김현진</Git>,
                    <Git userName="p-acid">박산성</Git>,
                    <Git userName="chihunmanse">박치훈</Git>,
                    <Git userName="crescentfull">송영록</Git>,
                    <Git userName="chrisYang256">양가현</Git>,
                    <Git userName="sunhoh">이선호</Git>,
                    <Git userName="sangyouh">하상영</Git>
                  </BusinessExplain>
                  <BusinessTitle>사업자등록번호:</BusinessTitle>
                  <BusinessExplain>580-88-01618 </BusinessExplain>
                  <BusinessTitle>통신판매업:</BusinessTitle>
                  <BusinessExplain>선릉 위워크타워2호점</BusinessExplain>
                </InfoList>
                <InfoList>
                  <BusinessTitle>사업장소재지:</BusinessTitle>
                  <BusinessExplain>
                    슈크림팀 완전짱짱시 짱짱구 짱짱동 117,99층
                  </BusinessExplain>
                  <BusinessTitle>개인정보관리책임자:</BusinessTitle>
                  <BusinessExplain>슈크림</BusinessExplain>
                  <BusinessTitle>호스팅 서비스:</BusinessTitle>
                  <BusinessExplain>네이버 클라우드(주)</BusinessExplain>
                </InfoList>
              </BusinessInfo>
            </InnerMid>
            <InnerBottom>
              <Notice>
                슈크림(주)는 통신판매 중개자로서 통신판매의 당사자가 아니므로
                개별 판매자가 등록한 상품정보에 대해서 책임을 지지 않습니다. 단,
                거래과정에서 검수하고 보증하는 내용에 대한 책임은 당사에
                있습니다.
              </Notice>
              <Copyright>© 2021 SHOE-KREAM.Corp.</Copyright>
            </InnerBottom>
          </Inner>
        </Wrapper>
      </FooterWrapper>
    );
  }
}

export default Footer;
const FooterWrapper = styled.div``;
const FooterBanner = styled.div`
  margin-top: 100px;
  object-fit: cover;
`;
const Banner1 = styled.img`
  width: 50%;
`;
const Banner2 = styled.img`
  width: 50%;
`;

const Wrapper = styled.div`
  bottom: 0;
  min-height: 100px;
  min-width: 1000px;
  z-index: 1000;
  padding: 50px 40px;
  border-top: 1px solid #ebebeb;
  background-color: #fff;
  color: #222;
`;

const Inner = styled.div`
  position: relative;
`;

const InnerTop = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 56px;
  border-bottom: 1px solid #ebebeb;
`;

const InnerTopLeft = styled.div`
  display: flex;
`;

const MenuBox = styled.div`
  margin-right: 100px;
`;

const MenuTitle = styled.strong`
  font-size: 16px;
  letter-spacing: -0.16px;
`;

const MenuList = styled.ul``;

const MenuItem = styled.li`
  font-size: 14px;
  padding-top: 16px;
  letter-spacing: -0.21px;
  color: rgba(34, 34, 34, 0.5);
`;

const InnerTopRight = styled.div`
  width: 270px;
  box-sizing: border-box;
`;

const ServiceTitle = styled.strong`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  letter-spacing: -0.16px;
  font-weight: 700;
`;

const ServicePhone = styled.a`
  margin-left: 4px;
  letter-spacing: normal;
`;

const ServiceTime = styled.div`
  padding-top: 8px;
`;

const TimeBox = styled.dl`
  line-height: 17px;
`;

const TimeTerm = styled.dt`
  margin-right: 4px;
  float: left;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
`;

const TimeDescription = styled.p`
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
`;

const ServiceNotic = styled.p`
  padding-top: 8px;
  font-size: 13px;
  letter-spacing: -0.07px;
`;

const ServiceBtnWrapper = styled.div`
  padding-top: 17px;
`;

const ServiceBtn = styled.a`
  display: inline-block;
  height: 34px;
  padding: 0 14px;
  vertical-align: middle;
  text-align: center;
  text-decoration: none;
  color: #fafafa;
  background-color: #222;
  line-height: 32px;
  cursor: pointer;
`;

const InnerMid = styled.div`
  display: flex;
  flex-direction: column;
`;

const MidWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TermList = styled.ul`
  padding-bottom: 16px;
  display: inline-flex;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
`;

const TermItem = styled.li`
  display: block;
  font-size: 14px;
  letter-spacing: -0.21px;
  color: #000;
  margin-right: 20px;
`;

const SNS = styled.div`
  margin-top: 15px;
`;

const SNSItem = styled.a`
  display: inline-block;
  margin-left: 20px;
`;

const BusinessInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoList = styled.dl``;

const BusinessTitle = styled.dt`
  float: left;
  margin-right: 4px;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
  margin-inline-end: 5px;
`;

const BusinessExplain = styled.dd`
  float: left;
  line-height: 20px;
  font-size: 13px;
  letter-spacing: -0.07px;
  color: rgba(34, 34, 34, 0.5);
  margin-inline-end: 10px;
`;

const InnerBottom = styled.div`
  padding-top: 12px;
  display: flex;
  align-items: flex-end;
`;

const Notice = styled.p`
  max-width: 605px;
  font-size: 12px;
  letter-spacing: -0.06px;
  color: rgba(34, 34, 34, 0.4);
`;

const Copyright = styled.p`
  margin-left: auto;
  flex-shrink: 0;
  font-size: 12px;
  color: rgba(34, 34, 34, 0.3);
`;
const Git = styled.a.attrs(props => ({
  href: `https://github.com/${props.userName}  
`,
}))`
  text-decoration: none;
  color: rgba(34, 34, 34, 0.5);
`;
