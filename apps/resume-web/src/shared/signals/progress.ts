import { createSyncSignal } from "@resume/hooks"

export interface StepsState
  {
    stepsCompleted: Set<string>,
    progress: number,
  }


export const {
  setState: setProgressStep,
  store: progressStore,
  useSignal: useProgressStep,
} = createSyncSignal({
  initialState: {
    stepsCompleted: new Set(),
    progress: 0,
  }
})

export function useStep(){
  return (step: string)=>{
    setProgressStep(prev=>{
      prev.stepsCompleted.add(step)

      return {
        ...prev,
        progress: (prev.stepsCompleted.size / 6)
      }
    })
  }
}
