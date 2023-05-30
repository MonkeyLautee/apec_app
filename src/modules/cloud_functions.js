import {getFunctions,httpsCallable} from 'firebase/functions';

const functions = getFunctions();
export const sayHello = httpsCallable(functions, 'sayHello');

// TODO: Another approach
// const functions = require('firebase-functions');
// exports.sayHello = functions.https.onCall((data, context) => {
//   return 'Hello';
// });

// TODO: Another approach
// const sayHello = functions.httpsCallable('sayHello');
// try {
//   const result = await sayHello();
//   console.log(result.data); // "Hello"
// } catch (error) {
//   console.error(error);
// }