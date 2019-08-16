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
    work: chalk.white.bold('Junior Web Developer at BeCode.org'),
    email: chalk.hex('#E2E2E2')('                       allisonvanlinden@gmail.com'),
    github: chalk.hex('#958C94')('https://github.com/') + chalk.hex('#2B8E6E').bold('lisonallie'),
    linkedin: chalk.hex('#958C94')('https://linkedin.com/in/') + chalk.hex('#0E6EA7').bold('allison-van-linden-17451965'),
    behance: chalk.hex('#958C94')('https://behance.net/') + chalk.hex('#152C98').bold('AllisonVanLinden'),
    facebook: chalk.hex('#958C94')('https://facebook.com/') + chalk.hex('#2101EF').bold('LyssiArt'),
    instagram: chalk.hex('#958C94')('https://instagram.com/') + chalk.hex('#5506D6').bold('lyssi_artist'),
    program: chalk.hex('#CC13B2').bold('HTML   ') + chalk.hex('#F230D6').bold('CSS    ') + chalk.hex('#E568D3').bold('JavaScript    ') + chalk.hex('#FC9BEF').bold('PHP    ') + chalk.hex('#FFC5F7').bold('SQL   ') + chalk.hex('#FFFFFF').bold('node.js'),
    language: chalk.hex('#958C94')('Fluent:') + chalk.hex('#E2302D').bold(' English, Dutch ') + chalk.hex('#958C94')('Beginner:') + chalk.hex('#AE211F').bold(' French, Japanese')
}


// Actual strings to output
const newline = '\n';
const heading = `${cardData.name} / ${cardData.handle}`;
const working = `${cardData.labelWork}  ${cardData.work}`;
const emailing = `${cardData.email}`;
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
    working + newline + // cardData.labelWork + cardData.work
    emailing + newline + newline + // cardData.email
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
