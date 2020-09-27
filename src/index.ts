import { isDate as isDateFns } from 'date-fns';
import { isDate as isDateMoment } from 'moment';

isDateFns(new Date(2014, 1, 11));
isDateMoment(new Date(2014, 1, 11));
