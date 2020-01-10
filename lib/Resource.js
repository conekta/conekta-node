const _ = require('underscore')

const Requestor = require('./Requestor')
const { Conekta } = require('./constants')

function Resource (instance) {
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
     * Convert the object with functions to just
     * a representation of the resource object.
     */
      toObject: function () {
        return this._json
      },

      /*
     * Method to populate attributes that are
     * of another kind of resource.
     */
      _buildChildren: function () {
        // Iterate children_resources
        _.each(this.children_resources, (resource, resourceName) => {
          // Iterate object json data
          _.each(this._json, (object, key) => {
            // If children_resource and object different, next
            if (resourceName !== key) {
              return
            }

            /* overwrite property */
            const childInstance = _.extend({
              _json: object,
              _items: [],
              _id: object.id
            }, resource)
            childInstance._buildChildren()
            this[key] = childInstance
          })
        })
      },

      /*
       * Method to build GET calls
       */
      _get: function (opts, id) {
        let uri = this._classUrl
        if (this._json.parent_id) {
          uri += '/' + this._json.parent_id + '/' + this._subClassUrl
        }
        if (id) {
          uri += '/' + id
        }

        if (typeof opts.data === 'function') {
          opts.next = opts.data
          opts.data = {}
        }

        // Reset payment sources
        this.payment_sources = null

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: 'get',
            url: [Conekta.api_base, uri].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
                this._json = response
                this._id = response.id
                this._buildChildren()
              }
              if (opts.next !== undefined) {
                opts.next(error, this)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(this)
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
        if (this._json.parent_id) {
          uri += '/' + this._json.parent_id + '/' + this._subClassUrl
        }
        if (id) {
          uri += '/' + id
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: 'post',
            url: [Conekta.api_base, uri].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
                this._json = response
                this._id = response.id
                this._buildChildren()
              }
              if (opts.next !== undefined) {
                opts.next(error, this)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(this)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      },

      /*
     * Method to build PUT calls
     */
      _put: function (opts, id) {
        let uri = this._classUrl
        if (this._json.parent_id) {
          uri += '/' + this._json.parent_id + '/' + this._subClassUrl
        }
        if (id) {
          uri += '/' + id
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: 'put',
            url: [Conekta.api_base, uri].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
                this._json = response
                this._id = response.id
                this._buildChildren()
              }
              if (opts.next !== undefined) {
                opts.next(error, this)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(this)
                }
              }
            }.bind(this)
          })
        }.bind(this))
      },

      /*
       * Method to build DEL calls
       */
      _del: function (opts, id) {
        let uri = this._classUrl
        if (this._json.parent_id) {
          uri += '/' + this._json.parent_id + '/' + this._subClassUrl
        }
        if (id) {
          uri += '/' + id
        }

        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: 'del',
            url: [Conekta.api_base, uri].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
                this._json = response
                this._buildChildren()
              }
              if (opts.next !== undefined) {
                opts.next(error, this)
              } else {
                if (error) {
                  reject(error)
                } else {
                  resolve(this)
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
        const resource = this
        return new Promise(function (resolve, reject) {
          new Requestor({ api_version: instance.api_version }).request({
            method: method,
            url: [Conekta.api_base, customURI].join(''),
            data: opts.data || {},
            next: function (error, response) {
              if (!error) {
                response = this._listObjectsToArray(response)
              }
              if (method === 'del' && resource.parent && resource.parent._items) {
                const findIndexById = (comparisonResource) => {
                  return comparisonResource._id === resource._id
                }
                const myIndex = _.findIndex(resource.parent._items, findIndexById)
                resource.parent._items.splice(myIndex, 1)
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
      update: function (data, next) {
        if (this._subClassUrl) {
          return this._custom(
            'put',
            [this._classUrl, this._json.parent_id, this._subClassUrl, this._id].join(
              '/'
            ),
            {
              data: data,
              next: next
            }
          )
        } else {
          return this._put(
            {
              data: data,
              next: next
            },
            this._id
          )
        }
      },
      delete: function (next) {
        if (this._subClassUrl) {
          return this._custom(
            'del',
            [this._classUrl, this._json.parent_id, this._subClassUrl, this._id].join(
              '/'
            ),
            {
              data: {},
              next: next
            }
          )
        } else {
          return this._del(
            {
              data: {},
              next: next
            },
            this._id
          )
        }
      }
    },
    instance
  )
}

module.exports = Resource
