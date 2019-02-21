import axios from "axios";
import logger from "./logService";
import { toast } from "react-toastify";

axios.interceptors.response.use(null, err => {
	if (err.response && err.response.status >= 400 && err.response.status < 500)
		return Promise.reject(err);

	logger.log(err);
	toast.error("Something went wrong!");
	return Promise.reject(err);
});

function setJWT(jwt) {
	axios.defaults.headers.common["x-auth-token"] = jwt;
}

export default {
	get: axios.get,
	post: axios.post,
	put: axios.put,
	delete: axios.delete,
	setJWT
};
