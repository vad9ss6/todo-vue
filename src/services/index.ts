import client from './axios'

class ApiService {
  getAllTodo() {
    return client.get('/todo/all');
  }

  // get(id) {
  //   return client.get(`/tutorials/${id}`);
  // }

  createUser(data: { user_name: string; password: string }) {
    return client.post('/users', data)
  }
  auth(data: { user_name: string; password: string }) {
    return client.post('/auth/login', data)
  }

  // update(id, data) {
  //   return client.put(`/tutorials/${id}`, data);
  // }

  // delete(id) {
  //   return client.delete(`/tutorials/${id}`);
  // }

  // deleteAll() {
  //   return client.delete(`/tutorials`);
  // }

  // findByTitle(title) {
  //   return client.get(`/tutorials?title=${title}`);
  // }
}

export default new ApiService()
