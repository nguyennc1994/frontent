export function PostData(url_api, bodyfield) {

  return new Promise((resolve, reject) => {
    var token = "Token " + localStorage.userData;
    fetch((url_api), {
      method: "POST",
      // thềm header định nghĩa định dạng json 
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // parse lại định dạng json 
      body: JSON.stringify(bodyfield)

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

export function GetData(url_api) {

  return new Promise((resolve, reject) => {
    var token = "Token " + localStorage.userData;
    fetch((url_api), {
      method: "GET",
      // thềm header định nghĩa định dạng json 
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },          // parse lại định dạng json 
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

export function PutData(url_api, bodyfield) {

  return new Promise((resolve, reject) => {
    var token = "Token " + localStorage.userData;
    fetch((url_api), {
      method: "PUT",
      // thềm header định nghĩa định dạng json 
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // parse lại định dạng json 
      body: JSON.stringify(bodyfield)

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

export function PatchData(url_api, bodyfield) {

  return new Promise((resolve, reject) => {
    var token = "Token " + localStorage.userData;
    fetch((url_api), {
      method: "PATCH",
      // thềm header định nghĩa định dạng json 
      headers: {
        'Authorization': token,
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      // parse lại định dạng json 
      body: JSON.stringify(bodyfield)

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