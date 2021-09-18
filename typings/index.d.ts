import chalk from "chalk";

declare class Libra {

  info(...text: any[]): void
  warning(...text: any[]): void
  error(...text: any[]): void
  success(...text: any[]): void
  debug(...text: any[]): void
  ex(hexColor: string, level: string, ...text: any[]): void

  static StyleProvider: chalk.Chalk;
}

