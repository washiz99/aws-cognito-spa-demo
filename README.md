# aws-cognito-spa-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).



```
npm install --save amazon-cognito-auth-js
npm install --save amazon-cognito-identity-js
npm install --save vue-router
npm install --save axios
```


# create user pool

Pool name: spa-demo


## get current user pools list.

```
aws cognito-idp list-user-pools --max-results 10
```

aws cognito-idp describe-user-pool --user-pool-id <user-pool-id>
aws cognito-idp describe-user-pool-client --user-pool-id <user-pool-id> --client-id <client-id>
aws cognito-idp create-user-pool-domain   --user-pool-id <user-pool-id> --domain <domain>

aws cognito-idp delete-user-pool-domain --domain <domain> --user-pool-id <user-pool-id>
aws cognito-idp delete-user-pool --user-pool-id <user-pool-id>




aws cognito-idp create-user-pool --pool-name <pool-name> \
                --auto-verified-attributes email \
                --schema Name=email,AttributeDataType=String,DeveloperOnlyAttribute=false,Mutable=true,Required=true,StringAttributeConstraints={MinLength="0",MaxLength="2048"}

aws cognito-idp create-user-pool-client --user-pool-id <user-pool-id> --client-name <client-name> \
  --callback-urls '["http://localhost:8080/login/oauth2/code/cognito"]' \
  --logout-urls '["http://localhost:8080/logout"]' \
  --allowed-o-auth-flows implicit \
  --allowed-o-auth-scopes email openid
  --supported-identity-providers COGNITO
  --allowed-o-auth-flows-user-pool-client






