import axios from 'axios'

const ROOT_URL = 'https://api.github.com/'

/**
 * Create an axiosClient for GitHub API calls
 *
 * @return {AxiosInstance}
 */
export const createClient = ({ accessToken } = {}) => {
  return axios.create({
    baseURL: ROOT_URL,
    headers: {
      Authorization: `token ${accessToken}`,
    },
  })
}

export default createClient
