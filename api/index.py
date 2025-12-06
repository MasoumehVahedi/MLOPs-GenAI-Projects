from fastapi import FastAPI, Query
from fastapi.responses import PlainTextResponse
from openai import OpenAI

app = FastAPI()

@app.get("/api", response_class=PlainTextResponse)
def checklist(task: str = Query("Plan a small team offsite")):
    client = OpenAI()
    system = (
        "You turn a short goal description into a concise, numbered checklist. "
        "Each item should start with a verb and include an owner placeholder and an ETA."
    )
    user = f"Goal: {task}\nReturn 5–8 steps max."
    resp = client.chat.completions.create(
        model="gpt-5-nano",
        messages=[{"role":"system","content":system},{"role":"user","content":user}],
        temperature=0.3
    )
    return resp.choices[0].message.content