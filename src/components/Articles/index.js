import React from "react";
import "../../../src/index.css";
// import Query from "../../components/Query";
// import ARTICLE_QUERY from "../../queries/article/article";
// import { useParams } from "react-router-dom";

import { Link } from "react-router-dom";

// articles is coming from container/articles/index.js data:{articles}
class Articles extends React.Component {
  render() {
    return (
      <div>
        {/* <CountQuery /> */}
        <div className="container">
          <div className="row ">
            {this.props.articles.map(article => {
              return (
                <div className="col-md-6 mb-4">
                  <Link to={`/article/${article.id}`}>
                    <h2 className="text-bright">{article.title}</h2>

                    <div>
                      <img
                        className="img-thumbnail img-fluid"
                        src={
                          process.env.REACT_APP_BACKEND_URL +
                          article.image[0].url
                        }
                        alt={article.image[0].url}
                      />
                    </div>
                  </Link>

                  <p className="uk-text-light">{article.content}</p>
                  <Link
                    className="uk-button-link"
                    to={`/article/${article.id}`}
                  >
                    Read More...
                  </Link>
                  {/* {article.image.map(img => (
                  <div className="thumbnail">
                    <img
                      src={process.env.REACT_APP_BACKEND_URL + img.url}
                      alt={img.url}
                      height="100"
                    />
                  </div>
                ))} */}
                </div>
              );
            })}
            ;
          </div>
        </div>
      </div>
    );
  }
}

// const CountQuery = ({ match }) => {
//   var { id } = match.params.id;

//   return (
//     <div>
//       <Query query={ARTICLE_QUERY} id={id}>
//         {({ data: { article } }) => {
//           return (
//             <div>
//               <h1>{article.title}</h1>
//             </div>
//           );
//         }}
//       </Query>
//     </div>
//   );
// };

export default Articles;
