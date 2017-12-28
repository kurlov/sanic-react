from sanic import Sanic
from sanic.response import json, file

app = Sanic()

app.static('/', '../dist')

@app.route("/")
async def index(request):
    return await file('dist/index.html')

@app.route("/example_post", methods=["POST",])
def create_user(request):
    return text("POST data: %s" % request.body)

@app.route("/example_json")
def post_json(request):
    return json({ "received": True, "data": request.json })

@app.route("/query_string")
def query_string(request):
    return json({ "parsed": True, "args": request.args, "url": request.url,
                  "query_string": request.query_string })

@app.websocket('/ws_data')
async def feed(request, ws):
    while True:
        data = 'hello!'
        print('Sending: ' + data)
        await ws.send(data)
        data = await ws.recv()
        print('Received: ' + data)
