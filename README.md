# React Dump Simple Component

Sometimes you just want to dump the contents of a value onto the page.

If you want some colorful fanciness - check out [react-dump](https://www.npmjs.com/package/react-var-dump) &lt;-- more featureful

But if you want something simple and plain, but still effective (maybe for an internal admin interface)...

See [storybook for examples](https://zeroasterisk.github.io/react-dump)


```js
import Dump from 'react-dump-simple';

const MyPage = props => (
  <div>
    Here is something I'm trying to debug:
    <Dump value={props.userData} />
  </div>
);

const MyComponentDumpsAllProps = props => (<Dump value={props} />);
```

_(this is super simple, but sometimes useful when developing)_

