<languages></languages> <translate>

## Introduction

The **Create Dynamic Variable\`1** node attempts to create a Dynamic
Variable of the specified Type on the slot of the nearest
[DynamicVariableSpace](DynamicVariableSpace_(Component) "wikilink") to
the `Target` Slot.

As usual, precautions related to the duplication and reparenting of
dynamic variables apply, as described on the [Dynamic
Variables](Dynamic_Variables "wikilink") page.

## Usage

Depending on the type of `InitialValue`, this component will attach a
[DynamicValueVariable\`1](DynamicValueVariable`1_(Component) "wikilink")
or
[DynamicReferenceVariable\`1](DynamicReferenceVariable`1_(Component) "wikilink")
component to the slot containing the nearest
[DynamicVariableSpace](DynamicVariableSpace_(Component) "wikilink").

`InitialValue` is shown as being a [T](:Category:Types:T "wikilink")
value for demonstration purposes, however it will be composed of the
type selected in the Protoflux browser, or specified in the [Component
Attacher](Component_Attacher "wikilink").

When using the Component Attacher, you may specify any valid FrooxEngine
or BaseX type by following the instructions on the [Creating a custom
Protoflux Node](Creating_a_custom_Protoflux_Node "wikilink") page.

`CreateDirectlyOnTarget` overrides the default functionality of this
node, and creates the Dynamic Variable directly on the `Target` slot,
instead of the slot of the nearest DynamicVariableSpace.

`CreateNonPersistent` causes the resultant Dynamic Variable to be
created as a non-persistent component, which will not be saved when the
object or world is reloaded.

## Examples

<div style="clear: both;">
</div>

## Node Menu

</translate>

[Create Dynamic Variable\`1 (Protoflux
node){{#translation:}}](Category:Protoflux:Variables{{#translation:}} "wikilink")
[Create Dynamic Variable\`1 (Protoflux
node){{#translation:}}](Category:Protoflux{{#translation:}} "wikilink")