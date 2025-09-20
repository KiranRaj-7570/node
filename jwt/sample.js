const jwt=require('jsonwebtoken');
const secretKey='your-secret-key';

const sampleUser={
    id:'12345',
    username:'Kiran',
    role:'user',
}

function generateJWT(user){
    const payload={
        userId:user.id,
        username:user.username,
        role:user.role,
    };
    const options={
        expiresIn:'1h',
    };
    
    const token=jwt.sign(payload,secretKey,options);
    return token;
}
function verifyJWT(token){
    try{
        const decoded=jwt.verify(token,secretKey);
        return decoded;
    }catch(err){
        console.error('Invalid token',err);
        return null;
    }
}

const usertoken=generateJWT(sampleUser);
console.log('Generated JWT:',usertoken);

const decodedToken=verifyJWT(usertoken);
console.log('Decoded JWT:',decodedToken);