// region [ Str Lib ]
var Str = {};

Str.trim = function (s) {
	return s.replace(/^\s+/, '').replace(/\s+$/, '');
};

Str.padRight = function(s, padStr, totalLength){
	return s.length >= totalLength  ? s : s + Str.repeat(padStr, (totalLength-s.length)/padStr.length);
};

Str.repeat = function(s, count) {
	var newS = "", i;
	for (i=0; i<count; i++) {
		newS += s;
	}
	return newS;
};
// endregion
