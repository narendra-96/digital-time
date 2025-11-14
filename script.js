function updateClock() {
    const timeEl = document.getElementById("time");
    const ampmEl = document.getElementById("ampm");
    const weekdays = document.querySelectorAll("#weekdays li");
    const tempEl = document.getElementById("temp");
    const monthdayEl = document.getElementById("monthday");

    const now = new Date();

    let hr = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();
    let isPM = hr >= 12;

    // convert to 12-hour format
    let displayHr = hr % 12;
    if (displayHr === 0) displayHr = 12;

    timeEl.textContent =
        `${displayHr.toString().padStart(2, "0")}:` +
        `${min.toString().padStart(2, "0")}:` +
        `${sec.toString().padStart(2, "0")}`;

    ampmEl.textContent = isPM ? "PM" : "AM";

    // Weekday highlight
    weekdays.forEach(li => li.classList.remove("active"));
    weekdays[now.getDay() === 0 ? 6 : now.getDay() - 1].classList.add("active");

    // Fake temperature (placeholder)
    tempEl.textContent = 70 + Math.floor(Math.random() * 9);

    // Date
    let month = (now.getMonth() + 1).toString().padStart(2, "0");
    let day = now.getDate().toString().padStart(2, "0");
    monthdayEl.textContent = `${month}.${day}`;

    requestAnimationFrame(updateClock);
}

updateClock();
