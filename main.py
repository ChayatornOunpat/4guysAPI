from fastapi import FastAPI
from fastapi import Request, Response
from fastapi.responses import FileResponse
from fastapi.templating import Jinja2Templates
from fastapi.staticfiles import StaticFiles

app = FastAPI()

app.mount("/static", StaticFiles(directory="static"), name="static")

templates = Jinja2Templates(directory="templates")


@app.get("/")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/work")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/about")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/TorlapSonprathed")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/ChayatornOunpat")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/PiyoungkulSawang")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/JirawatSapthawarakul")
async def root(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})

@app.get("/mainjs")
async def js():
    return FileResponse('static/assets/index-8333e594.js')

@app.get("/mainstyle")
async def css():
    return FileResponse('static/assets/index-7ed75b2f.css')

@app.get("/logo")
async def logo():
    return FileResponse('static/vite.svg')

@app.get("/img/homemain")
async def topimg():
    return FileResponse('assets/img/HomeMain.jpg')

@app.get("/img/pentor")
async def pentorimg():
    return FileResponse('assets/img/pentor.jpg')

@app.get("/img/me")
async def meimg():
    return FileResponse('assets/img/me.jpg')

@app.get("/img/mickey")
async def mickimg():
    return FileResponse('assets/img/mickey.jpg')

@app.get("/img/tonhom")
async def tonhomimg():
    return FileResponse('assets/img/tonhom.jpg')

@app.get("/video/reel")
async def video_endpoint():
    return FileResponse("assets/videos/intro.mp4")

@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}
