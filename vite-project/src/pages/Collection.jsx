import { useEffect, useState } from "react";
import { useRef } from "react";
import "./Collection.css";
// import data from "../data.json";
import Pagination from "../components/Pagination";
import Timer from "../components/Timer";
import { RiSearch2Line } from "react-icons/ri";
import { BiFilterAlt } from "react-icons/bi";
import { SlClose } from "react-icons/sl";
import ScrollToTop from "react-scroll-to-top";
import { AiOutlineSearch } from "react-icons/ai";
import { Link } from "react-router-dom";

import { TbHeartFilled, TbHeart } from "react-icons/tb";


function Collection({favorites, dispatch}) {
 const [datas, setDatas] = useState([]);
  useEffect(() => {
    fetch("http://127.0.0.1:8000/list/")
      .then((response) => response.json())
      .then((data) => {
       setDatas(data);
      });
  }, []);
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


  


  useEffect(() => {
    document.title = "Products";
  }, []);
  const filterRef = useRef();
  const showFilter = () => {
    filterRef.current.classList.toggle("responsive_filter");
    console.log("kil");
  };
  // const [products, setProducts] = useState(data);

  const categories = [
    "Bedroom furniture",
    "Guest furniture",
    "Child and Young",
    "Office furniture",
    "Sofas",
    "Chairs",
    "Closet",
  ];

  const [filters, setFilters] = useState({
    category: "",
    new_price: "",
    search: "",
    lower: 100.00,
    upper: 10000.00,
  });
  const [showDiscounted, setShowDiscounted] = useState(true);
  let filteredProducts = datas
    .filter((product) => {
      if (!filters.search) return true;
      return product.name.toLowerCase().includes(filters.search.toLowerCase());
    })
    .filter((product) => {
      if (!filters.category) return true;
      if (filters.category === "all") return true;
      return product.category === filters.category;
    })
    .sort((a, b) => {
      if (!filters.price) return 0;
      if (filters.price === "priceasc") return a.new_price - b.new_price;
      if (filters.price === "pricedesc") return b.new_price - a.new_price;
      if (filters.name === "nameasc")
        return a.name.charCodeAt(0) - b.name.charCodeAt(0);
      if (filters.name === "namedesc")
        return b.name.charCodeAt(0) - a.name.charCodeAt(0);
    })
    .filter((p) => p.new_price >= filters.lower && p.new_price <= filters.upper).filter((product) => {
      if (showDiscounted) {
        return product.old_price > product.new_price; // Sadece indirimli ürünleri göster
      } else {
        return product.old_price === null; // Sadece indirimsiz ürünleri göster
      }
    });



  const [activePage, setActivePage] = useState(1);
  const productPerPage = 9;
  const totalPageCount = Math.ceil(filteredProducts.length / productPerPage);
  if (activePage > totalPageCount) {
    setActivePage(totalPageCount);
  }
  if (!activePage && totalPageCount > 0) {
    setActivePage(1);
  }
  const start = (activePage - 1) * productPerPage;
  const end = start + productPerPage;
  // const [selectedRating, setSelectedRating] = useState(1);
  const searchInputRef = useRef(null);

  // const handleRatingSelect = (rating) => {
  //   setSelectedRating(rating);
  // };

  const resetFilters = () => {
    setFilters({
      category: "",
      price: "",
      search: "",
      lower: 0,
      upper: 10000,
    });
    document.getElementById("0-1000").checked = true;
    document.getElementById("1000-2000").checked = false;
    document.getElementById("2000-4000").checked = false;
    document.getElementById("4000-6000").checked = false;
    document.getElementById("6000-8000").checked = false;
    document.getElementById("8000-10000").checked = false;
    const discountedInput = document.getElementById("discounted-checkbox");
  if (discountedInput.checked) {
    discountedInput.checked = false;
  }
  const nonDiscountedInput = document.getElementById("non-discounted-checkbox");
  if (nonDiscountedInput.checked) {
    nonDiscountedInput.checked = false;
  }

  if (searchInputRef.current) {
    searchInputRef.current.value = "";
  }

  const checkboxes = document.getElementsByName("discount");
  checkboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
  
  };
  // const RatingFilter = ({ selectedRating, onRatingSelect }) => {
  //   const ratings = [1, 2, 3, 4, 5];
  //   return (
  //     <div>
  //       <h1 className="ratingh1">Rating</h1>
  //       <div>
  //         {ratings.map((rating) => (
  //           <span
  //             className="rating-select"
  //             key={rating}
  //             onClick={() => onRatingSelect(rating)}
  //             style={{ color: rating <= selectedRating ? "gold" : "#d8d7d0" }}
  //           >
  //             &#9733;
  //           </span>
  //         ))}
  //       </div>
  //     </div>
  //   );
  // };
  const handleButtonClick = (event) => {
    event.stopPropagation(); 
    resetFilters();
  };
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (!isNaN(value)) {
      const updatedValue = value.trim();
      document.getElementById(id).value = updatedValue;
      setFilters((prevFilters) => ({ ...prevFilters, [id]: updatedValue }));
    }
  };
  const handleFilter = (e) => {
    const updatedFilters = {
      ...filters,
      lower: document.getElementById("lower").value,
      upper: document.getElementById("upper").value,
    };

    setFilters(updatedFilters);
  };

  const applyFilter = () => {
    const selectedPrice = document.querySelector('input[name="price"]:checked').id;
    const [lower, upper] = selectedPrice.split('-').map(Number);
    setFilters({
      ...filters,
      lower: lower,
      upper: upper,
    });
  };



  return (
    <>
      <div className="container">
        <ScrollToTop smooth top="1000" width="20" height="20" color="#fff" />
        <div className="daySale-before">
          <p>
            <Link to="/">
              <span>Home </span>
            </Link>{" "}
            / Products
          </p>
        </div>
        <div className="daySale">
          <div className="daySale-content">
            <h1>Two Day Sale - Up To 40% Off</h1>
            <div className="hourses">
              <Timer duration={20 * 24 * 60 * 60 * 1000} />
            </div>
            <h3>Ending Soon!</h3>
          </div>
        </div>
        <div className="panel-products">
          <div className="res-filter">
            <div className="res-filter-icon" onClick={showFilter}>
              <BiFilterAlt />
              <h1>Filter</h1>
            </div>
            <div className="sort-by res-sort-by">
              <select
                name=""
                id=""
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              >
                <option value="nameasc">Name (A-Z)</option>
                <option value="namedesc">Name(Z-A)</option>
                <option value="priceasc">Price (lowest)</option>
                <option value="pricedesc">Price (highest)</option>
              </select>
            </div>
          </div>
          <div className="res-overlay-filter" ref={filterRef}>
            {" "}
          </div>
          <div className="filter-panel res-panel" ref={filterRef}>
            <div className="res-nav-filer">
              <h1 className="kateqoriya">Category</h1>
              <div className="res-filter-close" onClick={showFilter}>
                <SlClose />
              </div>
            </div>

            <div className="category-filter">
              <ul>
                <li
                  className="category"
                  style={{ cursor: "pointer", userSelect: "none" }}
                  onClick={() => setFilters({ ...filters, category: "all" })}
                >
                  All ({datas.length})
                </li>
                {categories.map((category) => (
                  <li
                    className="category"
                    style={{ cursor: "pointer", userSelect: "none" }}
                    key={category}
                    onClick={() =>
                      setFilters({ ...filters, category: category })
                    }
                  >
                    {category}
                  </li>
                ))}
              </ul>
            </div>

            <div className="price-filter">
              <h1 className="priceh1">Price Range</h1>
              <div className="wrapper">
                <fieldset className="filter-price">
                  <div className="price-wrap">
                    <div className="price-container">
                      <div className="price-wrap-1">
                        <input
                          id="lower"
                          value={filters.lower}
                          placeholder="Min price"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="price-wrap_line"> -</div>
                      <div className="price-wrap-2">
                        <input
                          id="upper"
                          value={filters.upper}
                          placeholder="Max price"
                          onChange={handleChange}
                        />
                      </div>
                     
                    </div>
                    
                  </div>
                </fieldset>
              </div>
            </div>
            <div className="discount-filter">
        <label htmlFor="discounted-checkbox">
          <input
            type="radio"
            id="discounted-checkbox"
            name="discount"
            checked={showDiscounted}
            onChange={() => setShowDiscounted(true)}
          />
          <span className="checkmark"></span>
          Discounted
        </label>

        <label htmlFor="non-discounted-checkbox">
          <input
            type="radio"
            id="non-discounted-checkbox"
            name="discount"
            checked={!showDiscounted}
            onChange={() => setShowDiscounted(false)}
          />
          <span className="checkmark"></span>
          Non-Discounted
        </label>
      </div>
            
          </div>

          <div className="filter-panel">
            <div className="search-filter">
              <input
                type="text"
                placeholder="Search"
                className="search-input"
                onChange={(e) =>
                  setFilters({ ...filters, search: e.target.value })
                }
                ref={searchInputRef}
              />
              <span className="searc-icon-ri">
                <RiSearch2Line />
              </span>
            </div>
            <div className="category-filter">
              <h1 className="kateqoriya">Category</h1>
              <ul>
                <li
                  className="category"
                  style={{ cursor: "pointer", userSelect: "none" }}
                  onClick={() => setFilters({ ...filters, category: "all" })}
                >
                  All ({datas.length})
                </li>
                {categories.map((category) => (
                  <li
                    className="category"
                    style={{ cursor: "pointer", userSelect: "none" }}
                    key={category}
                    onClick={() =>
                      setFilters({ ...filters, category: category })
                    }
                  >
                    {category} (
                    {
                      datas.filter((product) => product.category == category)
                        .length
                    }
                    )
                  </li>
                ))}
              </ul>
            </div>

            <div className="price-filter">
              <h1 className="priceh1">Price Range</h1>
              <div className="wrapper">
                <fieldset className="filter-price">
                  <div className="price-wrap">
                    <div
                      className="price-container"
                      style={{ marginBottom: "10px" }}
                    >
                      <div className="price-wrap-1">
                        <input
                          id="lower"
                          value={filters.lower}
                          placeholder="Min price"
                          onChange={handleChange}
                        />
                      </div>
                      <div className="price-wrap_line"> -</div>
                      <div className="price-wrap-2">
                        <input
                          id="upper"
                          value={filters.upper}
                          placeholder="Max price"
                          onChange={handleChange}
                        />
                      </div>
                      
                    </div>
                    <div class="price-check-filter">
                      <div className="price-column-1">
                      <label for="0-1000">
                        <input
                          type="radio"
                          id="0-1000"
                          name="price"
                          onChange={applyFilter}
                        />
                        <span class="checkmark"></span>
                        0-1000
                      </label>
                      <br />
                      <label for="1000-2000">
                        <input
                          type="radio"
                          id="1000-2000"
                          name="price"
                          onChange={applyFilter}
                        />
                        <span class="checkmark"></span>
                        1000-2000
                      </label>
                      <br />
                      <label for="2000-4000">
                        <input
                          type="radio"
                          id="2000-4000"
                          name="price"
                          onChange={applyFilter}
                        />
                        <span class="checkmark"></span>
                        2000-4000
                      </label>
                      <br />
                      </div>
                      <div className="price-column-2">
                      <label for="4000-6000">
                        <input
                          type="radio"
                          id="4000-6000"
                          name="price"
                          onChange={applyFilter}
                        />
                        <span class="checkmark"></span>
                        4000-6000
                      </label>
                      <br />
                      <label for="6000-8000">
                        <input
                          type="radio"
                          id="6000-8000"
                          name="price"
                          onChange={applyFilter}
                        />
                        <span class="checkmark"></span>
                        6000-8000
                      </label>
                      <br />
                      <label for="8000-10000">
                        <input
                          type="radio"
                          id="8000-10000"
                          name="price"
                          onChange={applyFilter}
                        />
                        <span class="checkmark"></span>
                        8000-10000
                      </label>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </div>
            </div>
            {/* <div className="rating-filter">
              <RatingFilter
                selectedRating={selectedRating}
                onRatingSelect={handleRatingSelect}
              />
            </div> */}

<div className="discount-filter">
        <label htmlFor="discounted-checkbox">
          <input
            type="radio"
            id="discounted-checkbox"
            name="discount"
            checked={showDiscounted}
            onChange={() => setShowDiscounted(true)}
          />
          <span className="checkmark"></span>
          Discounted
        </label>

        <label htmlFor="non-discounted-checkbox">
          <input
            type="radio"
            id="non-discounted-checkbox"
            name="discount"
            checked={!showDiscounted}
            onChange={() => setShowDiscounted(false)}
            
          />
          <span className="checkmark"></span>
          Non-Discounted
        </label>
      </div>
            <button className="clear-filter"  onClick={handleButtonClick} >
              Clear filter
            </button>
          </div>
          <div className="product-pagination">
            <div className="sort-by">
              <p>Showing {filteredProducts.length} Products</p>
              <select
                name=""
                id=""
                onChange={(e) =>
                  setFilters({ ...filters, price: e.target.value })
                }
              >
                <option value="nameasc">Name (A-Z)</option>
                <option value="namedesc">Name(Z-A)</option>
                <option value="priceasc">Price (lowest)</option>
                <option value="pricedesc">Price (highest)</option>
              </select>
            </div>
            <div className="products">
  {filteredProducts?.length > 0 ? (
    filteredProducts.slice(start, end).map((product) => (
      <div className="product" key={product.id}>
        <div className="product-img">
          <img src={product.image1} alt="" />
          <div className="overlay">
            <Link to={`/product/${product.id}`}>
              <AiOutlineSearch style={{ marginTop: "15px" }} />
            </Link>
            <div className="heart_icon_products">
              {favorites && favorites.some((fav) => fav.id === product.id) ? (
                <TbHeartFilled
                onClick={() => removefavorites(product?.id, product?.name)}
                />
              ) : (
                <TbHeart
                onClick={() => addfavorites(product?.id, product?.name)} 
                />
              )}
            </div>
          </div>
        </div>
        <div className="product-details">
          <div className="title">
            <h1>{product?.name.slice(0, 23)}</h1>
          </div>
          <div className="price">
            <p>${product?.new_price} </p>
            {product.old_price ? (
              <p className="before">$ {product.old_price}</p>
            ) : (
              <p></p>
            )}
            <p className="endirim">
              {Math.round(
                ((product.old_price - product.new_price) / product.old_price) *
                  100
              )}
              % OFF
            </p>
          </div>
        </div>
      </div>
    ))
  ) : (
    <div className="no-favorit-produst">
      <img src="./images/Faqs/empty1.png" alt="" />
      <h1>Searched result not found</h1>
    </div>
  )}
</div>

            <div className="pag">
              <Pagination
                totalPageCount={totalPageCount}
                setActivePage={setActivePage}
                activePage={activePage}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collection;
