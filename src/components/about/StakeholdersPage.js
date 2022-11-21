import "../../styles/StakeholdersPage.css";
import PageHeader from "../PageHeader";
import Motion from "../Motion";
import { Link } from "react-router-dom";
import arrow from "../../img/Icon ionic-ios-arrow-round-forward.png";

function StakeholdersPage({ data }) {
  return (
    <Motion className="stakeholders_page">
      <PageHeader
        title="Stakeholders"
        breadcrumbs="Home / About Us / Our Company / Stakeholders"
      />
      <div className="stakeholders">
        <div className="stakeholders-left">
          <h1>
            <span>
              Stakeholders
              <span />
            </span>
          </h1>
          <p className="lp">{data?.description}</p>
        </div>
        <div className="stakeholders-right">
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
                    <span />
                  </span>
                </h1>
                <p className="lp">{sub?.description}</p>
                <button className="lmbtn">
                  <Link to="">
                    Let’s Talk! <img alt="ar" src={arrow} />
                  </Link>
                </button>
              </div>
              <div className="sub-right">
                <img src={sub?.image} alt="back" />
              </div>
            </div>
          );
        })}
      </div>
    </Motion>
  );
}

export default StakeholdersPage;
