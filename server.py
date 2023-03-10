from flask import Flask, render_template, session, request, jsonify

app = Flask(__name__)
app.secret_key = 'I<3React' # needed if we want to use the session cookie

MENU_ITEMS = {
    'pizza': {
        'name': 'Pizza',
        'description': 'Ham and Pineapple Pizza',
        'calories': 400,
    },
    'hamburger': {
        'name': 'Hamburger',
        'description': 'Burger and fries',
        'calories': 800,
    },
    'hot_dog': {
        'name': 'Hot dog',
        'description': 'Beef Frankfurter with relish',
        'calories': 600,
    }
}


@app.route('/')
def index():
    return render_template('index.html')

@app.route('/without_react')
def without_react():
    return render_template('without_react.html')

@app.route('/click_button')
def click_button():
    return render_template('click_button.html')

@app.route('/menu_fetch_list')
def menu_fetch_list():
    return render_template('menu_fetch_list.html')

@app.route('/menu_fetch_single')
def menu_fetch_single():
    return render_template('menu_fetch_single.html')

# Gets a single menu item
# use like fetch('/api/get_menu_item?name=pizza')
@app.route('/api/get_menu_item')
def get_menu_item():
    return MENU_ITEMS[request.args.get('item')]

# Gets a list of ALL menu items at once
@app.route('/api/get_menu_items')
def get_menu_items():
    return jsonify(list(MENU_ITEMS.values()))


if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)