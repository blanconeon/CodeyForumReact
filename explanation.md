 Here’s how it works, step by step:

1. **App runs first.**  
   When `App` runs, it maps over the `comments` array and creates an array of `Card` components (`allComments`).

2. **App returns allComments.**  
   This array contains `Card` components, each with its own props.

3. **React renders each Card.**  
   For each `Card`, React calls the `Card` function, passing in the props.

4. **Card renders its children.**  
   Inside each `Card`, `Header` and `Body` are created, each receiving their own props.

5. **Header and Body render their content.**  
   These components return the actual JSX that displays the data.

So, `App` returns the structure, and React takes care of rendering each child component in order. The child components don’t need to “exist” first; React handles the process as it builds the UI tree.