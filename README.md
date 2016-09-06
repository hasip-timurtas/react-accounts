A meteor package for meteor-reactjs applications

Add NPM packages
```
npm install react react-dom react-mounter
``` 
add meteor package

```
meteor add hasip:react-accounts

``` 

```
// first, remove configuration entry in case service is already configured
Accounts.loginServiceConfiguration.remove({
  service: "google"
});
Accounts.loginServiceConfiguration.insert({
  service: "google",
  clientId: "yourClientId",
  secret: "yourSecret"
});


```

Usage : 

```
import React from 'react';
import {mount} from 'react-mounter';
import {MainLayout} from './layout';

import {Register, Login} from 'meteor/hasip:react-accounts';



FlowRouter.route('/register', {
    action() {
        mount(MainLayout, {
            content: (<Register />)
        })
    }
});



FlowRouter.route('/login', {
    action() {
        mount(MainLayout, {
            content: (<Login />)
        })
    }
});

```