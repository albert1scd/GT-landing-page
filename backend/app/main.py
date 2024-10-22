from fastapi import FastAPI, HTTPException, Depends  # Added Depends here
from fastapi.middleware.cors import CORSMiddleware
from sqlalchemy.orm import Session
from typing import List
from datetime import datetime
from . import models, database
from .database import get_db
from pydantic import BaseModel, EmailStr

app = FastAPI(
    title="Giovani per il Trentino API",
    description="Backend API for Giovani per il Trentino website",
    version="1.0.0"
)

# Configure CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # Frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Root endpoint
@app.get("/")
async def root():
    return {
        "message": "Welcome to Giovani per il Trentino API",
        "documentation": "/docs",
        "status": "active"
    }

# Health check endpoint
@app.get("/health")
async def health_check():
    return {"status": "healthy"}

# Newsletter subscription model
class SubscriberBase(BaseModel):
    email: EmailStr

class SubscriberCreate(SubscriberBase):
    pass

class Subscriber(SubscriberBase):
    id: int
    created_at: datetime

    class Config:
        from_attributes = True

# Newsletter subscription endpoint
@app.post("/api/subscribe", response_model=dict)
def subscribe_newsletter(subscriber: SubscriberCreate, db: Session = Depends(get_db)):  # Depends is used here
    db_subscriber = models.Subscriber(email=subscriber.email)
    try:
        db.add(db_subscriber)
        db.commit()
        db.refresh(db_subscriber)
        return {"message": "Successfully subscribed to the newsletter!"}
    except Exception as e:
        db.rollback()
        raise HTTPException(status_code=400, detail="Email already subscribed")

# Get all subscribers (admin endpoint)
@app.get("/api/subscribers", response_model=List[Subscriber])
def get_subscribers(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):  # Depends is used here
    subscribers = db.query(models.Subscriber).offset(skip).limit(limit).all()
    return subscribers