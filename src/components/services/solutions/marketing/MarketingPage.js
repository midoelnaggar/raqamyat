import React from "react";
import Motion from "../../../Motion";
import PageHeader from "../../../PageHeader";
import Solution from "../Solution";

export default function MarketingPage({ data }) {
  return (
    <Motion>
      <div className="head_bg">
      <PageHeader title="Solutions" breadcrumbs={"Services / Solutions / Marketing"} />
      </div>
      <Solution data={data} />
    </Motion>
  );
}