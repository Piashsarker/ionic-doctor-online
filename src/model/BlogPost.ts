export interface BlogPostInterface {
  id?: number,
  img?: string,
  title?: string,
  smallDescription?: string,
  descriptionHTML?: string
  publishedDate?: string,
  postType?: PostType,
  videoURL?: string
}

export enum PostType {
  VIDEO_POST = 1,
  IMAGE_POST,
  TEXT_POST
}
