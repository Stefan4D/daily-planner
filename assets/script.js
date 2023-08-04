// - Display the current day at the top of the calendar when a user opens the planner.
// using this plugin to allow for ordinal to be included (1st, 2nd, 3rd etc)
dayjs.extend(window.dayjs_plugin_advancedFormat);
const today = dayjs().format("dddd Do MMMM YYYY");
const currentDay = $("#currentDay");
currentDay.text(today);

// - Present timeblocks for standard business hours when the user scrolls down.

// - Color-code each timeblock based on past, present, and future when the timeblock is viewed.

// - Allow a user to enter an event when they click a timeblock.

// - Save the event in local storage when the save button is clicked in that timeblock.

// - Persist events between refreshes of a page.
