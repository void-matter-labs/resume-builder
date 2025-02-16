import { useProgressStep } from "../signals/progress";

import './progressBar.css'

export const ProgressBar = () => {
  const progress = useProgressStep();

  return <progress
    className="ui-progress-bar"
    value={progress.progress}
  />
}
