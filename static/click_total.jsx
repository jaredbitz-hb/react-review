function ButtonContainer() {
    const [values, setValues] = React.useState([0, 0, 0, 0, 0]);

    const buttons = [];
    for(let i = 0; i < 5; i++) {
        const onClick = (event) => {
            // Make a copy of the values array
            const newValues = [...values];
            newValues[i] += 1;
            setValues(newValues);
        }
        buttons.push(
            <ClickButton onClick={onClick} clicks={values[i]} key={i}/>
        );
    }

    let totalClicks = 0;
    for (const value of values) {
        totalClicks += value
    }

    return (
        <div> 
            {buttons} 
            Total Clicks: {totalClicks}
        </div>
    );
}

function ClickButton(props) {
    return (
        <button onClick={props.onClick}>
            I've been clicked {props.clicks} time(s)!
        </button>
    );
}