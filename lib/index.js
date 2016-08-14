module.exports = function () {
  this.pipes = require('./config/pipes.js');
  this.context = null;
  this.init = function (config, context, isDummy) {
    // do something
    this.context = context;
  }

  this.validate = function (requestObject, callback) {
  	console.log(requestObject);
  	if(requestObject.data.body.name){
    	if(!requestObject.data.body.name.match('/^[A-Za-z0-9]+$/')){
    		callback(new this.context.errors.BadRequestError('Field name expects only letters (lower and upper case) and numbers'));
    		return;
    	}
    }
    callback(null, requestObject);
  }
}
