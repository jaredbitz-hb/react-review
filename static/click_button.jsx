
function ClickButton() {
    const [clicks, setClicks] = React.useState(0);

    const onClick = (event) => {
        setClicks(clicks + 1);
    }

    return (
        <button onClick={onClick}>
            I've been clicked {clicks} time(s)!
        </button>
    );
}

