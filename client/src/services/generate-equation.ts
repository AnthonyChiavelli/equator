import { Equation, Operation, Operator } from '../types'

function randomInt(min: number, max: number): number {
  // TODO support negs
  // filter out zero
  return Math.floor(Math.random() * (max + 1 - min) + min)
}

function randomOperator(operations: Operation[]): Operator {
  const operators: Operator[] = []
  if (operations.includes('addition')) operators.push('+')
  if (operations.includes('subtraction')) operators.push('-')
  if (operations.length === 0) {
    throw new Error('No operations to choose from')
  }
  return operators[randomInt(0, operations.length - 1)]
}

function generateEquation(operations: Operation[]): Equation {
  // TODO support varied number of operands
  const equation: Equation = []
  equation.push(randomInt(1, 100))
  equation.push(randomOperator(operations))
  equation.push(randomInt(1, 100))
  equation.push('=')
  equation.push('<blank>')
  return equation
}

export { generateEquation }
