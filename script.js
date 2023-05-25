const endDate = "30 may 2023 00:00 AM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")

const clock = () =>{
    const end = new Date(endDate);    //that lasttime
    const now = new Date()  //now right time
    const diff = (end - now) / 1000;         //milisec. to second

    // never come - value so use this:
    if(diff < 0) return;

     //convert into days
    inputs[0].value =  Math.floor(diff / 3600 / 24); //input so use value not innerhtml

    // convert into hours
    inputs[1].value = Math.floor(diff / 3600) % 24;

    // convert into minutes.
    inputs[2].value = Math.floor(diff / 60) % 60;

        // convert into seconds.
    inputs[3].value = Math.floor(diff) % 60;


}
// initial call
clock()

// 1 day = 24 hrs
// 1 hr = 60 min
// 60min = 3600 sec.


// call for every 1 sec
setInterval( 
    () =>{
         clock()
    }, 1000
)