import axios from "axios";
import { useState, useEffect } from "react";
import Article from "../../components/Article/Article";
import "./Articles.css";


const Articles = () => {
  const [, setResponseMessage] = useState(null);
  const [articles, setArticles] = useState([]);
  const token = localStorage.getItem("token");
  useEffect(() => {
    const getArticles = async () => {
      try {
        const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/admin/admin-panel/articles`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setArticles(res.data); // Assuming `res.data` contains the array of articles
      } catch (error) {
        if (error.response && error.response.status === 403) {
          setResponseMessage("Forbidden: You do not have access to this resource");
        } else if (error.response && error.response.status === 401) {
          setResponseMessage("Unauthorized: Please log in");
        } else {
          setResponseMessage("An error occurred");
        }
        console.error("Error:", error.response || error);
      }
    };

    getArticles();
  }, []); // Empty dependency array ensures this runs only once on mount

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("image", e.target.image.files[0]);
    formData.append("title", e.target.title.value);
    formData.append("link", e.target.link.value);

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
    } catch (error) {
      if (error.response && error.response.status === 403) {
        setResponseMessage("Forbidden: You do not have access to this resource");
      } else if (error.response && error.response.status === 401) {
        setResponseMessage("Unauthorized: Please log in");
      } else {
        setResponseMessage("An error occurred");
      }
      console.error("Error:", error.response || error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {/* Form fields with labels and required attributes */}
        <div>
          <h1 style={{color: "black"}}>Upload article</h1>
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
        <button type="submit">Upload</button>
      </form>
      <div className="admin-articles">
        <h1 style={{ color: "black" }}>All articles</h1>
        <div className="articles-content">
          {articles.length > 0 ? (
            articles.map((article) => (
              <div key={article.id}>
                <Article title={article.title} img={article.imageUrl} link={article.link} />
                <p>{article.imageId}</p>
              </div>
            ))
          ) : (
            <p>No articles found</p>
          )}
        </div>
      </div>
    </>
  );
};

export default Articles;
