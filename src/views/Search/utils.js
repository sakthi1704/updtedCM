import axios from "axios";

export const truncStr = (string, limit) => {
  return string.length > limit
    ? string
        .trim()
        .substring(0, limit - 3)
        .trim() + "..."
    : string;
};

const resources = {};

const makeRequestCreator = () => {
  let cancel;

  return async query => {
    if (cancel) {
      cancel.cancel();
    }
    cancel = axios.CancelToken.source();
    try {
      if (resources[query]) {
        return resources[query];
      }
      const res = await axios(query, { cancelToken: cancel.token });

      const result = res.data.results;
      resources[query] = result;

      return result;
    } catch (error) {
      if (axios.isCancel(error)) {
        console.log("Request canceled", error.message);
      } else {
        console.log("Something went wrong: ", error.message);
      }
    }
  };
};

export const search = makeRequestCreator();
