import React from "react";
import Query from "../../components/Query";
import Articles from "../../components/Articles";

import ARTICLES_QUERY from "../../queries/article/articles";

const Home = () => {
  return (
    <div>
      <div>
        <div>
          <h1>Strapi Blog</h1>
          <Query query={ARTICLES_QUERY}>
            {({ data: { articles } }) => {
              return <Articles images={articles.images} articles={articles} />;
            }}
          </Query>
        </div>
      </div>
    </div>
  );
};

export default Home;
