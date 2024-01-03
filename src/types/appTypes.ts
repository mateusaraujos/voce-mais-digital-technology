export type BannerType = string;
export type TextType = string;
export type UrlType = string;

export interface CarouselProps {
  images: BannerType[];
}

export interface CourseExample {
  image: string;
  alt: string;
  subtitle: React.ReactNode;
}

export interface CustomDots {
  dots: React.ReactNode;
}

export interface FormFieldChoice {
  value: string;
  label: string;
}

export interface FormField {
  label: string;
  type: string;
  name: string;
  choices?: FormFieldChoice[];
  placeholder: string;
  required: boolean;
}

export interface FormValue {
  [key: string]: string;
}

export interface HeaderLink {
  url: UrlType;
  text: TextType;
}

export interface SocialLink {
  children: React.ReactNode;
  url: string;
  image: string;
  alt: string;
}

export interface TextMaisDigital {
  id: string;
  text: React.ReactNode;
  className?: string;
}

export interface ToCourse {
  url: UrlType;
  text: TextType;
}
