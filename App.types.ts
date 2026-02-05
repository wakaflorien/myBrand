export interface Project {
  id: number;
  title: string;
  owner: string;
  summary: string;
  description: string;
  timeline: string;
  role: string;
  stack: string;
  link: string;
  repo: string;
  isPrivate: boolean;
  image: string;
  featured?: boolean;
}

export type ImgDimensions = {
  width: string;
  height: string;
};

export interface SocialsTypes {
  hasMore: boolean;
  color: string;
}

// Define types for the context
export type Theme = 'light' | 'dark';
export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};