# Protoflux Render Engine Showcase

> A showcase of how the protoflux nodes are generated on this documentation.

## Normal

<!-- panels:start -->
<!-- div:left-panel -->
### Example

```md
<!-- ProtofluxNode:start -->
| Dynamic Impulse Trigger | Type          | Label            |
| ----------------------- | ------------- | ---------------- |
| input                   | Bool          | *                |
| output                  | String        | Next             |
| input                   | Bool          | Tag              |
| output                  | Int           | TriggeredCount   |
| input                   | String        | TargetHierarchy  |
| output                  | Double        | Some Output      |
| input                   | TriggerString | ExcludedDisabled |
| Async                   |               |                  |
<!-- ProtofluxNode:end -->
```
<!-- div:right-panel -->
### Output
<!-- ProtofluxNode:start -->
| Dynamic Impulse Trigger | Type          | Label            |
| ----------------------- | ------------- | ---------------- |
| input                   | Bool          | *                |
| output                  | String        | Next             |
| input                   | Bool          | Tag              |
| output                  | Int           | TriggeredCount   |
| input                   | String        | TargetHierarchy  |
| output                  | Double        | Some Output      |
| input                   | TriggerString | ExcludedDisabled |
| Async                   |               |                  |
<!-- ProtofluxNode:end -->
<!-- panels:end -->

> [!Warning]
> The nodes below are not yet implemented and will change before being rendered correctly.

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
