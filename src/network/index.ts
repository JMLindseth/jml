import axios from "axios";

function get(
  url: string,
  setMethod: (element: any) => void,
  defaultValue: any
) {
  axios
    .get(url, {
      headers: {
        "content-Type": "application/json",
      },
    })
    .then((response) => {
      if (response.status === 200) {
        setMethod(response.data);
      } else {
        setMethod(defaultValue);
      }
    })
    .catch((reason) => {
      console.log("Couldn't fetch data :( ", reason);
      setMethod(defaultValue);
    });
}

export default get;
