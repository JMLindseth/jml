import React, { ReactNode } from "react";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import { darkTheme } from "./components/Themes";
import { GlobalStyles } from "./components/Globalstyle";

interface PageProps {
  title?: string;
  children?: ReactNode;
}

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  display: flex;
  flex-direction: row;
`;

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const fullTitle = (title?: string) => {
  return title ? `${title} - JM Lindseth` : "JM Lindseth";
};

const Page = (pageProps: PageProps) => {
  const { title, children } = pageProps;

  return (
    <ThemeProvider theme={darkTheme}>
      <>
        <GlobalStyles />
        <PageWrapper>
          <MainContent>
            <h1>{title}</h1>
            {children}
          </MainContent>
        </PageWrapper>
      </>
    </ThemeProvider>
  );
};

export default Page;
