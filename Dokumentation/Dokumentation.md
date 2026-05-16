# Dokumentation: Schedule Manager

## Einleitung

Das Ziel dieses Projekts ist die Planung und Entwicklung eines Softwaresystems zur Verwaltung eines Fitnessstudio-Netzwerks namens „Fit & Aktiv“. Das aktuelle System basiert auf manueller Planung, was zu Terminfehlern, ineffizientem Zeitmanagement und Schwierigkeiten bei kurzfristigen Änderungen führt.

Das Hauptziel dieser Software besteht darin, den Planungsprozess für Kurse, Trainer, Räume und Kunden zu automatisieren und zu vereinfachen. Das System soll menschliche Fehler reduzieren, die Kommunikation verbessern und eine effiziente Ressourcenplanung gewährleisten.

Das System unterstützt drei Hauptbenutzerrollen: Administrator, Trainer und Kunde. Es ermöglicht Kursplanung, Buchungsverwaltung, Nachverfolgung der Trainerverfügbarkeit und die automatische Behandlung von Terminüberschneidungen.

---

## Funktionale Anforderungen

### F1: Trainerverwaltung

· F1.1: Standort der Trainer verfolgen  
· F1.2: Stundenplan/Zeitplan der Trainer anzeigen  
· F1.3: Arbeitsstunden der Trainer verfolgen  

### F2: Arbeitsstunden

· F2.1: Gesamtarbeitsstunden berechnen  
· F2.2: Erfassen, ob Trainer eingestempelt haben (optional)  
· F2.3: 1 Stunde Reisezeit in die Arbeitszeitberechnung einbeziehen  

### F3: Planung

· F3.1: Trainer automatisch zu Beginn jeder Woche zuweisen  
· F3.2: Ersatztrainer automatisch zuweisen, wenn ein Trainer krank ist  
· F3.3: Schichttausch (optional)  
· F3.4: Trainer können Änderungen am Zeitplan anfordern, wenn sie mit den zugewiesenen Schichten unzufrieden sind  
· F3.5: Bevorzugte Arbeitszeiten (optional)  
· F3.6: Trainer können bestimmte Tage blockieren, an denen sie nicht arbeiten möchten  

### F4: Übersicht

· F4.1: 1-Wochen-Zeitplanübersicht  

### F5: Buchungssystem

F5.1: Kursbuchung für Kunden  
· F5.2: Kunden können Kurse buchen  
· F5.3: Unbegrenzte Buchungen erlaubt  
· F5.4: Kunden können nicht zwei Kurse gleichzeitig buchen  
· F5.5: Buchungen können storniert werden  
· F5.6: Maximal 20 Teilnehmer pro Kurs  

### F6: Benachrichtigungen

· F6.1: Kunden benachrichtigen, wenn ein Kurs abgesagt oder verschoben wird  
· F6.2: Benachrichtigung per E-Mail  
· F6.3: Echtzeitbenachrichtigungen (optional)  

### F7: KI-Assistent (Optional)

· F7.1: Kleiner KI-Assistent für Kunden  
· F7.2: Kann Kunden unterstützen und Fragen oder Probleme beantworten  

### F8: Kalender

· F8.1: Kleiner Kalender für jeden Raum und Trainer  
· F8.2: Anzeige von Reservierungen und Arbeitsplänen  

### F9: Login-System

F9.1: Benutzerrollen:  
· F9.1: Administrator  
· F9.2: Trainer  
· F9.3: Kunden  

## Nichtfunktionale Anforderungen

### NF1: Leistung

· NF1.1: Unterstützung für mehr als 300 Kunden  
· NF1.2: Verwaltung von mehr als 100 Mitarbeitern/Trainern  

### NF2: Planungsbeschränkungen

· NF2.1: Maximale Arbeitsstunden pro Woche durchsetzen  
· NF2.2: Keine sich überschneidenden Schichten  
· NF2.3: Fähigkeitsabgleich (Trainer → Kurstyp)  

### NF3: Sicherheit

