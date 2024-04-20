export type Status = 'todo' | 'done'

export interface Todo {
  title: string
  description: string
  status?: Status
}
