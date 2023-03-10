function App() {
    const [items, setItems] = React.useState([])

    React.useEffect(() => {
        fetch('/api/get_menu_items')
        .then(response => response.json())
        .then(result => {
            setItems(result);
        });
    }, []);

    const menuItems = [];
    for(const item of items) {
        menuItems.push(<MenuItem item={item} key={item.name}/>);
    }

    return (
        <div>
            <h1>Click these buttons!</h1>
            {menuItems}
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
