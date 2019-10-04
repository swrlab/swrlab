## SWR Radiohub Streaming
by **SWR audio lab**

# Streaming
_Note: Token Auth is required for several types of requests. Contact lab@swr.de for help._

## Starting a _Responsive Radio_ Stream

Make an API call to
https://api.lab.swr.de/radiohub/v2/stream/start/swr3/?y=true&r=true&q=high&d=swrPwa

There are several parameters available for this request:  
- `y` - Enables responsive radio. This kind does require an authentication.  
- `r` - Will set the API to return the data instead of redirecting.  
- `q` - enables high quality streaming. The stream will still adaptively handle bad internet connections but the basic.  
- `d` - Send the device or application type that the request is being sent from

The `data` section of the return object will now provide several important details:
- `sessionId` - This is from now on needed for all requests to uniquely identify the user's personal streaming session.  
- `streamUrl` - This MP3-based streaming URL already includes the appropriate server endpoint and `sessionId` and can be used to hand over to the audio player.
- `channelActive` - Which of the multiple channels is playing right now
- `channelOptions` - A list of possible channels that the user can switch to. The `title` and `icon` can be used to display the selection to the user. By sending the `id` to the API, a channel switch can be triggered.
- `channelActions` - A list of actions that a user can make within the current channel.
- `trackList` - The latest track list for the current channel. Updated lists are handed over via the `/v2/stream/meta/` endpoint or `/v2/track/list/:station/` (which is only available for main channels as defined by `channelOptions.supportsTrackList`).


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
