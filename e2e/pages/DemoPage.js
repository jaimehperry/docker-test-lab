
'use strict';

let I;

module.exports = {

  _init() {
    I = require('../config/steps_file.js')();
  },


  // insert your locators and methods here

  dragBox:               { id: 'draggableview'},
  dropBox:               { id: 'droppableview'},
  nameFsError:           { xpath: "//div[@class='fieldset error']//label[text()[contains(., 'First Name')]]"},
  regButton:             { id: 'menu-item-374'},
  regFormFirstName:      { id: 'name_3_firstname'},
  regFormLastName:       { id: 'name_3_lastname'},
  submitButton:          { id: 'pie_submit'}

}
