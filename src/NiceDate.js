import PropTypes from 'prop-types';
/**
 * A Nice span + tooltip for a date
 * does moment-timezone transformations into local timezon
 * does time-since transformation if recent
 */
import moment from 'moment-timezone';
import React from 'react';

export const nicetimesince = (data, since) => {
  if (!data) return '';
  const m = moment(data);
  if (m.isAfter(moment('2050'))) {
    return '';
  }
  return m.from(moment(since));
};
export const tzFull = (tz) => {
  if (!tz) return 'America/New_York';
  switch (tz) {
    case 'EST':
    case 'EDT':
      return 'America/New_York';
    case 'CST':
    case 'CDT':
      return 'America/Chicago';
    case 'MST':
    case 'MDT':
      return 'America/Boise';
    case 'PST':
    case 'PDT':
      return 'America/Los_Angeles';
    default:
      return 'America/New_York';
  }
};
export const momentToTZ = (data, tzInput) => moment(data).clone().tz(tzFull(tzInput));
export const nicedate = (data, format, tzInput) => {
  if (!data) return '';
  const m = moment.isMoment(data) ? data : moment(data);
  if (m.isAfter(moment('2050-12-31'))) {
    return '';
  }
  // calculate timezone
  const tz = tzInput
    || m.format('z')
    || moment().tz(moment.tz.guess()).format('z')
    || 'America/New_York';
  // convert dates from inputs into the expected timezone
  const mLocal = momentToTZ(m, tz);
  if (!format || format === 'calendar') {
    return mLocal.calendar(null, {
      sameDay: '[Today]',
      nextDay: 'MMM-DD',
      nextWeek: 'MMM-DD',
      lastDay: 'MMM-DD',
      lastWeek: 'MMM-DD',
      sameElse: 'MM/DD/YYYY',
    });
  }
  return mLocal.format(format);
};
export const nicedateTZ = (data, tzInput, format) => nicedate(data, format, tzInput);

const NiceDate = props => (
  <span
    className={props.className}
    title={nicedateTZ(props.date, props.tz, 'YYYY-MM-DDTHH:mm:ssZ')}
  >
    {props.format === 'since'
      ? nicetimesince(props.date)
      : nicedateTZ(props.date, props.tz, props.format)
    }
  </span>
);
NiceDate.propTypes = {
  // value of date
  date: PropTypes.oneOfType([ // eslint-disable-line
    PropTypes.object,
    PropTypes.string,
  ]),
  tz: PropTypes.string, // eslint-disable-line
  format: PropTypes.string, // eslint-disable-line
  className: PropTypes.string, // eslint-disable-line
};

export default NiceDate;
