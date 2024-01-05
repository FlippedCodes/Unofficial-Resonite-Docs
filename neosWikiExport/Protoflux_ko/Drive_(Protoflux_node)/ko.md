<languages></languages>

<div class="mw-translate-fuzzy">

입력측 **StartDrive**에 Impulse를 보내면, 입력측 **Source**의 값을
출력측 **DriveTarget**에 전송합니다. Drive 상태인 경우,
**DriveTarget**에 연결된 속성값을 잠그게 되며 이를 인스펙터에서 직접
수정하려 하는 경우 출력측에 **OnHook** Impulse가 발생합니다.

</div>
<div class="mw-translate-fuzzy">
</div>
<div class="mw-translate-fuzzy">

## 입력인자 & 반환값

|               |            |                                             |
|---------------|------------|---------------------------------------------|
| 자료형 대표색 | 인자명     | 자료형                                      |
|               | StartDrive | [Impulse](:Protoflux:Impulses "wikilink")   |
|               | StopDrive  | [Impulse](:Protoflux:Impulses "wikilink")   |
|               | Source     | [(dummy)](:Category:Types:Dummy "wikilink") |

입력인자(Input parameters)

</div>

The `OnStartDrive` output fires an impulse whenever an impulse arrives
at the `StartDrive` input. This continues the impulse chain which
arrived at `StartDrive`.

The `OnStopDrive` output fires an impulse whenever an impulse arrives at
the `StopDrive` input. This continues the impulse chain which arrived at
`StopDrive`.

The `OnHook` fires an impulse whenever the `DriveTarget` is driven with
the `Source` value and another source (e.g. a
[Write](Write_(Protoflux_node) "wikilink") node or
[ButtonValueSet](ButtonValueSet_(Component) "wikilink") component)
attempts (but is not able) to overwrite the value.

The `IsDriving` output is True while the `DriveTarget` is driven with
the `Source` value, otherwise False.

The `HookedValue` output provides the value which another source
attempted to set the `DriveTarget` to when an impulse is fired from
`OnHook`. The value is only available for the duration of the impulse
chain started from `OnHook`.

Note that, when an impulse is received at `StartDrive` the drive target
will become driven by the `Source` value regardless of whether it was
already driven by some other source i.e. control of the target value is
overridden.

<div class="mw-translate-fuzzy">

|               |              |                                                   |
|---------------|--------------|---------------------------------------------------|
| 자료형 대표색 | 인자명       | 자료형                                            |
|               | DriveTarget  | [IField\<T>](:Category:Types:IField`1 "wikilink") |
|               | OnStartDrive | [Impulse](:Protoflux:Impulses "wikilink")         |
|               | OnStopDrive  | [Impulse](:Protoflux:Impulses "wikilink")         |
|               | OnHook       | [Impulse](:Protoflux:Impulses "wikilink")         |
|               | IsDriving    | [Boolean](:Category:Types:Bool "wikilink")        |
|               | HookedValue  | [(dummy)](:Category:Types:Dummy "wikilink")       |

반환값

</div>
<div class="mw-translate-fuzzy">

## 사용방법

입력측 **Source** 및 출력측의 **HookedValue**는 자료형이 지정되지 않은
상태로 생성됩니다. 위 2가지 입력중 한개 또는 출력측의 **DriveTarget**에
연결된 자료형에 따라 동시에 형변환이 일어나게 됩니다.

**StartDrive**를 활성화 하면, **Souce**의 값이 **DriveTarget**으로
보내지고, **OnStartDrive**에 Impulse가 발생하며 **IsDriving**이 True로
설정됩니다.

이 상태에서 **DriveTarget**에 연결된 속성을 임의로 변경하고자 하면,
**OnHook**에 Impulse가 발생되며 변경하려고 했던 값은 출력측의
**HookedValue**로 출력됩니다. (**IsDriving**이 True인 경우에만
**OnHook**에 Impulse가 발생됩니다)

다만, **HookedValue**에 값이 제공되는 타이밍 문제로 출력노드로 바로
보여지지 않으므로,
[If](:If_(Protoflux_node){{#translation:}} "wikilink") 노드 등을 통해
OnHook이벤트 발생시에만 값을 취하도록 하는 식으로 로직스를 구성하셔야
시각적으로 확인 할 수 있습니다.

</div>

[Drive](Category:Protoflux{{#translation:}} "wikilink")
[Drive](Category:Protoflux{{#translation:}}:Actions{{#translation:}} "wikilink")