import axios from 'axios'

export const fetchItems = () => {
    return axios.get('http://172.20.10.4:8082/items.json')
}
