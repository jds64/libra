import chalk from 'chalk'

// #region utils
/**
 * @function
 * @name wrap
 * @param {string} str 
 * @param {string} b 
 * @param {string} e 
 */
const wrap = (str, b = '[', e = ']') => {
  if (!str || !b || !e) return;
  return `${b}${str}${e}`;
}

const defaults = {
  name: () => chalk.hex('#0ED098')(wrap('default')),
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
    this.name = this.options?.name || defaults.name;
    this.time = this.options?.time || defaults.time;
    this.getStyleProvider = function () {
      return this.constructor.StyleProvider;
    }
  }

  static StyleProvider = chalk;
  static style_provider = chalk;

  /**
   * @name info
   * @description Log an informational message to the console (stdout).
   * @function
   * @param  {...any} text
   */
  info(...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex('#648B92')(' INFO '),
      ...text
    )
  }

  /**
   * @name warning
   * @description Log a warning message to the console (stdout).
   * @function
   * @param  {...any} text 
   */
  warning(...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex('#F48800')(' WARN '),
      ...text
    )
  }

  /**
   * @name error
   * @description Log an error message to the console (stdout).
   * @function
   * @param  {...any} text
   */
  error(...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex('#F40000')(' ERR! '),
      ...text
    )
  }

  /**
   * @name success
   * @description Log a success message to the console (stdout).
   * @function
   * @param  {...any} text
   */
  success(...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex('#00C828')('  OK  '),
      ...text
    )
  }

  /**
   * @name debug
   * @description Log a debug message to the console (stdout).
   * @function
   * @param  {...any} text
   */
  debug(...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex('#BF00E8')(' DBUG '),
      ...text
    )
  }

  /**
   * @name ex
   * @description Log a custom error message to the console (stdout).
   * @function
   * @param {string} hexColor A hex color starting with '#'.
   * @param {...any} text Your message 
   */
  ex(hexColor = '#000000', level = 'NONE', ...text) {
    console.log(
      this.time ? this.time() : defaults.time(),
      this.name ? this.name() : defaults.name(),
      Libra.StyleProvider.bold.bgHex(hexColor)(` ${level.substring(0, 4)} `),
      ...text
    )
  }

}

export default Libra;