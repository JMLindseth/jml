import React, { ReactNode } from "react";
import styled from "styled-components";
import DocumentTitle from "react-document-title";
import NavigationBar from "./NavigationBar";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from "./components/Themes";
import { useDarkMode } from "./components/UseDarkmode";
import Toggle from "./components/Toggler";
import { GlobalStyles } from "./components/Globalstyle";
import GitHubLink from "./components/GitHubLink";

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

  const [theme, themeToggler, mountedComponent] = useDarkMode();
  const themeMode = theme === "light" ? lightTheme : darkTheme;

  if (!mountedComponent) return <div />;
  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <DocumentTitle title={fullTitle(title)}>
          <PageWrapper>
            <Header>
              <NavigationBar />
              <Toggle
                theme={theme as string}
                toggleTheme={themeToggler as () => void}
              />
              <GitHubLink />
            </Header>
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
