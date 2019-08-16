#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

const boxen = require('boxen');
const chalk = require('chalk');
const gradient = require('gradient-string');

const cardData = {
    labelWork: chalk.hex('#28D5FF').bold('           Job Title:'),
    labelGitHub: chalk.hex('#4CEBB8').bold('         GitHub:'),
    labelLinkedIn: chalk.hex('#229AE0').bold('       LinkedIn:'),
    labelBehance: chalk.hex('#3F5FF2').bold('        Behance:'),
    labelFacebook: chalk.hex('#563DF9').bold('       Facebook:'),
    labelInstagram: chalk.hex('#8149DD').bold('      Instagram:'),
    labelProgramming: chalk.hex('#C150B1').bold('    Programming:'),
    labelLanguages: chalk.hex('#FF5D5B').bold('      Languages:'),

    name: gradient.pastel('                 Allison Van Linden'),
    handle: chalk.white('npx card'),
    work: chalk.white('Junior Web Developer at BeCode.org'),
    github: chalk.gray('https://github.com/') + chalk.hex('#2B8E6E').bold('lisonallie'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.hex('#0E6EA7').bold('allison-van-linden-17451965'),
    behance: chalk.gray('https://behance.net/') + chalk.hex('#152C98').bold('AllisonVanLinden'),
    facebook: chalk.gray('https://facebook.com/') + chalk.hex('#2101EF').bold('LyssiArt'),
    instagram: chalk.gray('https://instagram/com/') + chalk.hex('#5506D6').bold('lyssi_artist'),
    program: chalk.cyan('HTML') + chalk.red('CSS') + chalk.white('JavaScript') + chalk.gray('PHP') + chalk.green('SQL') + chalk.blue('node.js'),
    language: chalk.black.bgGreen('Fluent:') + chalk.green(' English, Dutch ') + chalk.black.bgYellow('Beginner:') + chalk.cyan(' French, Japanese')
}


// Actual strings to output
const newline = '\n';
const heading = `${cardData.name} / ${cardData.handle}`;
const working = `${cardData.labelWork}  ${cardData.work}`;
const githubbing = `${cardData.labelGitHub}  ${cardData.github}`;
const linkedining = `${cardData.labelLinkedIn}  ${cardData.linkedin}`;
const behanceing = `${cardData.labelBehance}  ${cardData.behance}`;
const facebooking = `${cardData.labelFacebook}  ${cardData.facebook}`;
const instagramming = `${cardData.labelInstagram}  ${cardData.instagram}`;
const programming = `${cardData.labelProgramming}  ${cardData.program}`;
const languageing = `${cardData.labelLanguages}  ${cardData.language}`;

// Put all our output together into a single variable so we can use boxen effectively
let cardText = heading + // cardData.name + cardData.handle
    newline + newline + // Add one whole blank line
    working + newline + newline + // cardData.labelWork + cardData.work
    githubbing + newline + // cardData.labelTwitter + cardData.twitter
    linkedining + newline + // cardData.labelnpm + cardData.npm
    behanceing + newline + // cardData.labelGitHub + cardData.github
    facebooking + newline + // cardData.labelLinkedIn + cardData.linkedin
    instagramming + newline + newline + // cardData.labelWeb + cardData.web
    programming + newline + //cardData.labelProgramming + cardData.program
    languageing; //cardData.labelLanguages + cardData.language

console.log(boxen(cardText, {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}));
