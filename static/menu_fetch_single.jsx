function App() {

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

    function seeMore(event) {
        setShowInfo(true);
    }

    let extraInfo = <div><button onClick={seeMore}>See more</button></div>;
    if (showInfo) {
        extraInfo = (
            <div>
                Description: {props.item.description}
                <br></br>
                Calories: {props.item.calories}
            </div>
        )
    }
    return (
        <div>
            <h2>{props.item.name}</h2>
            {extraInfo}
        </div>
    );
}