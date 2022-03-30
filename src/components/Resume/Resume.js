import React from 'react';
import resume from '../../assets/resume.png'
import './Resume.scss'

const Resume = () => {

  return (
    <section className="Resume">
      <div className='resume-container' >
        <a href="https://drive.google.com/file/d/1Y93RLT74Ba4dyeod3kALpu--65YDye2S/view?usp=sharing">Download PDF</a>
        <img src={resume} alt="Resume PNG" />
      </div>
    </section>
  );
}

export default Resume;
