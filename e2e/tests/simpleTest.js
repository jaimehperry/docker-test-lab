'use strict';

Feature('E2E Demo Test');

// The Before method will execute before each Scenario
// page objects can be passed into the before method

Before((I) => {
    // process.env variables are set 
    // in e2e/config/env.js
    I.amOnPage(process.env.DemoUrl);
    I.wait(5);
});

Scenario('Sample Form Required Fields', (I, DemoPage) => {
        
    I.click('Registration');
    I.wait(5);
    I.click('Submit');
    I.wait(5);

    // verify required field error displayed
    I.seeElement(DemoPage.nameFsError);
    I.wait(5);
    I.fillField(DemoPage.regFormFirstName, 'Sample');
    I.fillField(DemoPage.regFormLastName, 'User');

    // verify required field error no longer displayed
    I.dontSeeElement(DemoPage.nameFsError);
});

Scenario('Drag onto Drop Box', (I, DemoPage) => {

    I.click('Droppable');
    I.wait(2);
    I.dragAndDrop(DemoPage.dragBox, DemoPage.dropBox);
    I.see('Dropped');
});
