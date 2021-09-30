# fix forked repo

`npm run build` fails due to typescript 2.8 not being compatible, so run `npx npm-check-updates -u && npm i && npm run build` to update typescript and other packages

# build

`npm run build`

# serverless

`sls deploy` deploy to AWS
`sls invoke -f search -l` invoke search function locally via command line. Seems to need `sls deploy` first
see `https://www.serverless.com/framework/docs/providers/aws/cli-reference/invoke-local/`

# serverless offline plugin

runs server to access functions via browser

`npm i serverless-offline` to install offline
`sls offline start` start a local server
