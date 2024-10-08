import React from 'react';
import { Modal } from 'react-bootstrap';
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/custom-animations/scale-out-animation.css';
import AwesomeSliderStyles from '../scss/light-slider.scss';
import AwesomeSliderStyles2 from '../scss/dark-slider.scss';

const ProjectDetailsModal = ({ data, onHide, ...props }) => {
  const technologies = data?.technologies;
  const images = data?.images;
  const title = data?.title;
  const description = data?.description;
  const url = data?.url;

  const tech = technologies?.map((icon, index) => (
    <li className="list-inline-item mx-3" key={index}>
      <span>
        <div className="text-center">
          <i className={icon.class} style={{ fontSize: '300%' }}>
            <p className="text-center" style={{ fontSize: '30%' }}>
              {icon.name}
            </p>
          </i>
        </div>
      </span>
    </li>
  ));

  const img = images?.map((elem, index) => <div key={index} data-src={elem} />);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      className="modal-inside"
    >
      <span onClick={onHide} className="modal-close">
        <i className="fas fa-times fa-3x close-icon"></i>
      </span>
      <div className="col-md-12">
        <div className="col-md-10 mx-auto" style={{ paddingBottom: '50px' }}>
          <div className="slider-tab">
            {/* Slider indicators can be extracted as a separate component if used elsewhere */}
            <span
              className="iconify slider-iconfiy"
              data-icon="emojione:red-circle"
              data-inline="false"
              style={{ marginLeft: '5px' }}
            ></span>
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:yellow-circle"
              data-inline="false"
            ></span>
            &nbsp;
            <span
              className="iconify slider-iconfiy"
              data-icon="twemoji:green-circle"
              data-inline="false"
            ></span>
          </div>
          <AwesomeSlider
            cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
            animation="scaleOutAnimation"
            className="slider-image"
          >
            {img}
          </AwesomeSlider>
        </div>
        <div className="col-md-10 mx-auto">
          <h3 style={{ padding: '5px 5px 0 5px' }}>
            {title}
            {url && (
              <a href={url} target="_blank" rel="noopener noreferrer" className="link-href">
                <i className="fas fa-external-link-alt" style={{ marginLeft: '10px' }}></i>
              </a>
            )}
          </h3>
          <p className="modal-description">{description}</p>
          <div className="col-md-12 text-center">
            <ul className="list-inline mx-auto">{tech}</ul>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ProjectDetailsModal;
