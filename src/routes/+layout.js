// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const prerender = true;

export function handleHttpError({ status, path }) {
	// abaikan error 404 saat build
	if (status === 404) return;
	throw new Error(`${status} error loading ${path}`);
}
