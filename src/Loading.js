import { CSSProperties, useContext } from "react";
import { CircleLoader } from "react-spinners";

const override = {
  display: "block",
  margin: "0 auto",
};

export default function Loading() {
  return (
    <div style={{padding:"35vh"}}>
      <CircleLoader
        color="#0093de"
        cssOverride={override}
        size="20vh"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
