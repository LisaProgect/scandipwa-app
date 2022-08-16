import { gql } from '@apollo/client';

const GET_PRODUCTS_BY_CATEGORY = gql`
  query GetCategory($title: String!) {
    category(input: { title: $title }) {
      name
      products {
        id
        name
        inStock
        gallery
      }
    }
  }
`;

export default GET_PRODUCTS_BY_CATEGORY;
