import React from 'react'
import './SectionOptions.scss'
import { Section, Operation } from '../../types'
import { AppDispatch } from '../../redux/store'
import { useDispatch } from 'react-redux'
import { updateSection } from '../../redux/options.slice'
import { supportedOperations } from '../../const'

interface ISectionOptionsProps {
  section: Section
}

export default function (props: ISectionOptionsProps) {
  const dispatch: AppDispatch = useDispatch()
  const handleProblemCountChange = React.useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const newProblemCount = Number(e.currentTarget.value)
      dispatch(
        updateSection({
          index: props.section.index,
          newSection: {
            ...props.section,
            problemCount: newProblemCount,
          },
        })
      )
    },
    [props.section]
  )
  const handleToggleOperation = React.useCallback(
    (op: Operation) => {
      const newOperations = props.section.operations.includes(op)
        ? props.section.operations.filter((o: Operation) => o !== op)
        : [...props.section.operations, op]
      dispatch(
        updateSection({
          index: props.section.index,
          newSection: {
            ...props.section,
            operations: newOperations,
          },
        })
      )
    },
    [props.section]
  )

  return (
    <div className="component-section-options">
      <h3>Section {props.section.index + 1}</h3>
      <label htmlFor="problem-count">Number Of Problems</label>
      <input
        id="problem-count"
        type="number"
        min="1"
        value={props.section.problemCount}
        onChange={handleProblemCountChange}
      />

      <div>
        Included Operations
        {supportedOperations.map((operation: Operation) => (
          <div>
            <label htmlFor={`operation-${operation}`}>{operation}</label>
            <input
              id={`operation-${operation}`}
              type="checkbox"
              checked={props.section.operations.includes(operation)}
              onChange={() => handleToggleOperation(operation)}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
