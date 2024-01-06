<!-----------------------------------------------------------------------+
 ! This file has been generated using a script. Do not edit it manually. !
 ! Edit the individual node pages instead.                               !
 +----------------------------------------------------------------------->

## Root/Strings

### Compare

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.CompareStrings -->
<!-- ProtofluxNode:start -->
| Compare | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | Int32 | * |
| input | String | B |
| input | StringComparison | ComparisonType |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.CompareStrings |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.CompareStrings -->


### Contains

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.Contains -->
<!-- ProtofluxNode:start -->
| Contains | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Boolean | * |
| input | String | Substring |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.Contains |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.Contains -->


### To String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.ParsingFormatting.ToString_object -->
<!-- ProtofluxNode:start -->
| To String | Type | Label |
| --- | ---- | ----- |
| input | Object | Object |
| output | String | * |
| input | String | Format |
| input | IFormatProvider | FormatProvider |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.ParsingFormatting.ToString_object |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.ParsingFormatting.ToString_object -->


### Count Occurrences

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.CountOccurrences -->
<!-- ProtofluxNode:start -->
| Count Occurrences | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Int32 | * |
| input | String | Search |
| input | StringComparison | ComparisonMode |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.CountOccurrences |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.CountOccurrences -->


### Empty String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.EmptyString -->
<!-- ProtofluxNode:start -->
| Empty String | Type | Label |
| --- | ---- | ----- |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.EmptyString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.EmptyString -->


### Ends With

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.EndsWith -->
<!-- ProtofluxNode:start -->
| Ends With | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Boolean | * |
| input | String | Substring |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.EndsWith |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.EndsWith -->


### Escape String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.EscapeString -->
<!-- ProtofluxNode:start -->
| Escape String | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.EscapeString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.EscapeString -->


### Index Of String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.IndexOfString -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.IndexOfString -->


### Is String Empty

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.IsStringEmpty -->
<!-- ProtofluxNode:start -->
| Is String Empty | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | Boolean | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.IsStringEmpty |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.IsStringEmpty -->


### Join

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringJoin -->
<!-- ProtofluxNode:start -->
| Join | Type | Label |
| --- | ---- | ----- |
| input | String | Separator |
| output | String | * |
| inputlist | String | Inputs |
| inputlistbuttons | String | Inputs |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringJoin |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringJoin -->


### Null String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.NullString -->
<!-- ProtofluxNode:start -->
| Null String | Type | Label |
| --- | ---- | ----- |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.NullString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.NullString -->


### Replace First Substring

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceFirstSubstring -->
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
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceFirstSubstring -->


### Replace Substring

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceSubstring -->
<!-- ProtofluxNode:start -->
| Replace Substring | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | String | SearchFor |
| input | String | ReplaceWith |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceSubstring |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.ReplaceSubstring -->


### Reverse String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.ReverseString -->
<!-- ProtofluxNode:start -->
| Reverse String | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.ReverseString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.ReverseString -->


### Starts With

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.StartsWith -->
<!-- ProtofluxNode:start -->
| Starts With | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | Boolean | * |
| input | String | Substring |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StartsWith |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.StartsWith -->


### String Insert

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringInsert -->
<!-- ProtofluxNode:start -->
| String Insert | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | String | Value |
| input | Int32 | StartIndex |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringInsert |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringInsert -->


### String Length

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringLength -->
<!-- ProtofluxNode:start -->
| String Length | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | Int32 | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringLength |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringLength -->


### String Remove

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringRemove -->
<!-- ProtofluxNode:start -->
| String Remove | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | Int32 | StartIndex |
| input | Int32 | Length |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StringRemove |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.StringRemove -->


### Strip RTF

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.StripRTF_Tags -->
<!-- ProtofluxNode:start -->
| Strip RTF | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.StripRTF_Tags |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.StripRTF_Tags -->


### Substring

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.Substring -->
<!-- ProtofluxNode:start -->
| Substring | Type | Label |
| --- | ---- | ----- |
| input | String | Str |
| output | String | * |
| input | Int32 | StartIndex |
| input | Int32 | Length |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.Substring |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.Substring -->


### Trim String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.TrimString -->
<!-- ProtofluxNode:start -->
| Trim String | Type | Label |
| --- | ---- | ----- |
| input | String | A |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.TrimString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.TrimString -->


### Unescape String

<!-- embed:start:ProtoFlux.Runtimes.Execution.Nodes.Strings.UnescapeString -->
<!-- ProtofluxNode:start -->
| Unescape String | Type | Label |
| --- | ---- | ----- |
| input | String | String |
| output | String | * |
| Root/Strings | ProtoFlux.Runtimes.Execution.Nodes.Strings.UnescapeString |  |
<!-- ProtofluxNode:end -->
<!-- embed:end:ProtoFlux.Runtimes.Execution.Nodes.Strings.UnescapeString -->


