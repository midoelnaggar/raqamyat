import Motion from "../../Motion";
import { Link } from "react-router-dom";
import arrow from "../../../img/Icon ionic-ios-arrow-round-forward.png";

 function SingleBusinessType({ data }) {
  return (
    <Motion>
      <div className="singleBT">
      <div
        style={{
          backgroundColor: "white",
        }}
        className="last_section"
      >
        <div
          key={data?.title}
          className="sub_inverted"
          style={{ backgroundColor: "white" }}
        >
          <div className="sub-left">
            <h1>
              <span>
                {data?.title}
                <span />
              </span>
            </h1>
            <img className="mOnlyImg" src={data?.image} alt={data?.title} />
            <p className="lp" style={{ maxWidth: "none" }}>
              {data?.description}
            </p>
            <button className="lmbtn">
              <Link to="/contact-us">
                Let’s Talk! <img alt="ar" src={arrow} />
              </Link>
            </button>
          </div>
          <div className="sub-right dOnly">
            <img src={data?.image} alt={data?.title} />
          </div>
        </div>
      </div>
      {Array.isArray(data?.sub) &&
        data.sub.map((section) => {
          return (
            <div key={section?.title} style={{padding:"150px 150px 0px 150px"}} className="first_section">
              <h1>
              <span>
                {section?.title}
                <span />
              </span>
              </h1>
              <div className="solution_subs">
                {Array.isArray(section?.sub) &&
                  section.sub.map((s) => {
                    return (
                      <div key={s?.title} className="border">
                        <div
                          style={{ justifyContent: "center" }}
                          className="solution_sub"
                        >
                          <img
                            style={{ marginTop: 0, marginBottom: "10px" }}
                            src={s?.image}
                            alt={s?.title}
                          />
                          <div style={{ fontWeight: 500 }}>{s?.title}</div>
                        </div>
                      </div>
                    );
                  })}
              </div>
            </div>
          );
        })}
        </div>
    </Motion>
  );
}

export default SingleBusinessType