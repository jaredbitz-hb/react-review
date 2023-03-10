function ClickButton(props) {
    const [clicks, setClicks] = React.useState(0);

    function buttonClicked() {
        setClicks(clicks + 1);
    }

    return (
        <button onClick={buttonClicked}>
            I've been clicked {clicks} times!
        </button>
    )
}