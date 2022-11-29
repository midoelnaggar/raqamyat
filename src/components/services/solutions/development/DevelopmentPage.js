import React from "react";
import Motion from "../../../Motion";
import PageHeader from "../../../PageHeader";
import Solution from "../Solution";

export default function DevelopmentPage({ data }) {
  return (
    <Motion>
      <div className="head_bg">
        <PageHeader
          title="Solutions"
          breadcrumbs={"Services / Solutions / Development"}
        />
      </div>
      <Solution data={data} />
    </Motion>
  );
}
