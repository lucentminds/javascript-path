/**
 * 10-25-2016
 * jqUI Plugin Template
 * ~~ Scott
 */

/** List jshint ignore directives here. **/
/* global alert:false */
/* global clearTimeout:false */
/* global setTimeout:false */
/* global $:false */
/* global jQuery:false */

(function( root ){
	var SEP_WIN32 = '\\';
	var SEP_POSIX = '/';

	var getParts = function( cOriginalPath, cPart, cExt ) {
		var cPath = cOriginalPath;
		var PATH_SEPARATOR = cPath.indexOf( SEP_WIN32 ) > -1 ?SEP_WIN32 :SEP_POSIX;
		var aParts = cPath.split( '/' );
		var cPathBase = '';
		var cPathExt = '';
		var cPathDir = '';
		var nPosDot;

		// Strip trailing slash if any.
		if ( !aParts[ aParts.length-1 ] ) {
			aParts.pop();
		}

		cPath = aParts.join( PATH_SEPARATOR );
		cPathBase = cPath.replace( /\\/g, '/' ).replace( /.*\//, '' );

		// Determine where the extension is.
		nPosDot = cPathBase.lastIndexOf( '.' );

		if ( nPosDot > -1 ) {
			cPathExt = cPathBase.substr( nPosDot );
		}

		if ( cPart == 'extension' ) {
			return cPathExt;
		}
		

		if ( cExt ) {
			aParts = cPathBase.split( cExt );
			if ( aParts.length > 1 && aParts[ aParts.length-1 ] === '' ) {
				aParts.pop();
			}

			cPath = aParts.join( cExt );
		}

		if ( cPart == 'base' ) {
			return cPathBase;
		}


		// Determine directory.
		if ( cOriginalPath == PATH_SEPARATOR ) {

			// The full path is only a slash.
			cPathDir = cOriginalPath;

		}
		else {

			// If there is a base filename, remove it from the path.
			if ( cPathBase ) {
				aParts.pop();
			}
			
			// Join the remaining parts of the path together.
			cPathDir = aParts.join( PATH_SEPARATOR );
			
		}
		
		

		if ( cPart == 'directory' ) {
			return cPathDir;
		}
		
		return {
			dir: cPathDir,
			base: cPathBase,
			ext: cPathExt,
			name: cPathBase.split( '.' )[0],
			sep: PATH_SEPARATOR
		};
		
		
		
	};// /getParts()

	var path = root.path = {
		dirname: function( cPath ){
			return getParts( cPath, 'directory' );
		},// /dirname()

		basename:  function( cPath, cExt ){
			return getParts( cPath, 'base', cExt );
		},// /basename()

		extname:  function( cPath ){
			return getParts( cPath, 'extension' );
		},// /extname()

		parse: function( cPath ){
			var oParts = getParts( cPath );
			var PATH_SEPARATOR = oParts.sep;
			var cRoot = cPath[0] == PATH_SEPARATOR ?PATH_SEPARATOR :'';

			return {
				root: cRoot,
				dir: oParts.dir,
				base: oParts.base,
				ext: oParts.ext,
				name: oParts.name
			};
		}// /parse()
	};// /path{}
	
}( window ));