window.onload = () => {
    const secondHand = document.querySelector('.second-hand');
    const minuteHand = document.querySelector('.minute-hand');
    const hourHand = document.querySelector('.hour-hand');

    function setTime() {
        const date = new Date();
        const second = date.getSeconds();
        const minute = date.getMinutes();
        const hour = date.getHours();

        const secondDegree = 360 / 60 * second + 90;
        const minuteDegree = 360 / 60 * minute + 90;
        const hourDegree = 360 / 12 * hour + 90;

        secondHand.style.transform = `rotate(${secondDegree}deg)`;
        minuteHand.style.transform = `rotate(${minuteDegree}deg)`;
        hourHand.style.transform = `rotate(${hourDegree}deg)`;
    }

    setInterval(setTime, 1000);
}






