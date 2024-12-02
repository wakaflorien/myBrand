export interface myJson {
  id: number;
  title: string;
  owner: string;
  description: string;
  image: string;
  link: string;
  isPrivate: boolean;
  summary: string;
  timeline: string;
  role: string;
  stack: string;
  repo: string;
}

export type ImgInterface = {
  width: string;
  height: string;
};

export type SocialsTypes = {
  hasMore: boolean;
  color:  string;
};
