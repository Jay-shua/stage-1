//Displaying the current Day of the Week

const currentDate = new Date();
//Creating an array of the Days of the Week
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

// Getting the Names of the Days of the Week via their Array Index
const day = currentDate.getDay();

// Get the name of the day of the week
const dayName = daysOfWeek[day];

// Display the day of the week on your webpage
const dayOfWeekElement = document.getElementById('dayOfWeek');
dayOfWeekElement.textContent = `Today is ${dayName}`;


//Displaying UTC time in Milliseconds
function displayUTCTime() {
  // Create a Date object representing the current UTC time
  const currentUTCDate = new Date();

  // Get the time in hours, minutes, seconds and milliseconds. Then combine them together as one string element
  const hours = currentUTCDate.getUTCHours();
  const minutes = currentUTCDate.getUTCMinutes();
  const seconds = currentUTCDate.getUTCSeconds();
  const milliseconds = currentUTCDate.getUTCMilliseconds();

  const Time = `${hours}:${minutes}:${seconds}:${milliseconds}`;

  const utcTimeElement = document.getElementById('UTCTime');
  utcTimeElement.textContent = `Current Time (UTC): ${Time}`;
}

// Calling the function to initially display the time
displayUTCTime();


setInterval(displayUTCTime, 1000);