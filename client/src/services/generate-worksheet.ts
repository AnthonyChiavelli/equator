import { EquationElement, Section } from '../types'
import { generateEquation } from './generate-equation'

function generateSheet(sections: Section[]) {
  let htmlString = ''
  sections.forEach((section: Section) => {
    htmlString += `Section: ${section.index + 1}. \n`
    Array(section.problemCount)
      .fill(0)
      .forEach((_, i: number) => {
        htmlString += `${String(i + 1)}) `
        const newEquation = generateEquation(section.operations)
        newEquation.forEach((o: EquationElement) => {
          if (o === '<blank>') {
            htmlString += `[ ] `
          } else {
            htmlString += `${String(o)} `
          }
        })
        htmlString += '\n'
      })
    htmlString += '\n'
  })
  return htmlString
}

export { generateSheet }
