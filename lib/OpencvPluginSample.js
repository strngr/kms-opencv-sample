/* Autogenerated with Kurento Idl */

/*
 * (C) Copyright 2013-2015 Kurento (http://kurento.org/)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var inherits = require('inherits');

var kurentoClient = require('kurento-client');

var disguise = kurentoClient.disguise;

var checkType      = kurentoClient.checkType;
var ChecktypeError = checkType.ChecktypeError;


var Transaction = kurentoClient.TransactionsManager.Transaction;

var OpenCVFilter = kurentoClient.register.abstracts.OpenCVFilter;


function noop(error, result) {
  if (error) console.trace(error);

  return result
};


/**
 * Create an element
 *
 * @classdesc
 *  OpencvPluginSample interface. Documentation about the module
 *
 * @extends module:filters/abstracts.OpenCVFilter
 *
 * @constructor module:opencvpluginsample.OpencvPluginSample
 */
function OpencvPluginSample(){
  OpencvPluginSample.super_.call(this);
};
inherits(OpencvPluginSample, OpenCVFilter);


//
// Public methods
//

/**
 * Configures whether filter enabled or not. 0 - disabled, 1 - enabled.
 *
 * @alias module:opencvpluginsample.OpencvPluginSample.setEnabled
 *
 * @param {external:Integer} enabled
 *  Flag filter enabled or not.
 *
 * @param {module:opencvpluginsample.OpencvPluginSample~setEnabledCallback} [callback]
 *
 * @return {external:Promise}
 */
OpencvPluginSample.prototype.setEnabled = function(enabled, callback){
  var transaction = (arguments[0] instanceof Transaction)
                  ? Array.prototype.shift.apply(arguments)
                  : undefined;

  //  
  // checkType('int', 'enabled', enabled, {required: true});
  //  

  var params = {
    enabled: enabled
  };

  callback = (callback || noop).bind(this)

  return disguise(this._invoke(transaction, 'setEnabled', params, callback), this)
};
/**
 * @callback module:opencvpluginsample.OpencvPluginSample~setEnabledCallback
 * @param {external:Error} error
 */


/**
 * @alias module:opencvpluginsample.OpencvPluginSample.constructorParams
 *
 * @property {module:core.MediaPipeline} mediaPipeline
 *  the parent {@link module:core.MediaPipeline MediaPipeline}
 */
OpencvPluginSample.constructorParams = {
  mediaPipeline: {
    type: 'kurento.MediaPipeline',
    required: true
  }
};

/**
 * @alias module:opencvpluginsample.OpencvPluginSample.events
 *
 * @extends module:filters/abstracts.OpenCVFilter.events
 */
OpencvPluginSample.events = OpenCVFilter.events;


/**
 * Checker for {@link module:opencvpluginsample.OpencvPluginSample}
 *
 * @memberof module:opencvpluginsample
 *
 * @param {external:String} key
 * @param {module:opencvpluginsample.OpencvPluginSample} value
 */
function checkOpencvPluginSample(key, value)
{
  if(!(value instanceof OpencvPluginSample))
    throw ChecktypeError(key, OpencvPluginSample, value);
};


module.exports = OpencvPluginSample;

OpencvPluginSample.check = checkOpencvPluginSample;
