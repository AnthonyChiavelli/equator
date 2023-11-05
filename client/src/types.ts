export interface AppState {
  loading: boolean
  preview: string | undefined
}

export type Operation = 'addition' | 'subtraction'

export interface Section {
  index: number
  problemCount: number
  operations: Array<Operation>
  lowerLimitDigitSize: number
  upperLimitDigitSize: number
}

export type Operator = '+' | '-' | '='
export type Blank = '<blank>'
export type EquationElement = number | Operator | Blank
export type Equation = Array<EquationElement>
