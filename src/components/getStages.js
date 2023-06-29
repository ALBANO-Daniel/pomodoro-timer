export function getStageInSeconds({ workTime, breakTime, longPause }) {
  const stageInMinutes = getStagesInMinutes({ workTime, breakTime, longPause })
  return convertStageToSeconds(stageInMinutes)
}

export function getStagesInMinutes({ workTime, breakTime, longPause }) {
  return [workTime, breakTime, workTime, breakTime, workTime, breakTime, workTime, longPause]
}

function convertStageToSeconds(stageInMinutes) {
  return stageInMinutes.map((minutes) => minutes * 60)
}
