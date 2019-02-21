// import * as Sentry from "@sentry/browser";

const init = () => {
	// Sentry.init({
	// 	dsn: "https://fc97e3e8c61c46e2880ca1ec0330ae2f@sentry.io/1394728"
	// });
};

const log = error => {
	console.error(error);
	// Sentry.captureException(error);
};

export default {
	init,
	log
};
