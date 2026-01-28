
export interface Blog {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  authorId: string;
  authorName: string;
  date: string;
  category: string;
  imageUrl: string;
  featured?: boolean;
}

export interface Author {
  id: string;
  name: string;
  avatar?: string;
  bio?: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role?: 'admin' | 'user';
}
