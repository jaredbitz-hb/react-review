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
        menuItems.push(
            <MenuItem item={item} key={item.name}/>
        )
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

    function seeMore(event) {
        setShowInfo(true);
    }

    let extraInfo;
    if (showInfo) {
        extraInfo = (
            <div>
                Description: {props.item.description}
                <br></br>
                Calories: {props.item.calories}
            </div>
        )
    } else {
        extraInfo = (
            <div>
                <button onClick={seeMore}>See more</button>
            </div>
        );
    }

    return (
        <div>
            <h2>{props.item.name}</h2>
            {extraInfo}
        </div>
    );
}
