# Overseer

## About
Popular apps detection and vulnerability monitoring

## Architecture
Overseer is made up of three components
1. overseer-server
2. overseer-client
3. overseer-adl (app detection layer)

### Server
Server written in Go.
Exposes two endpoints `GET /apps` and `POST /apps`
Has an integration layer with CVE-search API.

### Client
Desktop electron client made with React.
Interacts with ADL for popular app detection.
Interacts with overseer-server for vulnerability monitoring.

### App Detection Layer
Abstraction layer for detecting installed apps.
Here lies platform-dependent code.
Our proposed implementations for Windows are
+ [REG command line tool](https://www.npmjs.com/package/winreg)
+ [Windows Script Host](https://www.npmjs.com/package/regedit)
+ Win32API

## Links
[Dockerhub](https://hub.docker.com/r/stelimx/overseer)

