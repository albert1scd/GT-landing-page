from pydantic_settings import BaseSettings
from dotenv import load_dotenv

load_dotenv()

class Settings(BaseSettings):
    DATABASE_URL: str = "postgresql://postgres:password@localhost/gt_mountains"
    CORS_ORIGINS: list = ["http://localhost:5173"]

    class Config:
        env_file = ".env"

settings = Settings()