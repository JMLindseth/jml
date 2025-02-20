import React, { ReactNode } from "react";
import styled from "styled-components";
import DocumentTitle from "react-document-title";
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
        <DocumentTitle title={fullTitle(title)}>
          <PageWrapper>
            <MainContent>
              <h1>{title}</h1>
              {children}
            </MainContent>
          </PageWrapper>
        </DocumentTitle>
      </>
    </ThemeProvider>
  );
};

export default Page;
