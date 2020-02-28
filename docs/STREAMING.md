## SWR Radiohub
by **SWR audio lab**

# Streaming
_Note: Token Auth is required for several types of requests. Contact lab@swr.de for help or credentials._


## Index
↓ [Basic Radio Stream](#starting-a-basic-radio-stream)  
↓ [Responsive Radio Stream](#using-a-responsive-radio-stream)  
↘ [1. Acquire an `appId`](#1-acquire-an-appid)  
↘ [2. Handle sessions](#2-handle-sessions)  
↘ [3. Stream start](#3-stream-start)  
↘ [4. Metadata update](#4-metadata-update)  
↘ [5. Interaction](#5-interaction)  
↓ [Error cases](#error-cases)  


## Starting a **Basic** Radio Stream

Make an API call to
https://api.lab.swr.de/radiohub/v2/stream/start/swr3/?r=true&q=high&d=swrPwa

There are several parameters available for this request: 
- `swr3` - Set the station to start 
- `r` - Will set the API to return the data instead of redirecting.  
- `q` - enables high quality streaming. The stream will still adaptively handle bad internet connections but the basic.  
- `d` - Send the device or application type that the request is being sent from



## Using a **Responsive** Radio Stream

### 1. Acquire an `appId`
All interactive radio streams require an `appId`. It is a unique identifier per installed app and includes the reference to a station and previous listening history.  
One device (e.g. phone) can have multiple apps (e.g. DASDING & SWR3) installed, possibly even multiple development levels (e.g. debug, beta) and can therefore use an individual `appId` per installed app. However, one app should not delete or renew its `appId` during the lifetime. To get one, call the `user/app/register` function using Radiohub's basic token auth:  
```
https://api.lab.swr.de/radiohub{-dev/-stage}/v2/user/app/register/{station}  
```

The returned object will include a unique `appId` that does not expire and can be used forever.  
_Note: Those Ids are only valid within the queried stage level and station. Only `swr3` and `dasding` are currently available for Responsive Radio Streams._  


For API calls then add `appId` to the URL Query:
```
https://api.lab.swr.de/radiohub/v2/stream/meta?appId={appId}  
```

The response from this call is the same across all three responsive radio functions: `/stream/meta`, `/stream/shift/...` and `/stream/switch/...` and includes both the `session` and `meta` object. For asynchronus calls, the `data` field will be `null`.


### 2. Handle sessions

Every stream is based on a unique session that will expire after a while. For this case the MP3 stream returns error 400. The Radiohub API manages the relationship between a user's `appId` and the active session.  

The `data.session` object in `/stream/meta` indicates the key paramters for this relationship. `streamUrl` always has the latest streaming URL for the end device and `hasChanged` indicates whether this is a new session and has been changed since the last call by this `appId`. For this case the client should load the new `streamUrl` into the player.  

The optional query flag `&isPlaying=false` allows client to fetch the latest metadata, even when not intending to play the stream. This can be used for app refreshes after launch. Once `isPlaying` is unset or `true` a valid session will be provided by the Radiohub API.


### 3. Stream start
The most important call for the client is `/stream/meta` which along with the session information includes all necessary metadata. For example the current playing channel (`channelActive`), the timeshift position inside this stream (`shiftOffset`) and the skipping information (`skip`).
```
https://api.lab.swr.de/radiohub/v2/stream/meta?appId={appId}
```

### 4. Metadata update
The metadata can and will change over time. To keep the metadata on user devices as up-to-date as possible the MP3 Icecast stream provides inline triggers which signalize that a device should refresh the metadata by calling the meta endpoint.

For a native Icecast experience, see [ybrid/player-interaction INTERACTION](https://github.com/ybrid/player-interaction/blob/master/doc/INTERACTION.md#icecast) or the [ybrid Java Player SDK](https://github.com/ybrid/player-sdk-java). In a HTML5 player, the header field is called `AR-Meta-Item-URL`. Please provide this URL in an encoded format to the Radiohub meta API as `syncUrl` query parameter.

#### `session`
- `streamUrl` - This is the URL that shall be used to play back the personalized radio stream. It already includes a session-based identifier and doesn't need to be changed.
- `hasChanged` - The boolean tell the client whether the previous session has expired and was refreshed, therefore the client should reload the new `streamUrl` in its player.

#### `meta`
- `playerActions` - A list of actions that a user can make within the current channel.
- `channelActive` - Which of the multiple channels is playing right now
- `channelMain` - Which of the multiple channels is the default channel once a session starts playing.
- `channelOptions` - A list of possible channels that the user can switch to. The `title` and `iconRef` can be used to display the selection to the user. By sending the `id` to the API, a channel switch can be triggered.
- `shiftOffset` - Defines the relative playing offset in ms to the current time.
- `skip` - Includes details about possible actions and the remaining skips per track.
- `trackNow`, `trackNext` - The track list that is playing in this moment or is scheduled to play next. If a stream is playing, it respects the user's timestamp (and shift offset), if no stream is playing, it shows the track that's on air at the moment.
- `trackList` - The latest track list for the current channel.
_Note: `trackNow`, `trackNext` and `trackList` are only available for certain channels (usually the main ones). When no live metadata is available, those will be `null`._
- `wave` - Includes live waveform data for a visual representation of the stream. The scaling and sample size is defined inside the object.
- `scheduleNow` - The show playing at the user's timeshift position.


### 5. Interaction

The `meta.channelOptions.playerActions` array defines several user action that can be triggered. Therefore the Radiohub API provides several endpoints:

- `/v2/stream/shift/:action/...` - The shift endpoint handles all timeshift features
  - `jump` - Jump to a specified timestamp (time in milliseconds since 00:00:00 UTC on 1 January 1970)
  - `live` - Jump to the live position
  - `offset` - Shift the livestream by a given time (in milliseconds), scroll ahead in time with a positive integer, scroll back with a negative integer.
  - `back` - When triggered without a time, it will jump the previous playlist element.
  - `ahead` - When triggered without a time, it will jump the next playlist element.
- `/v2/stream/switch/:type/...` - Switch can be used to replace the content in the livestream
  - `skip` - Replace the current item with an alternative option.
  - `channel` - Change the livestream to another channel by using the `id` provided by `channelOptions`
  - `podcast` - Coming soon.
  - `content` - Coming soon.

The full API documentation for these calls is available on: [api.lab.swr.de/radiohub-docs](https://api.lab.swr.de/radiohub-docs/).  



## Error cases

For urgent problems or availability issues in the production system, reach out to lab@swr.de. For general questions or problems, feel free to [open an issue](https://github.com/swrlab/swr-radiohub-docs/issues/new) in [swr-radiohub-docs](https://github.com/swrlab/swr-radiohub-docs/issues).

### HTTP Status `400`
In the MP3 stream this will occur if the session has expired or is invalid. A call to the Radiohub meta API will open a new valid session.  
In the Radiohub context it means that a parameter has not been set properly. The `message` field will provide an explanation why that happened.

### HTTP Status `401`
If the API call requires [authentication](AUTHENTICATION.md) but has either not been set or could not be verified, the API will return Unauthorized.

### HTTP Status `404`
Unlikely case that an API call has been deprecated and removed, the API will return 404.

### HTTP Status `500`
The Radiohub API encountered an error. If the error keeps happening, please provide the requested call and `info.trace` to lab@swr.de.

### HTTP Status `504`
The Radiohub API encountered a timeout in a subsystem. This could potentially happen if ybrid was shortly unavailable. Clients may retry the call but not indefinitely.
