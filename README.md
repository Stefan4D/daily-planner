# Daily Planner

## Description

User story:
AS AN employee with a busy schedule
I WANT to add important events to a daily planner
SO THAT I can manage my time effectively

## Acceptance Criteria

The app should:

- Display the current day at the top of the calendar when a user opens the planner.
- Present timeblocks for standard business hours when the user scrolls down.
- Color-code each timeblock based on past, present, and future when the timeblock is viewed.
- Allow a user to enter an event when they click a timeblock.
- Save the event in local storage when the save button is clicked in that timeblock.
- Persist events between refreshes of a page.

## Resources used

- [JQuery Docs: Siblings](https://api.jquery.com/siblings/)
- [Stack Overflow: Parent/Sibling selector](https://stackoverflow.com/questions/6577228/jquery-parent-sibling-selector)
- [Day.js: isAfter function](https://day.js.org/docs/en/query/is-after#docsNav)

## Learning Outcomes

- I learned how to use the JQuery core and UI libraries to rapidly prototype applications
- I learned about the .parent() and .siblings() methods in JQuery, which is a very useful way to grab an element in the DOM that is related to the parent of the current item (using the this keyword), which allowed me to succinctly delegate events and save changes made by the user
- I revisited flexbox in order to get the content to display correctly and mimic the example provided
- I learned how to get the time in a specific format from Day.js, which I was then able to use in my JSON object to easily store and retrieve events at particular time-slots
