import React from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../../Styles/product-card.css'
import { cartActions } from '../../../store/shopping-cart/cartSlice';
const ProductCard = (props) => {
  const { id,  title, price, image01} = props.item
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(
      cartActions.addItem({
        id,
        title,
        image01,
        price,
      })
    );
  };
  return (
    <div className=' product__item gap-4 '>
      <div className="product__img">
        <img src={image01} alt="" className=' w-50' />
      </div>
      <div className="product__content ">
        <h5><Link to={`foods/${id}`}>{title}</Link></h5>
        <div className="card__bottom">
          <span className="product__price">${price}</span>
          <button className="addToCart__btn" onClick={addToCart}>Add To Cart</button>
        </div>
      </div>
    </div>
  )
}

export default ProductCard