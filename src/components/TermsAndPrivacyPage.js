import Motion from "./Motion";
import PageHeader from "./PageHeader";

export default function TermsAndPrivacyPage({ data }) {
  return (
    <Motion>
      <div className="head_bg">
        <PageHeader
          title="Terms And Privacy"
          breadcrumbs={"Home / Terms of Use & Privacy Policy"}
        />
      </div>
      <div className="terms_and_privacy">
        {Array.isArray(data?.sub) &&
          data.sub.map((section) => {
            return (
              <div>
                <h1>{section?.title}</h1>
                <p>{section?.description}</p>
              </div>
            );
          })}
      </div>
    </Motion>
  );
}
