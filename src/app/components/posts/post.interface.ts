export interface IPosts<T> {
  posts: T;
}

export interface IPost {
  _id: string;
  title: string;
  description: string;
  note_category?: string;
  note_status?: string;
}
