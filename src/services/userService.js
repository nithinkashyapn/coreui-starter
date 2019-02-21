import http from "./httpService";
import * as config from "../config.json";

export function register(user) {
	return http.post(config.apiUrl + config.registerApiEndpoint, {
		email: user.email,
		password: user.password
	});
}
