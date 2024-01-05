# 概要
kintone のクエリ文字列をパースする。

# 使い方

```js
let q = kintone.app.getQueryCondition();
found = obj.find(e => e.fieldCode === fcodeEnd);
if (found) {
	opEnd = found.operator;
	vlEnd = found.values[0].replace(/"/g, '');
}
```

```js
found = obj.find(e => e.fieldCode === fcodeStatus);
if (found) {
	vlStatus = found.values.map(str => str.replace(/"/g, ''));
}
```
