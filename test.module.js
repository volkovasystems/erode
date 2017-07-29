
const assert = require( "assert" );
const erode = require( "./erode.js" );

let symbol = Symbol( "hello" );
let data = { };
data[ symbol ] = 12345;

erode( symbol, data );

assert.equal( data[ symbol ], undefined, "should be equal to undefined" );

console.log( "ok" );
