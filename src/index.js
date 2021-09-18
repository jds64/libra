/**
 * 
 * Libra - True-color logging utility for Jeffrey app.
 * v2.0.0
 * 
**/

const chalk = require('chalk')

// #region utils
/**
 * @function
 * @name wrap
 * @param {string} str 
 * @param {string} b 
 * @param {string} e 
 * @example
 * wrap('string123')
 * '[string123]'
 * 
 * wrap('stringabc', '<', '>')
 * '<stringabc>'
 */
const wrap = (str, b = '[', e = ']') => {
  if (!str || !b || !e) return;
  return `${b}${str}${e}`;
}

const defaults = {
  name: () => chalk.hex('#0ED098')(wrap('jeffrey')),
  time: () => chalk.hex('#666666')(wrap(new Date().toLocaleTimeString(), '<', '>')),
}

// #endregion

/**
 * @class
 * @name Libra
 */
class Libra {
  /**
   * @constructor
   * @param {LibraOptions} options 
   */
  constructor(options) {

    this.name = options?.name || defaults.name;
    this.time = options?.time || defaults.time;
    /**
     * @function
     * @name getStyleProvider
     * @returns {chalk.Chalk}
     */
    this.getStyleProvider = function () {
      return this.constructor.StyleProvider;
    }

    this.wrap = wrap;
  }

  static StyleProvider = chalk;
  static style_provider = chalk;

  /**
   * @name lf
   * @description Put a new line.
   * @function
   * @example
   * const libra = new Libra()
   * libra.lf() 
  */
  lf() {
    console.log("\n");
    return this;
  }

  /**
   * @name info
   * @description Log an informational message to the console (stdout).
   * @function
   * @param {...any} text
   * @example
   * const libra = new Libra()
   * libra.info("my message!", Number(1), new Object({ hello: 'world!' }));
   */
  info(...text) {
    console.log(
      this.time? this.time(): defaults.time(),
      this.name? this.name(): defaults.name(),
      Libra.StyleProvider.bold.bgHex('#007ADA')(' INFO '),
      ...text
    )
    return this;
  }

  /**
   * @name warning
   * @description Log a warning message to the console (stdout).
   * @function
   * @param  {...any} text 
   * @example
   * const libra = new Libra()
   * libra.warning("Warning!", "You should do this or that or whatever!");
   */
  warning(...text) {
    console.log(
      this.time? this.time(): defaults.time(),
      this.name? this.name(): defaults.name(),
      Libra.StyleProvider.bold.bgHex('#F48800')(' WARN '),
      ...text
    )
    return this;
  }

  /**
   * @name error
   * @description Log an error message to the console (stdout).
   * @function
   * @param  {...any} text
   * @example
   * const libra = new Libra()
   * libra.error("Danger!", new Error(myError), new Object({ code: 8 }));
   */
  error(...text) {
    console.log(
      this.time? this.time(): defaults.time(),
      this.name? this.name(): defaults.name(),
      Libra.StyleProvider.bold.bgHex('#B90000')(' ERR! '),
      ...text
    )
    return this;
  }

  /**
   * @name success
   * @description Log a success message to the console (stdout).
   * @function
   * @param  {...any} text
   * @example
   * const libra = new Libra()
   * libra.success("You win!", { result: "Winner!" });
   */
  success(...text) {
    console.log(
      this.time? this.time(): defaults.time(),
      this.name? this.name(): defaults.name(),
      Libra.StyleProvider.bold.bgHex('#088B22')('  OK  '),
      ...text
    )
    return this;
  }

  /**
   * @name debug
   * @description Log a debug message to the console (stdout).
   * @function
   * @param  {...any} text
   * @example
   * const libra = new Libra()
   * libra.debug("blah blah!");
   */
  debug(...text) {
    console.log(
      this.time? this.time(): defaults.time(),
      this.name? this.name(): defaults.name(),
      Libra.StyleProvider.bold.bgHex('#BF00E8')(' DBUG '),
      ...text
    )
    return this;
  }

  /**
   * @name ex
   * @description Log a custom error message to the console (stdout).
   * @function
   * @param {string} hexColor A hex color starting with '#'.
   * @param {string} level The name of the 'level' in the log.
   * @param {...any} text The message to send.
   * @example
   * const libra = new Libra()
   * libra.ex("#000000", 'XMPL', "Custom message level!");
   */
  ex(hexColor = '#000000', level = 'NONE', ...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex(hexColor)(` ${level.substring(0, 4)} `),
      ...text
    )
    return this;
  }

}

module.exports = Libra;