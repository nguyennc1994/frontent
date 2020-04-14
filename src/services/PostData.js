

export function PostData(type, userData) {
    // let BaseURL = 'http://149.28.137.86:8000/api/accounts/auth/';
    // let BaseURL = 'https://api.thewallscript.com/restful/';
    let BaseURL = 'http://127.0.0.1:8000/api/accounts/auth/';
    return new Promise((resolve, reject) =>{
        console.log(userData)
         
        fetch((BaseURL+type),{
            method: "POST",
            // thềm header định nghĩa định dạng json 
            headers: {
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            // parse lại định dạng json 
            body: JSON.stringify({"username" : userData.username, "password": userData.password})

          })
          .then((response) => response.json())
          .then((res) => {
            resolve(res);
          })
          .catch((error) => {
            reject(error);
          });

  
      });
}
