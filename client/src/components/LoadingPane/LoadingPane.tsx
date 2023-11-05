import React from 'react'
import './LoadingPane.scss'

interface ILoadingPaneProps {
  show: boolean
}

export default function (props: ILoadingPaneProps) {
  if (props.show) {
    return <div className="component-loading-pane">Loading...</div>
  }
}
