import { Libraries, LibrariesValues } from './consts';
export { Libraries as LIBRARIES, LibrariesValues as LIBRARIES_CODES };

export function getLibraryFromURL(pathname: string) {
	const code = '/';
	const libraryCodeMatch = pathname.replace('/docs/', '');
	if(libraryCodeMatch) {
		return libraryCodeMatch.split('/')[0]
	}
	return code as (typeof LibrariesValues)[number];
}
