const test = require('brittle')
const WebRTC = require('./index.js')

test('basic', function (t) {
  t.ok(WebRTC.RTCPeerConnection)
  t.ok(WebRTC.RTCIceCandidate)
})
