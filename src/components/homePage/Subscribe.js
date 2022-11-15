import "../../styles/Subscribe.css";
function Subscribe() {
  return (
    <div className="subscribe">
      <div className="subcard">
        <div className="bg" />
        <div className="label">
          Subscribe To Newsletter To Stay Up To Date On Our Latest News
        </div>
        <div className="email">
          <input placeholder="email" />
          <div className="sbtn">
            <a href="/">
              <p>Subscribe</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscribe;
