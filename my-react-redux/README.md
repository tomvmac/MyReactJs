# my-react-redux

my-react-redux is a sample react js app used to demonstrate usage of react and redux principles through the implementation of a simple CRUD application.

## Resources:
https://www.youtube.com/watch?v=S66rHpyU-Eg&t=214s 

https://medium.com/@stowball/a-dummys-guide-to-redux-and-thunk-in-react-d8904a7005d3


## Notes:

Store: Stores the state in redux

Action: Contains a type and payload dispatch by the app to send to Reducer

Reducer: Reducer processes actions

Provider: Allows react app to gain visbility to store

Connect: App Component establishes connection to store to retrieve data

Basically all data is mapped to props so the App Component can interact with it via props.  Functions that do these are mapStateToProps and mapActionToProps.

=============================================================================================================================================

Thunk: Middleware library to help with redux dispatch

Redux Thunk middleware allows you to write action creators that return a function instead of an action. The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met.


