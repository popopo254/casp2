const axios = require('axios') 
var jwt = require('jsonwebtoken');
require('dotenv').config()
const getUser = require('./FindUser');
const userInfo = require('./UserInfo')
const googleAuth = async (data, callback) => {

  const userDetails = await auth(data.Authorization);
  const user = await getUser({ email: userDetails.email });
  const userinfo = await userInfo({ user_id: user[0].user_id })
  const formatuser = formatUsers(userinfo)
  // //console.log("format user",user)
  // //console.log("format userinfo",userinfo)
  //console.log("format formatuser",formatuser)
  if (formatuser[0]) {
    const DataSQL = formatuser[0]
    //console.log('data sql',DataSQL)
    const token = await genToken({ email: DataSQL.user_email, roles: DataSQL.roles, user_id : DataSQL.user_id, affiliation_id: DataSQL.affiliation_id, affiliation_name: DataSQL.affiliation_name, isAuthen: true }); // result {access_token, refresh_token}
    callback(null, token)
  }else{
    callback({message:"Permission Denied"},null)
  }
}

function formatUsers(userPermissions) {
  return Object.values(userPermissions.reduce((acc, user) => {
      if (!acc[user.user_id]) {
          acc[user.user_id] = {
              user_id: user.user_id,
              user_employeeID: user.user_employeeID,
              user_name: user.user_name,
              user_email: user.user_email,
              affiliation_id: user.user_affiliation,
              affiliation_name: user.affiliation_name,
              roles: []
          };
      }
      acc[user.user_id].roles.push({
          permission_id: user.permission_id,         
      });
      return acc
  }, {}));
}


const genToken = async (data) => {
  //console.log("gen token function",data)
  const access_token = jwt.sign(data, 'CASCASEMFUNAJA', { expiresIn: '1d', algorithm: "HS256" },);
  const refresh_token = jwt.sign(data, 'CASCASEMFUNAJANAJANAJANAJA', { expiresIn: '1d' , algorithm: "HS256"},);
  
  return {access_token, refresh_token};

}


const auth = async (code) => {
  const response = await axios.post("https://oauth2.googleapis.com/token", {
    code,
    client_id: '21706456586-6jm6p160kta04n4d2ag7ft6uipjvr4e5.apps.googleusercontent.com',
    client_secret: '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',
    redirect_uri: "postmessage",
    grant_type: "authorization_code",
  });

  const accessToken = response.data.access_token;
  //console.log("Access Token:", accessToken);

  const userResponse = await axios.get(
    "https://www.googleapis.com/oauth2/v3/userinfo",
    {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    }
  );

  const userDetails = userResponse.data;
  //console.log("User Details:", userDetails);
  
  return userDetails;

}

module.exports = googleAuth;
