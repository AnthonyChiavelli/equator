import React from 'react'
import { useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../../redux/store'
import { Section } from '../../types'
import SectionOptions from '../../components/SectionOptions'
import { useDispatch } from 'react-redux'
import { addNewSection } from '../../redux/options.slice'
import './Builder.scss'
import { generateWorksheet } from '../../redux/thunks/generate-worksheet'
import LoadingPane from '../../components/LoadingPane/LoadingPane'

export default function () {
  const sections = useSelector((state: RootState) => state.options)
  const preview = useSelector((state: RootState) => state.app.preview)
  const showLoader = useSelector((state: RootState) => state.app.loading)
  const dispatch: AppDispatch = useDispatch()

  const handleAddSection = React.useCallback(() => {
    dispatch(addNewSection())
  }, [])

  const handleCreateSheet = React.useCallback(() => {
    dispatch(generateWorksheet())
  }, [])

  return (
    <div className="page-builder">
      <LoadingPane show={showLoader} />
      <div className="sections">
        {sections.map((s: Section) => (
          <div key={s.index} className="section-container">
            <SectionOptions section={s} />
          </div>
        ))}
        <div className="preview">
          {preview && <div className="preview" dangerouslySetInnerHTML={{ __html: preview }}></div>}
        </div>
      </div>
      <div className="create-worksheet">
        <div className="adder">
          <button onClick={handleAddSection}>Add Section</button>
        </div>
        <button onClick={handleCreateSheet}>Generate Sheet</button>
      </div>
    </div>
  )
}
