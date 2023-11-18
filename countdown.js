//Insert the date until the countdown (month,day,year)
let endDate = new Date("")

//Enter the day that you want to remove from the countdown
const dayInsert = ''
//If you don't want to remove a day leave it blank

//Change the name of the event
const nameEvent = ''

//Change the next line to your own language like "Days until"
const remainingDaysText = ''

//Change the background color (change black in other color)
const colorBack = Color.black()

//Change the text color (change white in other color)
const colorText = Color.white()

//Change the font size of the days remaining
const fontDays = 52

//Change the font size of the text
const fontText = 25


// Do not change anything below this line
const daysWeek = ['sunday','monday','tuesday','wednesday','thursday','friday','saturday']
const dayNumber = daysWeek.indexOf(dayInsert.toLowerCase())

let today = new Date()
var LeftDays = 0
for(let i = today; i < endDate; today.setDate(today.getDate() + 1)) {
    let NWeekDays = today.getDay()
    if (NWeekDays !== dayNumber){
        LeftDays++
    }
}

let days = LeftDays
let hours = LeftDays*24
let minutes = hours*60
let seconds = minutes*60
let widget = new ListWidget()

widget.backgroundColor = colorBack
let countdown = widget.addText(${days})
countdown.font = new Font("ArialRoundedMTBold", fontDays, "bold")
countdown.textColor = colorText
widget.addSpacer(2)

let daysUntil = widget.addText(remainingDaysText)
daysUntil.font = new Font("ArialRoundedMTBold", fontText)
daysUntil.textColor = colorText
daysUntil.textOpacity = 0.8
widget.addSpacer(2)

let event = widget.addText(nameEvent)
event.font = new Font("ArialRoundedMTBold", fontText)
event.textColor = colorText

widget.presentSmall()
Script.setWidget(widget)
Script.complete()