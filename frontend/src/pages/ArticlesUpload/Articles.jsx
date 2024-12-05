import axios from "axios";
import { useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import ButtonNavigate from "../../components/ButtonNavigate";

import "./Articles.css";

const errorMessages = (error, setResponseMessage) => {
  if (error.response && error.response.status === 403) {
    setResponseMessage("Forbidden: You do not have access to this resource");
  } else if (error.response && error.response.status === 401) {
    setResponseMessage("Unauthorized: Please log in");
  } else {
    setResponseMessage("An error occurred");
  }
  console.error("Error:", error.response || error);
};

const ArticleUpload = () => {
  const [responseMessage, setResponseMessage] = useState(null);
  const [loading , setLoading] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    formData.append("title", e.target.title.value);
    formData.append("link", e.target.link.value);
    setLoading(true);
    try {
      const token = localStorage.getItem("token");

      if (!token) {
        setResponseMessage("You are not logged in");
        return;
      }

      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/admin/admin-panel/upload`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponseMessage(res.data.message);
      e.target.reset();
      setLoading(false);
    } catch (error) {
      errorMessages(error, setResponseMessage);
      setLoading(false);
    }
  };


  return (
    <form onSubmit={handleSubmit}>
      <div>
        <h1 style={{ color: "black" }}>Upload article</h1>
        <label htmlFor="image">Image:</label>
        <input type="file" name="image" id="image" accept="image/*" required />
      </div>
      <div>
        <label htmlFor="title">Title:</label>
        <input type="text" name="title" id="title" required />
      </div>
      <div>
        <label htmlFor="link">Link:</label>
        <input type="text" name="link" id="link" required />
      </div>
      <button type="submit" disabled={loading}>Upload</button>
      {responseMessage && <p>{responseMessage}</p>}
      {loading && <p>Loading...</p>}
    </form>
  );
};

const Articles = () => {

  const [responseMessage, setResponseMessage] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/admin/admin-panel/articles`
        );
        setArticles(res.data);
      } catch (error) {
        errorMessages(error, setResponseMessage);
      }
    };

    getArticles();
  }, []);
  

  const deleteArticle = async (id) => {
    if (!id) {
      setResponseMessage("Invalid article ID");
      return;
    }

    const token = localStorage.getItem("token");
    try {
      const res = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/admin/admin-panel/delete/${id}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setResponseMessage(res.data.message);
      setArticles((prevArticles) => prevArticles.filter((article) => article._id !== id));
    } catch (error) {
      errorMessages(error, setResponseMessage);
    }
  };

  return (
    <>
      <ArticleUpload />
      <div className="admin-articles">
        <h1 style={{ color: "black" }}>All articles</h1>
        <div className="articles-content">
          {articles && articles.length > 0 ? (
            articles.map((article) => {
              if (!article || !article._id || !article.title) {
                return <p key={article._id}>Invalid article data</p>;
              }
              return (
                <div key={article._id}>
                  <Article title={article.title} img={article.imageUrl} link={article.link} />
                  <button onClick={() => deleteArticle(article._id)}>Delete article</button>
                </div>
              );
            })
          ) : (
            <p>No articles found</p>
          )}
        </div>
      </div>
      {responseMessage && <p>{responseMessage}</p>}
      <ButtonNavigate route="/admin" text="Back" className="back-btn" />
    </>
  );
};

export default Articles;
