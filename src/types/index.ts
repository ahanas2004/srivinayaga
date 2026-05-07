export interface Product {
  id: string;
  name: string;
  category: string;
  industry: string;
  brand: string;
  code: string;
  tagline: string;
  description: string;
  specs: Record<string, string>;
  year: string;
}

export interface Brand {
  name: string;
  origin: string;
  since: string;
  discipline: string;
}

export interface Client {
  name: string;
  sector: string;
  city: string;
}

export interface Industry {
  name: string;
  code: string;
  description: string;
}