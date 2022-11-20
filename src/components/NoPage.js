import NotFound from "../img/404.svg";
import Motion from "./Motion";

function NoPage() {

  return (
    <Motion>
        <div  style={{display:"flex",justifyContent:"center"}}>
      <img src={NotFound} alt="404" />
      </div>
    </Motion>
  );
}

export default NoPage;
