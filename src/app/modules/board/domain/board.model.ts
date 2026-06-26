export interface Board {
  id: string;
  name: string;
  description: string;
  image: string;
  starred: boolean;
}

export interface BoardTemplate {
  id: string;
  name: string;
  imageUrl: string;
  description?: string;
}
