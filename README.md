# Calliope-Kurs

Dies ist die Sammlung von 

* Texten
* Programmen
* Bildern
* etc ...

für die Kurse in der Turbine Brunnen:  
<https://www.turbine-brunnen.ch>

Die Texte sind alle als Markdown abgespeichert, in allen Unterverzeichnissen jeweils als README.md.
Hier auf der Haupt-Übersichts-Seite ist das Gesamt-Verzeichnis in der Datei : GESAMTKURS.md  


Daraus entstehen per ```pandoc``` dann einerseits Folien im PDF-Format mit Hilfe von Latex-Beamer,  
andererseits auch direkt HTML-Seiten.  
Diese werden auf <http://www.calliope-jogi.org> gehostet.

Um aus diesem Repository die Folien / HTM-seiten zu generieren braucht es folgende Tools:

* Latex
* Beamer - Templates
* Das Metropolis-Beamer-Template
* pandoc ab Version xxx ( auf Debian Stretch ist es zu alt, ich arbeite mit Manjaro) 

Nach dem Clonen des Repos muss im Hauptverzeichnis das Tool:

* ```./generatemake``` aufgerufen werden, das generiert die ganzen Makefiles
* Anschliessend kann man entweder:

    * Auf dem top-levev ```./generatedocs``` aufrufen, das wandert durch die Verzeichnis-Struktur und macht die Folien/HTMLs via make. 
    * Oder in den jeweiligen Unter-Verzeichnissen einzeln make aufrufen

* Auf Tages-Ebene gibt es noch kein rekursives make, dass muss ich mal umstellen ...

Achtung, ausser 01_Tag1 und 09_Lehrer gibt es dabei für die HTML-Seiten noch Fehler, das korrigiere ich jeweils in der Vorbereitung für den nächsten Kurstag dann mit...

 

