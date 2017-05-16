/* eslint react/jsx-filename-extension: 0 */
/* eslint react/no-array-index-key: 0 */
import moment from 'moment-timezone';
import isBoolean from 'lodash/isBoolean';
import isNaN from 'lodash/isNaN';
import isNull from 'lodash/isNull';
import isUndefined from 'lodash/isUndefined';
import isNumber from 'lodash/isNumber';
import isDate from 'lodash/isDate';
import isArray from 'lodash/isArray';
import isString from 'lodash/isString';
import isObject from 'lodash/isObject';
import isPlainObject from 'lodash/isPlainObject';
import { inspect } from 'util';
import React from 'react';
import PropTypes from 'prop-types';
import NiceDate from './NiceDate';

const Dump = ({ value, useInspect, dateFormat, taProps }) => {
  // we might want to just use inspect, a lot
  if (useInspect) {
    return <textarea value={inspect(value, { depth: 4 })} {...taProps} />;
  }
  // handle some common types
  if (isUndefined(value)) return <div className="text-muted" title="undefined">&nbsp;</div>;
  if (isNaN(value)) return <div className="text-muted">NaN</div>;
  if (isNull(value)) return <div className="text-muted">NULL</div>;
  if (isBoolean(value) && value) return <div><em>TRUE</em></div>;
  if (isBoolean(value) && !value) return <div className="text-muted"><em>FALSE</em></div>;
  if (isNumber(value)) return <div title="NUMBER" className="text-right">{value}</div>;
  if (isDate(value) || moment.isMoment(value)) {
    return <div className="text-date"><NiceDate date={value} format={dateFormat} /></div>;
  }

  // React object here
  if (isObject(value) && value.props) return value;

  if (isArray(value)) {
    return (<div>{value.map((val, i) => (
      <div key={i} className="textarea-list">
        <div className="text-muted small"><em>#{i}</em></div>
        <div style={{ marginLeft: 10 }}><Dump value={val} /></div>
      </div>
    ))}</div>);
  }
  if (isObject(value) && isPlainObject(value)) {
    return (<div>{Object.keys(value).map(key => (
      <div key={key}>
        <div className="text-muted small"><em>{key}</em></div>
        <div style={{ marginLeft: 10 }}><Dump value={value[key]} /></div>
      </div>
    ))}</div>);
  }
  if (isString(value) && value.length < 80) return <span>{value}</span>;
  return <textarea value={inspect(value, { depth: 4 })} {...taProps} />;
};
Dump.propTypes = {
  value: PropTypes.any, // eslint-disable-line
  taProps: PropTypes.object, // eslint-disable-line
  // TODO allow custom comopnents for rendering various types
  useInspect: PropTypes.bool,
  dateFormat: PropTypes.string,
};
Dump.defaultProps = {
  useInspect: false,
  dateFormat: 'since',
  taProps: {
    readOnly: true,
    style: {
      height: 60,
      width: '100%',
      padding: 8,
      borderRadius: 4,
      borderWidth: 2,
      borderColor: '#eeeeee',
      backgroundColor: '#fcfcfc',
    },
  },
};
export default Dump;
