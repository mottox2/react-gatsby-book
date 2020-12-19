import * as React from "react";
import { Helmet } from "react-helmet";

const AboutPage = (props) => {
  return (
    <div>
      <Helmet>
        <title>My Gatsby Site</title>
        <meta name="description" content="My first gatsby website" />
      </Helmet>
      <p>Hello Gatsby</p>
    </div>
  );
};

export default AboutPage;
