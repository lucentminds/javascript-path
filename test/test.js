/**
 * 10-25-2016
 * Test path parsing.
 * ~~ Scott Johnson
 */

/** List jshint ignore directives here. **/
/* global path:false */

(function(){
	var n, i, l, oPath, oTest, oResult, cPath, lPassed;
	var aTests = [
		{
			subject: '',
			result: {
				root: '',
				dir: '',
				base: '',
				ext: '',
				name: ''
			}
		},
		{
			subject: 'r',
			result: {
				root: '',
				dir: '',
				base: 'r',
				ext: '',
				name: 'r'
			}
		},
		{
			subject: '/',
			result: {
				root: '/',
				dir: '/',
				base: '',
				ext: '',
				name: ''
			}
		},
		{
			subject: 'test.bork/',
			result: {
				root: '',
				dir: '',
				base: 'test.bork',
				ext: '.bork',
				name: 'test'
			}
		},
		{
			subject: 'test.bork/bleek',
			result: {
				root: '',
				dir: 'test.bork',
				base: 'bleek',
				ext: '',
				name: 'bleek'
			}
		},
		{
			subject: 'test/bork/bleek.txt',
			result: {
				root: '',
				dir: 'test/bork',
				base: 'bleek.txt',
				ext: '.txt',
				name: 'bleek'
			}
		},
		{
			subject: 'test/bork/bleek.txt',
			result: {
				root: '',
				dir: 'test/bork',
				base: 'bleek.txt',
				ext: '.txt',
				name: 'bleek'
			}
		},
		{
			subject: '/test/bork/bleek.txt',
			result: {
				root: '/',
				dir: '/test/bork',
				base: 'bleek.txt',
				ext: '.txt',
				name: 'bleek'
			}
		}
	];

	for ( i = 0, l = aTests.length; i < l; i++ ) {
		oTest = aTests[ i ];
		oResult = oTest.result;
		cPath = oTest.subject;
		oPath = path.parse( cPath );
		lPassed = true;

		for( n in oResult ) {
			if( oResult[ n ] !== oPath[n] ){
				lPassed = false;
				break;
			}

		}// /for()

		if ( lPassed) {
			console.info( 'passed' );
			console.log( oPath );
			console.log( ' ' );
		}
		else {
			console.error( 'failed' );
			console.log( oPath );
			console.log( ' ' );
		}
	}// /for()
}());