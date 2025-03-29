from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
import models, schemas, database
from datetime import datetime, timedelta
from sqlalchemy import func
from fastapi.middleware.cors import CORSMiddleware
from fastapi.security import OAuth2PasswordBearer, OAuth2PasswordRequestForm
from jose import JWTError, jwt
from passlib.context import CryptContext

# Create database tables
models.Base.metadata.create_all(bind=database.engine)

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Allow all origins
    allow_credentials=True,
    allow_methods=["*"],  # Allow all HTTP methods
    allow_headers=["*"],  # Allow all headers
)

# JWT Configuration
SECRET_KEY = "your_secret_key"
ALGORITHM = "HS256"
ACCESS_TOKEN_EXPIRE_MINUTES = 30

# Password Hashing
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")
oauth2_scheme = OAuth2PasswordBearer(tokenUrl="token")

def verify_password(plain_password, hashed_password):
    return pwd_context.verify(plain_password, hashed_password)

def get_password_hash(password):
    return pwd_context.hash(password)

def create_access_token(data: dict, expires_delta: timedelta = None):
    to_encode = data.copy()
    expire = datetime.now() + (expires_delta or timedelta(minutes=ACCESS_TOKEN_EXPIRE_MINUTES))
    to_encode.update({"exp": expire})
    return jwt.encode(to_encode, SECRET_KEY, algorithm=ALGORITHM)

# Dependency to get DB session
def get_db():
    db = database.SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/users/", response_model=schemas.UserResponse)
def create_user(user: schemas.UserCreate, db: Session = Depends(get_db)):
    # Check if user already exists
    db_user = db.query(models.User).filter(models.User.email == user.email).first()
    db_user_name = db.query(models.User).filter(models.User.username == user.username).first()
    db_user_pannumber = db.query(models.User).filter(models.User.pannumber == user.pannumber).first()
    db_user_aadhaarnumber = db.query(models.User).filter(models.User.aadhaarnumber == user.aadhaarnumber).first()
    
    if db_user:
        raise HTTPException(status_code=400, detail="Email already exists")
    if db_user_name:
        raise HTTPException(status_code=400, detail="Username already exists")
    if db_user_pannumber:
        raise HTTPException(status_code=400, detail="PAN number already exists")
    if db_user_aadhaarnumber:
        raise HTTPException(status_code=400, detail="Aadhaar number already exists")

    # Hash the password using passlib
    hash_password = get_password_hash(user.password)

    new_user = models.User(
        firstname=user.firstname,
        lastname=user.lastname,
        dateofbirth=user.dateofbirth,
        email=user.email,
        phonenumber=user.phonenumber,
        secphonenumber=user.secphonenumber,
        address=user.address,
        zipcode=user.zipcode,
        city=user.city,
        state=user.state,
        country=user.country,
        username=user.username,
        pannumber=user.pannumber,
        aadhaarnumber=user.aadhaarnumber,
        password=hash_password,  # Save hashed password
        createddate=datetime.utcnow(),
        lastmodifieddate=datetime.utcnow(),
        usertype=user.usertype,
        gender=user.gender,
        status=user.status,
        createdby=user.createdby,
        lastlogindate=None
    )

    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

@app.get("/username/")
def check_username(username: str, db: Session = Depends(get_db)):
    count = 0
    original_username = username

    while db.query(models.User).filter(models.User.username == username).first():
        count += 1
        username = f"{original_username}{count}"

    return {"available_username": username}

@app.post("/token")
def login(form_data: OAuth2PasswordRequestForm = Depends(), db: Session = Depends(get_db)):
    user = db.query(models.User).filter(func.lower(models.User.username) == func.lower(form_data.username)).first()

    if not user:
        raise HTTPException(status_code=401, detail="Invalid username or password")

    # Ensure password verification works correctly
    if not verify_password(form_data.password, user.password):
        raise HTTPException(status_code=401, detail="Invalid username or password")

    # Create access token
    access_token = create_access_token(data={"sub": user.username})
    usertype_token = create_access_token(data={"sub": user.usertype})
    return {"access_token": access_token, "token_type": "bearer", "usertype": usertype_token}
