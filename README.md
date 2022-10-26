<p style="text-align: center;"><img width="872" align="center" alt="Schermafbeelding 2022-10-25 om 14 17 02" src="https://user-images.githubusercontent.com/90039351/197770800-9065a451-6781-4142-8552-69dcd9bbe6e5.png"></p>

------------------

# BaselineTest
Dit project bestaat uit videofragmenten van de baseline testen, uit de film Blade Runner 2049. Het geluid uit de fragmenten is visueel met behulp van HTML en CSS vormgegeven. Hierbij was het de bedoeling dat doven menden of mensen zonder geluid dezelfde beleving konden ervaren dan mensen die het geluid wel konden horen.

De video is opgedeeld in twee fragmenten: 
-	Het eerste fragment is het binnenkomen in een basis en de eerste baseline test uit de film. Het fragment duurt van 0s tot 87s, in totaal 87 seconde.
-	Het tweede fragment is de tweede baseline test uit de film en duurt van 87s tot 135s, in totaal 48 seconde.

## Sfeer
Om een beter beeld te krijgen van waarover de film gaat heb ik allereerst de film gekeken. Hiervan kreeg ik verschillende ideeën en begon ik na te denken over de sfeer die ik allereerst neer wilde zetten. Ik heb gekozen om een cyberpunk achtige stijl te gebruiken. En voegde een titel toe aan de pagina. Deze titel heeft een streep in het midden en beide verdwijnen wanneer de video wordt gestart, doormiddel van een animatie. Voor de rest heeft het frame een color glow, dit is gebaseerd op neonlichten die goed binnen deze stijl passen. Om dit verder door te trekken heb ik ervoor gekozen om de muis te vervangen door een color dot. Voor het lettertype heb ik gekozen voor het Brenner font en gebruik hier verschillende varianten van.


## Stemmen/Voices
Er zijn 3 verschillende stemmen te horen. 
-	De eerste stem is van de persoon die K oproept en ondervrager tijdens de test. De stem heeft een monotone neutrale robot stem. Daarom heb ik ervoor gekozen om deze stem een monospace font te geven.

| Voice 1 |
|---|
| ```font-family: "Brenner Mono";```
```font-style: Normal;```
```font-weight: 600;``` |

-	De tweede stem is van K, de persoon die de test aflegt. Ook hij heeft een erg neutrale monotone stem zonder verdere emoties. Wel is er in het tweede fragment een verandering merkbaar. De antwoorden worden dan wat minder monotoon en er komt meer tijd tussen voor hij antwoord geeft. Als of hij meer moet nadenken. Daarom heb ik ervoor gekozen om voor het eerste en tweede deel andere fonts te kiezen met een subtiel verschil, waarbij het eerste deel een wat uniformer font heeft.

| Voice 2 | Voice 4 |
|---|---|
| ```font-family: "Brenner Sans Condensed";``` | ```font-family: "Brenner Sans";``` | 
| ```font-style: Normal;``` | ```font-style: Normal;``` |
| ```font-weight: 600;``` | ```font-weight: 600;``` |

-	De derde stem is van de voorbijlopende medewerker die K fluisterend uitscheld. Het is een uiting van niet luide agressie. Daarom heb ik ervoor gekozen om het subtiel en niet groot in beeld te brengen, in een italic slab font.


| Voice 3 |
|---|
| ```font-family: "Brenner Slab";```
```font-style: Italic;```
```font-weight: 600;``` |

## Principes
### Exclusive design
Met dit project heb ik me gericht op mensen die doof zijn en heb daardoor geen rekening gehouden met mensen met andere behoeftes. Ik heb geprobeerd om het geluid zo visueel mogelijk weer te geven zodat mensen zonder gehoor ook van de film kunnen genieten.
#### Study Situation
Allereerst heb ik de video bekeken zonder geluid, dit gaf een goede indruk hoe mensen die doof zijn de video zullen gaan ervaren. De video was op dat moment erg saai om naar te kijken. Dit kwam doordat er visueel niet veel gebeurd. Daar moest ik dus wat aan veranderen, ik moest dingen toe gaan voegen.
#### Ignore Conventions

#### Prioritise Identity

#### Add Nonsense

## Eerste fragment 
Het eerste fragment begint met dat K aankomt bij de basis van zijn werk. In het schip waarin hij alleen zit maakt hij contact met de basis. Tijdens dit fragment gaan er verschillende lichten buiten het frame heen en weer, deze stellen het overige luchtverkeer voor. Verder zijn verschillende alarmen te horen, ieder uniek op zichzelf staand. Voor deze Alarmen heb ik ervoor gekozen om een border glow toe te voegen die de intensiteit van het alarm geluid representeert. Ook beweegt het frame van de video, deze bewegingen is gebaseerd op het gevoel die ik bij elk soort alarm kreeg.