· NF3.1: Sicherer Login mit Passwörtern für alle Benutzer  
· NF3.2: Kundendaten sollen sicher gespeichert werden  

### NF4: Benutzerfreundlichkeit

· NF4.1: Das System soll für technisch unerfahrene Benutzer einfach zu bedienen sein  

### NF5: Verfügbarkeit

· NF5.1: Das System soll rund um die Uhr verfügbar sein  

### NF6: Wartbarkeit

· NF6.1:Der Code soll modular und leicht wartbar sein  

### NF7: Webseite

· NF7.1: Einfache Webseite mit Login-Zugangsdaten  

---

## Use Cases

### Akteure

· Administrator / Management  
· Trainer  
· Kunde (Mitglied)  
· System (Automatisierte Prozesse)  

### 1. Administrator / Management

Der Administrator ist für die Gesamtverwaltung des Fitnessstudio-Systems verantwortlich.
 
### Hauptaufgaben

· Kurse erstellen, bearbeiten und löschen  
· Trainer Kursen zuweisen  
· Räume Kursen zuweisen  
· Wochenpläne verwalten und aktualisieren  
· Ersatztrainer bei Abwesenheit zuweisen  
· Besondere Veranstaltungen planen (z. B. Firmenkurse, Probestunden)  
· Kurse absagen oder verschieben  
· Gesamten Systembetrieb überwachen  

### 2. Trainer

Der Trainer verwaltet seine Verfügbarkeit und nimmt an zugewiesenen Kursen teil.

### Hauptaufgaben

· Persönliche Verfügbarkeit festlegen und aktualisieren  
· Zugewiesene Arbeitspläne und Kurse anzeigen  
· Zeitplanänderungen in Echtzeit anzeigen  
· Zugewiesene Kurse akzeptieren oder ablehnen (optional)  
· Ersatzkurse übernehmen, falls erforderlich  
· Nach dem zugewiesenen Zeitplan arbeiten  

### 3. Kunde (Mitglied)

Kunden nutzen das System, um ihre Kursteilnahme zu buchen und zu verwalten.

### Hauptaufgaben

· Verfügbare Kurse buchen  
· Buchungen stornieren  
· Wöchentlichen Kursplan anzeigen  
· Benachrichtigungen über Änderungen oder Absagen erhalten  
· Überschneidende Kursbuchungen automatisch verhindern  
· Verfügbare Kurse und Zeitpläne anzeigen  

### 4. System (Automatisierte Funktionen)

Das System übernimmt automatische Prozesse zur Unterstützung von Planung und Verwaltung.

### Hauptaufgaben

· Planungskonflikte erkennen und verhindern (Zeit-, Trainer- und Raumüberschneidungen)  
· Maximale Teilnehmerzahl pro Kurs automatisch durchsetzen  
· Ersatztrainer bei Abwesenheit vorschlagen  
· Ersatztrainer automatisch zuweisen, wenn möglich  
· Kurse absagen, wenn kein Ersatz verfügbar ist  
· Benutzer über Änderungen oder Absagen benachrichtigen  
· Echtzeitaktualisierungen von Zeitplanänderungen sicherstellen  

### Zusammenfassung der Use Cases

Das System basiert auf vier Hauptakteuren: Administrator, Trainer, Kunde und System. Jeder Akteur hat spezifische Aufgaben, um eine effiziente Planung, Buchung und Ressourcenverwaltung sicherzustellen. Das System konzentriert sich auf Automatisierung, Konfliktvermeidung und Echtzeitaktualisierungen, um manuellen Aufwand und Fehler zu reduzieren.

---
## Datenmodell

### Trainer

· trainerId  
· name  
· email  
· phoneNumber  
· skills  
· workingHours  
· availability  

### Kunde

· customerId  
· name  
· email  
· phoneNumber  
· bookedClasses  

### Kurs

· courseId  
· trainerId  
· title  
· roomNumber  
· classTime  
· startDate  
· endDate  
· maxParticipants  

### Beziehungen

