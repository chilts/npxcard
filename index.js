const chalk = require('chalk')
const boxen = require('boxen')

function convert(data) {
  // start the output
  const lines = []

  // output the sections
  data.forEach(section => {
    lines.push(section.title)
    lines.push(chalk.green(''.padStart(section.title.length, '-')))
    lines.push('')
    section.details.forEach(detail => {
      if (!detail) {
        lines.push('')
        return
      }
      const line = [
        chalk.white.bold(detail[0].padStart(12, ' ')),
        chalk.green(' : '),
        detail[1].substr(0, 8) === 'https://'
          ? chalk.cyan(detail[1])
          : chalk.white(detail[1])
      ].join('')

      lines.push(line)
    })
    lines.push('')
  })

  lines.pop()

  // create the entire content
  const content = lines.join('\n')

  // boxen it
  const options = {
    padding: 1,
    margin: 1,
    borderColor: 'green',
    borderStyle: 'double-single',
  }
  return boxen(content, options)
}

module.exports = convert
