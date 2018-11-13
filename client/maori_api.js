import request from 'superagent'

const base_url = 'https://eda-te-reo.herokuapp.com/api/proverbs'

export function getTranslation() {
  return request.get(base_url)
    .then(res => {
      console.log(res)
      return res.body
    })
    .then(translation => {
      console.log(translation)
      return translation
    })

}


