import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Profile from './component/Profile';
import Section from './component/Section';
import Invoice from './component/Invoice';
import Favorite from './component/Favorite';
import ItemLists from './component/ItemLists';
import { BASE_URL } from '../../config';

const MyPage = props => {
  const [tradeList, setTradeList] = useState({
    userInfo: {},
    count: [],
    buyList: [],
    sellList: [],
  });

  const [wishList, setWishList] = useState([]);

  const { userInfo, count, buyList, sellList } = tradeList;

  useEffect(() => {
    fetch(`${BASE_URL}/orders`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then(res => res.json())
      .then(data => {
        const {
          user_name,
          user_email,
          user_point,
          buy_order_count,
          buy_order_list,
          sell_order_count,
          sell_order_list,
          buy_on_bidding_count,
          buy_bidding_list,
          sell_on_bidding_count,
          sell_bidding_list,
        } = data.data;
        const buyTotal = buy_order_count + buy_on_bidding_count;
        const sellTotal = sell_order_count + sell_on_bidding_count;

        setTradeList(prev => {
          return {
            ...prev,
            userInfo: {
              userName: user_name,
              userEmail: user_email,
              userPoint: user_point,
            },
            count: [
              [buyTotal, buy_on_bidding_count, buy_order_count],
              [sellTotal, sell_on_bidding_count, sell_order_count],
            ],
            buyList: [...buy_order_list, ...buy_bidding_list],
            sellList: [...sell_order_list, ...sell_bidding_list],
          };
        });
      });
  }, []);

  useEffect(() => {
    fetch(`${BASE_URL}/products/wishlist`, {
      method: 'GET',
      headers: {
        Authorization: localStorage.token,
      },
    })
      .then(res => res.json())
      .then(data => {
        setWishList(data.results);
      });
  }, []);

  return (
    <Wrapper>
      <NavTitle>마이 페이지</NavTitle>
      <Content>
        <Profile userInfo={userInfo} />
        {makeContents(count[0], count[1], buyList, sellList, wishList).map(
          item => {
            const { title, component } = item;
            return (
              <Section key={title} title={title}>
                {component}
              </Section>
            );
          }
        )}
      </Content>
    </Wrapper>
  );
};

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 80px;
  padding: 40px 40px 160px;
`;

const NavTitle = styled.h1`
  padding: 0 0 30px;
  font-size: 30px;
  font-weight: bold;
`;

const Content = styled.main`
  min-width: 600px;
`;

const makeContents = (buyCount, sellCount, buyList, sellList, wishList) => {
  const arr = [
    {
      title: '구매 내역',
      component: (
        <>
          <Invoice count={buyCount} color="orange" />
          <ItemLists list={buyList} />
        </>
      ),
    },
    {
      title: '판매 내역',
      component: (
        <>
          <Invoice count={sellCount} color="mint" />
          <ItemLists list={sellList} />
        </>
      ),
    },
    {
      title: '관심 상품',
      component: <Favorite wishList={wishList} />,
    },
  ];

  return arr;
};
