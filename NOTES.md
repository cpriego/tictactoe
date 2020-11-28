# Challenge - 30" to plan - 24:30 to code
✅ - Empty 3X3 Grid
✅ - player X drawing the pin on top left
✅ - player O drawing the pin in the middle



# ATDD - Vertical Victory Scenario
## Unit test creation steps
✅ - X top left
✅ - O middle
✅ - X mid left
✅ - O top mid
✅ - X bottom left
✅ - Check if player is won
✅ - Check if player X is won
✅ - Player X WON.


# ATDD - Horizontal Victory Scenario
## Unit test creation steps
- X mid
- O top left
- X Mid bottom
- O Mid top
- X bottom right
- O rigth top
- Player O WON.


# New features
O|O|O
 |X|
 |X|X

✅  1. Diagonal Victory scenario
✅  2. Show on console
3. Who decides who won
4. Specific set of positions for customer to select
5. boundary of positions that customer can select


# Refactoring
- board.js - line 66 is uncovered. (why is it "uncovered"?)
✅ refactor the code to reflect the scenarios instead of indeices
✅ refactor method names
✅ all win scenarios for horizontal, vertical and diagonal
✅ create stubs for every final game status
- decouple scenarious
- fake on console VS hidden stubs on game over