function ButtonContainer() {
    const [values, setValues] = React.useState([0, 0, 0, 0, 0]);

    const buttons = [];
    for(let i = 0; i < 5; i++) {
        // Notice that this function is defined inside our for loop,
        // so there are actually five different ones! (One for each value of i)
        const onClick = (event) => {
            const newValues = [...values]; // Make a copy of the values array
            newValues[i] += 1;
            setValues(newValues);
        }

        // When you store an array of objects, each needs a unique key.
        // This is so React can "remember" which is which if the DOM updates and
        // elements get added or removed.
        buttons.push(
            <ClickButton onClick={onClick} clicks={values[i]} key={i}/>
        );
    }

    // Count the total number of clicks across all buttons
    let totalClicks = 0;
    for (const value of values) {
        totalClicks += value
    }

    // An array of components can be "unpacked" and rendered one after the other
    // by putting it in curly brackets, like {buttons}.
    // React components must also return just one element (possibly with children), 
    // so we wrap the whole thing in a div.
    return (
        <div> 
            {buttons} 
            Total Clicks: {totalClicks}
        </div>
    );
}


// This component renders each individual button.
// Notice that the number of clicks is now a prop - it came from
// our parent component above!
function ClickButton(props) {
    return (
        <button onClick={props.onClick}>
            I've been clicked {props.clicks} time(s)!
        </button>
    );
}