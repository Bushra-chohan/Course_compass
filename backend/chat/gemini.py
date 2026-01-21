import os
from google import genai
from decouple import config

os.environ["GOOGLE_APPLICATION_CREDENTIALS"] = config("GEMINI_KEY_PATH")

client = genai.Client(
    vertexai=True,
    project=config("GCP_PROJECT"),
    location=config("GCP_LOCATION")
)

def generate_response(prompt: str) -> str:
    """Generate a response using Gemini model."""
    response = client.models.generate_content(
        model=config("GEMINI_MODEL", default="gemini-2.0-flash-exp"),
        contents=prompt
    )
    return response.text