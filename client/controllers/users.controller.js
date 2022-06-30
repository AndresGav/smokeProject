import FetchService from '../services/fetch.services'
export function getData() {
    
   return FetchService.get(
    process.env.NEXT_PUBLIC_STRAPI_API_URL +
         '/api/user-temp-tables',
      {headers:{"content-type":"application/json","cors":"no-cors"}}
   )
      .then((resp) => resp.json() )
      .catch((err) => {
         console.log(err)
      })
}

export default { getData }
