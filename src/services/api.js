// import necessary 3rd party libraries for setting up our API connection
import feathers from '@feathersjs/feathers'
import rest from '@feathersjs/rest-client'
import axios from 'axios'

// initialize a frontend feathers app
const api = feathers()

// setup rest client and point to URL of api
const rc = rest(process.env.VUE_APP_API_URL)

// configure api to use axios for HTTP
api.configure(rc.axios(axios))

// export the configured api object for use elsewhere
export default api
