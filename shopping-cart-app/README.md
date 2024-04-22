Create actions

Create Global Store:
global state refers to a centralized data store that holds the application's state, making it accessible to all components within the application. This global state allows components to access and modify data without passing it through multiple layers of props

Create reducers:
Reducers, as the name suggests, take in two things: previous state and an action. Then they reduce it (read it return) to one entity: the new updated instance of state. So reducers are basically pure JS functions which take in the previous state and an action and return the newly updated state.

Use useDispatch
Allows React components to dispatch actions to the Redux store. It returns a reference to the
dispatch function, which can be used to dispatch actions to the store.

and useSelector
Allows React components to access the state stored in a Redux store
