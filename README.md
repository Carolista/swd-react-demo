# swd-react-demo

This is a basic version of the front end React app for the art gallery demo that will be continued in Unit 2.

---

## Branch Flow

> [!NOTE]
> The `main` branch has the finished project and is not a starting point. Part 1 begins with creating a brand new ReactJS/Vite project, which you can do in a separate branch after forking and cloning or you can start a separate repository altogether.

### Recommended order:

1. [Part 1 instructions]() for creating the project -> `part1-solution-basics`
2. `part2-starter-state` -> `part2-solution-state`
3. `part3-starter-forms` -> `part3-solution-forms`
4. `part4-starter-lifecycles` -> `part4-solution-lifecycles`
5. `part5-starter-routing` -> `part5-solution-routing`

### Sequencing Notes

- The temporary `currentPage` state + prop drilling approach in Part 2 is intentional before routing is introduced in Part 5.
- Form handling is intentionally introduced in Part 3 before external data-fetching in Part 4.
- Loading and error handling with async fetch is intentionally covered together in Part 4.
- React Router is intentionally delayed until Part 5.

---

### Part 1

> There is no starter code for this part since creating the app is part of the demo

Focus:

- Spinning up a new ReactJS/Vite app
- Removing boilerplate content to have a blank slate
- Creating some components for composing pages
- Adding temporary hard-coded content and structure with basic HTML
- Incorporating CSS & responsive layouts after content is in place
- Looping over lists with `.map()` to produce repeated JSX
- Storing test data and passing data through props

> Use the `part1-solution-basics` branch to check my solution.

---

### Part 2

> Use the `part2-starter-state` branch to get started.

Focus:

- Implementing conditional rendering within JSX with ternary operators (`?` and `:`) and logical AND operator (`&&`)
- Utilizing the `useState()` hook for state variables that will trigger re-rendering if their values change
- Lifting state to parent components
- Passing event handlers with props

> Use the `part2-solution-state` branch to check my solution.

---

### Part 3

> Use the `part3-starter-forms` branch to get started.

Focus:

- Managing controlled form data with React state
- Utilizing dynamic handlers for multiple inputs
- Performing basic client-side validation

> Use the `part3-solution-forms` branch to check my solution.

---

### Part 4

> Use the `part4-starter-lifecycles` branch to get started.

Focus:

- Fetching data from an external API with modern `async`/`await` syntax
- Tapping into component lifecycles with the `useEffect()` hook
- Managing loading state and race conditions during asynchronous requests
- Handling errors with `try`/`catch`/`finally`
- Hooking into the DOM with the `useRef()` hook

> Use the `part4-solution-lifecycles` branch to check my solution.

---

### Part 5

> Use the `part5-starter-routing` branch to get started.

Focus:

- Adding the React Router dependency
- Setting routes to define URLs and correlate components
- Implementing dynamic routing with path parameters and the `useParams()` hook
- Incorporating the `<Link>` component for sending users to other components based on routes
- Leveraging the `useNavigate()` hook for re-routing from a component (without the user clicking a link)

> Use the `part5-solution-routing` branch to check my solution.
