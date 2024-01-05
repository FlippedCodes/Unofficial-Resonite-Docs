<languages></languages> <translate>

The **Local Leaky Impulse Bucket** node can be used as a buffer to store
multiple impulses and release them at a constant rate. This node
operates according to the [Leaky
bucket](https://en.wikipedia.org/wiki/Leaky_bucket) algorithm.

## Usage

`Trigger` is the impulse source for the bucket. `Reset` will remove all
remaining impulses from the bucket. `Interval` is a configurable time
interval which affects how often impulses are poured out of the bucket.
`MaximumCapacity` is the maximum number of impulses that can be stored
in the bucket. `Pulse` fires whenever the specified time interval has
elapsed if there are impulses remaining. `Overflow` fires whenever an
impulse is received through `Trigger` while the bucket is full.
`CurrentCapacity` is the current number of impulses in the bucket.

## Examples

## Node Menu

</translate> }}

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Local
Leaky Impulse Bucket](Category:Protoflux{{#translation:}} "wikilink")
[Local Leaky Impulse
Bucket](Category:Protoflux:Flow{{#translation:}} "wikilink")