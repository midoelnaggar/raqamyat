import React from "react";
import PageHeader from "../../../PageHeader";
import Solution from "../Solution";

export default function OperationPage({ data }) {
  return (
    <div>
      <div className="head_bg">
        <PageHeader
          title="Operation"
          breadcrumbs={"Services / Solutions / Operation"}
        />
      </div>
      <Solution data={data} />
    </div>
  );
}
