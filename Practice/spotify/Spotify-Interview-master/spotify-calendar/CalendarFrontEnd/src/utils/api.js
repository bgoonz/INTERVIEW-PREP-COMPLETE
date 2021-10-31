let API = "";
if (process.env.NODE_ENV === "production") {
  API = "https://red-smarties-19236.herokuapp.com";
}
export const GET = () => {
  return new Promise(function (resolve, reject) {
    fetch(API + "/api/v1/events", {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "GET",
    })
      .then((res) => res.json())
      .then((val) => {
        const apiEvents = [];
        const body = val.body;
        if (body != null) {
          const keys = Object.keys(body);
          keys.forEach((key) => {
            const data = body[key];
            data.key = key;
            apiEvents.push(data);
          });
        }
        resolve(apiEvents);
      })
      .catch((err) => reject(err.message));
  });
};

export const DELETE = (body, key) => {
  return new Promise(function (resolve, reject) {
    fetch(API + "/api/v1/events/" + key, {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "DELETE",
      body: JSON.stringify(body),
    })
      .then((res) => res.status)
      .then((val) => {
        if (val === 200) {
          resolve(val);
        }
      })
      .catch((err) => reject(err.message));
  });
};

export const PUT = (body, key) => {
  return new Promise(function (resolve, reject) {
    fetch(API + "/api/v1/events/" + key, {
      headers: {
        Accept: "application/json, text/plain, /",
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.status;
      })
      .then((val) => {
        if (val === 200) {
          resolve(200);
        }
      })
      .catch((err) => {
        console.log(err.message);
        resolve(err.message);
      });
  });
};

export const POST = (body) => {
  return new Promise(function (resolve, reject) {
    fetch(API + "/api/v1/events", {
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(body),
    })
      .then((res) => {
        return res.status;
      })
      .then((val) => {
        if (val === 200) {
          resolve(val);
        }
      })
      .catch((err) => {
        reject(err.msg);
      });
  });
};
