# ts-assert

assertions for typescript and javascript

## Installation

npm install ts-assert --save

## Usage

### Typescript

```typescript
import assert = require( 'assert' ) ;

assert.check( 2+2===4, "Message zero") ;
assert.check( 2+2===5, "Message one" ) ;
```

Should throw an exception `"Message one"`.
