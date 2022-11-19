import { CircleLoader } from "react-spinners";

export default function Loading() {
  return (
    <div  style={{paddingTop:"30vh",paddingBottom:"30vh",display:"flex",justifyContent:"center",height:"100vh",backgroundColor:"white"}}>
      <CircleLoader
        color="#0093de"
        size="20vh"
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  );
}
