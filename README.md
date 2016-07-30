# soundtracker
Keep track of soundtrack. ಠ_ಠ

Provides a Maki service with one resource, the "Snapshot" resource, and a tool
to check a remote [soundtrack][soundtrack] instance for some metrics and create
new Snapshot instances.

## Quick Start
### Run the Service
`node soundtracker.js` — See `config/index.js` to configure.

### Run the Tracker
`node tools/capture.listeners.js` — looks for port 13000 by default.  Edit this
file directly to configure.

[soundtrack]: https://github.com/martindale/soundtrack.io 
