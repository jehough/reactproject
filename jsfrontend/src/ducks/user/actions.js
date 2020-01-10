export const handleUserResponse = (json) => {
  if (json.status === "error"){
    return {
      type: "UPDATE ERRORS",
      message: json.message
    }
  }
  else if(json.auth_token){
    return {
      type: "SIGN IN USER",
      auth_token: json.auth_token
    }
  }

}
