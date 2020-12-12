const deadline = 'January 11 2021 04:59:59 GMT+0200';

const getRemainingTime = (endtime) => {
    const totalTime = Date.parse(endtime) - Date.parse(new Date())
    const seconds = Math.floor((totalTime / 1000) % 60)
    const mins = Math.floor((totalTime / 1000 / 60) % 60)
    const hours = Math.floor((totalTime / (1000 * 60 * 60)) % 24);
    const days = Math.floor(totalTime / (1000 * 60 * 60 * 24));

    return {
        seconds,
        mins,
        hours,
        days,
        totalTime
    }
}

function initialiseClock(sec, min, hour, day, endtime) {
    console.log(sec)
    const daysLeft = document.querySelector(day)
    const hoursLeft = document.querySelector(hour)
    const minsLeft = document.querySelector(min)
    const secsLeft = document.querySelector(sec)

    const timesInterval = setInterval(() => {
        const timeRemaining = getRemainingTime(endtime)

        timeRemaining.days < 10 ?
            daysLeft.innerHTML = `0${timeRemaining.days}` :
            daysLeft.innerHTML = `${timeRemaining.days} `

        timeRemaining.hours < 10 ?
            hoursLeft.innerHTML = `0${timeRemaining.hours}` :
            hoursLeft.innerHTML = `${timeRemaining.hours}`

        timeRemaining.mins < 10 ?
            minsLeft.innerHTML = `0${timeRemaining.mins}` :
            minsLeft.innerHTML = `${timeRemaining.mins}`

        timeRemaining.seconds < 10 ?
            secsLeft.innerHTML = `0${timeRemaining.seconds} ` :
            secsLeft.innerHTML = `${timeRemaining.seconds}`

        if (timeRemaining.totalTime <= 0) {
            daysLeft.innerHTML = "00"
            hoursLeft.innerHTML = "00"
            minsLeft.innerHTML = "00"
            secsLeft.innerHTML = "00"

            clearInterval(timesInterval)
        }
    }, 1000)
}

initialiseClock(".secs_title", ".mins_title", ".hours_title", ".days_title", deadline)