Rond 24 seconde in de video begint er een piepgeluid die gedurende het grootste gedeelte van het eerste fragment steeds harder en irritanter wordt. Met 75.5s valt het geluid totaal weg, dit is het moment dat K het antwoord heeft gegeven op de laatste vraag van de ondervrager. Ik heb deze toon doormiddel van steeds groter en dikker wordende golven na proberen te bootsen, het aantal golven neemt toe naarmate de tijd verstrijkt en de piep aanweziger en irritanter wordt. De kleur van de golven varieert per golf en de golven die later verschijnen krijgen een steeds helderdere kleur. 

Tijdens het kijken naar de eerste baseline test kreeg ik een steeds groter wordend opdringerig overweldigend gevoel. Om dit gevoel over te brengen heb ik ervoor gekozen om het frame van de video gedurende de test geleidelijk groter te laten worden. Wanneer het geluid wegvalt met 75.5s verkleint het frame weer naar zijn oorspronkelijke formaat, doormiddel van een iets bouncende beweging. Ook heb ik met het formaat van de tekst van de ondervrager gespeeld, deze wordt gedurende de test steeds iets groter. Dit heb ik gedaan om de kijker een steeds iets overrompelender gevoel te geven.
Aan het einde van het fragment heb ik als overgang een blackdrop toegevoegd, zodat de fragmenten vriendelijker van elkaar worden gescheiden.


## Tweede fragment
Het tweede fragment begint met een kort beeld van de aankomst op de basis van ongeveer 2 seconde, daarna wordt er meteen begonnen met de baseline test. Op de achtergrond speelt een spannend geluidje af die aanhoudt tot het moment dat K het antwoord heeft gegeven op de laatste vraag van de ondervrager, dat is op 130 seconden. Om dit gevoel van spanning over te brengen heb ik ervoor gekozen om golven weer te geven op de achtergrond. Dit zijn ander soort golven dan de irritante piepgolven uit het eerste fragment, deze golven zijn rustiger en meer op de achtergrond. De golven gaan heen en weer en komen gedurende het deel steeds iets verder naar boven. Net als een emmer die zich langzaam vult, maar deze emmer wordt niet geheel gevuld. K slaagt namelijk niet voor de tweede test, daarom vallen de golven na de laatste vraag naar beneden.

Ook in het tweede deel is een milde piep te horen, deze is veel minder aanwezig dan in het eerste gedeelte. Daarom heb ik ervoor gekozen om deze niet extra te benadrukken. Ik heb deze piep nu als sterren in de lucht vormgegeven. Aanwezig maar niet zo irritant. De golven, die het spannende deuntje vertegenwoordigen, zijn sterker aanwezig.

De tekst is ook een soort gelijke manier vormgegeven als het eerste fragment. Al hoewel ik het tweede deel wat minder overrompelend vind, heb ik er toch voor gekozen om de plaatsing wel gelijk te houden om zo consistent te werk te gaan. Wel heb ik ervoor gekozen om de tekst niet steeds iets groter te maken zoals ik in het eerste deel wel deed. Ik ben gegaan voor een iets groter lettertype voor de ondervrager, dan als K. Dit heb ik tevens ook gedaan omdat er veel andere beelden worden getoond waardoor de sfeer ook erg anders is.

## Feedback
### Eerste feedback moment
Feedback van het eerste feedback moment:
Op het moment van deze feedback was ik vooral nog bezig geweest om de sfeer toe te passen.
-	Je hebt een goed begin gemaakt.
-	Ga meer naar de geluiden kijken.
-	Let erop dat de tekst op een logische plek staat

Na deze feedback te hebben gekregen heb ik nog verder gekeken naar de geluiden en deze proberen visueel weer te geven. Ook heb ik gekeken naar de tekst en welke plek ik deze het best passend vond.

### Tweede feedback moment
Feedback van het tweede feedback moment:
Op het moment van deze feedback had ik het eerste gedeelte na tevredenheid vormgegeven en had ik een begin gemaakt aan het tweede gedeelte (twee achtervolgende objecten en een kloppend borderglow). 
-	Het begin is erg bescheiden en ingetogen
-	De golven in het eerste fragment zijn niet irritant genoeg
-	Het mag allemaal wat meer
-	Ga nog eens beter kijken naar het tweede gedeelte.

Deze feedback nam ik serieus en ging nog eens goed kijken naar het eerste fragment. Ik had namelijk hiervoor het idee dat dat gedeelte zo goed als af was en wilde me eigenlijk voor de rest van de tijd focussen op het tweede gedeelte. Na hier nog een keer kritisch naar te hebben gekeken, kon ik me hier enigszins wel in vinden. Ik voegde nog wat extra elementen toe: bewegende lichten die het verkeer simuleren wanneer K in zijn (ruimte)schip/voertuig zit; verschillende bewegingen tijdens het afgaan van de alarmen; en het extra toevoegen van de piepgolven om het een extremer en irritanter gevoel mee te geven.
Verder heb ik het tweede gedeelte geheel opnieuw uitgedacht en een nieuw idee vormgegeven.