· Ein Trainer kann mehrere Kurse unterrichten  
· Jeder Kurs kann nur einen zugewiesenen Trainer haben  
· Ein Kunde kann mehrere Buchungen erstellen  
· Jede Buchung gehört zu genau einem Kunden  
· Ein Kurs kann mehrere Buchungen haben  
· Jede Buchung gehört zu genau einem Kurs  
· Ein Raum kann mehrere Kurse hosten  
· Jeder Kurs findet in genau einem Raum statt  

### Systemlogik

· Ein Trainer kann nicht gleichzeitig zwei Kurse haben  
· Ein Kurs darf die maximale Teilnehmerzahl von 20 Personen nicht überschreiten  
· Wenn ein Trainer nicht verfügbar ist, soll das System automatisch nach einem Ersatz suchen  
· Wenn kein Ersatz verfügbar ist, muss der Kurs abgesagt werden  
· Kunden dürfen keine sich überschneidenden Kurse buchen  
· Alle Zeitplanänderungen müssen in Echtzeit aktualisiert werden  
· Die Verfügbarkeit der Trainer muss bei der Planung immer berücksichtigt werden  

---

## Klassendiagramm (Textversion)

### Klassen

### Trainer

· trainerId  
· name  
· email  
· skills  
· availability  

### Kunde

· customerId  
· name  
· email  
· bookedClasses  

### Kurs

· courseId  
· title  
· time  
· room  
· maxParticipants  
· trainerId  

### Buchung

· bookingId  
· customerId  
· courseId  

### Raum

· roomId  
· name  
· capacity  

### Beziehungen

· Trainer → Kurs (1 zu viele)  
· Kurs → Buchung (1 zu viele)  
· Kunde → Buchung (1 zu viele)  
· Kurs → Raum (mehrere Kurse pro Raum)  

---

## Benutzeroberflächendesign

Das System bietet eine einfache und intuitive Weboberfläche für technisch unerfahrene Benutzer.

· Eine Login-Seite ermöglicht Benutzern den Zugriff basierend auf ihrer Rolle  
· Ein Administrator-Dashboard bietet volle Kontrolle über Kurse, Trainer und Planung  
· Ein Trainer-Dashboard zeigt zugewiesene Kurse und Verfügbarkeitseinstellungen  
· Ein Kunden-Dashboard ermöglicht Kursbuchungen und Zeitplanansicht  
· Eine Kalenderansicht zeigt Wochenpläne für Räume, Trainer und Kurse  
· Buchungsaktionen können mit wenigen Klicks abgeschlossen werden  

---

## Systemarchitektur / Tech Stack

· Next.js → Webseite / Webanwendung  
· Firebase Auth → Login und Authentifizierung  
· Firestore → Echtzeit-Datenbank  
· Cloud Functions → Automatische Zuweisung und Automatisierungslogik  
· Firebase Hosting / Vercel → Deployment  
· React Native / Expo → Mobile App (optional)  

---

## Systemtests

### Trainersimulation

Simulation der automatischen Zuweisung für 101 Trainer

· Überprüfung der Arbeitszeitberechnung  
· Überprüfung der bevorzugten Arbeitszeitbeschränkungen  

### Kundensimulation

Simulation von Buchungen für 301 Kunden

· Überprüfung von Kursüberfüllung  
· Maximal 20 Personen pro Kurs  
· Sicherstellen, dass Kunden keine überschneidenden Kurse buchen können  

### Vertretungstest

Simulation einer Krankmeldung eines Trainers

· Überprüfen, ob die automatische Vertretung funktioniert  
· Überprüfen, ob Kundenbenachrichtigungen gesendet werden  

---

## Fazit

Dieses System bietet eine automatisierte Lösung für die Verwaltung von Fitnessstudio-Abläufen. Es reduziert den manuellen Planungsaufwand, verhindert Terminüberschneidungen und verbessert die Kommunikation zwischen Trainern, Kunden und Verwaltung. Das Design konzentriert sich auf Benutzerfreundlichkeit, Skalierbarkeit und Automatisierung, um eine effiziente Verwaltung eines wachsenden Fitnessunternehmens sicherzustellen.
