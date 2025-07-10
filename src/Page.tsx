import React, { ReactNode } from "react";
import styled from "styled-components";

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

const MainContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Page = (pageProps: PageProps) => {
  const { title, children } = pageProps;

  return (
    <PageWrapper>
      <MainContent>
        <h1>{title}</h1>
        {children}
      </MainContent>
    </PageWrapper>
  );
};

export default Page;
