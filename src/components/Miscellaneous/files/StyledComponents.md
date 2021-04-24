# Styled Components

## Props i Styled Components

```
const ChevronStyled = styled(Chevron)`
color: ${(props) =>
    props.className === 'disabled'
        ? `${themes.color.navGra40}`
        : `${themes.color.navBla}`};
`;
```

Her begynner man på samme måte som alltid, med 'color:' fordi det er den stylingen man vil endre  
Den tar inn en lambda-metode: () => (Denne har implisitt return, siden den mangler krøllparantes: '() => foo' i stedet for '() => {return foo}' )  
Her blir 'color: () => red' tilsvarende 'color: red'  
Metoden er wrappet i ${} fordi man er inne i en streng  
Hele stylingen er en streng, men Intellij skjønner at dette er styling-greier, så det ser ut som vanlig kode, ikke bare grønn tekst

Alle Styled components er "vanlige" React-komponenter, og oppfører seg på samme måte, med props og barn. <StyledKomponent prop1="foo" prop2={myProps.bar} />

'props' er input til lambda-metoden, alle komponenter (inkludert en 'styled') har props (fordi dette er typescipt, har vi mer kontroll over hvilke props som finnes)  
Fordi man styler en Chevron, har man tilgang på Chevron-props  
Du kan se hvilke som finnes ved å sjekke mulig autocomplete, det skal matche det som står på design.nav.no  
(Man kan også se at det finnes en 'props.theme', den er global og kan brukes i alle styled komponenter)

className er en prop man sender inn av typen string, den sendes inn til komponenten som en helt vanlig prop  
Man bruker den til en vanlig ternary if-then-else  
Det som blir returnert av metoden er en streng med en fargekode som brukes som color

Det er også mulig å bruke interface, på lik linje med andre komponenter:

```
interface RowProps {
    topPadding?: boolean
    bottomPadding?: boolean
}

export const FlexRow = styled.div<RowProps>`
    padding-top: ${props => props.topPadding ? "2em" : "0"};
    padding-bottom: ${props => props.bottomPadding ? "2em" : "0"};
`;
```
