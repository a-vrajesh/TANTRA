from sqlalchemy import Column, Integer, String, BigInteger, Text, Date, TIMESTAMP, Boolean
from database import Base

class User(Base):
    __tablename__ = "user"

    userid = Column(BigInteger, primary_key=True, index=True, autoincrement=True)
    firstname = Column(Text, nullable=False)
    lastname = Column(Text, nullable=False)
    dateofbirth = Column(Date, nullable=False)
    email = Column(String, unique=True, nullable=False, index=True)
    phonenumber = Column(BigInteger, nullable=False)
    secphonenumber = Column(BigInteger, nullable=False)
    address = Column(Text, nullable=False)
    zipcode = Column(Integer, nullable=False)
    city = Column(Text, nullable=False)
    state = Column(Text, nullable=False)
    country = Column(Text, nullable=False)
    username = Column(Text, nullable=False, unique=True)
    pannumber = Column(Text, nullable=False, unique=True)
    aadhaarnumber = Column(BigInteger, nullable=False, unique=True)
    password = Column(Text, nullable=False)
    createddate = Column(TIMESTAMP(), nullable=False)
    lastmodifieddate = Column(TIMESTAMP(), nullable=False)
    usertype = Column(Text, nullable=False)
    gender = Column(Text, nullable=False)
    status = Column(Boolean, nullable=False)
    createdby = Column(BigInteger, nullable=True)
    lastlogindate = Column(TIMESTAMP(timezone=True), nullable=True)