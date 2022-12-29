import { Link } from "react-router-dom";

function Solution({ data }) {
  return (
    <div className="solution">
      <div className="solution_title_and_desc">
        <div className="solution_title">
          <span>
            {data?.title}
            <span />
          </span>
        </div>
        <div className="solution_desc">
          <div>{data?.description}</div>

          <div style={{ paddingTop: "20px" }}>{data?.sub_description}</div>
        </div>
      </div>

      <div className="solution_subs">
        {Array.isArray(data?.sub) &&
          data.sub.map((s) => {
            return (
              <div key={s?.title} className="border">
                <Link
                  style={{ textDecoration: "none" }}
                  to={s?.title
                    .toLowerCase()
                    .replace("&", "and")
                    .replace("(", "")
                    .replace(")", "")
                    .split(" ")
                    .join("-")}
                >
                  <div className="solution_sub">
                    <img src={s?.image} alt={s?.title} />
                    <div>{s?.title}</div>
                  </div>
                </Link>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default Solution;
