# Target \_blank

## Potensielt sikkerhetshull

Det er en potensiell sikkerhetsrisiko å bruke `<a target="_blank />` for å åpne lenker i ny fane/vindu. Men kun hvis siden man lenker til har ugler i mosen. Dette fordi siden som åpnes får tilgang til å endre din side gjennom `window.opener`, og kan f.eks. redirecte deg til en falsk side.

Løsningen: Legg på `rel="noopener noreferrer"`, da får ikke den nye siden informasjon om deg.

Man skal i teorien klare seg med kun rel="noreferrer", men det ser ut til at det likevel er vanlig å ta med både noreferrer og noopener.

[Medium-artikkel om saken](https://medium.com/@jitbit/target-blank-the-most-underestimated-vulnerability-ever-96e328301f4c)  
[StackOverflow-spørsmål om bruk av både noreferrer og noopener](https://stackoverflow.com/questions/57628890/why-people-use-rel-noopener-noreferrer-instead-of-just-rel-noreferrer)  
[HTML-spec](https://html.spec.whatwg.org/multipage/links.html#link-type-noopener)
