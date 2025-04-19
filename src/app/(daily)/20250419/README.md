type Foo = {
// 大文字に変更
a: string;
b: number;
c: boolean;
};

// 正しいジェネリック型の定義
type MyPartial<T> = {
[P in keyof T]?: T[P]; // 正しいマップ型構文
};

// テストケース（全て正常に動作）
const a: MyPartial<Foo> = {};

const b: MyPartial<Foo> = {
a: "BFE.dev",
};

const c: MyPartial<Foo> = {
b: 123,
};

const d: MyPartial<Foo> = {
b: 123,
c: true,
};

const e: MyPartial<Foo> = {
a: "BFE.dev",
b: 123,
c: true,
};
