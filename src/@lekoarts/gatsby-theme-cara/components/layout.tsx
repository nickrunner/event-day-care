import * as React from "react";
import { get } from "theme-ui";
import { MDXProvider } from "@mdx-js/react";
import { Global } from "@emotion/react";
import MdxComponents from "@lekoarts/gatsby-theme-cara/src/components/mdx-components";
import Header from "../../../header/Header";

type LayoutProps = { children: React.ReactNode; className?: string };

const Layout = ({ children, className = `` }: LayoutProps) => (
  <React.Fragment>
    <Header />
    <Global
      styles={(t) => ({
        "*": {
          boxSizing: `inherit`,
          "&:before": {
            boxSizing: `inherit`,
          },
          "&:after": {
            boxSizing: `inherit`,
          },
        },
        "[hidden]": {
          display: `none`,
        },
        "::selection": {
          backgroundColor: get(t, `colors.primary`),
          color: get(t, `colors.background`),
        },
      })}
    />
    <MDXProvider components={MdxComponents}>
      <main className={className}> {children}</main>
    </MDXProvider>
  </React.Fragment>
);

export default Layout;
