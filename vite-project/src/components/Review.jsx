import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";
import { AiFillCheckCircle } from "react-icons/ai";
function Review() {
  const reviews = [
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus in beatae nemo, accusantium alias earum animi ea quibusdam error non quasi iste. At consequuntur corrupti ipsam. Et impedit repudiandae suscipit corporis consequuntur voluptate alias delectus facere sequi itaque libero tempora nihil facilis rerum quos aut, commodi accusantium autem numquam odio.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
    {
      name: "Jane Doe",
      review1: "This is a great review",
      review2:
        "Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod me placeat facere possimus, omnis voluptas assumenda.",
      date: "February 1st, 2022",
    },
  ];
  const [arrayRev, setArrayRev] = useState(reviews);

  const [val, setVal] = useState([]);
  const [text, setText] = useState(true);
  const [rev, setRev] = useState({
    name: "Anonim",
    review1: "Writing review",
    review2: "",
    date: "February 1st 2022",
  });
  const [today, setToday] = useState(
    new Date().getFullYear() +
      "-" +
      (new Date().getMonth() > 9
        ? new Date().getMonth()
        : "0" + (new Date().getMonth() + 1)) +
      "-" +
      new Date().getDate()
  );
  const handleAdd = () => {
    const abc = [val];
    setVal(abc);
    setText(false);
  };
  const [disabled,setDisabled] =useState(false);
  const saveReview = () => {
    setArrayRev([rev,...arrayRev ]);
    setTimeout(() => {
      setIsLoading(false);
      setButtonMessage("Success!!");
      setFormState(initalForm);
    }, 1000);
    
    setVal([])
    setDisabled(true);
  };
  const inputValue = (e) => {
    setRev({ ...rev, review2: e.target.value, date: today });
  };

  const [activePage, setActivePage] = useState(1);
  const reviewPerPage = 4;
  const totalPageCount = Math.ceil(reviews.length / reviewPerPage);
  if (activePage > totalPageCount) {
    setActivePage(totalPageCount);
  }
  const start = (activePage - 1) * reviewPerPage;
  const end = start + reviewPerPage;
  const [buttonMessage, setButtonMessage] = useState("Send Message");
  const [loading, setIsLoading] = useState(false);

  return (
    <>
    <div className="rev-sec">
    <div className="review-title">
        <h3>Reviews ({reviews.length})</h3>
        {text ? (
          <button onClick={() => handleAdd()}>Write a review</button>
        ) : (
          <button  onClick={saveReview} disabled={disabled}>
            {loading ? "" : buttonMessage}
          </button>
        )}
      </div>
      <div className="write-review">
          {val.length < 2
            ? val.map((data, i) => {
                return (
                  <div>
                    <input
                      type="text"
                      placeholder="Write A review"
                      onChange={inputValue}
                    />
                  </div>
                );
              })
            : ""}
        </div>
      <div className="reviews">
       
        {arrayRev.slice(start, end).map((review, b) => (
          <div key={b} className="review">
            <div className="basliq">
              <div className="author">
                <p>{review.name}</p>
              </div>
              <div className="buy">
                <p>Verified Buy </p>
                <div className="buy__icon">
                <AiFillCheckCircle/>
                </div>
               
              </div>
              <div className="icons">
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
                <img src="../images/ProductPage/star.png" alt="" />
              </div>
            </div>
            <div className="middle">
              <p>{review.review1}</p>
              <p>{review.review2}</p>
            </div>
            <div className="end">
              <p>{review.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    
     
      <Pagination
        totalPageCount={totalPageCount}
        setActivePage={setActivePage}
        activePage={activePage}
      />
    </>
  );
}

export default Review;
