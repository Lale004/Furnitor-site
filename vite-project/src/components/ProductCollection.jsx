import React from "react";
import { Link } from "react-router-dom";
import { MdAddShoppingCart } from "react-icons/md";
import { TbHeartFilled, TbHeart } from "react-icons/tb";
import { AiOutlineSearch } from "react-icons/ai";
import { connect } from "react-redux";
function ProductCollection({ props, favorites, dispatch }) {
  const addfavorites = (id, name) => {
    dispatch({
      type: "SET_Favorites",
      payload: [...favorites, { id: id, name: name }],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites, { id: id, name: name }])
    );
  };
  const removefavorites = (id) => {
    dispatch({
      type: "SET_Favorites",
      payload: [...favorites.filter((favorit) => favorit.id !== id)],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites.filter((favorit) => favorit.id !== id)])
    );
  };
  const infavorite = favorites.find((a) => a.id == props.id);
  return (
    <>
      <div className="product">
        <div className="product-img">
          <img src={props.images[0]} alt="" />
          <div className="overlay">
            <Link to={`/product/${props.id}`}>
              <AiOutlineSearch style={{ marginTop: "15px" }} />
            </Link>
            <div className="heart_icon_products">
              {infavorite ? (
                <TbHeartFilled
                  onClick={() => removefavorites(props.id, props.name)}
                />
              ) : (
                <TbHeart onClick={() => addfavorites(props.id, props.name)} />
              )}
              
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="title">
            <h1>{props.name.slice(0,23)}</h1>
          </div>
          <div className="price">
            <p>${props.price} </p>
            <p className="before">${props.prevprice} </p>
            <p className="endirim">40% OFF</p>
          </div>
        </div>
      </div>
    </>
  );
}
const t = (a) => a;
export default connect(t)(ProductCollection);
