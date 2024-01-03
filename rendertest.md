# Render Test

A testfile to see if we can render protoflux nodes on the fly with js.

## Normal

> Edge cases are below.

| PFN: Async |       | Some function name |      |        |
|------------|-------|--------------------|------|--------|
|            |       |                    | what | String |
| Bool       | Some  |                    | they | Int    |
| Int        | Names |                    | are  | Bool   |
| String     | For   |                    | used | Double |

## Operator

| Some function name |     |        |
| ------------------ | --- | ------ |
| String             | ==  | String |
| String             |     |        |
| Operator           |     |        |

## Input

### String

| Some function name |                 |        |
| ------------------ | --------------- | ------ |
| input              | Some field text | String |
| Core               |                 |        |

### URI

| Some function name |                 |     |
| ------------------ | --------------- | --- |
| input              | Some field text | URI |
| Core               |                 |     |

### Slot

| Some function name |                 |      |
| ------------------ | --------------- | ---- |
| input              | Some field text | Slot |
| Core               |                 |      |

### Bool

| Some function name |     |      |
| ------------------ | --- | ---- |
| input              |     | Bool |
| Core               |     |      |

### Button Call

| Some function name |      |         |
| ------------------ | ---- | ------- |
| input              | Call | Trigger |
| Core               |      |         |
