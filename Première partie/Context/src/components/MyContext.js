import React from "react";
const user = {
    name: 'Barth',
    age: 8
}
const MyContext = React.createContext(user);


export { MyContext };