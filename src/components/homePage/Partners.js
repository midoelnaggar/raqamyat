import "./Partners.css";
import paymob from '../../img/paymob.png'
import paysky from '../../img/paySky.png'
import fawry from '../../img/fawry.png'
import kashier from '../../img/kashier.png'
import opay from '../../img/oPay.png'

function Partners() {
  return <div className="partners">
    <div className="partnersBackground">
    <div className="partnersGroup">
      <img src={paymob} alt="paymob" />
      <img src={paysky} alt="paysky" />
      <img src={fawry} alt="fawry" />
      <img src={kashier} alt="kashier" />
      <img src={opay} alt="opay" />
      </div>
    </div>
  </div>;
}

export default Partners;
