import React from "react";
import contactPagePicture from "../../../static/assets/contact/contact-glow.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function() {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + contactPagePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          borderRadius: "2px",
        }}
      />

      <div className="right-column">
       <div className="contact-bullet-points">

        <div className="bullet-point-group">
       <div className="icon">
        <FontAwesomeIcon icon="square-phone" />
        </div>
        <div className="text">
          (209) 209-2009
          </div>
        </div>

        <div className="bullet-point-group">
       <div className="icon">
        <FontAwesomeIcon icon="paper-plane" />
        </div>
         <div className="text">
          gimmesumcoding@gmail.com
         </div>
        </div>

        <div className="bullet-point-group">
       <div className="icon">
        <FontAwesomeIcon icon="map" />
        </div>
       <div className="text">
        East Bay, Northern California
        </div>
      </div>
    </div>
  </div>
</div>
  );
}