import gql from "graphql-tag";

const ARTICLES_QUERY = gql`
  {
    articles {
      id
      title
      content
      comments {
        name
        email
        message
      }
      category {
        id
        name
      }
      image {
        url
      }
    }
  }
`;

export default ARTICLES_QUERY;
