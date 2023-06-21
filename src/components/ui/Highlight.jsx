import React from "react";

const Highlight = ({ icon, title, para }) => {
  return (
      <div className="highlight">
        <div
          className="highlight__img"
          style={{ color: "#165CCB", borderColor: "rgba(0, 0, 0, 0.2)" }}
        >
          {icon}
        </div>
        <h3 className="highlight__subtitle">{title}</h3>
        <p className="highlight__para">{para}</p>
      </div>
  );
};

export default Highlight;
