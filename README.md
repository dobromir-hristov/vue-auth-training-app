# basic-aut-app

- [X] Explain structure
- [X] Api service
- [X] Login
- [X] Basic auth store module
- [X] Storing Token 
- [ ] fetching user
- [X] Routes
- [X] Route guards
- [X] Navigation component

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Runs a local API server
```
npm run api
```

### You can now use these routes:

accounts: **user@mail.com** and **user2@mail.com**
password: 12345

* **login** - _POST_
* **register** - _POST_
* **books** - _GET_ - Guarded, needs JWT Token
* **users** - _GET_

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

### Run your end-to-end tests
```
npm run test:e2e
```

### Run your unit tests
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
