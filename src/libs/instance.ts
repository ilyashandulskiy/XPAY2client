import axios from 'axios'

import constants from 'libs/constants'

const instance = axios.create({
    baseURL: constants.baseURL
})

export default instance