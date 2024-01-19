# Test task

[link to broken project - https://stackblitz.com/edit/stackblitz-starters-hzuvw4?file=src%2FApp.tsx](https://stackblitz.com/edit/stackblitz-starters-hzuvw4?file=src%2FApp.tsx)

[link to final result - https://stackblitz.com/edit/stackblitz-starters-6pdpqp?file=src%2FListItem.tsx](https://stackblitz.com/edit/stackblitz-starters-6pdpqp?file=src%2FListItem.tsx)

## First task

The "Update" buttons for list items should change the value in the corresponding row when clicked, but something isn't working, even though the client claims that their developer wrote the entire code 🙂 The state of the list is stored at the List component level and should remain there. Fix the display of value changes.

## Second task

The "Update" buttons now work correctly, but updating only one row causes all 200 list items to rerender. At the same time, the render counters for the rows show the number of changes to the item, not the number of renders for the ListItem component.

2.1) Modify the render counter to reflect the actual number of renders for the ListItem component and keep it within the component.

2.2) Optimize the rerendering so that when clicking "Update" on an item, only the component where the button is pressed undergoes an update.

2.3) Try to eliminate double renders of rows.

## Third task

In the List component, there is a commented-out button "Delete first," which also does not work. Implement the removal of the first element from the items.
