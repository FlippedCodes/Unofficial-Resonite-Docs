<languages></languages> <translate>

The **Local User Space** node outputs the slot that the local user is
parented under.

## Usage

In some worlds, users may be under the management of systems which
parent a user to a slot which is other than the world
[Root](Root "wikilink") Slot. This is common with Spawn Areas which have
the Parent User setting enabled or with World Management systems that
create a new slot for each user. When such systems exist it is
recommended that your systems respect them.

In many setups this node can be used in place of [Root Slot (Protoflux
node)](Root_Slot_(Protoflux_node) "wikilink").

Examples include:

-   Guns
-   Rockets
-   Projectiles
-   Gadgets and Tools that parent things

## Examples

If we have a world hierarchy that looks like this:

-   Root
    -   Users
        -   User ProbablePrime - The actual User

If the user spawns an object from their inventory, let's say a Rocket
Launcher, it will be parented to the "Users" slot:

-   Root
    -   Users
        -   User ProbablePrime - The actual User
        -   **Rocket Launcher**

If the Rocket Launcher fires a rocket which needs re-parenting using
"Local User Space" then it would be parented to the Users Slot:

-   Root
    -   Users
        -   User ProbablePrime - The actual User
        -   Rocket Launcher
        -   **Rocket**

If the Root Slot Node is used instead it would be parented to the Root
Slot:

-   Root
    -   **Rocket**
    -   Users
        -   User ProbablePrime - The actual User
        -   Rocket Launcher

This can mess with world management systems or culling systems.

## Node Menu

</translate>

[Local User Space (Protoflux node)](Category:Protoflux "wikilink")
[Local User Space (Protoflux node)](Category:Protoflux:Users "wikilink")