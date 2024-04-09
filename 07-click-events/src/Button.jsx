function Button() {
    
    // const handleClick = () => console.log("OUCH!");

    // const handleClick2 = (name) => console.log(`${name}, stop clicking me`);

    // let count = 0;

    // const handleClick = (name) => {
    //     if (count < 3) {
    //         count++;
    //         console.log(`${name}, you've clicked me ${count} time(s)`);
    //     } else {
    //         console.log(`${name}, stop clicking me`);
    //     }
    // };


    const handleClick = (e) => e.target.textContent = "OUCH! 🥲";

    return (
        // use the arrow function to prevent the function from being called immediately
        // as having paratheses after the function name means calling the function
        <button onClick={(e) => handleClick(e)}>Click me 😗</button>
    );
}

export default Button