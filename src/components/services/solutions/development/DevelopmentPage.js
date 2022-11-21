import React from "react";
import PageHeader from "../../../PageHeader";
import Solution from "../Solution";

export default function DevelopmentPage({ data }) {
  return (
    <div>
      <div className="head_bg">
        <PageHeader
          title="Development"
          breadcrumbs={"Services / Solutions / Development"}
        />
      </div>
      <Solution data={data} />
    </div>
  );
}
