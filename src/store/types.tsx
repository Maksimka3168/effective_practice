export type ICharacter = {
  id: number;
  img: string;
  description: string;
  name: string;
  comics: ILinkInfo[];
};

export type IComics = {
  id: number;
  name: string;
  description: string;
  img: string;
  author: string;
  published: string;
  characters: ILinkInfo[];
};

export type ILinkInfo = {
  id: number;
  name: string;
};

export type IListItem = {
  id: number;
  name: string;
  img: string;
  description: string;
  type: string;
};

export type ISearchProps = {
  type: string;
  placeholder: string;
};
