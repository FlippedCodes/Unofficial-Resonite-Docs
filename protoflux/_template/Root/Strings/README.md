<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Strings

### Compare

<!-- ProtofluxNode:start -->
| Compare | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | Int32 | * |
| input | String | B |
| input | StringComparison | ComparisonType |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.CompareStrings |  |
<!-- ProtofluxNode:end -->


### Contains

<!-- ProtofluxNode:start -->
| Contains | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Boolean | * |
| input | String | Substring |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.Contains |  |
<!-- ProtofluxNode:end -->


### To String

<!-- ProtofluxNode:start -->
| To String | Type | Label |
| --- | ---- | ----- |
| input | Object | Object |
| output | String | * |
| input | String | Format |
| input | IFormatProvider | FormatProvider |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.ParsingFormatting.ToString_object |  |
<!-- ProtofluxNode:end -->


### Count Occurrences

<!-- ProtofluxNode:start -->
| Count Occurrences | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Int32 | * |
| input | String | Search |
| input | StringComparison | ComparisonMode |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.CountOccurrences |  |
<!-- ProtofluxNode:end -->


### Empty String

<!-- ProtofluxNode:start -->
| Empty String | Type | Label |
| --- | ---- | ----- |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.EmptyString |  |
<!-- ProtofluxNode:end -->


### Ends With

<!-- ProtofluxNode:start -->
| Ends With | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Boolean | * |
| input | String | Substring |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.EndsWith |  |
<!-- ProtofluxNode:end -->


### Escape String

<!-- ProtofluxNode:start -->
| Escape String | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.EscapeString |  |
<!-- ProtofluxNode:end -->


### Index Of String

<!-- ProtofluxNode:start -->
| Index Of String | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Int32 | * |
| input | String | Part |
| input | Int32 | StartIndex |
| input | Boolean | SearchFromEnd |
| input | StringComparison | ComparisonMode |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.IndexOfString |  |
<!-- ProtofluxNode:end -->


### Is String Empty

<!-- ProtofluxNode:start -->
| Is String Empty | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | Boolean | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.IsStringEmpty |  |
<!-- ProtofluxNode:end -->


### Join

<!-- ProtofluxNode:start -->
| Join | Type | Label |
| --- | ---- | ----- |
| input | String | Separator |
| output | String | * |
| inputlist | String | Inputs |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringJoin |  |
<!-- ProtofluxNode:end -->


### Null String

<!-- ProtofluxNode:start -->
| Null String | Type | Label |
| --- | ---- | ----- |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.NullString |  |
<!-- ProtofluxNode:end -->


### Replace First Substring

<!-- ProtofluxNode:start -->
| Replace First Substring | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | String | SearchFor |
| input | String | ReplaceWith |
| input | Int32 | StartIndex |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceFirstSubstring |  |
<!-- ProtofluxNode:end -->


### Replace Substring

<!-- ProtofluxNode:start -->
| Replace Substring | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | String | SearchFor |
| input | String | ReplaceWith |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceSubstring |  |
<!-- ProtofluxNode:end -->


### Reverse String

<!-- ProtofluxNode:start -->
| Reverse String | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.ReverseString |  |
<!-- ProtofluxNode:end -->


### Starts With

<!-- ProtofluxNode:start -->
| Starts With | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Boolean | * |
| input | String | Substring |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StartsWith |  |
<!-- ProtofluxNode:end -->


### String Insert

<!-- ProtofluxNode:start -->
| String Insert | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | String | Value |
| input | Int32 | StartIndex |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringInsert |  |
<!-- ProtofluxNode:end -->


### String Length

<!-- ProtofluxNode:start -->
| String Length | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | Int32 | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringLength |  |
<!-- ProtofluxNode:end -->


### String Remove

<!-- ProtofluxNode:start -->
| String Remove | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | Int32 | StartIndex |
| input | Int32 | Length |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringRemove |  |
<!-- ProtofluxNode:end -->


### Strip RTF

<!-- ProtofluxNode:start -->
| Strip RTF | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StripRTF_Tags |  |
<!-- ProtofluxNode:end -->


### Substring

<!-- ProtofluxNode:start -->
| Substring | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | Int32 | StartIndex |
| input | Int32 | Length |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.Substring |  |
<!-- ProtofluxNode:end -->


### Trim String

<!-- ProtofluxNode:start -->
| Trim String | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.TrimString |  |
<!-- ProtofluxNode:end -->


### Unescape String

<!-- ProtofluxNode:start -->
| Unescape String | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.UnescapeString |  |
<!-- ProtofluxNode:end -->


