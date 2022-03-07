# hands-on with vanilla typscript

1. Install typescript:
```sh
npm install typescript
```
2. Compile ts:
```sh
tsc ts/game.ts
```
OR:

Create a tsconfig.json in root and add `"watch": true` so that ts will be compliled automatically on changed once we give the command `tsc`

3. Open index.html to play the game

4. Basic game engine:
- [x] Button functionality: when clicked, START button is hidden and a text alert pops up
- [x] Implement computer move: randomly pick between 3 options: 0, 1 and 2
- [x] Implement user move: by clicking one of the 3 buttons >> Rock, Paper, Scissors
- [x] Comparison for winner: computer vs player guess
- [x] Implement round of 3 guesses or 2 wins in a row to end round
- [ ] ~~To use non-code assets with TypeScript, for example an `.svg`, we need to defer the type for these imports. This requires a `custom.d.ts` file which signifies custom definitions for TypeScript in our project. Remember to add `custom.d.ts` to `tsconfig.json`:~~

~~"include": ["custom.d.ts"]~~

Icons didn't work, they apparently do in React...

- [x] Render the right HTML element at different times

## Credits:

- Based on Ada College Apprentices Tutorial: https://github.com/adaapp/rock-paper-typescript