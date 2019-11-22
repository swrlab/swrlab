## SWR Radiohub
by **SWR audio lab**

# Streaming
_Note: Token Auth is required for several types of requests. Contact lab@swr.de for help._

## Starting a _Basic Radio_ Stream

Make an API call to
https://api.lab.swr.de/radiohub/v2/stream/start/swr3/?r=true&q=high&d=swrPwa

There are several parameters available for this request:  
- `r` - Will set the API to return the data instead of redirecting.  
- `q` - enables high quality streaming. The stream will still adaptively handle bad internet connections but the basic.  
- `d` - Send the device or application type that the request is being sent from


## Starting a _Responsive Radio_ Stream

An `appId` is needed to make calls to any responsive radio endpoint at Radiohub. To get one, call the `user/app/register` function using Radiohub's basic token auth:  
https://api.lab.swr.de/radiohub{-dev}/v2/user/app/register/{station}  

The returned object will include a unique `appId` that does not expire and can be used forever.  
_Note: Those Ids are only valid within the queried stage level and station._


Then make an API call to the overall metadata endpoint, using the `appId`:
https://api.lab.swr.de/radiohub{-dev}/v2/stream/meta?appId={appId}  

The response from this call is the same across all three responsive radio functions: `/stream/meta`, `/stream/shift/...` and `/stream/switch/...` and includes both the `session` and `meta` object.

### `session`
- `streamUrl` - This is the URL that shall be used to play back the personalized radio stream. It already includes a session-based identifier and doesn't need to be changed.
- `isNew` - The boolean tell the client whether the previous session has timed out and was refreshed, therefore the client should reload the new `streamUrl` in its player.

### `meta`
- `playerActions` - A list of actions that a user can make within the current channel.
- `channelActive` - Which of the multiple channels is playing right now
- `channelOptions` - A list of possible channels that the user can switch to. The `title` and `icon` can be used to display the selection to the user. By sending the `id` to the API, a channel switch can be triggered.
- `trackNow` - The track list that is playing in this moment. If a stream is playing, it respects the user's timestamp (and shift offset), if no stream is playing, it shows the track that's on air at the moment.
- `trackNext` - The track list that will be playing next. If a stream is playing, it respects the user's timestamp (and shift offset), if no stream is playing, it shows the track that will be on air next.
- `trackList` - The latest track list for the current channel.
_Note: `trackNow`, `trackNext` and `trackList` are only available for certain channels (usually the main ones). When no live metadata is available, those will be `null`._


## Interacting with a _Responsive Radio_ Stream

The `channelOptions.actions` object defines several user action that can be triggered. Therefore the Radiohub API provides several endpoints:
- `/v2/stream/shift/:action/...` - The shift endpoint mainly handles all timeshift features. With several options:
  - `jump` - Jump to a specified timestamp (time in milliseconds since 00:00:00 UTC on 1 January 1970)
  - `live` - Jump to the live position
  - `offset` - Shift the livestream by a given time (in milliseconds), scroll ahead in time with a positive integer, scroll back with a negative integer.
  - `back` - When triggered without a time, it will jump the previous playlist element.
  - `ahead` - When triggered without a time, it will jump the next playlist element.
- `/v2/stream/switch/:type/...` - Switch can be used to replace the content in the livestream
  - `channel` - Change the livestream to another channel by using the `id` provided by `channelOptions`
  - `skip` - Replace the current item with an alternative option.
  - `podcast` - Coming soon.

The full API documentation for this API is available on: [api.lab.swr.de/radiohub-docs/](https://api.lab.swr.de/radiohub-docs/).  

While `stream/start` requires an initial token authentication, all following interactions (`stream/meta`, `stream/shift` and `stream/switch`) only have to include the user's `sessionId` as a GET parameter.  

The `stream/meta` endpoint should be queried whenever one of the chunks from the `streamUrl` includes a header information `AR-Meta-Item-URL`. The meta URL provided in this field however, should not be queried.  
Note: This endpoint generally only works if the stream has actually been played, or is playing. Starting a session and directly checking the metadata without playing will likely result in an error.
