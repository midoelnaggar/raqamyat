import PageHeader from "../../../PageHeader";
import Service from "../../Service";
import Motion from "../../../Motion";

export default function ProductDevelopmentPage({ data }) {
  return (
    <Motion>
      <div>
        <PageHeader
          title="Development"
          breadcrumbs={
            "Services / Solutions / Development / Product Development"
          }
        />
        <Service data={data} />
        {Array.isArray(data?.sub) && Array.isArray(data?.sub[0]?.sub) && (
          <div className="last_section">
            <span>
              {data?.sub[0]?.title}
              <span />
            </span>
            <div className="last_section_sub">
              { Array.isArray(data?.sub) && Array.isArray(data?.sub[0]?.sub) && data?.sub[0]?.sub.map((card, index) => {
                return (
                  <div  key={index} className="last_section_sub_card">
                    <div className="last_section_sub_card_number">
                      {("0" + (index + 1)).slice(-2)}
                    </div>
                    <div className="last_section_sub_card_title">
                      {card?.title}
                    </div>
                    <div className="last_section_sub_card_subtitle">
                      {card?.description}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </Motion>
  );
}
