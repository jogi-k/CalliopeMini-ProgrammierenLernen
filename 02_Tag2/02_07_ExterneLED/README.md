

# Externe LEDs ansteuern

## Nochmals: Spannungen (1)

Der Grund, warum wir uns überhaupt in den letzen Minuten/letzte halbe Stunde mit Elektronik-/Elektrotechnik-Grundlagen beschäftigt haben ist folgender:

Der Calliope hat schon sehr viele Dinge (die wir auch noch genauer anschauen werden) auf dem Board. Aber manchmal reicht das nicht und man will etwas an den Calliope anschliessen.

Und damit man dabei weder den Calliope noch das was man anschliesst, zerstört, haben wir ein paar Basis-Dinge gelernt.

## Nochmals: Spannungen (2)

- Wenn Spannung von Lieferant und Verbraucher nicht übereintsimmen, dann funktioniert es nicht.
- Wenn die Spannung vom Lieferanten höher ist als das, was der Verbraucher "verträgt", dann muss damit gerechnet werden, dass der Verbraucher kaputtgeht.
- Wenn die Spannung vom Lieferant kleiner ist, als das was der Verbraucher braucht/verträgt, dann ist i.A. der Schaden klein, es funktioniert einfach nicht!
- Wenn man an den falschen Stellen Kabel zusammenbringt, dann verursacht man enen Kurzschluss.
- Ein Kurzschluss führt dazu, dass viel Strom fliesst, was im guten Fall nur die Batterie erwärmt, im schlechten Fall geht dabei der Calliope kaputt oder die Batterie wird zu warm und fängt Feuer!

__Also Vorsicht !__

Wir werden nun also die Anschlüsse des Calliope ausprobieren.

## Das offizielle Calliope-Layout

So sieht das offizielle Layout des Calliope aus:  

![](pics/Calliope_mini_1.0_pinout_fin.jpg){height=80%}

\begin{tiny}
  (https://calliope-mini.github.io/assets/v10/img/Calliope\_mini\_1.0\_pinout\_fin.jpg)
\end{tiny}

## Fähigkeiten der Pins

Wenn man die Anschlüsse auf dem Calliope etwas genauer anschaut, dann sieht man an

- P0: Digital und Touch
- P1: Digital, Analog und Touch
- P2: Digital, Analog und Touch
- P3: Digital und Touch

## Pins als Ausgang oder Eingang

Wichtig ist an dieser Stelle:  
Die __Pins__ kann man vom Programm aus sowohl als __Ausgang__ schalten, d.h. wir können z.B, eine LED ein und ausschalten, als auch  kann man die __Pins__ als __Eingang__ schalten, sprich man kann vom Programm aus abfragen, ob von aussen eine Spannung angelegt wurde, ob der Eingang mit dem Finger berührt wurde und ähnliches.

## Externe LED ansteuern

Wir werden nun LEDs an die Anschlüsse anschliessen und schauen, ob wir die LEDs selbst ansteueren können.

![](pics/Calliope_Ausgepackt_Ports.png){height=50%}



## Die Ampel

![](pics/P1110317.JPG){height=70%}

So sieht unsere Ampel aus. Sie hat drei LEDs, die einzeln geschaltet werden können. Sie sind am Minus-Pol (=GND) verbunden

## Schaltbild



![](pics/schaltbild1.jpg){height=80%}

## Angeschlossen mit Krokos

![](pics/P1110318.JPG){height=80%}



## Menu : Fortgeschritten

![](pics/Selection_006.png){height=80%}





## Menu Pins 

![](pics/Selection_007.png){height=80%}



## Schreibe digitalen Wert

![](pics/Selection_008.png){height=80%}





## Ein einfacher Blinker 

![](pics/Selection_005.png){height=60%}

## Blinker abspeichern



![](pics/Selection_009.png){height=50%}

* Das Programm unter dem Namen : __BlinkenExtLED__ abspeichern
* Das Programm in den __Calliope laden__
* Geht's ?
* Auch mal die anderen LEDs testen 
* Gleicher Pin am Calliope, anderer an der LED





## Vollständige Ampel

![](pics/schaltbild2.jpg){height=80%}



## Volsständige Ampel mit Krokos

![](pics/P1110316.JPG){height=80%}





## Einfaches Ampel-Programm

![](pics/Selection_001.png){height=80%}

## Ampel-Programm speichern



![](pics/Selection_002.png){height=60%}

* Speichern unter dem Namen : __AmpelSchaltungSchweiz__
* In den __Calliope laden__



## Österreichische Ampel



Wer war schon mal in Österreich?   

Da sieht die Ampel-Schaltung ein kleines bisschen anders aus:



<https://www.youtube.com/watch?v=dnmarj_TWDc>



## Österreichische Ampel Programm

![](pics/Selection_003.png){height=80%}



## Österreichische Ampel speichern





![](pics/Selection_004.png){height=60%}

* Speichern unter dem Namen __AmpelSchaltungOesterreich__
* In den __Calliope laden__



## Lizenz/Copyright-Info

Für alle Bilder auf dieser Seite, soweit nicht unter dem Bild anders gekennzeichnet,  gilt:

- Autor: Jörg Künstner
- Lizenz: CC BY-SA 4.0

