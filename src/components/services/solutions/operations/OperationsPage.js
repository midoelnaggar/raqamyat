import React from "react";
import Motion from "../../../Motion";
import PageHeader from "../../../PageHeader";
import Solution from "../Solution";
import bostaLogo from "../../../../img/bosta.png"
import shapes from "../../../../img/shapes.png"

export default function OperationsPage({ data }) {
  return (
    <Motion>
      <div className="head_bg">
        <PageHeader
          title="Solutions"
          breadcrumbs={"Services / Solutions / Operations"}
        />
      </div>
      <Solution data={data} />
      <div className="bosta">
        <img className="bosta_bg" src={shapes} alt="bosta_bg" />
        <h1>
        Proud Partners with Egypt’s #1 Shipping Partner <span style={{color:"#EF0220"}}> Bosta </span>
        </h1>
        <p>
        We work with Bosta to redefine the way you ship, track, collect, deliver all with its innovative tech-solutions and efficient operations.
        </p>
        <img src={bostaLogo} alt="bosta" />
      </div>
    </Motion>
  );
}
