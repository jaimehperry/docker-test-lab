'use strict';
Feature('JSForce');

Before((I) => {

    I.resizeWindow('maximize');

   // loginToSF - steps_file.js login to saleforce org & wait for home tab
    I.amOnPage(process.env.SF_LOGIN_URL);
    I.loginToSF(process.env.SF_USERNAME, process.env.SF_PASSWORD);
});

// function*() - ES6 Generator functions
// use YIELD to halt execution until data
// returned by GRAB prefixed methods

Scenario('Basic CRUD Example', function*(I){
    
    // jsforce_helper.js - get Org's base url
    let instanceUrl = yield I.grabInstanceUrl();
    //console.log("Org Instance Url " + instanceUrl);

    //  jsforce_helper.js - query Accounts 
    let results = yield I.grabSoqlResults("SELECT Id, Name FROM Account");
    //console.log('Found ' + results.records.length + ' Account(s):');
    // for(let i=0; i < results.records.length;i++ )
    // {
    //     console.log(results.records[i].Name);
    // }
});