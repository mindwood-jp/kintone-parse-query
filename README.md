# 概要
kintone のURLクエリ文字列をJSONオブジェクトに変換します。

https://cybozu.dev/ja/kintone/docs/overview/query/

# 使い方
オブジェクトから、フィールド名・演算子・値を簡単に取得できます。

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
