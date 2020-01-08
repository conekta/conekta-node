const _ = require('underscore')

const Requestor = require('./Requestor')
const { Conekta, ERROR_NEXT_PAGE_PAGINATION, ERROR_PREVIOUS_PAGE_PAGINATION, API_BASE } = require('./constants')

function ResourceList (instance) {
  return _.extend(
    {
      /*
     * Convert objects with object = list to javascript array
     */
      _listObjectsToArray: function (response) {
        _.each(response, (value, key) => {
          response[key] = value
        })

        return response
      },

      /*
     * Convert the object that contains a list to just
     * an array with resource objects.
     */
      toObject: function () {
        return this._json
      },

      /*
     * Convert the object that contains a list to just
     * an array with resource objects.
     */
      toArray: function () {
        const items = []
        _.each(this._items, (item) => {
          items.push(item.toObject())
        })
        return items
      },

      /*
     * Method to populate attributes that are
     * of another kind of resource.
     */
      _buildChildren: function () {
        this._items = []

        // Iterate object json data
        let sublist = this._json.data
        if (!(sublist instanceof Array)) {
          sublist = sublist.data
        }
        _.each(sublist, (object) => {
          /* overwrite property */
          const resourceInstance = _.extend({}, this._instanceClass)
          const childInstance = _.extend(resourceInstance, {
            _json: object,
            _id: object.id,
            parent: this
          })
          childInstance._buildChildren()
          this._items.push(
            childInstance
          )
        })
      },

      /*
       * Method to build GET calls
       */
      get: function (opts, id) {
        if (arguments.length === 1 && (typeof arguments[0] === 'number')) {
          return this._items[arguments[0]]
        }

        let uri = this._classUrl
        if (id) {
          uri += '/' + id
        }
        if (this._subClassUrl) {
          uri += '/' + this._subClassUrl
        }

        if (typeof opts.data === 'function') {
          opts.next = opts.data
          opts.data = {}
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: 'get',
            url: [Conekta.api_base, uri].join(''),
            data: opts.data || {},
            next: function (error, response) {
              let responseObject = null
              if (!error) {
                response = this._listObjectsToArray(response)
                if (id) {
                  const resourceInstance = _.extend({}, this._instanceClass)
                  responseObject = _.extend(resourceInstance, {
                    _json: response,
                    _id: response.id
                  })
                  responseObject._buildChildren()
                } else {
                  this._json = response
                  this._buildChildren()
                  responseObject = this
                }
              }
              if (opts.next !== undefined) {
                opts.next(error, responseObject)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(responseObject)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      },
      /*
     * Method to build POST calls
     */
      _post: function (opts, id) {
        let uri = this._classUrl
        if (id) {
          uri += '/' + id
        }
        if (this._subClassUrl) {
          uri += '/' + this._subClassUrl
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: 'post',
            url: [Conekta.api_base, uri].join(''),
            data: opts.data || {},
            next: function (error, response) {
              let responseObject = null
              if (!error) {
                response = this._listObjectsToArray(response)
                const resourceInstance = _.extend({}, this._instanceClass)
                responseObject = _.extend(resourceInstance, {
                  _json: response,
                  parent: this,
                  _id: response.id
                })
                responseObject._buildChildren()
                if (this._items === undefined) {
                  this._items = []
                }
                this._items.push(responseObject)
              }
              if (opts.next !== undefined) {
                opts.next(error, responseObject)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(responseObject)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      },
      /*
     * Method to build complex api calls
     */
      _custom: function (method, customURI, opts) {
        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: method,
            url: [Conekta.api_base, customURI].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
              }

              if (opts.next !== undefined) {
                opts.next(error, response)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(response)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      },
      where: function (data, next) {
        return this.get({
          data: data,
          next: next
        })
      },
      find: function (id, next) {
        return this.get(
          {
            next: next
          },
          id
        )
      },
      create: function (data, next) {
        let parentId = null
        if (this.parent) {
          parentId = this.parent._id
        }
        return this._post({
          data: data,
          next: next
        }, parentId)
      },
      nextPage: function (next) {
        if (!this._json.next_page_url) {
          return next(ERROR_NEXT_PAGE_PAGINATION, null)
        }

        const method = 'get'
        const customURI = this._json.next_page_url.replace(API_BASE, '')
        const opts = {
          data: {},
          next: next
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: method,
            url: [Conekta.api_base, customURI].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
              }
              const resourceListInstance = _.extend({}, this._resourceListClass)
              const responseObject = _.extend(resourceListInstance, {
                _json: response
              })
              responseObject._buildChildren()

              if (opts.next !== undefined) {
                opts.next(error, responseObject)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(responseObject)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      },
      previousPage: function (next) {
        if (!this._json.previous_page_url) {
          return next(ERROR_PREVIOUS_PAGE_PAGINATION, null)
        }

        const method = 'get'
        const customURI = this._json.previous_page_url.replace(API_BASE, '')
        const opts = {
          data: {},
          next: next
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: method,
            url: [Conekta.api_base, customURI].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
              }
              const resourceListInstance = _.extend({}, this._resourceListClass)
              const responseObject = _.extend(resourceListInstance, {
                _json: response
              })
              responseObject._buildChildren()

              if (opts.next !== undefined) {
                opts.next(error, responseObject)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(responseObject)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      }
    },
    instance
  )
}

module.exports = ResourceList
