## SWR Radiohub
by [**SWR audio lab**](https://lab.swr.de/)  

Go to [api.lab.swr.de/radiohub-docs](https://api.lab.swr.de/radiohub-docs/#/) for the Swagger documentation.

# Changelog

This changelog serves as a place for all changes around the public SWR Radiohub API service.

- 2020-04-08 - v2.9.8
  - Adding previously integrated, yet not documented variables for `stream/meta` start commands
  - `stream/meta` now also provides appropriate `wave` data for channels, which in some cases has failed before
  - `stream/switch/news` now requires a channel id

- 2020-02-27 - v2.9.5
  - `wave` metadata will only be served once a session is being started (like identified by `data.session.hasChanged` bool)
  - `wave` metadata now includes `min`, `max` and `updatedAt` information
  - As all content endpoints are now entering a productive state, authorization is now required

- 2020-02-23 - v2.9.4
  - the endpoint `geo/search` now delivers actual data

- 2020-02-13 - v2.9.3
  - Header information for possible request tracing now only serves in `x-cloud-trace-context`, no longer in `swr-trace`

- 2020-01-23 - v2.9.2
  - Please note to use the parent station not a regional version for `/v2/cover/{mdid}/`

- 2020-01-23 - v2.9.1
  - content API now serves inline articles in `articleUrl` and no longer in `newsDocument`
  - content API removed `isThumbAvailable` and `isShareable`, which were essentially just null checks `thumbRef` and `webUrl`; `metaDataId` and `importId` are also no longer served publicly
  - content API known bug: field `teaser` may contain unwanted HTML tags
  - content API changed URL structure, especially direct article access via `/content/{id}` has moved
  - content API types for all items have changes, most importantly `news` is now `article`
  - stream API no longer returns full metadata stack when calling all `stream/shift` and `stream/switch` endpoints, only status code 200 with `data=null`

- 2020-01-23 - v2.9.0
  - `/content/collection/list` has been switched off

- 2020-01-02 - v2.8.0 🍾🥂
  - content API no longer serves thumbnail urls, content documents include `thumbRef` which can be used to load the image from `content/thumb`
  - `isThumbAvailable` is now called `thumbIsAvailable`
  - new endpoint `content/latest/{id/ref}/{offset}`

- 2019-12-24 - v2.7.2
  - adding track/like endpoint

- 2019-12-19 - v2.7.1
  - adding shift/{back/ahead}/{type}

- 2019-12-18 - v2.6.6
  - adding new geo endpoint (dummy)

- 2019-12-10 - v2.6.5
  - Adding `appId` and /content details to docs
  - app register endpoint now serves the id in the field `appId`, no longer in `id`

- 2019-12-05 - v2.6.3
  - content API now requires authentification 

- 2019-11-25 - v2.6.2
  - JSON responses in Radiohub production will no longer include tabs for easier visual output
  - The `info` object for all responses now features fewer details

- 2019-11-22 - v2.6.0
  - Responsive Radio workflow is now rewritten and uses `appId` verification for token handling (See [STREAMING.md](docs/STREAMING.md))
  - `stream/meta`, `stream/switch` and `stream/shift` now use the same response format
  - New endpoint `schedule/time/{station}/{format}/{time}` allows schedule queries based on a ms or s timestamp

- 2019-10-08 - v2.5.0
  - 🎉 `/radiohub-dev` is now available. Existing tokens apply to both stages.
  - Swagger docs now support both production and development stages
    - removing /radiohub prefix
    - overwriting the domain and path for swr-images and swr2-images

- 2019-10-08 - v2.4.3
  - Responsive Radio streams now require special permission `swrRadiohubStreamStart`
  - Response code for failed or missing authorizations is now `401` not `403`

- 2019-10-07 - v2.4.2
  - Schedule now supports filtering by day
  - Added new feedback endpoint, primarily for apps

- 2019-10-04 - v2.4.0
  - Adding API documents for streaming and authentication.
  - Also adding `weather/` and `stream/` documentation to Open API docs.

- 2019-08-02 - v2.2.1
  - Adding streaming API

- 2019-06-21 - v2.0.3
  - Adding authentication and response types

- 2019-06-14/19 - v2.0.1
  - First version of Open API
  - Adding traffic search and geo distance calculation


@ Future editors, please stick to this format ;-)
- YYYY-MM-DD - v0.0.0
  - Description
  - Maybe more description.
