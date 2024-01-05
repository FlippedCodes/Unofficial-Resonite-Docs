<languages/> 만약 네오스를 실행한 후 월드의 모든 오브젝트가 아래 이미지
처럼 체크무늬로 보이는 경우.

<figure>
<img src="CheckerboardTextures.png" title="CheckerboardTextures.png" width="700" alt="CheckerboardTextures.png" /><figcaption aria-hidden="true">CheckerboardTextures.png</figcaption>
</figure>

<div class="mw-translate-fuzzy">

# 문제 해결 절차

각 절차마다 네오스를 재시작해 주세요. 각 절차는 모든 에셋을 읽어온
상태라고 가정합니다.

</div>

When following these steps, each time you try restarting Resonite,
ensure you are waiting a few minutes to see if stuff will actually load.

## 단순화된 절차

1.  네오스를 재시작 합니다.
2.  컴퓨터를 재기동한 후 네오스를 다시 실행합니다.
3.  운영체제의 [시간 동기화를](Synchronize_your_Clock "wikilink") 수행한
    후 네오스를 다시 실행합니다.

## Database Repair

Sometimes the local databse can corrupt, resulting in checkerboard
textures. To attempt to fix this, you can temporarily add
`-RepairDatabase` to your [Command Line
Arguments](Command_Line_Arguments "wikilink").

## 시스템 설정

### 디스크

1.  주 디스크(일반적으로 C:)의 공간이 충분한지 확인합니다.

### 네트워크 설정

1.  윈도우 아이콘을 마우스 우클릭하여 "설정"을 선택합니다.
2.  "네트워크 및 인터넷"에서 "프록시"를 선택합니다.
3.  모든 속성값을 "끄기"로 조정합니다.
4.  바이러스 백신 또는 방화벽에서 네오스를 막고 있는지 확인합니다.
5.  VPN 이용시 문제가 발생할 수 있으니, 연결을 끊어주세요.
6.  다시 네오스를 실행하여 봅니다.

### IPV6 끄기

-   윈도우즈 10 기준
    -   "설정"으로 이동합니다.
    -   "네트워크 및 인터넷" 선택
    -   "어댑터 옵션 변경" 선택
    -   사용중인 어댑터를 더블클릭 합니다.
    -   "속성" 선택
    -   "이 연결에 다음 항목 사용"에서 "인터넷 프로토콜 버전
        6(TCP/IPV6)"를 찾아 체크박스를 해제합니다.
    -   "확인" 선택
-   윈도우즈 11 기준
    -   "설정"으로 이동합니다.
    -   "네트워크 및 인터넷" 선택
    -   "고급 네트워크 설정" 선택
    -   "기타 네트워크 어댑터 옵션" 선택(새로운 창이 표시됩니다)
    -   사용중인 어댑터를 더블클릭 합니다.
    -   "속성" 선택
    -   "이 연결에 다음 항목 사용"에서 "인터넷 프로토콜 버전
        6(TCP/IPV6)"를 찾아 체크박스를 해제합니다.
    -   "확인" 선택

IPV6 지원은 로드맵에 포함되어 있는 상태입니다. 이 옵션을 해제하는 경우
드물게 이 기능을 사용하거나 사용할 몇몇 소프트웨어 또는 미래의 인터넷
기능들이 오동작하거나 동작하지 않을수는 있습니다.

이 옵션의 변경으로 문제가 발생하게 되면, 원래대로 복구해 주세요.

## 최종 절차

여전히 문제가 해결되지 않았다면, 아래의 절차도 진행해 보시는 것을
추천합니다.

-   [데이터베이스 복구](Database_repair/ko "wikilink") 안내서.
-   [캐시 초기화](Clear_your_Cache/ko "wikilink")

## 추가로 도움을 구하기

모든 절차를 수행하였음에도 문제가 지속되는 경우

1.  최종 [로그파일](Log_Files/ko "wikilink") 수집
2.  수집된 로그 파일을 [네오스 디스코드](https://discord.gg/Resonite)에
    게시하고 도움을 요청

[Category:Troubleshooting](Category:Troubleshooting "wikilink")