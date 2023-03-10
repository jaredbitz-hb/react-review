function ClickButton() {
    const [clicks, setClicks] = React.useState(0);

    // When the page loads, send a fetch request to ask the server
    // how many clicks are stored in our session cookie
    React.useEffect(() => {
        fetch('/api/get_clicks')
        .then(response => response.json())
        .then(result => {
            setClicks(result['clicks']);
        });
    }, []);

    const onClick = (event) => {
        setClicks(clicks + 1);
        
        // Whenever we click the button, also send a POST request to
        // the server to let it know we've clicked again
        fetch('/api/set_clicks', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({'clicks': clicks + 1}),
        }).then(response => response.json())
        .then(result => {console.log(result);});
    }

    return (
        <button onClick={onClick}>
            I've been clicked {clicks} time(s)!
        </button>
    );
}
