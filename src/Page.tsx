import styled from 'styled-components';
import DocumentTitle from "react-document-title";
import NavigationBar from "./NavigationBar";

interface PageProps {
  title?: string;
  children?: any;
}

const PageWrapper = styled.div`
  display: grid;
  justify-content: center;
`

const fullTitle = (title?: string) => {
  return title
    ? `${title} - JM Lindseth`
    : 'JM Lindseth';
}

const Page = (pageProps: PageProps) => {
  const {title, children} = pageProps;
  return (
    <>
      <DocumentTitle
        title={fullTitle(title)}
      >
        <PageWrapper>
          <NavigationBar/>
          <div>
            {children}
          </div>
        </PageWrapper>
      </DocumentTitle>
    </>
  )
}

export default Page;
