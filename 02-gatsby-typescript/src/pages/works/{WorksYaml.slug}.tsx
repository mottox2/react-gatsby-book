import * as React from "react";
import { graphql, PageProps } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

const WorkDetailPage = (props: PageProps<GatsbyTypes.WorkDetailQuery>) => {
  const work = props.data.worksYaml!;
  return (
    <Layout>
      <Helmet>
        <title>{work.title}</title>
      </Helmet>
      <pre>{JSON.stringify(work, null, 2)}</pre>;
    </Layout>
  );
};

export default WorkDetailPage;

export const query = graphql`
  query WorkDetail($id: String!) {
    worksYaml(id: { eq: $id }) {
      slug
      title
      description
      imageUrl
      roles
    }
  }
`;
