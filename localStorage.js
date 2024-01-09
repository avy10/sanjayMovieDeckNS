// browser memory
// allows us to store some data inside the browser
// caching, local storage
/* 
Local storage is a web storage feature provided by web browsers that allows websites to store data locally on a user's device. 
***It is specific to a particular domain, meaning that data stored in local storage by a website is only accessible by that same website on the same domain.

Local storage is not inherently tab-specific; instead, it is domain-specific. 
    This means that if you open multiple tabs from the same website (with the same domain), 
        they will share the same local storage. Each tab does not have its own isolated local storage.

The data stored in local storage is also URL specific in the sense that it is tied to the domain (and, optionally, the protocol and port) of the website. 
    If you navigate to a different domain, the local storage for the previous domain will not be accessible.

To clarify, if you have multiple tabs open for the same website, they will share the same local storage.
     However, if you open a new tab and navigate to a different website, 
        the local storage of the previous website will not be accessible in the new tab.
*/
//  local-storage is a global OBJECT available to us inside window object only
// write => window.localStorage in console to get the localStorage object

// local storage provides us key-value pair BECZ it is an object
// it has methods to store and send data

// getItem is supposed to get us a particular given local storage data BY USING the key, bcz localStorage is an object


// localStorage.getItem
// localStorage.setItem
// localStorage.removeItem
// localStorage.clear
// localStorage.key
// localStorage.length

localStorage.setItem("name", "avy");
localStorage.getItem("name");
console.log(localStorage.getItem("name"))

// DO NOT STORE VALUES OF OBJECTS OR ARRAYS IN THE KEY-VALUE PAIR
// USE JSON.stringify() TO CONVERT ARRAY OR OBJECT INTO JSON-STRING 
