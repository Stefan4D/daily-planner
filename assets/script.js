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
// uncomment below to add test events to local storage
// localStorage.setItem("events", JSON.stringify(testEvents));
const savedEvents = JSON.parse(localStorage.getItem("events")) || {};

// Displays the current day at the top of the calendar when a user opens the planner
// using this plugin to allow for ordinal to be included (1st, 2nd, 3rd etc)
dayjs.extend(window.dayjs_plugin_advancedFormat);
const today = dayjs().format("dddd Do MMMM YYYY");
const currentDay = $("#currentDay");
currentDay.text(today);

const container = $(".container");
const saveState = $("#save-state");

// Presents timeblocks for standard business hours when the user scrolls down
// Uses for loop to cycle through hours from 9AM to 5PM using Day.js
for (let i = 9; i < 18; i++) {
  // cannot use .format() here otherwise it interferes with the comparison below
  const now = dayjs();
  const time = dayjs().hour(i).minute(0).second(0);
  const formattedTime = time.format("hA");
  const row = $("<div>");
  const textArea = $("<textarea>");
  const saveButton = $("<div>");
  const hour = $("<div>");
  row.addClass("row");

  // Color-code each timeblock based on past, present, and future when the timeblock is viewed.
  // compares the 2 Day.js objects without formatting and applies the correct CSS class
  if (time.isSame(now, "hour")) {
    textArea.addClass("description present");
  } else if (now.isAfter(time)) {
    textArea.addClass("description past");
  } else {
    textArea.addClass("description future");
  }

  // need to use the formatted time here to match the savedEvents object keys
  textArea.text(savedEvents[formattedTime] || ""); // if there is nothing in local storage then use an empty string
  textArea.attr("id", formattedTime);

  saveButton.addClass("saveBtn");
  saveButton.attr("data-time", formattedTime);
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

// originally used the .savBtn class to target the save button, but this made the entire div the save button so changed to use the font awesome icon instead
// changed event handler to use .parent() to get the correct element as the icon is the target but has no siblings so need to go up to the parent
const saveBtn = $(".fa-save");

// have to use function here to get the correct 'this' context
saveBtn.on("click", function () {
  // need to use .parent() to get the correct elements
  const textArea = $(this).parent().siblings(".description");
  const hour = $(this).parent().siblings(".hour");
  const time = hour.text();
  const event = textArea.val();
  savedEvents[time] = event;
  localStorage.setItem("events", JSON.stringify(savedEvents));
  saveState.text("Saved!");
});
