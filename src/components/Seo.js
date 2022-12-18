import { Helmet } from "react-helmet";

function Seo({description}) {
  return (
    <Helmet>
      <meta charSet="utf-8" />
      <meta name="description" content={description} />
    </Helmet>
  );
}

export default Seo;
