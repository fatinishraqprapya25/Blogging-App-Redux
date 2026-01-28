
export interface User {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'author' | 'admin';
}

export interface Blog {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  publishDate: string;
  readTime: string;
  category: string;
  image: string;
  status: 'published' | 'draft';
  views: number;
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  loading: boolean;
}

export interface BlogState {
  blogs: Blog[];
  featuredBlogs: Blog[];
  selectedBlog: Blog | null;
  draft: Partial<Blog>;
}

export interface UIState {
  sidebarOpen: boolean;
  theme: 'light' | 'dark';
}
