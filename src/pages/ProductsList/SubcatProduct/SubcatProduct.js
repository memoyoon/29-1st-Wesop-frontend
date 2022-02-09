import React from 'react';
import { useNavigate } from 'react-router-dom';
import CartAdd from '../CartAdd/CartAdd';
import './SubcatProduct.scss';

function SubcatProduct({ name, detail, skinType, keyIngredient }) {
  const navigate = useNavigate();
  const goToDetail = () => {
    navigate(`/skin/products/${detail[0].product_id}`);
  };
  return (
    <div className="subcatProduct" onClick={goToDetail}>
      <img
        className="subcatProductImage"
        src="/images/products/product.webp"
        alt={name}
      />
      <div className="subcatProductsDetailList">
        <div className="productsDetail">
          <p className="productsName">{name}</p>
          <div className="productsDetailDescription">
            {/* 삼항 연산자 */}
            {
              (detail.length = 1 ? (
                <>
                  <span className="size">{detail[0].size} </span>
                  <span> /</span>
                  <span className="price">
                    <span> ₩ </span>
                    {(+detail[0].price).toLocaleString()}
                  </span>
                </>
              ) : (
                <>
                  <span className="size">2 사이즈</span>
                  <span> /</span>
                  <span className="price">
                    <span> ₩ </span>
                    {(+detail[0].price).toLocaleString()} 원부터
                  </span>
                </>
              ))
            }
          </div>
        </div>

        <div class="SubcatProductsDetails">
          <ul class="SubcatProductsDetailsList">
            <li class="SubcatProductsDetailsListItem">
              <div class="SubcatProductsDetailsTitle">피부 타입</div>
              <div class="SubcatProductsDetailsContent">{skinType}</div>
            </li>
            <li class="SubcatProductsDetailDetailslistItem">
              <div class="SubcatProductsDetailDetailsTitle">주요 성분</div>
              <div class="SubcatProductsDetailDetailsContent">
                {keyIngredient}
              </div>
            </li>
          </ul>
        </div>

        <CartAdd />
      </div>
    </div>
  );
}

export default SubcatProduct;
