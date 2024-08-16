import BaseService from './BaseService';
export default class AuthService extends BaseService{
  constructor(){
    super('/auth')
  }

  login = async (data) => {
    try {
      const response = await this.http.post(this.api, data)
      console.log(response);

      return response.data
    } catch (error) {
      throw error.response.data
    }

  }
}



