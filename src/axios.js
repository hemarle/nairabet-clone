import axios from 'axios'

const instance= axios.create(
    {baseURL:'https://api.the-odds-api.com/v3/odds'}
)

export default instance