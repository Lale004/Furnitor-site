import React from "react";
import { Link } from "react-router-dom";
import "./404.css";
function page404() {
  return (
    <>
      <section>
        <div className="error-backround">
          <div className="error-right-text">
            <div className="error-text">
              <h1>404</h1>
              <h2>Page not found </h2>
              <div className="error-h4">
                <h4>
                  The page you are looking for no longer exists. Perhaps you can
                  return back to the site’s homepage and see if you can find
                  what you are looking for.
                </h4>
              </div>
              <Link to="/">
                <div className="error-btn">
                  <button>Back Home </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default page404;
