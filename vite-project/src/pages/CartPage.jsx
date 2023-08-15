import { useState, useEffect } from "react";
import Confetti from "react-confetti"
import Cards from "react-credit-cards-2";
import "react-credit-cards-2/dist/es/styles-compiled.css";
import { connect } from "react-redux";
import "./CartPage.css";
import { AiFillCheckCircle } from "react-icons/ai";
function CartPage({ products, basket, dispatch }) {

const iconsremove='iconsremove.png'
const iconsremovePath=`/static/${iconsremove}`

const empty2='empty2.png'
const empty2Path=`/static/${empty2}`


  useEffect(() => {
    document.title = "Card";
  }, []);
  const Countchange = (id, c) => {
    let tempBasket = [...basket];
    let basketElement = tempBasket.find((t) => t.id === id);
    basketElement.count += c;
    if (basketElement.count < 1) {
      basketElement.count = 1;
    }
    dispatch({
      type: "SET_BASKET",
      payload: tempBasket,
    });
    localStorage.setItem("basket", JSON.stringify(tempBasket));
  };

  let subtotal = 0;
  basket.forEach((basketItem) => {
    let product = products.find((a) => a.id === basketItem.id);
    subtotal += product?.new_price * basketItem.count;
  });
  console.log(subtotal);
  const [circle1, setCircle1] = useState(false);
  const handleSubmit = (evt) => {
    evt.preventDefault();
    setTimeout(() => {}, 1500);
  };

  const [state, setState] = useState({
    number: "",
    expiry: "",
    cvc: "",
    name: "",
    focus: "",
  });

  const [crediModal, setCrediModal] = useState(false);
  const [contactModal, setContactModal] = useState(false);

  const toggleCrediModal = () => {
    if (subtotal != 0) {
      setCrediModal(!crediModal);
    }
  };

  const handleInputChange = (evt) => {
    const { name, value } = evt.target;
    setState((prev) => ({ ...prev, [name]: value }));
  };

  const handleInputFocus = (evt) => {
    setState((prev) => ({ ...prev, focus: evt.target.name }));
  };
  const [baskets, setBaskets] = useState(basket);
  const handleOkButtonClick = () => {
    setBaskets([]);
    dispatch({
      type: "SET_BASKET",
      payload: baskets,
    });
    localStorage.setItem("basket", JSON.stringify(baskets));
    setCrediModal(false);
    setContactModal(!contactModal);
    console.log("klik");
  };
  const [errorMessage, setErrorMessage] = useState("");
  const handleSubmitt = (evt) => {
    evt.preventDefault();
    if (
      state.number === "" ||
      state.expiry === "" ||
      state.cvc === "" ||
      state.name === ""
    ) {
      setErrorMessage("Please fill in all fields!");
      return;
    } else {
      setErrorMessage("");
    }
    handleOkButtonClick();
  };

  const removeproduct = (id)=>{
    let tempBasket = [...basket];
  tempBasket = tempBasket.filter((t) => t.id !== id);
    dispatch({
      type: "SET_BASKET",
      payload: tempBasket,
    });
    localStorage.setItem("basket", JSON.stringify(tempBasket));
  }

  return (
    <section>
      <div className="container">
        <div className="daySale-before">
          <p>
            <span>Home </span> / SHOPPING CART
          </p>
        </div>
        <div className="shopping-carts">
          <div className="shopping">
            <div className="shopping-text">
              <h1>Shopping Cart</h1>
              <p>{basket.length} items</p>
            </div>
            <div className="cart-table">
              <div className="table-text">
                <h3>Products</h3>
              </div>
              <div className="table-text2">
                <h3>Quantity</h3>
              </div>
              <div className="table-text3">
                <h3>Total</h3>
              </div>
            </div>
            <div className="cards">
              {products.length ? (
                basket.length ? (
                  basket.map((basketItem) => {
                    let product = products.find((a) => a.id === basketItem.id);
                    let total = product?.new_price * basketItem.count;
                    console.log(total);
                    return (
                      <div className="card-col">
                        <div className="cart">
                          <div className="cart-img">
                            <img src={product?.image1} alt="" />
                            <h2>{product?.name}</h2>
                          </div>
                          <div className="cart-operations">
                            <button
                              onClick={() => Countchange(basketItem.id, -1)}
                            >
                              -
                            </button>
                            <div className="amount-style">
                              {basketItem.count}{" "}
                            </div>
                            <button
                              onClick={() => Countchange(basketItem.id, 1)}
                            >
                              +
                            </button>
                          </div>
                          <div className="cart-total">
                            <h3>${total} </h3>
                          </div>
                          <div className="cart-remove" onClick={()=>removeproduct(basketItem.id)}>
                            <img src={iconsremovePath} alt="" />
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="no-favorit-cart">
                  <img src={empty2Path} alt="" />
                    <h1>Your cart is empty</h1>
                    <p>Looks like you have not added anything to you cart. Go ahead & explore top catogeries.</p>
                 
                  </div>
                )
              ) : (
                <h1>loading</h1>
              )}
            </div>
          </div>
          <div className="order">
            <div className="shopping-text">
              <h1>Order Summary</h1>
            </div>

            <div className="order-card">
              <div className="subtotal">
                <h4>Subtotal</h4>
                <h3>{subtotal.toFixed(2)}</h3>
              </div>
              <p>(includes $416.67 20% VAT)</p>
              <div
                className={
                  !circle1 ? "free-shopping clickfree" : "free-shopping"
                }
                onClick={() => setCircle1(false)}
              >
                <div className="free">
                  <span className={circle1 ? "crucle click" : "crucle"}></span>
                  <h4>Standard Free Shipping</h4>
                </div>
                <h4>£00.00</h4>
              </div>
              <div
                className={
                  circle1 ? "free-shopping clickfree" : "free-shopping"
                }
                onClick={() => setCircle1(true)}
              >
                <div className="free">
                  <span className={!circle1 ? "crucle click" : "crucle"}></span>
                  <h4>Premium Shipping</h4>
                </div>
                <h4>$118.80</h4>
              </div>
              <div className="subtotal">
                <h4>Total</h4>
                <h3>
                  $
                  {!circle1
                    ? `${subtotal.toFixed(2)}`
                    : `${(subtotal > 118.2 ? subtotal - 118.2 : 0).toFixed(2)}`}
                </h3>
              </div>
              <button className="shoppingBtn" onClick={toggleCrediModal}>
                Proceed To Checkout
              </button>
              <img src="./img/Groupvisa.svg" alt="" srcset="" />
              <p className="free-p">
                Discount prices will be active after entering the checkout
                process
              </p>
            </div>
          </div>
        </div>
      </div>
      {crediModal && (

        <div className="creditCard">
          <div className="overlay-contact" onClick={toggleCrediModal}></div>
          <div className="credit-modal">
            <div className="credit-card">
              <Cards
                number={state.number}
                expiry={state.expiry}
                cvc={state.cvc}
                name={state.name}
                focused={state.focus}
              />
            </div>
            <div className="credit_card_form">
              <form onSubmit={handleSubmit}>
                <input
                  className="numberinput"
                  type="number"
                  name="number"
                  placeholder="Card Number"
                  value={state.number}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  value={state.name}
                  onChange={handleInputChange}
                  onFocus={handleInputFocus}
                />
                <div className="card-ex">
                  <input
                    className="numberinput"
                    type="number"
                    name="expiry"
                    placeholder="MM/YY Expiry"
                    value={state.expiry}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                  <input
                    className="numberinput"
                    type="number"
                    name="cvc"
                    placeholder="CVC"
                    value={state.cvc}
                    onChange={handleInputChange}
                    onFocus={handleInputFocus}
                  />
                </div>
                {errorMessage && (
                  <p className="error-message">{errorMessage}</p>
                )}
                <button className="crediBtn" onClick={handleSubmitt}>
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {contactModal && (
        <div className="seccess_box">
          <Confetti />
          <div className="overlay-contact" onClick={handleOkButtonClick}></div>
          <div className="suc-box">
            <div className="sucses-icon">
              <AiFillCheckCircle />
            </div>
            <div className="box__text">Thank You!</div>
            <button onClick={handleOkButtonClick} className="contact-modal-btn">
              OK
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
const t = (a) => a;
export default connect(t)(CartPage);