const os = require('os')
const fs = require('fs')
const path = require('path')
const qs = require('qs')
const request = require('request')
const _ = require('underscore')

const pkg = require('../package')
const base64 = require('./base64.js')
const locales = require('./locales.json')

const { API_BASE, Conekta } = require('./constants')

function setHeaders (version = '2.0.0') {
  return {
    Accept: ['application/vnd.conekta-v', version, '+json'].join(''),
    'Content-Type': 'application/json'
  }
}

function Requestor (params) {
  this.apiUrl = API_BASE
  this.headers = {
    bindings_version: ['Conekta::', pkg.version].join(''),
    lang: 'node',
    lang_version: process.version,
    publisher: 'conekta',
    uname: [os.arch(), os.platform(), os.release()].join(' ')
  }

  /*
   * Call to API resources
   */
  this.request = function (opts) {
    const certPath = path.join(path.dirname(__dirname), '/cert/ca_bundle.crt')

    if (!Conekta.api_key || Conekta.api_key === '') {
      opts.next(
        {
          message: locales[Conekta.locale || 'en'].api_key_required,
          code: 'api_key_required'
        },
        null
      )
      return
    }

    if (parseInt(Conekta.api_version.split('.')[0]) < 1) {
      console.log(locales[Conekta.locale || 'en'].api_version_suggestion)
    }

    if (parseFloat(Conekta.api_version) < 2.0) {
      console.log(locales[Conekta.locale || 'en'].api_version_unsupported)
      return opts.next({
        message: locales[Conekta.locale || 'en'].api_version_unsupported,
        code: 'api_version_unsupported'
      })
    }

    const HEADERS = setHeaders(Conekta.api_version)

    HEADERS['X-Conekta-Client-User-Agent'] = JSON.stringify(this.headers)
    HEADERS['User-Agent'] =
      'Conekta/v1 NodeBindings/' + ['Conekta::', pkg.version].join('')
    HEADERS['Accept-Language'] = Conekta.locale
    HEADERS.Authorization = [
      'Basic ',
      base64.encode(Conekta.api_key),
      ':'
    ].join('')

    const options = {
      url: opts.url,
      headers: HEADERS,
      agentOptions: {
        ca: fs.readFileSync(certPath),
        rejectUnauthorized: false
      }
    }

    // Preventing the failure when reading the results on post or get calls
    if (opts.method === 'get') {
      options.qs = qs.parse(qs.stringify(opts.data, { allowDots: true }))
    } else {
      options.json = true
      options.body = opts.data
    }

    request[opts.method](options, (err, req = { statusCode: 520 }, res) => {
      let result = null

      // Check response status code for assign error or result with data
      if ((req.statusCode !== 200 && req.statusCode !== 201) || err) {
        err = _.extend(
          {
            http_code: req.statusCode
          },
          res,
          err
        )
      } else {
        result = typeof res === 'object' ? res : JSON.parse(res)
      }
      opts.next(err, result)
    })
  }
}

module.exports = Requestor
