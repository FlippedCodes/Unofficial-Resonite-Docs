# Render Test

A testfile to see if we can render protoflux nodes on the fly with js.

## Normal

> Edge cases are below.

<!-- |                | Some function name |      |        |
| -------------- | ------------------ | ---- | ------ |
| Bool           | Some               | what | String |
| Bool           | Some               | they | Int    |
| String         | For                | used | Double |
| String Trigger | For                |      |        |
| Async          |                    |      |        |

| Some function name |      |      |        |
| ------------------ | ---- | ---- | ------ |
| Bool 1             | Some |      | String |
| Bool 1             |      | what | String |
| Bool 2             | Some |      | Int    |
| Bool 2             |      | they | Int    |
| String             | For  |      | Bool   |
| String             |      | are  | Bool   |
| String Trigger     | For  |      |        |
| String Trigger     |      |      |        |
| Async              |      |      |        | -->

# Dynamic Impulse Trigger

<!-- ProtofluxNode:start -->

| Side   | Type          | Label |
| ------ | ------------- | ----- |
| input  | Bool          | Some  |
| output | String        | what  |
| input  | Bool          | Some  |
| output | Int           | they  |
| input  | String        | For   |
| output | Double        | used  |
| input  | StringTrigger | For   |
| Async  |               |       |

<!-- ProtofluxNode:end -->

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
