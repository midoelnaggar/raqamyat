import "../../styles/OurPartnersPage.css";
import PageHeader from "../PageHeader";
import Motion from "../Motion";

function OurPartnersPage({ data }) {
  return (
    <Motion className="partners_page">
      <PageHeader
        title="Our Partners"
        breadcrumbs="Home / About Us / Our Company / Our Partners"
      />
      <div className="ourPartners">
        <div className="ourPartners-left">
          <h1>
            <span>
              Our Partners
              <span />
            </span>
          </h1>
          <p className="lp">{data?.description}</p>
        </div>
        <div className="ourPartners-right">
          <img src={data?.image} alt="back" />
        </div>
      </div>
      <div className="sub_container">
        {data?.sub?.map((sub, index) => {
          return (
            <div key={sub?.title} className={(index + 1) % 2 === 0 ? "sub" : "sub_inverted"}>
              <div className="sub-left">
                <h1>
                  <span>
                    {sub?.title}
                    <span className="ops"/>
                  </span>
                </h1>
                <p className="lp">{sub?.description}</p>
              </div>
              <div className="sub-right">
                <img src={sub?.image} alt={sub?.title} />
              </div>
            </div>
          );
        })}
      </div>
    </Motion>
  );
}

export default OurPartnersPage;
