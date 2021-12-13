import Errors from '../Errors';
import Configs from './Configs';
import Create from './Create';
import Fetch from './Fetch';
import { aggregate } from '../../helpers/classes';


/**
 * Shuffle
 * @prop {object}   configs 
 * @prop {array}    errors
 * @prop {boolean}  hasErrors
 */

export default class Shuffle extends aggregate(
  Errors,
  Configs, 
  Create,
  Fetch,
) {}