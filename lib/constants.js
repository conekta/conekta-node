const ERROR_PREVIOUS_PAGE_PAGINATION = {
  details: [
    {
      message: "There's no previous page url",
      param: 'previous_page_url'
    }
  ]
}

const ERROR_NEXT_PAGE_PAGINATION = {
  details: [
    {
      message: "There's no next page url",
      param: 'next_page_url'
    }
  ]
}

const API_VERSION = '2.0.0'
const API_BASE = 'https://api.conekta.io'

const Conekta = {
  api_key: '',
  api_base: API_BASE,
  api_version: API_VERSION,
  locale: 'en'
}

module.exports = {
  ERROR_NEXT_PAGE_PAGINATION,
  ERROR_PREVIOUS_PAGE_PAGINATION,
  API_VERSION,
  API_BASE,
  Conekta
}
