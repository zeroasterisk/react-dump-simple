/* eslint react/jsx-filename-extension: 0 */
/* eslint import/no-extraneous-dependencies: 0 */
import React from 'react';
import { storiesOf } from '@kadira/storybook';
import Dump from '../index';

import geojson from './geojson.json';

storiesOf('Dump', module)
  .add('undefined', () => <Dump value={undefined} />)
  .add('no value (undefined)', () => <Dump />)
  .add('null', () => <Dump value={null} />)
  .add('false', () => <Dump value={false} />)
  .add('0', () => <Dump value={0} />)
  .add('empty string', () => <Dump value="" />)
  .add('baisc string', () => <Dump value="lorem ipsum" />)
  .add('long string', () => (<Dump value={
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan nec ex vitae sagittis. Proin sit amet rutrum tortor, eu blandit dui. Interdum et malesuada fames ac ante ipsum primis in faucibus. Vivamus congue dictum finibus. Fusce lacus nisi, dictum at mattis vel, porta eget purus. Proin nec justo eget tortor molestie viverra. Sed facilisis facilisis leo et finibus. Maecenas ut ullamcorper diam. Phasellus tempor, quam non rhoncus dictum, lectus ante pretium tellus, vitae luctus urna metus in nibh.

    Duis auctor libero ipsum. Curabitur id efficitur nisi, eget tincidunt odio. Morbi bibendum mauris in felis congue, sed egestas nulla euismod. Aliquam semper eget metus ut luctus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla commodo augue in mollis lobortis. Proin hendrerit velit at odio dignissim, ut ultrices quam lacinia. Cras eget finibus orci. Nullam et eros nec ligula fringilla imperdiet non in lorem. Etiam hendrerit molestie vestibulum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam malesuada neque mi, ac consequat justo ultricies non. Vivamus eget tristique urna, id dictum erat. Nullam id suscipit felis. Ut accumsan commodo cursus.

    Aenean eget feugiat ipsum. Suspendisse sit amet libero pharetra, rutrum ipsum non, finibus ipsum. Nam finibus venenatis consectetur. Pellentesque vel neque nec eros condimentum egestas quis sed risus. Quisque fringilla vestibulum neque, at mattis metus dignissim eleifend. Sed rutrum, libero at ultricies vulputate, enim felis gravida sapien, nec vestibulum velit nunc sit amet justo. Nunc efficitur nisl ipsum, vitae dapibus urna maximus et. Mauris porta gravida arcu in faucibus. Aliquam at lectus ipsum. Ut tincidunt pharetra lacus in ultrices. Suspendisse vitae justo ac libero consequat blandit. Ut vitae leo ac lorem sagittis luctus. Proin sit amet quam vitae arcu dignissim dapibus.`
  } />))
  .add('date object', () => <Dump value={new Date()} />)
  .add('date object with dateFormat', () => <Dump value={new Date()} dateFormat="YYYY-MM-DD" />)
  .add('date object with useInspect', () => <Dump value={new Date()} useInspect />)
  .add('array of strings', () => <Dump value={['quick', 'brown', 'fox']} />)
  .add('simple object', () => <Dump value={{ speed: 'quick', color: 'brown', animal: 'fox' }} />)
  .add('simple object - useInspect', () => (
    <Dump useInspect value={{ speed: 'quick', color: 'brown', animal: 'fox' }} />
  ))
  .add('complex object', () => <Dump value={geojson} />)
  .add('complex object - useInspect', () => <Dump value={geojson} useInspect />)

  ;
