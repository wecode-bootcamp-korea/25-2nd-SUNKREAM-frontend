import React, { useCallback, useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductItem from '../../../../components/ProductItem/ProductItem';
import { BASE_URL } from '../../../../config';

export default function Contents({
  showFilterItem,
  productItem,
  setProductItem,
}) {
  const [toggle, setToggle] = useState(true);
  const [checkList, setCheckList] = useState({
    1: false,
    2: false,
    3: false,
  });

  const checkListToggleHandler = e => {
    const newObj = { ...checkList };
    const selected = e.currentTarget.id;

    for (let filter in newObj) {
      filter === selected ? (newObj[filter] = true) : (newObj[filter] = false);
    }
    setCheckList(newObj);

    let sellPrice = '';

    if (selected === '1') {
      sellPrice = 'now_sell_price';
    } else if (selected === '2') {
      sellPrice = 'premium';
    } else {
      sellPrice = 'now_buy_price';
    }

    fetch(`${BASE_URL}/products?sort=${sellPrice}`)
      .then(res => res.json())
      .then(data => {
        setProductItem(data.products_list);
      });
  };

  const [addItem, setAddItem] = useState(false);

  useEffect(() => {
    fetch(`${BASE_URL}/products`, {
      method: 'GET',
    })
      .then(res => res.json())
      .then(data => {
        setProductItem(prev => {
          return [...prev, ...data.products_list];
        });
      });
  }, []);

  const infiniteScroll = useCallback(() => {
    const scrollY = window.scrollY;
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;

    if (scrollY + clientHeight >= scrollHeight) {
      setAddItem(addItem => true);
    } else {
      setAddItem(addItem => false);
    }
  }, []);

  useEffect(() => {
    if (addItem) {
      fetch(`${BASE_URL}/products?offset=${productItem.length}`)
        .then(res => res.json())
        .then(data => {
          setProductItem(prev => {
            return [...prev, ...data.products_list];
          });
        });
    }
  }, [productItem.length, addItem]);

  useEffect(() => {
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [infiniteScroll]);

  useEffect(() => {
    fetch(`${BASE_URL}/products?search=${showFilterItem}`)
      .then(res => res.json())
      .then(data => {
        setProductItem(data.products_list);
      });
  }, [showFilterItem]);

  return (
    <Container>
      <LightBox
        hideLightBox={toggle}
        onClick={() => {
          setToggle(prev => true);
        }}
      />
      <ModalInner>
        <FilterOption>
          <OptionBtn
            onClick={() => {
              setToggle(prev => !prev);
            }}
          >
            <p>인기순</p>
            <i className="fas fa-long-arrow-alt-up" />
            <i className="fas fa-long-arrow-alt-down" />
          </OptionBtn>
        </FilterOption>
        <Modal isClickModal={toggle}>
          {MODAL_LIST.map(filter => (
            <ModalList
              key={filter.id}
              id={filter.id}
              onClick={checkListToggleHandler}
            >
              <CheckIcon checkIcon={!checkList[filter.id]} />
              <div>
                <p>{filter.order}</p>
                <p>{filter.label}</p>
              </div>
            </ModalList>
          ))}
        </Modal>
        <MainContents>
          {productItem.map(itemInfo => (
            <ProductItem
              key={itemInfo.id}
              id={itemInfo.id}
              brand={itemInfo.brand}
              name={itemInfo.name}
              thumbnail_url={itemInfo.thumbnail_url}
              price={itemInfo.release_price}
            />
          ))}
        </MainContents>
      </ModalInner>
    </Container>
  );
}

const Container = styled.div`
  width: 100%;
`;

const LightBox = styled.div`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: transparent;

  ${props => props.hideLightBox && `display:none`}
`;

const ModalInner = styled.div`
  position: relative;
`;

const Modal = styled.ul`
  z-index: 10;
  position: absolute;
  right: 0;
  box-shadow: 0 4px 20px 0 rgb(0 0 0 / 10%);
  border: 1px solid #eee;
  background-color: white;
  cursor: pointer;

  ${props => props.isClickModal && `display:none`};
`;

const ModalList = styled.li`
  display: flex;
  position: relative;
  height: 65px;
  padding: 15px 40px 15px 15px;
  font-size: 14px;

  &:hover {
    background: #f4f4f4;
  }

  p {
    margin-bottom: 10px;
  }

  p:last-child {
    font-size: 12px;
    color: #22222280;
  }
`;

const CheckIcon = styled.i.attrs(() => ({
  className: `fas fa-check`,
}))`
  position: absolute;
  top: 15px;
  right: 15px;
  padding: 5px;
  display: ${props => props.checkIcon && 'none'};
`;

const FilterOption = styled.div`
  position: relative;
  height: 60px;
  display: flex;
`;

const OptionBtn = styled.div`
  z-index: 10;
  position: absolute;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;

  height: 100%;
  font-size: 14px;
  cursor: pointer;

  p {
    margin-right: 5px;
  }

  .fas {
    font-size: 16px;
  }
`;

const MainContents = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

const MODAL_LIST = [
  {
    id: 1,
    order: '프리미엄순',
    label: '발매가 대비 가격이 높은 순서대로 정렬합니다.',
  },
  {
    id: 2,
    order: '즉시 구매가순',
    label: '즉시 구매가가 낮은 순서대로 정렬합니다.',
  },
  {
    id: 3,
    order: '즉시 판매가순',
    label: '즉시 판매가가 높은 순서대로 정렬합니다.',
  },
];
