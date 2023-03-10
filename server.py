from flask import Flask, render_template, session, request

app = Flask(__name__)
app.secret_key = 'I<3React' # needed if we want to use the session cookie

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

@app.route('/click_remember')
def click_remember():
    return render_template('react_with_fetch.html')

@app.route('/api/get_clicks')
def get_clicks():
    return {'clicks': session.get('clicks', 20) }

@app.route('/api/set_clicks', methods=['POST'])
def set_clicks():
    session['clicks'] = request.json.get('clicks')
    return {'success': True}

if __name__ == '__main__':
    app.run('0.0.0.0', 5000, debug=True)