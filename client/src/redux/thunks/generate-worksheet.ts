import { generateSheet } from '../../services/generate-worksheet'
import { setLoading, setPreview } from '../app.slice'
import { AppDispatch, RootState } from '../store'

function generateWorksheet() {
  return async function (dispatch: AppDispatch, getState: () => RootState) {
    const generateAsync: Promise<string> = new Promise((resolve, reject) => {
      const state = getState()
      setTimeout(() => {
        try {
          const result = generateSheet(state.options)
          resolve(result)
        } catch {
          reject('Error during worksheet generation')
        }
      }, 700)
    })

    dispatch(setLoading(true))
    try {
      const res: string = await generateAsync
      dispatch(setPreview(res))
    } catch (e) {
      alert(e)
    }
    dispatch(setLoading(false))
  }
}

export { generateWorksheet }
