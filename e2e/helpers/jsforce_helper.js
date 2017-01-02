'use strict';

// set env variables
let env = require('../config/env.js');  
let sfLoginUrl = process.env.SF_LOGIN_URL;
let sfLoginUser = process.env.SF_USERNAME;
let sfLoginPass = process.env.SF_PASSWORD;
let Helper = codecept_helper;
let jsforce = require('jsforce');   
let conn = new jsforce.Connection({ loginUrl: sfLoginUrl });
let instanceUrl = '';
let accessToken = '';

class JsforceHelper extends Helper {
  
  _init() {
 
      return conn.login(sfLoginUser, sfLoginPass, (err, userInfo) => {
      if(err) { return console.error(err); }

      // Now you can get the access token and instance URL information.
      // Save them to establish connection next time.
      
      accessToken = conn.accessToken;
      instanceUrl = conn.instanceUrl;
    });    
  }

   // Single record creation
  createSObject(type, json) {
    
    conn = new jsforce.Connection({ instanceUrl: instanceUrl, accessToken: accessToken });
    
    return conn.sobject(type).create(json, (err, ret) => {
      if (err || !ret.success) { return console.error(err, ret); }
      return ret;
    });
  }

  // Multiple records creation
  createSObjects(type, json) {
    conn = new jsforce.Connection({ instanceUrl: instanceUrl, accessToken: accessToken });

    return conn.sobject(type).create(json, (err, ret) => {
      if (err) { return console.error(err); }  
      return ret;
    });
  }

  // Single record deletion
  deleteSObject(type, id) {
    conn = new jsforce.Connection({ instanceUrl: instanceUrl, accessToken: accessToken });

    return conn.sobject(type).destroy(id, (err, ret) => {
      if (err || !ret.success) { return console.error(err, ret); }
      return ret;
    });
  }

  runSoqlQuery(soql){
    // authenticate and return query results
    conn = new jsforce.Connection({ instanceUrl: instanceUrl, accessToken: accessToken });
    return conn.query(soql);
  }

  grabInstanceUrl() {
    return instanceUrl;
  }

  grabSoqlResults(soql) {
    // authenticate and return query results
    conn = new jsforce.Connection({ instanceUrl: instanceUrl, accessToken: accessToken });
    return conn.query(soql);    
  }
  
  // grabPolicy(policyId){
  //   conn = new jsforce.Connection({ instanceUrl: instanceUrl, accessToken: accessToken });
  //     // body payload structure depends on Apex REST method interface.
  //   var body = { recId:policyId };
  //   return conn.apex.post("/policy/", body, function(err, res) {
  //     if (err) { return console.error(err); }

  //     // the response object structure depends on the definition of apex class
  //     return res;
  //   });
  // }
}

module.exports = JsforceHelper;
