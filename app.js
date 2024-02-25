const endDate = "25 December 2025 9:00 PM"

document.getElementById("end-date").innerText = endDate;
const inputs = document.querySelectorAll("input")
function clock() {
    const end = new Date(endDate);
    const now  = new Date();
    const diff = (end - now)/1000;
    if(diff<0) return; //to not get negative values

    inputs[0].value = (Math.floor(diff/3600/24)); //convert into days left
    inputs[1].value = (Math.floor(diff/3600)%24); //convert into hours left
    inputs[2].value = (Math.floor(diff/60)%60); //convert into mins left
    inputs[3].value = (Math.floor(diff)%60); //convert into seconds left
}
clock()
setInterval(
    () => {
        clock()
    },
    1000
)