# swd-react-demo

A simplified version of the front end React app for the art gallery demo that will be continued in Unit 2.

> Students: Use the instructions in Part 1 below to create your own new React application, then reference the TODOs in the subsequent starter code branches for parts 2-5 to build it a bit at a time.

---

### Part 1

> There is no starter code for this part since creating the app is part of the demo!

#### Focus

- Spinning up a new ReactJS/Vite app
- Removing boilerplate content to have a blank slate
- Creating some components for composing pages
- Adding temporary hard-coded content and structure with basic HTML
- Incorporating CSS & responsive layouts after content is in place
- Loop over lists with .map() to produce multiple instances of JSX or minor components
- Storing test data and passing data through props

#### TO DO

##### New App, Blank Slate

1. Use `npm create vite` to create a new ReactJS application. Spin it up with `npm run dev` and see the example content in the browser.
1. Remove the example content in `App.jsx`, `index.css`, `App.css`, etc. including SVGs.

##### Component Composition

1. Create a new folder, `src/components`.
1. Create a `Header` component and return JSX that places the name of the art gallery within a `<div>`, nested between `<header>` tags.
1. Create a `Footer` component and return JSX that places a copyright statement within a `<div>`, nested between `<footer>` tags. Use a JSX placeholder `{}` to place the current year, calculated above with JavaScript.
1. In `App.js`, place an instance of the `Header` and `Footer` components in the returned JSX, making sure to import them at the top. They should be visible in the browser.

##### Styling

1. Copy over the global CSS from my `part1-solution-basics` branch to `src/index.css`. (As long as `index.css` is still imported in `main.jsx`, it should be available to the entire application.)
1. Apply `<div>`s, ids and classes where needed to make the layout work.
1. View the changes in the browser as you go.

##### Child Components & Props

1. Add some test data (list of artworks as JS objects) at `src/test-data` (create the folder first), then import it into `App.js`.
1. Create a reusable `Card` component that uses CSS classes to produce a `<div>` containing the content passed through the `children` prop.
1. Create a second reusable `ArtworkCard` that accepts an `artwork` prop. Set it up to display a single artwork image, the title, and the artist's name. This should use of the `Card` component as a container.
1. Between the header and footer components in `App.js`, add a `<main>` element. Add an `<h1>` heading displaying the title "Artworks."
1. Temporarily render 1 instance of the `ArtworkCard` component within `<main>` and pass in the object at index `0` from your data. You should see your card rendered on the page.

##### Producing JSX by Mapping over Data

1. Create a variable called `artworksJSX` inside the component function in `App.js`, and use `.map()` to traverse the array of artwork objects and produce a single `ArtworkCard` instance for each one. Make sure to add a required `key` using the artwork `id`.
1. Replace the single `ArtworkCard` inside `<main>` with `artworksJSX` instead, using a JSX placeholder `{}`.
1. You should now see the page fill with cards for multiple artworks in the browser.

##### Testing Responsive Design

1. You should see a number of media queries in the CSS from my solution. These, along with CSS functions like `clamp()`, help control what the content on the page looks like at different screen widths.
1. Use browser dev tools to test the page on different devices, and do a little of your own experimentation by resizing your browser window manually.

##### One Last Reusable Component

1. If you look at the bottom of the cards displaying on the page, notice the padding is a little uneven. This has to do with the way the specific content affects the padding with its own margins. We need to add a little extra space below the artist's name in the `ArtworkCard` component where the specific issue occurs, but we don't want to change the padding of `Card` or the bottom margin of `<h6>`.
1. Create a new reusable component called `Spacer` that accepts `marginX` and `marginY` props and applies it to a `<div>` using inline CSS. Make sure if either of the props is not used, the corresponding margin setting has a default value of `0` instead.
1. This component can now be used anywhere in the app to provide an adjustment horizontally or vertically. (You could even provide for a character to be used between other content for inline spacing, as I've done in my solution.)
1. Insert an instance of the `Spacer` component below the title & artist section in `ArtworkCard`, and experiment with the vertical margin value you pass in as a prop until it looks balanced.

> Use the `part1-solution-basics` branch to check my solution.

---

### Part 2

> Use the `part2-starter-state` branch to get started.

#### Focus

- Implementing conditional rendering within JSX with ternary operators (`?` and `:`) and logical AND operator (`&&`)
- Utilizing the `useState()` hook for state variables that will trigger re-rendering if their values change
- Lifting state to parent
- Passing event handlers with props

> Use the `part2-solution-state` branch to check my solution.

---

### Part 3

> Use the `part3-starter-forms` branch to get started.

#### Focus

- Managing form data with React
- Utilizing dynamic handlers

> Use the `part3-solution-forms` branch to check my solution.

---

### Part 4

> Use the `part4-starter-lifecycles` branch to get started.

#### Focus

- Fetching data from an external API
- Tapping into component lifecycles with the `useEffect()` hook
- Manage race conditions when data is loading
- Handling errors with `try`/`catch`/`finally`
- Hooking into the DOM with useRef()

> Use the `part4-solution-lifecycles` branch to check my solution.

---

### Part 5

> Use the `part5-starter-routing` branch to get started.

#### Focus

- Adding the React Router dependency
- Setting routes to define URLs and correlate components
- Implementing dynamic routing with path parameters and the `useParams()` hook
- Incorporating the `<Link>` component for sending users to other components based on routes
- Leveraging the `useNavigate()` hook for re-routing from a component (without the user clicking a link)

> Use the `part5-solution-routing` branch to check my solution.

---
