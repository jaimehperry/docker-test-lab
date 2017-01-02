
/**
 * Module dependencies.
 */

var Base = require('./base')
  , color = Base.color;

/**
 * Expose `List`.
 */

exports = module.exports = MochaStream;

/**
 * Initialize a new `MochaStream` test reporter.
 *
 * @param {Runner} runner
 * @api public
 */

function MochaStream(runner) {
  Base.call(this, runner);

  var self = this
    , stats = this.stats
    , total = runner.total;

  runner.on('pass', function(test){
    console.log(JSON.stringify(clean(test, 'pass')));
  });

  runner.on('fail', function(test, err){
    console.log(JSON.stringify(clean(test, 'fail')));
  });

}

/**
 * Return a plain-object representation of `test`
 * free of cyclic properties etc.
 *
 * @param {Object} test
 * @return {Object}
 * @api private
 */

function clean(test, state) {
  return {
    state: state,
    title: test.title,
    fullTitle: test.fullTitle(),
    duration: test.duration
  }
}