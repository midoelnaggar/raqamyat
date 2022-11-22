import React from "react";
import PageHeader from "../../../PageHeader";
import Solution from "../Solution";

export default function OperationPage({ data }) {
  return (
    <div>
      <div className="head_bg">
        <PageHeader
          title="Operations"
          breadcrumbs={"Services / Solutions / Operations"}
        />
      </div>
      <Solution data={data} />
    </div>
  );
}
