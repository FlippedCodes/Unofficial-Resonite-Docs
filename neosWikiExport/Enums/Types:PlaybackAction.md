PlaybackAction is an Enum which is used to specify the type of playback
action to perform in a
[ButtonPlaybackAction](ButtonPlaybackAction_(Component) "wikilink").

# Possible Values

| Value             | Description                                                             | Numeric Value |
|-------------------|-------------------------------------------------------------------------|---------------|
| None              | Does nothing                                                            | 0             |
| Play              | Resets the playback head position to the beginning and starts playback. | 1             |
| Resume            | Starts playing from the playback head position.                         | 2             |
| Pause             | Stops playing, keeping the playback head at the current location.       | 3             |
| Stop              | Stops playing.                                                          | 4             |
| ToggleResumePause | If playing, pauses. If paused, resumes.                                 | 5             |
| TogglePlayStop    | If playing, stops. If stopped, plays.                                   | 6             |

[Category:Enums](Category:Enums "wikilink")
[Category:Types](Category:Types "wikilink")