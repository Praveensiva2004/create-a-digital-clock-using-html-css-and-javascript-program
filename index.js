function updateClock() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

 
    hours = hours % 12;
    hours = hours ? hours : 12; 

    const hoursString = hours.toString().padStart(2, '0');
    const timeString = `${hoursString}:${minutes}:${seconds} ${ampm}`;

    document.getElementById('clock').textContent = timeString;
}


setInterval(updateClock, 1000);


updateClock();
