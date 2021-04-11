import React from "react";
import styled from "styled-components";
import { randomElementFromArray } from "../../utils/arrayUtils";
import { useEffect, useState } from "react";
import get from "../../network";

interface QuoteType {
  text: string;
  author: string;
}

const defaultQuotes: QuoteType[] = [
  {
    text: "An apple a day keeps the doctor away",
    author: "Some guy",
  },
];

const QuoteBox = styled.div`
  font-style: italic;
  font-size: min(2vw, 2em);

  p:first-child {
    margin-top: 5em;
  }

  p:last-child {
    :before {
      content: "- ";
    }
  }
`;

const Quote = () => {
  const [quotes, setQuotes]: [
    QuoteType[],
    (quotes: QuoteType[]) => void
  ] = useState(defaultQuotes);
  const quoteUrl = "https://type.fit/api/quotes";

  useEffect(() => {
    get(quoteUrl, setQuotes, defaultQuotes);
  }, []);

  const randomText = randomElementFromArray(quotes).text;
  const text = randomText ? randomText : defaultQuotes[0].text;

  const randomAuthor = randomElementFromArray(quotes).author;
  const author = randomAuthor ? randomAuthor : defaultQuotes[0].author;

  return (
    <QuoteBox>
      <p>{text}</p>
      <p>{author}</p>
    </QuoteBox>
  );
};

export default Quote;
