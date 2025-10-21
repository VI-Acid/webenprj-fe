export type Role = 'anonym' | 'user' | 'admin'

export interface User {
  id: string
  username: string
  role: Role
  avatarUrl?: string
}

export interface Post {
  id: string
  author: Pick<User, 'id' | 'username' | 'avatarUrl'>
  content: string
  tags: string[]
  imageUrl?: string
  pdfUrl?: string
  streakDay?: number
  streakGoal?: number
  likes: number
  createdAt: string
  updatedAt: string
  visibility: 'public' | 'private'
}

export interface Comment {
  id: string
  postId: string
  author: Pick<User, 'id' | 'username' | 'avatarUrl'>
  text: string
  createdAt: string
}
