import React from "react";
import { useParams } from "react-router-dom";
import Query from "../../components/Query";
import ReactMarkdown from "react-markdown";
import ARTICLE_QUERY from "../../queries/article/article";
import PostForm from "../../components/PostForm";
import AllComments from "../../components/PostForm/allComments";
import "../../../src/index.css";

const Article = () => {
  let { id } = useParams();

  return (
    <Query query={ARTICLE_QUERY} id={id}>
      {({ data: { article } }) => {
        const articleId = article.id;
        const allcomments = article;
        return (
          <div>
            <div
              id="banner"
              className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover 
                    uk-light uk-padding uk-margin"
              data-src={
                process.env.REACT_APP_BACKEND_URL + article.image[0].url
              }
              data-srcset={
                process.env.REACT_APP_BACKEND_URL + article.image[0].url
              }
              data-uk-img
            >
              <h1>{article.title}</h1>
            </div>
            <div className="container">
              <div>
                <ReactMarkdown source={article.content} />
                <p>{article.published_at}</p>

                <div className="rating">
                  <input type="radio" name="star" id="star1" />
                  <label htmlFor="star1"></label>
                  <input type="radio" name="star" id="star2" />
                  <label htmlFor="star2"></label>
                  <input type="radio" name="star" id="star3" />
                  <label htmlFor="star3"></label>
                  <input type="radio" name="star" id="star4" />
                  <label htmlFor="star4"></label>
                  <input type="radio" name="star" id="star5" />
                  <label htmlFor="star5"></label>
                </div>
              </div>
              <h2 className="text-bright">
                <strong>Comments:</strong>
              </h2>
            </div>

            <AllComments allcomments={allcomments} />
            <PostForm articleId={articleId} />
          </div>
        );
      }}
    </Query>
  );
};

export default Article;
