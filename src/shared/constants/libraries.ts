import { Libraries, LibrariesValues } from './consts';
export { Libraries as LIBRARIES, LibrariesValues as LIBRARIES_CODES };

export const matchPathRegex = /\/([a-z]{2}-?[A-Z]{0,2})\//;

export function getLibraryFromURL(pathname: string) {
	const libraryCodeMatch = pathname.match(matchPathRegex);
	const code = libraryCodeMatch ? libraryCodeMatch[1] : 'react-form';
	return code as (typeof LibrariesValues)[number];
}
