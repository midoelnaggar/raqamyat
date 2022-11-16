import { CircleLoader } from "react-spinners";
import Motion from "./components/Motion";


export default function Loading() {
  return (
    <Motion  >
      <div style={{paddingTop:"30vh",paddingBottom:"30vh",display:"flex",justifyContent:"center",height:"100vh"}}/>
    </Motion>
  );
}
