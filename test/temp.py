import multiprocessing as mp
from flask import Flask, jsonify, make_response, request
import hashlib
import socket
app = Flask(__name__)





orders={}


q = mp.Queue()




def foo():
    app.run(debug=True, host='0.0.0.0')




def ValidOrder(podact_id,prodact_name,let,lot):

        if (( (let>0) and (lot>0))):
            return hashlib.sha224(podact_id+prodact_name+let+lot).hexdigest()
        else:
            return False





# Routes


@app.route('/test', methods=['GET'])
def hello_world():
    return jsonify({'hello': 'world'})


@app.route('/order', methods=['POST'])
def login():
    error = None
    if request.method == 'POST':
            print "got new item" , request.form['name']
            #server([request.form['id'],request.form['name'],request.form['lat'],request.form['long']])
            return make_response(jsonify(['OK']))
       # else:
        #   return jsonify({'Invalid username/password'})


# Pretty error handling
@app.errorhandler(400)
def not_found(error):
    return make_response(jsonify({'error': 'Bad request. Please check your request syntax.'}), 400)


@app.errorhandler(404)
def not_found(error):
    return make_response(jsonify({'error': 'Nothing found at this route.'}), 404)


@app.errorhandler(405)
def not_found(error):
    return make_response(jsonify({'error': 'Request method not allowed.'}), 405)

if __name__ == '__main__':
    #app.run(debug=True, host='0.0.0.0')
    #mp.set_start_method('spawn')
    p = mp.Process(target=foo, args=())
    p.start()
    p.join()
