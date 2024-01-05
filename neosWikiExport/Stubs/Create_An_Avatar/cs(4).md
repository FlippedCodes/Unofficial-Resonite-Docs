<languages/>

## Počáteční import

Budete potřebovat nariggovaný soubor modelu (.fbx, .glb, atd).

Pro importování modelu máte dvě možnosti:

-   Přetáhněte soubor modelu do hry na vašem počítači
-   Navigujte k modelu na záložce soubory v dash menu a pak na něj
    dvakrát klikněte

Pro většinu avatarů můžete zvolit následující možnosti:

-   3D Model
-   Běžný / Avatar
-   Auto humanoidní škála (avatary)
-   Spustit import!

Zobrazí se indikátor stavu importu; za předpokladu že vše proběhlo
správně, model by se měl do pár sekund objevit. Když je model připraven,
spawnujte nástroj pro tvorbu avatarů ze záložky Domů na vašem dashi.
Uvidíte levitující ruce a headset. Umístěte headset na obličej, pak jej
zarovnejte pomocí možností zarovnání na dialogu nástroje. Potom umístěte
ruce tak, že zápěstí je na pravém místě a rotace je správná (o velikost
se nemusíte starat).

Jakmile je vše na svém místě, klepněte na "Vytvořit" pro vygenerování
vašeho avatara!

Do avatara se můžete převtělit tím, že na něj kliknete vaším laserem. V
tuto chvíli by jste si měli avatara uložit -- podívejte se na stránku
[Inventář](Inventory/cs "wikilink") pro instrukce.

## Materiály a textury

Váš model nemusí být naimportován spolu s jeho texturami. Pokud se toto
stane, budete muset přidat textury sami.

Importujte textury stejným způsobem jako jste importovali svůj model, a
při importu v dialogu zvolte "Obrázek / Texturu".

Spawnujte [Vývojářský tooltip](Developer_Tooltip "wikilink") ze složky
Essential Tools ve vašem inventáři, nasaďte si jej, a vyberte nějákou
část vašeho avatara stisknutím tlačítka sekundární akce. Potom ve vašem
kontextovém menu otevřete inspektor.

Budete prohlížet nějakou součást vašeho avatara. Stiskněte tlačítko ⇑
pro přechod do kořene (rootu) vašeho avatara, a přejděte do CenteredRoot
-> RootNode. Uvnitř by jste měli vidět Armature + jeden nebo více slotů.
Vyberte jeden ze slotů mimo Armature; chcete ten, který obsahuje
SkinnedMeshRenderer na pravo. Komponenta obsahuje seznam materiálů.
Klikněte na šipku ↑ vedle materiálu pro pohled na jeho vlastnosti.

V tuto chvíli jednoduše uchopte texturu do jedné ruky a klikněte na
prázdný slot pro image vaší volnou rukou pro přizazení textury. Proveďte
to samé pro přiřazení textur všem vašim materiálům.

Nezapomeňte si svoji práci uložit!