// app.js for concatenation of smaller libraryies
// to reduce http requests of small files
'use strict';



// import es6 and es5 code here, and it will output as both es6 module and es5 iife



// lazy sizes for image loading
import 'lazysizes';

// Prefetch in-viewport links during idle time
// import { listen } from 'quicklink/dist/quicklink.mjs';
// listen();

// bootstrap js - import the whole library
//import 'bootstrap';

// example initialization from this import 
// var scrollSpy = new bootstrap.ScrollSpy(document.body, {
//   target: '#navbar-example'
// })


// alternatively only import the modules that you need from the library
import {
  // Alert, // Control alerts
  // Button, // complex button toggles etc
  // Carousel, // required for carousel
  Collapse, // required for mobile collapse menu
  // Dropdown, // not required for navbar only for custom dropdowns
  // Modal, // modal popups
  // Popover, // popovers
  // ScrollSpy, // auto update active link for 1 page sites
  // Tab, // Tabs
  // Toast, // Toasts
  // Tooltip , // Tooltips
} from 'bootstrap';

// example initialization from this import 
// const scrollSpy = new ScrollSpy(document.body, {
//   target: '#js-navParent',
// });