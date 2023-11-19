function parseQuery(queryString) {
	const tokens = queryString.match(/"[^"]*"|(?:not\s+)?(?:in|like)|[!=><]{1,2}|\([^\)]*\)|[^\s"\(\)!=><]+/g) || [].map(token=>token.trim());
	if (!tokens) return;
	let andor = '';
	let json = [];
	let i = 0;
	while (i < tokens.length) {
		switch(tokens[i]){
			// 論理演算子
			case 'and':
			case 'or':
				if (andor) {
					if (andor !== tokens[i]) andor = 'N/A';
				} else {
					andor = tokens[i];
				}
				break;
			// 比較演算子
			case 'in':
			case 'not in':
			case 'like':
			case 'not like':
			case '=':
			case '!=':
			case '>':
			case '<':
			case '>=':
			case '<=':
				json.push({
					fieldCode: tokens[i-1],
					operator: tokens[i],
					values: tokens[i+1].match(/"[^"]*"|\d+/g) || [].map(token=>token.trim())
				})
				i++;
		}
		i++;
	}
	return [json, andor];
}
