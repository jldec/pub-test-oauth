# pub-test-auth

Test repo and website for pub-server persistent sessions and google-oauth.

## Usage
`npm install` and start pub server with `pub`. Navigation between pages / and /2 are logged to the session by POSTing to server/log/... (see `test-auth.js`) and displayed on the page.

### Redis persistence
Set env var REDIS=1 and run redis. Persistent sessions should survive node process restarts.

### Auth
Install ngrok locally and configure google with ngrok endpoints or push to heroku and configure hosted redis credentials.

### ngrok
`ngrok http 3001` then `open http://localhost:4040/inspect/http`

### configure google
https://console.developers.google.com/apis/credentials  
endpoints must match urls below

### configure environment
```sh
# heroku endpoint - heroku git:remote -a APP-NAME
export _APP=https://APP-NAME.herokuapp.com

# localhost endpoint for testing oauth (also configured on google dev console)
export APP=https://NGROK-ID.ngrok.io
export AUTH=1

# google oauth client id and secret
export GID=xxxxxxxxx.apps.googleusercontent.com
export GCS=xxxxxxxxx

# pub-serve-session
export SSC=xxxxxxxxx

# ACLS
export ACL_ADMIN=email@example.com
export ACL_EDIT=
export ACL_READ=

# redis: use defaults locally, credentials in cloud
export REDIS=1
export _RCP=REDIS_PORT
export _RCH=REDIS_HOSTNAME
export _RCA=REDIS_AUTH


# ################################
heroku config:set TZ=America/New_York\
  APP=$_APP NODE_ENV=$NODE_ENV\
  AUTH=1 GID=$GID GCS=$GCS SSC=$SSC\
  ACL_ADMIN=$ACL_ADMIN ACL_EDIT=$ACL_EDIT ACL_READ=$ACL_READ\
  REDIS=$REDIS RCP=$_RCP RCH=$_RCH RCA=$_RCA
```