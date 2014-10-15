var sinokoreanNumberParser = function(){
	my = {};
	numbers = {'negative': '마이너스', 1: '일', 2: '이', 3: '삼', 4: '사', 5: '오', 6:'육', 7: '칠', 8: '팔', 9: '구', 10: '십', 100: '백', 1000: '천', 10000: '만', 100000000: '억', 1000000000000: '조'};
	valid_numbers = [1000000000000000, 100000000, 10000, 1000, 100, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1];
	
	function parseCoefficient(n){
		var output = '';
		for (j = 0; j < valid_numbers.length; j++){
			if (n >= valid_numbers[j]){
				if (Math.floor(n / valid_numbers[j]) === 1){
					output += numbers[valid_numbers[j]];
					n -= valid_numbers[j];
				}else{
					output += numbers[Math.floor(n / valid_numbers[j])] + numbers[valid_numbers[j]];
					n -= Math.floor(n / valid_numbers[j]) * valid_numbers[j];
				};
			};
		};
		return output;
	};
	
	my.parseNumber = function(n){
		var out = '';
		var negative = n < 0;
		if (negative){
			n *= -1;
		};
		for (i = 0; i < valid_numbers.length; i++){
			if (n >= valid_numbers[i]){
				if (Math.floor(n / valid_numbers[i]) === 1){
					out += numbers[valid_numbers[i]];
					n -= valid_numbers[i];
				}else{
					if (numbers[Math.floor(n / valid_numbers[i])] === undefined){
						out += parseCoefficient(Math.floor(n / valid_numbers[i])) + numbers[valid_numbers[i]];
					}else{
						out += numbers[Math.floor(n / valid_numbers[i])] + numbers[valid_numbers[i]];
					};
					n -= Math.floor(n / valid_numbers[i]) * valid_numbers[i];
				};
			};
		};
		return out.trim();
	};
	
	return my;
};

module.exports = new sinokoreanNumberParser;