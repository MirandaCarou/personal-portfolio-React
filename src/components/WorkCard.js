import React from "react";
import { Col } from "react-bootstrap";

export const WorkCard = ({ title, description, imgUrl }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="work-imgbx">
        <img src={imgUrl} />
        <div className="work-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
