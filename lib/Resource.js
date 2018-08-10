const _ = require('underscore')

const Requestor = require('./Requestor')
const { Conekta } = require('./constants')

function Resource (instance) {
  return _.extend(
    {
      _id: null,
      classUrl: '',
      children_resources: {},
      _json: {},
      _items: [],

      /*
     * Convert objects with object = list to javascript array
     */
      listObjectsToArray: function (response) {
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
      build_children: function () {
        // Iterate children_resources
        _.each(this.children_resources, (resource, resourceName) => {
          // Iterate object json data
          _.each(this._json, (object, key) => {
            // If children_resource and object different, next
            if (resourceName !== key) {
              return
            }

            if (object instanceof Array) {
              /*
             * Iterate array object to extend from
             * target Conekta resource and overwrite attribute
             */
              const childrenObjects = []
              _.each(object, (elem) => {
                const resourceInstance = _.extend({}, Conekta[resource])
                childrenObjects.push(
                  _.extend(resourceInstance, {
                    _json: elem,
                    _id: elem.id,
                  })
                )
              })

              /* overwrite property */
              this[key] = childrenObjects
            } else if (object) {
              /* overwrite property */
              this[key] = _.extend(Conekta[resource], {
                _json: object,
                _id: object.id,
              })
            }
          })
        })
      },

      /*
       * Method to build GET calls
       */
      get: function (opts, id) {
        let uri = this.classUrl
        if (id) {
          uri += '/' + id
        }

        if (typeof opts.data === 'function') {
          opts.next = opts.data
          opts.data = {}
        }

        // Reset payment sources
        this.payment_sources = null

        new Requestor({ api_version: instance.api_version }).request({
          method: 'get',
          url: [Conekta.api_base, uri].join(''),
          data: opts.data || {},
          next: function (error, result) {
            if (error) {
              return opts.next(error, null)
            }

            result = this.listObjectsToArray(result)
            this._json = result
            if (id) {
              this._id = result.id
            } else {
              _.each(result.data, (item) => {
                const index = _.extend(
                  {
                    _json: item,
                    _id: item._id,
                  },
                  this
                )
                this._items.push(index)
              })
            }
            this.build_children()

            opts.next(null, this)
          }.bind(this),
        })
      },

      /*
     * Method to build POST calls
     */
      post: function (opts, id) {
        let uri = this.classUrl
        if (id) {
          uri += '/' + id
        }

        new Requestor({ api_version: instance.api_version }).request({
          method: 'post',
          url: [Conekta.api_base, uri].join(''),
          data: opts.data || {},
          next: function (error, response) {
            if (error) {
              return opts.next(error, null)
            }
            response = this.listObjectsToArray(response)
            this._json = response
            this._id = response.id
            this.build_children()
            opts.next(null, this)
          }.bind(this),
        })
      },

      /*
     * Method to build PUT calls
     */
      put: function (opts, id) {
        let uri = this.classUrl
        if (id) {
          uri += '/' + id
        }
        new Requestor({ api_version: instance.api_version }).request({
          method: 'put',
          url: [Conekta.api_base, uri].join(''),
          data: opts.data || {},
          next: function (error, response) {
            if (error) {
              return opts.next(error, null)
            }
            response = this.listObjectsToArray(response)
            this._json = response
            this._id = response.id
            this.build_children()
            opts.next(null, this)
          }.bind(this),
        })
      },

      /*
       * Method to build DEL calls
       */
      del: function (opts, id) {
        let uri = this.classUrl
        if (id) {
          uri += '/' + id
        }

        new Requestor({ api_version: instance.api_version }).request({
          method: 'del',
          url: [Conekta.api_base, uri].join(''),
          data: opts.data || {},
          next: function (error, response) {
            if (error) {
              return opts.next(error, null)
            }
            response = this.listObjectsToArray(response)
            this._json = response
            this.build_children()
            opts.next(null, this)
          }.bind(this),
        })
      },

      /*
     * Method to build complex api calls
     */
      custom: function (method, customURI, opts) {
        new Requestor({ api_version: instance.api_version }).request({
          method: method,
          url: [Conekta.api_base, customURI].join(''),
          data: opts.data || {},
          next: function (err, response) {
            response = this.listObjectsToArray(response)
            opts.next(err, response)
          }.bind(this),
        })
      },
    },
    instance
  )
}

module.exports = Resource
