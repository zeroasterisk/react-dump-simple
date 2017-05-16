# React Dump Component

Sometimes you just want to dump the contents of a value onto the page.

This is a rudementary implementation, but it should work for many things.

See [storybook for examples](https://zeroasterisk.github.io/react-dump)

```js
import Dump from 'react-dump';

const MyPage = props => (
  <div>
    Here is something I'm trying to debug:
    <Dump value={props.userData} />
  </div>
);

const MyComponentDumpsAllProps = props => (<Dump value={props} />);
```

_(this is super simple, but sometimes useful when developing)_

