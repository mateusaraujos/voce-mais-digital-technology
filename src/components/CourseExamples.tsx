import { CourseExample } from "../types/appTypes";

export default function CourseExamples({
  image,
  alt,
  subtitle,
}: CourseExample) {
  return (
    <figure>
      <img className="img-examples" src={image} alt={alt} />
      <figcaption>{subtitle}</figcaption>
    </figure>
  );
}
