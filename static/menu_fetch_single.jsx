function App() {
    // This is not the best way to do it - look at menu_fetch_list.jsx
    // for the better, final form!
    const [item1, setItem1] = React.useState({
        'name': '',
        'description': '',
        'calories': 0,
    });
    const [item2, setItem2] = React.useState({
        'name': '',
        'description': '',
        'calories': 0,
    });

    React.useEffect(() => {
        fetch('/api/get_menu_item?item=pizza')
        .then(response => response.json())
        .then(result => {
            setItem1(result);
        });

        fetch('/api/get_menu_item?item=hamburger')
        .then(response => response.json())
        .then(result => {
            setItem2(result);
        })
    }, []);

    return (
        <div>
            <h1>Click these buttons!</h1>
            <MenuItem item={item1} />
            <MenuItem item={item2} />
        </div>
    );
}

function MenuItem(props) {
    const [showInfo, setShowInfo] = React.useState(false);

    function buttonClick(event) {
        setShowInfo(!showInfo);
    }

    let buttonText = 'See more';
    if (showInfo) {
        buttonText = 'See less';
    }

    // Using && with a boolean will only show the div if
    // the boolean is true
    return (
        <div>
            <h2>{props.item.name}</h2>
            {showInfo && <div>
                Description: {props.item.description}
                <br />
                Calories: {props.item.calories}
            </div>}
            <button onClick={buttonClick}>{buttonText}</button>
        </div>
    );
}