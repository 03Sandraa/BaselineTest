# BaselineTest
Dit project bestaat uit videofragmenten van de baseline testen, uit de film Blade Runner 2049. Het geluid uit de fragmenten is visueel met behulp van HTML en CSS vormgegeven. Hierbij was het de bedoeling dat doven menden of mensen zonder geluid dezelfde beleving konden ervaren dan mensen die het geluid wel konden horen.

De video is opgedeeld in twee fragmenten: 
-	Het eerste fragment is het binnenkomen in een basis en de eerste baseline test uit de film. Het fragment duurt van 0s tot 87s, in totaal 87 seconde.
-	Het tweede fragment is de tweede baseline test uit de film en duurt van 87s tot 135s, in totaal 48 seconde.

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

## Eerste fragment 
Het eerste fragment begint met dat K aankomt bij de basis van zijn werk. In het schip waarin hij alleen zit maakt hij contact met de basis. Tijdens dit fragment gaan er verschillende lichten buiten het frame heen en weer, deze stellen het overige luchtverkeer voor. Verder zijn verschillende alarmen te horen, ieder uniek op zichzelf staand. Voor deze Alarmen heb ik ervoor gekozen om een border glow toe te voegen die de intensiteit van het alarm geluid representeert. Ook beweegt het frame van de video, deze bewegingen is gebaseerd op het gevoel die ik bij elk soort alarm kreeg.

Rond 24 seconde in de video begint er een piepgeluid die gedurende het grootste gedeelte van het eerste fragment steeds harder en irritanter wordt. Met 75.5s valt het geluid totaal weg, dit is het moment dat K het antwoord heeft gegeven op de laatste vraag van de ondervrager. Ik heb deze toon doormiddel van steeds groter en dikker wordende golven na proberen te bootsen, het aantal golven neemt toe naarmate de tijd verstrijkt en de piep aanweziger en irritanter wordt. De kleur van de golven varieert per golf en de golven die later verschijnen krijgen een steeds helderdere kleur. 

Tijdens het kijken naar de eerste baseline test kreeg ik een steeds groter wordend opdringerig overweldigend gevoel. Om dit gevoel over te brengen heb ik ervoor gekozen om het frame van de video gedurende de test geleidelijk groter te laten worden. Wanneer het geluid wegvalt met 75.5s verkleint het frame weer naar zijn oorspronkelijke formaat, doormiddel van een iets bouncende beweging. Ook heb ik met het formaat van de tekst van de ondervrager gespeeld, deze wordt gedurende de test steeds iets groter. Dit heb ik gedaan om de kijker een steeds iets overrompelender gevoel te geven.

