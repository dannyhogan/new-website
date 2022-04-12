import { FileDownload } from '@mui/icons-material';
import React from 'react';
import { AwesomeButton } from 'react-awesome-button';
import resume from '../../assets/resume.png'
import './Resume.scss'

const Resume = () => {

  return (
    <section className="Resume">
      <div className='resume-container' >
        <a href="https://drive.google.com/file/d/1POFA4D8q0FDZvIZt7C8_3G84HwDGhJDW/view">
          <AwesomeButton type="primary">
            Download PDF
            <FileDownload style={{ transform: 'scale(.8)', marginTop: '2.5px' }} />
          </AwesomeButton>
        </a>
        <img src={resume} alt="Resume PNG" />
      </div>
    </section>
  );
}

export default Resume;
