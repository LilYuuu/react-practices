import React, {useState} from "react"

function MyComponent() {

    const [name, setName] = useState("Guest");  // useState() returns a variable and a setter function
    const [age, setAge] = useState(0);  // takes a default value
    const [isEmployed, setIsEmployed] = useState(false);

    const updateName = () => {
        // name = "Spongebob";  won't update the value in DOM
        setName("Spongebob");
    };

    const incrementAge = () => {
        setAge(age + 1);
    };

    const toggleEmployedStatus = () => {
        setIsEmployed(!isEmployed);
    };

    return (
        <div>
            <p>Name: {name}</p>
            <button onClick={updateName}>Set Name</button>

            <p>Age: {age}</p>
            <button onClick={incrementAge}>Increment Age</button>

            <p>Is employed: {isEmployed ? "Yes" : "No"}</p>
            <button onClick={toggleEmployedStatus}>Toggle employed status</button>
        </div>
    );
}

export default MyComponent