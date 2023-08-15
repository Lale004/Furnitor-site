import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { VscClose } from "react-icons/vsc";
import { HiShoppingBag } from "react-icons/hi";
import { RiSearchLine } from "react-icons/ri";
import ClipLoader from "react-spinners/ClipLoader";
import { connect } from "react-redux";
import "./Favorites.css";
import { MdRemoveShoppingCart } from "react-icons/md";
function Favorites({ products, favorites, basket, dispatch }) {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  useEffect(() => {
    document.title = "Favorites";
  }, []);

  const removefavorit = (id) => {
    dispatch({
      type: "SET_Favorites",
      payload: [...favorites.filter((favorit) => favorit.id !== id)],
    });
    localStorage.setItem(
      "favorites",
      JSON.stringify([...favorites.filter((favorit) => favorit.id !== id)])
    );
  };
  const favorittocard = (id) => {
    const itemIndex = basket.findIndex((item) => item.id === id);

    if (itemIndex === -1) {
      dispatch({
        type: "SET_BASKET",
        payload: [...basket, { id: id, count: 1 }],
      });
      localStorage.setItem(
        "basket",
        JSON.stringify([...basket, { id: id, count: 1 }])
      );
    }
  };
  const favoritremovecard = (id) => {
    dispatch({
      type: "SET_BASKET",
      payload: [...basket.filter((basket) => basket.id !== id)],
    });
    localStorage.setItem(
      "basket",
      JSON.stringify([...basket.filter((basket) => basket.id !== id)])
    );
  };

  
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };
  const filteredFavorites = favorites.filter(favorite =>
    favorite.name?.toLowerCase().includes(searchTerm.toLowerCase())
  ); 
  return (
    <section>
      <div className="banner">
        <div className="baner-text">
          <div
            className={
              toggleState === 1 ? "banner-col active-baner" : "banner-col"
            }
            onMouseEnter={() => toggleTab(1)}
          >
            <div className="ban-text">
              <h1>LIVING</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 2 ? "banner-col active-baner-1" : "banner-col"
            }
            onMouseEnter={() => toggleTab(2)}
          >
            <div className="ban-text">
              <div className="po-text">
                <h1>BEDROOM</h1>
              </div>

              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 3 ? "banner-col active-baner-2" : "banner-col"
            }
            onMouseEnter={() => toggleTab(3)}
          >
            <div className="ban-text">
              <h1>DINING</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 4 ? "banner-col active-baner-3" : "banner-col"
            }
            onMouseEnter={() => toggleTab(4)}
          >
            <div className="ban-text">
              <h1>KİTCHEN</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
          <div
            className={
              toggleState === 5 ? "banner-col active-baner-4" : "banner-col"
            }
            onMouseEnter={() => toggleTab(5)}
          >
            <div className="ban-text">
              <h1>STORAGE</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestiae, animi!
              </p>
            </div>
          </div>
        </div>
        <div className="banner-images">
          <div
            className={toggleState === 1 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1618221312573-404f9a52798d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1932&q=80Z"
              alt=""
            />
          </div>
          <div
            className={toggleState === 2 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1632119289059-793dd347950f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            />
          </div>
          <div
            className={toggleState === 3 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1616486645825-5f8cf98b4053?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1361&q=80"
              alt=""
            />
          </div>
          <div
            className={toggleState === 4 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1633109870201-318921e3f992?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
              alt=""
            />
          </div>
          <div
            className={toggleState === 5 ? "baner-img active-img" : "baner-img"}
          >
            <img
              src="https://images.unsplash.com/photo-1656646424826-c50ece5d75ea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
"
              alt=""
            />
          </div>
        </div>
      </div>

      <div className="fov-center">
        <h1> My Favourites</h1>
        <p>
        Here you can add your favorite products according to the basket.
        </p>
      </div>

      <div className="container">
        <div className="fov-search">
          <input type="text" placeholder="Search..." onChange={handleSearch} />
          <div className="fov-search-icon">
<RiSearchLine/>
          </div>
        </div>
        {favorites.length && filteredFavorites.length ? (
          <div className="favorite">
            {products.length  ? (
              filteredFavorites.map((favorite) => {
                const inBasket = basket.find((a) => a.id == favorite.id);
                const product = products.find(
                  (product) => product.id === favorite.id
                );
                if (!product) {
                  return null;
                }
                return (
                  <div className="favorit-box" key={favorite.id}>
                    <div className="fovorite-img">
                      <img src={product?.image1} alt="" />
                      <span onClick={() => removefavorit(favorite.id)}>
                        <VscClose />
                      </span>
                    </div>
                    <div className="favorite-text">
                      <h1>{product.name.slice(0, 15)}</h1>
                      <div className="fov-titl">
                        <p>${product?.new_price} </p>
                        {inBasket ? (
                          <button
                            onClick={() => favoritremovecard(favorite.id)}
                            className="fovorite-btn"
                          >
                            <MdRemoveShoppingCart />
                          </button>
                        ) : (
                          <button
                            onClick={() => favorittocard(favorite.id)}
                            className="fovorite-btn"
                          >
                            <HiShoppingBag />
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                );
              }))
               :(
              <ClipLoader
              color={color}
              loading={loading}
              cssOverride={override}
              size={150}
              aria-label="Loading Spinner"
              data-testid="loader"
            />)
            }




          </div>
        ) : (
          <div className="no-favorit">
          <img src="./images/Faqs/empty1.png" alt="" />
            <h1>Your cart is empty</h1>
            <p>Looks like you have not added anything to you cart. Go ahead & explore top catogeries.</p>
            <Link to="/products">
              <button>Go Shop</button>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}

const mapStateToProps = (state) => ({
  basket: state.basket,
  products: state.products,
  favorites: state.favorites,
});

export default connect(mapStateToProps)(Favorites);
