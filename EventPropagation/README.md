Event Delegation
Instead of adding an event listener to every child element, we add one event listener to their parent and use event.target to identify which child was clicked.

1.event.target
target tells you the actual element where the event happened.
target means button click
where did i click

2. event.currentTarget
currentTarget tells you the element whose event handler is currently running.
Which element's handler is running?


Pure Function vs Impure Function in JavaScript

The easiest way to understand them is:

Pure function → same input, same output, no outside changes.
Impure function → can depend on or change something outside the function.