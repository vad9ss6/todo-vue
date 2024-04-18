import client from './axios'

class ApiService {
  auth(data: { user_name: string; password: string }) {
    return client.post('/auth/login', data)
  }

  createUser(data: { user_name: string; password: string }) {
    return client.post('/users', data)
  }

  getAllTodo() {
    return client.get('/todo/all')
  }

  postTask(data) {
    return client.post(`/todo`, data)
  }

  deleteTask(id) {
    return client.delete(`/todo/${id}`)
  }

  updateStatus({ id, status }) {
    return client.patch(`/todo/${id}`, { status })
  }
}

export default new ApiService()
