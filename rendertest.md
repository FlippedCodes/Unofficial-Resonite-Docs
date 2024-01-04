# Render Test

A testfile to see if we can render protoflux nodes on the fly with js.

## Normal

> Edge cases are below.

# Dynamic Impulse Trigger

<!-- ProtofluxNode:start -->
| Dynamic Impulse Trigger | Type          | Label            |
| ----------------------- | ------------- | ---------------- |
| input                   | Bool          | *                |
| output                  | String        | Next             |
| input                   | Bool          | Tag              |
| output                  | Int           | TriggeredCount   |
| input                   | String        | TargetHierarchy  |
| input                   | TriggerString | ExcludedDisabled |
| Async                   |               |                  |
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
