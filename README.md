## Device Buffet Server

Server app for Device Buffet deployed at https://device-buffet.moonshot.cloud/. Plays an ambient loop video and handles http requests to control device buffet demo.

### Notes
* Deployed via Dokku.
* `/` shows current video.
* GET `/video/play` starts demo video.
* GET `/video/pause` pauses demo video.
* GET `/video/stop` stops demo video.
