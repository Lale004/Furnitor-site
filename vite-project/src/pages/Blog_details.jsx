import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./Blog_details.css";
// import axios from 'axios';

function Blog_details() {
  const { id } = useParams();
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/blogs/`)
      .then((response) => response.json())
      .then((json) => {
        setBlogs(json);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  console.log(blogs);
  const blog = blogs.find((item) => item.id === parseInt(id));
  console.log(blog);
  return (
    <>
      <section className="image__main">
        <div className="conteiner">
          <div className="bigimage"></div>
        </div>
      </section>
      <section className="text__main">
        <div className="container">
          <div className="text_center_blog">
            <h1>{blog?.title}</h1>
          </div>

          <div className="blog_detls">
            <div className="blog_own">
              <div className="blog__info">
                <div className="blog_info_img">
                  <img
                    src="https://contentgrid.homedepot-static.com/hdus/en_US/DTCCOMNEW/Articles/best-furniture-for-your-home-2022-section-1.jpg"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="blog_two">
              <div className="blog_center">
                <h2>Latest News</h2>
              </div>
              <div className="news_blogs">
                <div className="news_blog">
                  <div className="news_blog_h1">
                    {blogs[0]?.title}
                  </div>
                  <div className="news_blog_date">{blogs[0]?.created_date}</div>
                </div>
                <div className="news_blog">
                  <div className="news_blog_h1">
                  {blogs[1]?.title}
                  </div>
                  <div className="news_blog_date">{blogs[1]?.created_date}</div>
                </div>
                <div className="news_blog">
                  <div className="news_blog_h1">
                  {blogs[2]?.title}
                  </div>
                  <div className="news_blog_date">{blogs[2]?.created_date}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="section_blog_2">
            {/* <p className="sec-blog-text">{blogs.descript1}</p> */}
            {/* <p className="sec-blog-text">{blog?.title}</p> */}

            <div className="info__card">
              <p className="aforizm">"A house is not a home unless it contains food and fire for the mind as well as the body." </p>
              <p className="aforizm">Benjamin Franklin</p>
            </div>
            <h2 className="qust1">{blog?.question1}</h2>
            <p className="qust2">{blog?.answer1}</p>


            <h2 className="qust1">{blog?.question2}</h2>
<p className="qust2">{blog?.answer2}</p>
          </div>
        </div>
      </section>
      {/* <section className="author__section">
        <div className="container">
          <div className="author__sectionfoot">
            <div className="author__image">
              <img src={blogs.image} alt="" />
            </div>
            <div className="author__text">
              <h1>{blogs.title}</h1>
              <h6>Dizayner</h6>
              <p>{blogs.designer_about}</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
}

// src/components/ReviewForm.js

const ReviewForm = ({ onSubmit }) => {
  const [userName, setUserName] = useState("");
  const [reviewText, setReviewText] = useState("");

  const handleSubmit = () => {
    onSubmit({ userName, reviewText });
    setUserName("");
    setReviewText("");
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Your Name"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
      />
      <textarea
        placeholder="Your Review"
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      />
      <button onClick={handleSubmit}>Submit Review</button>
    </div>
  );
};

const ReviewList = () => {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("/api/reviews/")
      .then((response) => response.json())
      .then((data) => setReviews(data))
      .catch((error) => console.error("Error fetching reviews:", error));
  }, []);

  return (
    <div>
      <h2>User Reviews</h2>
      {reviews.map((review) => (
        <div key={review.id}>
          <p>{review.user_name}</p>
          <p>{review.review_text}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Blog_details;
