const stdin = process.openStdin()
stdin.addListener('data', text => {
  userInput = text.toString().trim()
  console.log()

  isShowAll(userInput)
})

const SHOW_DATA = 'tampilkan'
const activities = []
let userInput = ""

function isShowAll(input) {
  if (input === SHOW_DATA) {
    showData()
  } else {
    saveData(input)
  }
}

function getTime(activity) {
  const TIME_LENGTH = 6
  const timePosition = activity.indexOf('>')
  const activityDetail = {
    detail: '',
    time: ''
  }

  if (timePosition >= 0) {
    activityDetail.time = activity.slice(timePosition + 1, timePosition + TIME_LENGTH)
  }

  if (timePosition === 0) {
    activityDetail.detail = activity.slice(timePosition + TIME_LENGTH, activity.length).trim()
  } else {
    activityDetail.detail = activity.slice(0, timePosition).trim()
  }

  return activityDetail
}

function saveData(dataToSave) {
  activities.push(getTime(dataToSave))
}

function showData() {
  if (Array.isArray(activities) && activities.length) {
    for (let i = 0; i < activities.length; i++) {
      if (activities[i].detail && activities[i].time) {
        console.log('Aktivitas:', activities[i].detail, '||', 'Waktu:', activities[i].time)
      } else {
        console.log('Wrong Input')
      }
    }
  } else {
    console.log('Aktivitas Kosong')
  }

  stdin.pause()
}