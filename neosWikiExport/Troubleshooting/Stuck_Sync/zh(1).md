<languages/>

<div class="mw-translate-fuzzy">

有时，当您的帐户正在同步，仪表板上显示的同步状态会定格在某个百分比（通常在10%）。这说明同步出现了问题，正在停止或暂停同步过程。

</div>
<div class="mw-translate-fuzzy">

# 确保您正在阅读正确的指南

在我们有多个关于同步问题的解决指南，在继续阅读**之前**，请确保你正阅读的是为你的问题准备的，要查看同步问题总览，请前往
[同步错误](Sync_Errors "wikilink")。

</div>

这些问题略有不同，可能需要不同的步骤，因此我们将它们分成单独的指南。

# 诊断一次卡住的同步

修复同步卡住的第一步，是确认它真的卡住了。有时同步可能需要很长时间，或者看起来卡住了，但其实只是它太慢了。跟随以下步骤来确认问题：

1.  检查仪表盘中的同步状态。它位于仪表盘的顶栏中，通常显示为“已同步”
2.  如果它显示“同步中”，并且后面跟着一个百分比进度，看看进度是否正在变化或是增加。等几分钟后再看看以确保它不只是太慢了。
3.  如果它还是不动，那么你的同步进度卡住了！

# 修复卡住的同步

修复一次正卡住的同步有点挑战性，具体取决于问题所在，因此请务必按照我们的步骤操作。

First, let's try some steps which are common to many sync issues:

1.  Try restarting Resonite, this will re-start the sync process and can
    sometimes get it unstuck.
2.  Try disabling any mods, plugins or other modifications you have made
    to Resonite, these may affect syncing.

<div class="mw-translate-fuzzy">

1.  检查你的 [日志文件](Log_Files "wikilink")
2.  那个离同步卡住时间最近的、其中包含了卡住的同步信息的文件，是你需要检查的。
3.  浏览日志文件并寻找问题所在，如果你不确定该怎么做，尝试在 Discord
    问问，或者找其他能够帮助你定位到同步卡住信息的人。
4.  一旦你找到了关于同步卡住的信息，跟着下面你认为与日志中错误信息最相关的章节来排查问题。

</div>

# Common Stuck Sync Causes

| Name/Link                                                    | Example Log File contents                                                             | Description                                                                                                                                               |
|--------------------------------------------------------------|---------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Out Of Space](Stuck_Sync/Out_Of_Space "wikilink")           | `Fail Reason: Out of space`                                                           | Your, Resonite Account's storage is full. Read the [Out Of Space](Stuck_Sync/Out_Of_Space "wikilink") page for more help.                                 |
| [Too Many Requests](Stuck_Sync/Too_Many_Requests "wikilink") | `Fail Reason: Response status code does not indicate success: TooManyRequests (429);` | Your computer is making too many requests to Resonite at the moment. Read the [Too Many Requests](Stuck_Sync/Too_Many_Requests "wikilink") for more help. |
| [Conflict](Sync_Conflict "wikilink")                         | Anything that has the word "Conflict"                                                 | Your have a sync conflict, read the [Conflict](Sync_Conflict "wikilink") page for more help.                                                              |

## 其他的问题

如果以上情况都对应不上你的问题，
请在我们的[问题跟踪平台](https://github.com/Frooxius/ResonitePublic/issues)上或我们的
Discord 中向我们报告。无论你在这两者中的哪个平台报告，都请务必提供
[日志文件](Log_Files "wikilink").

[Category:Troubleshooting](Category:Troubleshooting "wikilink")