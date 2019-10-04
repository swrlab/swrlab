## SWR Radiohub
by **SWR audio lab**

# Token Auth

The Radiohub API requires authentication for several queries, as defined in the Open API documents.  

Authentication works via HTTP Basic Authorization using a base64 encoded username and password combination: https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Authorization  

Usernames and passwords can be requested via [lab@swr.de](mailto:lab@swr.de).


### Demo
A demo integration in NodeJS using node-fetch would look something like this:

```JS
const fetch		= require('node-fetch')
const base64 		= require('base-64')

const radiohubFetchAuth = {
	method: 'get',
	headers: { 'Authorization': 'Basic ' + base64.encode('user:password')}
}
const radiohubUrl	= 'https://api.lab.swr.de/radiohub/v2/track/live/swr3/'

var dataRequest		= await fetch(radiohubUrl, radiohubFetchAuth)
var data		= await dataRequest.json()
```
