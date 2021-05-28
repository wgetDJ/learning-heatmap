// JavaScript
const currentDay = () => {
    let today = new Date();
    // let dayList = ["Sunday","Monday","Tuesday","Wednesday ","Thursday","Friday","Saturday"];
    let monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Sep", "Oct", "Nov", "Dec"];
    let day = today.getDate();
    let month = today.getMonth();
    let year = today.getFullYear();
    let currentMonth = monthList[month];
    document.write(day+ " " + currentMonth + " " + year);
}