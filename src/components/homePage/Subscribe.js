import { useRef } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

function Subscribe() {
  const emailRef = useRef("");
  const submitBtnRef = useRef(null);
  const { enqueueSnackbar } = useSnackbar();
  
const validRegEx = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/
  const submit = () => {
    submitBtnRef.current.disabled = true;
    if (emailRef?.current?.value.match(validRegEx)){
    try {
      axios
        .post(
          "https://newraq.raqamyat.com/public/api/subscribe",
          {mail :emailRef?.current?.value}
        )
        .then((res) => {
          if (res.status === 200) {
            enqueueSnackbar("Thank you for subscribing.", {
              variant: "success",
            });
            emailRef.current.value = "";
          } else {
            enqueueSnackbar("Something went wrong!", {
              variant: "error",
            });
          }
          submitBtnRef.current.disabled = false;
        }
       
      );
    } catch (err) {
      console.log(err);
      submitBtnRef.current.disabled = false;

    }}
    else {
      enqueueSnackbar("Invalid email.", {
        variant: "error",
      });
      submitBtnRef.current.disabled = false;

    }
  };

  return (
    <div className="subscribe">
      <div className="subcard">
        <div className="bg" />
        <div className="label">
          Subscribe To Newsletter To Stay Up To Date On Our Latest News
        </div>
        <div className="email">
          <input type="email" ref={emailRef} placeholder="email" />
          <button ref={submitBtnRef} onClick={()=>submit()} style={{ border:"none" ,cursor: "pointer" ,display:"flex",alignItems:"center" }} className="sbtn">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
