export function PostData(type, bodyfield) {

    return new Promise((resolve, reject) =>{
         var token = "Token "+localStorage.userData;
        fetch((type),{
            method: "POST",
            // thềm header định nghĩa định dạng json 
            headers: {
                'Authorization' : token,
              'Content-Type': 'application/json',
              Accept: 'application/json',
            },
            // parse lại định dạng json 
            body : JSON.stringify(bodyfield)

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