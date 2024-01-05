<languages/> <translate> [OAuth](https://tools.ietf.org/html/rfc6749) is
an open standard which allows other applications on the internet to
access your Resonite Account details without you sharing your Resonite
Password with them. OAuth provides a **consent based** process that
ensures that you as a user agree to grant an application access before
any data is exchanged. OAuth is commonly seen across the internet and
many applications support it.

Are you familar with OAuth? Jump to [Quick
Steps](#Quick_Steps "wikilink") to get your urls.

# OAuth Status

Resonite' OAuth is in the **very early stages**, using it requires
application registration which is currently only possible with manual
approval. You also **cannot do much with OAuth right now** but this will
be expanded in the future.

# Common Questions

OAuth is a complex feature and due to this it can lead to some common
questions about how it works.

## Can OAuth let other people access my data?

OAuth cannot access your Resonite account without your consent.

## Can I use OAuth inside Resonite?

There are currently no Resonite Components, Protoflux nodes or other
in-Resonite elements that support OAuth. OAuth cannot also be manually
handled used with Protoflux, due to the requirements of a redirection
URL. This may change in the future.

## Can I use OAuth to Login/Access Google/Facebook/Dropbox etc?

No, OAuth on this page and the Resonite feature is designed to let other
services connect to your account and not the other way around.

# Example Scenarios

Here are some examples of things that might be possible with Resonite
and OAuth in the future. **None of these applications exist, these are
just examples of what you might be able to do**.

-   Event Registration - As a part of an event registration system, you
    could be asked to link your Resonite Account with an Event
    Registration System. This would securely identify you and prove that
    you were a particular Resonite User which could allow you access to
    paid events, sessions and workshops etc.
-   Utilities / Applications - Manage your friends, messages etc outside
    of Resonite using a 3rd party application.
-   Management - Edit your Resonite profile & inventory from outside of
    Resonite.

# OAuth Requirements

In order to use OAuth you will need:

-   A registered application/client with Resonite
-   The registered application's OAuth Client ID and Client Secret.
-   A list of scopes that you want to use.
-   A webserver - OAuth requires a web application / server to process
    the OAuth authorization process.

## Registering an Application

<s>To register an application you will need to email hello@Resonite.com.
In your email please include:

-   Your Name.
-   Your Reason for requesting access.
-   Your Application's Name.
-   An OAuth Callback/Redirect URL. - This is the URL Resonite will use
    to redirect users back to your application as a part of the OAuth
    process. It usually needs to run on a web server.</s>

We're temporarily not accepting new registrations here. Please stay
tuned for future updates.

# OAuth Flow

Once you have all of the above requirements, you can get started!

Resonite uses the Authorization Code OAuth Flow. This is quite complex
and it is recommended that you follow a guide for your language or
environment of choice a Generic Guide can be found [Generic
Guide](https://www.oauth.com/oauth2-servers/server-side-apps/authorization-code/).
Here's a basic explanation which might be helpful before you dig in:

1.  A user authenticates with your Application. E.g. CoolApp.com.
2.  Once Authenticated a link or button is presented to the user asking
    them to Login / Link their Resonite account.
3.  This link should redirect using standard Authorization Code Flow
    parameters to: <https://auth.Resonite.com/connect/authorize>
4.  Resonite will then ask the User to Login using their Resonite
    account.
5.  Once they are logged in a message will be shown asking them to grant
    your application access to their Resonite account.
6.  If they agree they will be redirected back to your registered
    application's redirect url.
7.  The redirect URL will contain an authorization code which you can
    exchange for an access token on your server. The token url is:
    <https://cloudx-account.azurewebsites.net/>.

## Using An Access Token

Currently once a token is obtained you can use it to call a limited
amount of endpoints. These endpoints may increase in the future.

### Profile Endpoint

Calling:
[`https://auth.Resonite.com/api/user/profiles`](https://auth.Resonite.com/api/user/profiles),
with your token in the header: `Authorization: Bearer [token]` will
provide a standard Resonite User Profile in JSON Format.

To receive it you will need to ensure you request the `profile` scope.

Additionally, with some additional scopes you can access some additional
information. See [Scopes](#Scopes "wikilink").

# Quick Steps

Have you done this before? This section is for you!

-   Resonite Uses the Authorization Code / Grant Flow
-   You must [Register an
    Application](#Registering_an_Application "wikilink").
-   You need a Client ID and Client Secret.

## Endpoints

-   Authorization:
    [`https://auth.Resonite.com/connect/authorize`](https://auth.Resonite.com/connect/authorize)
-   Token:
    [`https://auth.Resonite.com/connect/token`](https://auth.Resonite.com/connect/token)
-   Headers: `Authorization: Bearer [token]`

## Scopes

| Scope Name | Description                                                                                      |
|------------|--------------------------------------------------------------------------------------------------|
| profile    | Enables you to obtain profile information such as a User's username, profile image etc.          |
| email      | Enables you to see the User's email in the [profile response](#Profile_Endpoint "wikilink").     |
| patreon    | Provides the user's Patreon information in the [profile response](#Profile_Endpoint "wikilink"). |

# External Resources

-   [OAuth's Specification](https://tools.ietf.org/html/rfc6749) - 76
    Pages of Technical information.
-   [OAuth Simplified](https://www.oauth.com/) - A Simplified
    explanation of many of the parts of OAuth. Do note that some pages
    may link to a paid service but that this service is not required to
    use OAuth.
-   [Wikipedia](https://en.wikipedia.org/wiki/OAuth) - Wikipedia's page
    on OAuth.
-   [Example OAuth Application by
    ProbablePrime](https://github.com/ProbablePrime/Resonite-oauth-example)

</translate>