<languages></languages> <translate>

The **Request Host Access** node informs the user that owns the
`Request` impulse that you wish to connect to a particular host, and
allows them to grant or deny access.

## Usage

When given a `Request` impulse, the following will occur:

-   If the user has previously granted access to this host, `OnGranted`
    will immediately fire
-   If the user has previously denied access to this host, `OnDenied`
    will immediately fire, and any attempt to connect to this host will
    fail
-   If the user has not previously granted or denied access, or has
    closed the prompt without selecting an option before, they will be
    presented with a prompt displaying the `Host` and `Reason`, and
    given the option to Allow or Reject the connection.
    -   If allowed, `OnGranted` will fire, and no further prompts will
        be displayed.
    -   If rejected, `OnDenied` will fire, and no further prompts will
        be displayed, and any attempt to connect to this host will fail
    -   If dismissed, no impulse will fire, and any future host access
        requests will result in the prompt being shown again.

`Host` should contain only the host portion of the URL you wish to
connect to.

For example, if you wanted to perform a GET request to
[`https://wiki.Resonite.com/index.php`](https://wiki.Resonite.com/index.php),
you would provide `wiki.Resonite.com` as the `Host` parameter.

`Reason` should provide a clear and concise reason for wanting to
connect to the external service - It should include an obvious title or
description of the object that is attempting to establish the
connection, so that the user is aware of what item in the world is
prompting the connection.

The object should also have some way of indicating that it did not
successfully connect to the target service, and that it will not
function as intended, if at all.

## Examples

## Node Menu

</translate>

[Category:ProtofluxStubs](Category:ProtofluxStubs "wikilink") [Request
Host Access](Category:Protoflux{{#translation:}} "wikilink") [Request
Host Access](Category:Protoflux:Network{{#translation:}} "wikilink")