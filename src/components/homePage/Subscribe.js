import { useRef } from "react";
import axios from "axios";
import { useSnackbar } from "notistack";

function Subscribe() {
  const emailRef = useRef("");
  const { enqueueSnackbar } = useSnackbar();
  
const validRegEx = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/

  const submit = (e) => {
    e.preventDefault();
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
        }
       
      );
    } catch (err) {
      console.log(err);
    }}
    else {
      enqueueSnackbar("Invalid email.", {
        variant: "error",
      });
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
          <div onClick={submit} style={{ cursor: "pointer" }} className="sbtn">
            <p>Subscribe</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
