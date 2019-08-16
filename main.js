#!/usr/bin/env node
const boxen = require('boxen');
const terminalLink = require('terminal-link');
const chalk = require('chalk');
const gradient = require('gradient-string');

const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
  }

  const cardData = {
    name: gradient.pastel('              Allison Van Linden'),
    handle: chalk.white('npx card'),
    work: chalk.white('Junior Web Developer at BeCode.org'),
    github: chalk.gray('https://github.com/') + chalk.green('lisonallie'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('allison-van-linden-17451965'),
    behance: chalk.cyan('https://behance.net/') + chalk.red('AllisonVanLinden'),
    facebook: chalk.red('https://facebook.com/') + chalk.white('LyssiArt'),
    instagram: chalk.gray('https://instagram/com/') + chalk.blue('lyssi_artist'),
    labelWork: chalk.white.bold('       Work:'),
    labelGitHub: chalk.white.bold('     GitHub:'),
    labelLinkedIn: chalk.white.bold('   LinkedIn:'),
    labelWeb: chalk.white.bold('        Web:'),
    labelCard: chalk.white.bold('       Card:')
  }


// let coolGradient = gradient(['#FF0000', '#00FF00', '#0000FF']);


// console.log(gradient.pastel("Allison Van Linden"));