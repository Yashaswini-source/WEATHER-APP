// http://api.weatherapi.com/v1/current.json?key=acdd334a4a1b4d1ea35163825250404&q=London&aqi=no

const temperatureField =  document.querySelector(".temp")

const locationField =  document.querySelector(".city p")

const dataField =  document.querySelector(".timeanddate p")

const weatherField =  document.querySelector(".climate p")

const searchField =  document.querySelector(".name")

const searchbutton =  document.querySelector(".button")
const form =  document.querySelector("form")


form.addEventListener('submit', searchForLocation)


let target='mumbai'

const fetchResults = async (targetLocation) => {

    let url=`http://api.weatherapi.com/v1/current.json?key=acdd334a4a1b4d1ea35163825250404&q=${targetLocation}&aqi=no`
    const res =await fetch(url)
    const data = await res.json()
    console.log(data)


    let locationName =  data.location.name
    let time =  data.location.localtime
    let temp =  data.current.temp_c
    let condition =  data.current.condition.text
    updatedetails(temp,locationName,time,condition)
    updateBackground(condition);
}
function updatedetails(temp,locationName,time,condition){

    let splitDate=time.split(' ')[0]

    
    let splitTime=time.split(' ')[1]

    let currentDay=getDayName(new Date(splitDate).getDay())

    temperatureField.innerText = temp
    locationField.innerText = locationName
    dataField.innerText=`${splitDate} ${currentDay} ${splitTime}`;
    weatherField.innerText=condition

    
    
}

function searchForLocation(e){
    e.preventDefault()
    target = searchField.value
    fetchResults(target)
}
fetchResults(target)

function getDayName(number){
    switch(number){
        case 6:
            return 'sunday'
        case 0:
            return 'monday'
        case 1:
            return 'tuesday'
        case 2:
            return 'wednesday'
        case 3:
            return 'thursday'
        case 4:
            return 'friday'
        case 5:
            return 'saturday'

    }
}
