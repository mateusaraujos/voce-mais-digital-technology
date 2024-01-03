import { Key } from "react";

import { CustomDots } from "../../types/appTypes";

import "./CustomPoints.css";

export default function CustomPoints({ dots }: CustomDots) {
  return (
    <div className="dots-container">
      <ul className="list-dots">
        {Array.isArray(dots) &&
          dots.map((dot: React.ReactNode, index: Key) => (
            <div className="div-dots" key={index}>
              {dot}
            </div>
          ))}
      </ul>
    </div>
  );
}
