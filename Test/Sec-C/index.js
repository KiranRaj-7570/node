const jwt = require('jsonwebtoken');

const secretKey='mySecret';

const User={
    id:'1',
    name:'Student', 
}

function generateJWTtoken(user){
    const payload={
        userId:user.id,
        username:user.name,
    }; 
    const token=jwt.sign(payload,secretKey);
    return token;
}
function verifyJWTtoken(token){
    try{
        const decoded=jwt.verify(token,secretKey);
        return decoded;
    }catch(err){
        console.error('Invalid token',err);
        return null;
    }
}
const usertoken=generateJWTtoken(User);
console.log('Generated JWT:',usertoken);

const decodedToken=verifyJWTtoken(usertoken);
console.log('Decoded JWT:',decodedToken);