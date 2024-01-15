import { Key } from "react";

import { CustomDots } from "../../types/appTypes";
import { DotsContainer, ListDots } from "../../styles/customPoints";

export default function CustomPoints({ dots }: CustomDots) {
  return (
    <DotsContainer className="dots-container">
      <ListDots className="list-dots">
        {Array.isArray(dots) &&
          dots.map((dot: React.ReactNode, index: Key) => (
            <div className="div-dots" key={index}>
              {dot}
            </div>
          ))}
      </ListDots>
    </DotsContainer>
  );
}
