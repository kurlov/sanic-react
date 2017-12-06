from sanic import Sanic
from sanic.response import json, file

app = Sanic()

app.static('/', './dist')

@app.route("/")
async def index(request):
    return await file('dist/index.html')

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000)
