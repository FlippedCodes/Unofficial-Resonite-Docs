__TOC__

<languages/>

네오스에서는 현재 하기된 안면 및 시선 추적 장치를 지원합니다.

-   바이브 프로 아이 - 시선 추적
-   바이브 페이셜 트래커 - 안면 추적
    -   바이브 기기가 꼭 필요한것은 아닙니다. 여러 사람들이 각기다른
        HMD에 장착(테이프등)하여 사용합니다.

상기된 시스템에 문제가 있는 경우 아래의 일반적인 문제 해결 방법을 확인
해 보세요.

# 하드웨어

-   기본적으로 연결상태를 확인 합니다. 케이블등을 다시 연결하여,
    녹색이나 청색 빛이 기기에 표시되는지 확인 해 보세요.
-   케이블의 물리적 손상을 확인합니다.

바이브 프로 아이가 아닌 HMD의 경우, 아래 사진과 같은 USB-C to USB
아답터가 필요할 수 있습니다.

<figure>
<img src="USBC_USBAdapter.jpg" title="USBC_USBAdapter.jpg" width="250" alt="USBC_USBAdapter.jpg" /><figcaption aria-hidden="true">USBC_USBAdapter.jpg</figcaption>
</figure>

## 안면 추적장치 올리기

바이브 헤드셋이 아닌 다른 HMD의 경우, 여러가지 장착방법이 공유되고
있습니다. 아래에 그 방법들을 소개 해 드립니다.

-   **테이프** - 테이프를 이용하여 장착
-   **양면 벨크로** - 탈착이 가능한 장착방법입니다. 하중을 잘 고려하여
    선택하세요.
-   3D 프린팅
    -   **[Simple Mount](https://www.thingiverse.com/thing:4798891)** -
        단순한 형태의 마운트이며, 헤드셋 하단에 테이프를 이용하여 장착할
        수 있습니다.
    -   **[Friction
        Mount](https://www.thingiverse.com/thing:4806854)** - 벨브의
        인덱스용으로 만들어진 것입니다. Frunk 커버에 장착 가능하며,
        클립을 이용한 밀착 방식으로 강한 움직임이 동반될 경우 떨어질 수
        있습니다.
    -   **[Magnetic
        Mount](https://www.thingiverse.com/thing:4807214)** - 벨브
        인덱스 프렁크 커버의 자석을 이용하는 거치대 입니다. 부가적으로
        직경 1/8"x 두께 1/8"(3.175mm x 3.175mm) 크기의 자석을 필요로
        합니다.

# 소프트웨어

## 소프트웨어 설치

안면 및 시선추적기 모두 HTC([HTC
Website](https://www.vive.com/setup/facial-tracker))에서 다운로드 받을
수 있는 소프트웨어를 필요로 합니다. 설치이후 시작 메뉴에서 설치한
프로그램을 찾아 실행하시면, 시스템 트레이에 아래와 같은 아이콘이
표시됩니다.

<figure>
<img src="SRAnipal_Icon.png" title="SRAnipal_Icon.png" width="100" alt="SRAnipal_Icon.png" /><figcaption aria-hidden="true">SRAnipal_Icon.png</figcaption>
</figure>

통상적으로 이 아이콘이 보이면, 추적기의 기능이 동작합니다.

## 추적상태

추적기와의 통신 상태가 트레이 아이콘에 그대로 투영됩니다.

-   시선 추적상태는 눈쪽으로 표시됩니다.
-   안면 추적상태는 입쪽에 표시됩니다.

또한, 표시되는 색상으로 어떤 상태인지 확인할 수 있습니다.

-   검정색이면 비활성 상태임을 나타냅니다.
-   주황색이면, 대기중 상태를 의미합니다.
-   녹색이면 추적기가 동작중임을 의미합니다.

## 추적 프로그램에 대해

트레이에 있는 로봇 아이콘에서 마우스 우클릭시 작은 메뉴가 표시되며,
간단한 정보를 제공하는 작은 창이 표시됩니다. 그 정보는 아래와 같습니다.

-   소프트웨어 버전
-   시선 추적(아이 트래커) 버전
-   안면 추적(페이셜 트래커) 버전

만약, 여기에 N/A 라고 표시되어 있다면, 해당 장치가 식별(탐지)되지
않았다는 의미입니다. [하드웨어](#Hardware "wikilink") 항목을 참조하여
문제를 해결해보세요.

현재 소프트웨어의 버전은 **1.3.2.0** 입니다.

## 아이 트래킹 재조정

바이브 프로 아이는 최적의 추적기능을 위해 조정 작업을 거쳐야 합니다.
어떻게 하는지는 [HTC Vive Pro Eye
Calibration](https://www.vive.com/us/support/vive-pro-eye/category_howto/calibrating-eye-tracking.html)
사이트를 확인 해 주세요.

## 부가적인 소프트웨어 및 하드웨어 도움말

바이브 프로 아이 및 페이셜 트래커 제조사인 HTC는 자체적인 지원시스템을
보유하고 있습니다. 아래에 링크를 두었으니 확인해 보세요.

-   [페이셜
    트래커](https://www.vive.com/kr/support/facial-tracker/category_howto/tracker.html)
-   [바이브 프로 아이](https://www.vive.com/kr/support/vive-pro-eye/)
-   [바이브 프로 아이 센서
    재조정](https://www.vive.com/kr/support/vive-pro-eye/category_howto/calibrating-eye-tracking.html)

# 네오스

소프트웨어와 하드웨어 설정이 끝나면, 나머지는 네오스를 실행시키기만 하면
됩니다.

아이 트래킹 장치가 있으면, 트레이의 로봇 아이콘의 눈이 녹색으로
표시됩니다. 페이셜 트래킹 장치가 있으면, 트레이의 로봇 아이콘에 있는 입
부분이 녹색으로 표시됩니다.

이제, 안면 및 아이 트래킹이 호환되는 아바타를 착용해 봅니다. 이는 보관함
내 Resonite Essentials -> Avatars -> Face and Eye Tracking Ready
폴더에서 찾아보실 수 있습니다.

## 네오스에서 문제가 발생하는 경우

네오스 내에서 추적기능이 동작하지 않는 경우, 다음을 시도해 보세요.

-   시스템 트레이에 로봇 아이콘이 있는지 확인 합니다.
-   네오스VR 재시작
-   컴퓨터를 재시작
-   네오스 실행시 `-ForceSRAnipal` 인자를 추가합니다. 인자 사용법은
    **[명령행
    실행인자](Command_Line_Arguments#How_to_use_command_line_arguments/ko "wikilink")**
    문서에서 확인하실 수 있습니다.

만약, 그래도 해결되지 않는다면 **[grab some
logs](Frequently_Asked_Questions/ko#Regular_Log_Files "wikilink")**
항목을 참조 하시어, 로그를 추출하신 후, 공식 디스코드에 있는
`#❓questions-help` 체널에 문의 해 주세요.

## 셰이프 키 & 설정

TODO: THIS NEEDS TO BE WRITTEN.

[Category:Troubleshooting/ko](Category:Troubleshooting/ko "wikilink")