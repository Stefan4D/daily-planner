// - Save the event in local storage when the save button is clicked in that timeblock.
const testEvents = {
  "9AM": "The 9am event",
  "10AM": "test",
  "11AM": "test",
  "12PM": "test",
  "1PM": "test",
  "2PM": "test",
  "3PM": "test",
  "4PM": "test",
  "5PM": "The 5pm event",
  "6PM": "Write some JQuery",
  "7PM": "Debug my JQuery",
  "8PM": "Run away from JQuery",
  "9PM": "test",
  "10PM": "test",
};
localStorage.setItem("events", JSON.stringify(testEvents));
const savedEvents = JSON.parse(localStorage.getItem("events")) || {};

// - Display the current day at the top of the calendar when a user opens the planner.
// using this plugin to allow for ordinal to be included (1st, 2nd, 3rd etc)
dayjs.extend(window.dayjs_plugin_advancedFormat);
const today = dayjs().format("dddd Do MMMM YYYY");
const currentDay = $("#currentDay");
currentDay.text(today);

// - Present timeblocks for standard business hours when the user scrolls down.
const container = $(".container");

// const row = $("<div>");
// const textArea = $("<textarea>");
// const saveButton = $("<div>");
// const hour = $("<div>");
// row.addClass("row");
// textArea.addClass("description present");
// textArea.text("test");
// saveButton.addClass("saveBtn");
// saveButton.text("Save");
// hour.addClass("hour");
// hour.text("9AM");

// row.append(hour);
// row.append(textArea);
// row.append(saveButton);
// container.append(row);

// for loop to cycle through hours from 9AM to 5PM using Day.js
for (let i = 9; i < 22; i++) {
  // cannot use .format() here otherwise it interferes with the comparison below
  const now = dayjs();
  const time = dayjs().hour(i).minute(0).second(0);
  const formattedTime = time.format("hA");
  const row = $("<div>");
  const textArea = $("<textarea>");
  const saveButton = $("<div>");
  const hour = $("<div>");
  row.addClass("row");

  // compares the 2 Day.js objects without formatting
  if (time.isSame(now, "hour")) {
    textArea.addClass("description present");
  } else if (now.isAfter(time)) {
    textArea.addClass("description past");
  } else {
    textArea.addClass("description future");
  }

  // need to use the formatted time here to match the savedEvents object keys
  textArea.text(savedEvents[formattedTime] || "");

  saveButton.addClass("saveBtn");
  //   saveButton.text("Save");
  // add font awesome icon to save button
  saveButton.append('<i class="fas fa-save"></i>');
  hour.addClass("hour");
  // using formatted time here for display
  hour.text(formattedTime);

  row.append(hour);
  row.append(textArea);
  row.append(saveButton);
  container.append(row);
}

// implement a loop to go from 9am to 5pm
// add a .row for each hour timeslot
// apply .past / .present / .future based on relative time to now
// each time block is an input field to allow for editing (or textarea)
// save icon to right of each row with event listener attached to save to localStorage

// - Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// - Allow a user to enter an event when they click a timeblock.

// - Persist events between refreshes of a page.
