import bosta from '../../img/bosta.png'
import paymob from '../../img/paymob.png'
import paysky from '../../img/paySky.png'
import fawry from '../../img/fawry.png'
import kashier from '../../img/kashier.png'
import opay from '../../img/oPay.png'

function Partners() {
  return <div className="partners">
    <div className="partnersBackground">
    <div className="partnersGroup">
    <div><img src={bosta} alt="bosta" /></div>
      <div><img src={paymob} alt="paymob" /></div>
      <div><img src={paysky} alt="paysky" /></div>
      <div><img src={fawry} alt="fawry" /></div>
      <div><img src={kashier} alt="kashier" /></div>
      <div><img src={opay} alt="opay" /></div>
      </div>
    </div>
  </div>;
}

export default Partners;
