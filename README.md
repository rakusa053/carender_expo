#　関数定義

## ui
## Make_calender.tsx
関数名: Make_calender

引数:

DayPress: (day: DateData) => void （カレンダーの日付がタップされた際のイベントハンドラ）

使い方: カレンダーを表示し、ユーザーが特定の日付を選択した際の処理を親コンポーネントから制御します。

## Circle_animation.tsx
関数名: Circle_animation

引数:

size: number （円の大きさ）

使い方: 勝率（現在は65%で固定）をアニメーションを伴う円グラフとして描画します。

## Circle.tsx
関数名: Circle_display

引数:

size: number （円の大きさ）

使い方: 勝率を表示するための静的な円グラフを表示します。

## Display_month.tsx
関数名: Display_month

引数:

total: number （表示する収支の合計値）

使い方: 画面上部に「今月の収支」というテキストと、渡された合計金額を表示します。

## storage_input_text.tsx
関数名: Storage_day_value2

引数:

id: string

month: string

year: string

使い方: 金額を入力するためのテキストボックスを表示します。

特徴: InputvalueStore を監視し、数字以外の入力時にはエラー表示（赤色）に切り替わります。

## storage_button2.tsx
関数名: Storage_button2

引数:

id: string

month: string

year: string

使い方: データを保存するためのボタンです。

特徴: 入力値が数値である場合（isNumber が true）のみ表示され、タップするとデータを保存（addItem）します。

## plusminusbutton.tsx
関数名: PlusMinusButton

引数: なし

使い方: 「+」と「-」のボタンを表示し、収支のプラス/マイナスを切り替えるためのUIです。

## storage_button.tsx（廃止）
関数名: Storage_button

引数: id, month, year, totalchange, db

使い方: 旧式の保存ボタンです。

## storage_day_value.tsx（廃止）
関数名: Storage_day_value

引数: id, month, year, totalchange, dbchange

使い方: 旧式の入力・保存・DB初期化用コンポーネントです。

## testsqlte.tsx
関数名: SQLiteExample

引数: なし

使い方: SQLite の基本的な動作テスト用の画面を表示します。



##　createmoneytabale.tsx
ストア名: useDBStore

管理している状態と関数:

db: SQLiteデータベースのインスタンス。

initDB(): データベースを開き、items テーブルを作成する非同期関数。

コンポーネントでの書き方:

TypeScript
const { db, initDB } = useDBStore();
useEffect(() => { initDB(); }, []);
##　inputvalue.tsx
ストア名: InputvalueStore

管理している状態と関数:

name: 入力フォームの現在の文字列。

isNumber: 入力値が数値かどうかの判定結果。

setName(text): 文字列を更新し、同時に数値判定を行う関数。

コンポーネントでの書き方:

TypeScript
const { name, setName, isNumber } = InputvalueStore();
<TextInput value={name} onChangeText={setName} />

## savevalue.tsx

ストア名: Savevalue

管理している状態と関数:

total: その月の合計金額。

addItem(id, month, year): 入力値をDBに保存（Upsert）し、合計を再計算する関数。

コンポーネントでの書き方:

TypeScript
const { total, addItem } = Savevalue();
<Button onPress={() => addItem("1", "2", "2026")} title="保存" />