import * as React from "react";
import { graphql } from "gatsby";

const WorkDetailPage = (props) => {
  return <pre>{JSON.stringify(props.data, null, 2)}</pre>;
};

export default WorkDetailPage;

export const query = graphql`
  query($id: String!) {
    worksYaml(id: { eq: $id }) {
      slug
      title
      description
      imageUrl
      roles
    }
  }
`;
