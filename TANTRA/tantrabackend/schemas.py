from datetime import datetime, date
from pydantic import BaseModel, EmailStr

class UserBase(BaseModel):
    firstname: str
    lastname: str
    dateofbirth: date
    email: EmailStr
    phonenumber: int
    secphonenumber: int
    address: str
    zipcode: int
    city: str
    state: str
    country: str
    username: str
    pannumber: str
    aadhaarnumber: int
    usertype: str
    gender: str
    status: bool
    createdby: int | None = None

# Schema for user creation
class UserCreate(UserBase):
    password: str

# Schema for user response
class UserResponse(UserBase):
    userid: int
    username: str
    createddate: datetime
    lastmodifieddate: datetime
    lastlogindate: datetime | None = None