export interface Procedure {
  id: string;
  title: string;
  description: string;
  benefits: string[];
  imageUrl: string;
}

export interface Testimonial {
  id: string;
  name: string;
  age?: number;
  text: string;
  procedure?: string;
}

export interface NavItem {
  label: string;
  href: string;
}

export enum SectionId {
  HERO = 'hero',
  ABOUT = 'sobre',
  DOCTOR = 'medica',
  PROCEDURES = 'procedimentos',
  TESTIMONIALS = 'depoimentos',
  LOCATION = 'localizacao',
  CONTACT = 'contato',
}