import React, { useState } from "react";

function RangeSlider({ products, setProducts }) {
  const [lower, setLower] = useState(1000);
  const [upper, setUpper] = useState(15000);
  const [ferq, setFerq] = useState(18000);
  const lowerVal = (e) => {
    setLower(e.target.value);
  };
  const upperVal = (e) => {
    setUpper(e.target.value);
  };

  const filterPrice = () => {
    console.log("filterPrice");
    if (upper > lower) {
      setFerq(upper - lower);
      const pricefilter = products.filter((a) => a.price < ferq);
      setProducts(pricefilter);
    } else {
      setFerq(lower - upper);
      const pricefilter = products.filter((a) => a.price < ferq);
      setProducts(pricefilter);
    }
  };
  return (
    <>
      <div className="wrapper">
        <fieldset className="filter-price">
          <div className="price-field">
            <input
              type="range"
              min="200"
              max="18000"
              value={lower}
              id="lower"
              onChange={lowerVal}
            />
            <input
              type="range"
              min="200"
              max="18000"
              value={upper}
              id="upper"
              onChange={upperVal}
            />
          </div>
          <div className="price-wrap">
            <div className="price-container">
              <div className="price-wrap-1">
                <label htmlFor="one">$</label>
                <input id="one" value={lower} />
              </div>
              <div className="price-wrap_line"> - </div>
              <div className="price-wrap-2">
                <label htmlFor="two">$</label>
                <input id="two" value={upper} />
              </div>
            </div>
            <span className="price-title" onClick={() => filterPrice()}>
              FILTER
            </span>
          </div>
        </fieldset>
      </div>
    </>
  );
}

export default RangeSlider;
