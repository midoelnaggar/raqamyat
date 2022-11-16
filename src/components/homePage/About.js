import "../../styles/About.css";

function About({data}) {
  return (
    <div className="about_section_bg">
    <div className="about">
      <div className="leftComp">
        <img src={data?.image} alt="coimage" className="coimage" />
        <p>
        {data?.sub_description}
        </p>
      </div>
      <div className="rightComp">
          <h1>
            About
            <br />
            The
            <span> Company<span /></span>
          </h1>
        <p>
        </p>
        <p>
        {data?.description}  
        </p>
      </div>
    </div>
    </div>
  );
}

export default About;
