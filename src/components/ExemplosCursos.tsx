import { CourseExample } from "../types/types";

export default function ExemplosCursos({
  image,
  alt,
  subtitle,
}: CourseExample) {
  return (
    <figure>
      <img className="img-exemplos" src={image} alt={alt} />
      <figcaption>{subtitle}</figcaption>
    </figure>
  );
}
