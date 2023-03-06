from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/without_react')
def without_react():
    return render_template('without_react.html')

@app.route('/click_button')
def click_button():
    return render_template('click_button.html')

@app.route('/click_total')
def click_total():
    return render_template('click_total.html')

if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)