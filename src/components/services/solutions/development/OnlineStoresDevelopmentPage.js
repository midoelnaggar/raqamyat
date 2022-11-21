import React from "react";
import PageHeader from "../../../PageHeader";
import Service from "../../Service";

export default function OnlineStoresDevelopmentPage({ data }) {
  return (
    <div>
        <PageHeader
          title="Online Stores Development"
          breadcrumbs={"Services / Solutions / Development / Online Stores Development"}
        />
      <Service data={data} />
    </div>
  );
}
