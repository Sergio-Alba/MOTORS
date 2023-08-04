export const BASE_URL = 'https://64adb901b470006a5ec6566f.mockapi.io/products';

export const API_URLS = {
  PRODUCTS: {
    url:`${BASE_URL}` ,
    config:{
      method: 'GET',
      headers:{
        'Content-type': 'application/json',
      },
    }
  }
}