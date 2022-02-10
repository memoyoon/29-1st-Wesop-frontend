import React, { useState } from 'react';
import './CartModal.scss';
import CartProduct from './CartProduct';
import { CartData } from './CartData';
// import { BASE_URL } from '../../../config';

function CartModal({ cartModal }) {
  const [cartData, setCartData] = useState([]);

  // TODO - 나중에 통신 필요
  // useEffect(() => {
  //   fetch('http://localhost:3000/data/CartData.json')
  //     .then(res => res.json())
  //     .then(data => {
  //       setCartData(data);
  //     });
  // }, []);

  return (
    <div className={cartModal}>
      <div className="cartProducts">
        <div className="cartProductsHeader">
          <div>카트</div>
          <div>사이즈</div>
          <div>수량</div>
          <button className="closeModalBtn">X</button>
        </div>
        <ul>
          {CartData.map(product => {
            function onDelete() {
              setCartData(
                cartData.filter(it => {
                  if (it.id !== product.id) {
                    return product.id;
                  }
                })
              );
            }
            return (
              <CartProduct
                key={product.id}
                productName={product.productName}
                size={product.size}
                onClick={onDelete}
                option={product.option}
                price={product.price}
              />
            );
          })}
        </ul>
      </div>
      <div className="cartSummary">
        <span>전 제품 무료 배송 혜택을 즐겨보세요.</span>
        <div className="cartSummaryMoney">
          <h5> 소계 (세금 포함)</h5>
          <span> ₩ 0원</span>
        </div>
        <button className="payBtn">결제하기</button>
      </div>
    </div>
  );
}

export default CartModal;
