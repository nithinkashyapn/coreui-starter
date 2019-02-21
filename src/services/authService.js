import jwtDecode from "jwt-decode";
import http from "./httpService";
import * as config from "../config.json";

const tokenKey = "x-token";

http.setJWT(getJWT());

export async function login(email, password) {
	const { data: jwt } = await http.post(
		config.apiUrl + config.loginApiEndpoint,
		{
			email,
			password
		}
	);

	localStorage.setItem(tokenKey, jwt.token);
}

export function loginWithJWT(jwt) {
	localStorage.setItem(tokenKey, jwt);
}

export function getJWT() {
	return localStorage.getItem(tokenKey);
}

export function logout() {
	localStorage.removeItem(tokenKey);
}

export function getCurrentUser() {
	try {
		const jwt = localStorage.getItem(tokenKey);
		const user = jwtDecode(jwt);
		return user;
	} catch (ex) {
		return null;
	}
}
