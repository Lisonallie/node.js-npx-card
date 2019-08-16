#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

'use strict'

const boxen = require('boxen')
const chalk = require('chalk')
const gradient = require('gradient-string')


const options = {
    padding: 1,
    margin: 1,
    borderStyle: 'round'
}

const cardData = {
    labelWork: chalk.white('       Job Title:'),
    labelGitHub: chalk.white('     GitHub:'),
    labelLinkedIn: chalk.white('   LinkedIn:'),
    labelBehance: chalk.white('        Behance:'),
    labelFacebook: chalk.white('       Facebook:'),
    labelInstagram: chalk.white('      Instagram:'),
    labelProgramming: chalk.white('    Programming Languages:'),
    labelLanguages: chalk.white('      Languages:'),
    name: gradient.pastel('              Allison Van Linden'),
    handle: chalk.white('npx card'),
    work: chalk.white('Junior Web Developer at BeCode.org'),
    github: chalk.gray('https://github.com/') + chalk.green('lisonallie'),
    linkedin: chalk.gray('https://linkedin.com/in/') + chalk.blue('allison-van-linden-17451965'),
    behance: chalk.cyan('https://behance.net/') + chalk.red('AllisonVanLinden'),
    facebook: chalk.red('https://facebook.com/') + chalk.white('LyssiArt'),
    instagram: chalk.gray('https://instagram/com/') + chalk.blue('lyssi_artist'),
    program: chalk.cyan('HTML') + chalk.red('CSS') + chalk.white('JavaScript') + chalk.gray('PHP') + chalk.green('SQL') + chalk.blue('node.js'),
    language: chalk.white('Fluent:') + chalk.green('English, Dutch') + chalk.white('Beginner:') + chalk.cyan('French, Japanese')
}


// Actual strings we're going to output
const newline = '\n'
const heading = `${cardData.name} / ${cardData.handle}`
const working = `${cardData.labelWork}  ${cardData.work}`
const githubbing = `${cardData.labelGitHub}  ${cardData.github}`
const linkedining = `${cardData.labelLinkedIn}  ${cardData.linkedin}`
const behanceing = `${cardData.labelBehance}  ${cardData.behance}`
const facebooking = `${cardData.labelFacebook}  ${cardData.facebook}`
const instagramming = `${cardData.labelInstagram}  ${cardData.instagram}`
const programming = `${cardData.labelProgramming}  ${cardData.program}`
const languageing = `${cardData.labelLanguages}  ${cardData.language}`

// Put all our output together into a single variable so we can use boxen effectively
const cardText = heading + // cardData.name + cardData.handle
    newline + newline + // Add one whole blank line
    working + newline + newline + // cardData.labelWork + cardData.work
    githubbing + newline + // cardData.labelTwitter + cardData.twitter
    linkedining + newline + // cardData.labelnpm + cardData.npm
    behanceing + newline + // cardData.labelGitHub + cardData.github
    facebooking + newline + // cardData.labelLinkedIn + cardData.linkedin
    instagramming + newline + newline + // cardData.labelWeb + cardData.web
    programming + newline + //cardData.labelProgramming + cardData.program
    languageing + newline + //cardData.labelLanguages + cardData.language

chalk.green(boxen(`cardText`, options))

// fs.writeFileSync(path.join(__filename, ''), chalk.green(boxen(output, options)))

// let coolGradient = gradient(['#FF0000', '#00FF00', '#0000FF']);