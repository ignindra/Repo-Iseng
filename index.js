const stdin = process.openStdin()
stdin.addListener('data', text => {
  userInput = text.toString().trim()

  isShowAll(userInput)
  // stdin.pause()
})

const SHOW_DATA = 'tampilkan'
const activities = []
let userInput = ""

function isShowAll(input) {
  if (input === SHOW_DATA) {
    showData()
  } else {
    saveData(input)
    console.log()
  }
}

function saveData(dataToSave) {
  activities.push(dataToSave)
}

function showData() {
  if (Array.isArray(activities)) {
    for (let i = 0; i < activities.length; i++) {
      console.log(activities[i])
    }
  }
}