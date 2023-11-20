import { useRouter } from 'next/router'
import type { DocsThemeConfig } from 'nextra-theme-docs'
import { useConfig } from 'nextra-theme-docs'

import * as React from "react"
import { SVGProps } from "react"
import { SearchDialog } from "@/components/SearchDialog"

const Logo = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={80} height={23.11} {...props}>
    <path
      fill="currentColor"
      d="M80 4.11h-4.41V.09H80v4.02ZM75.59 6.1H80v16.65h-4.41V6.09ZM60.38 9.64V6.1h13.16v3.62l-8.17 9.46h8.46v3.57H59.8v-3.39l8.25-9.71h-7.67ZM45.4 9.64V6.1h13.16v3.62l-8.17 9.46h8.46v3.57H44.82v-3.39l8.25-9.71H45.4ZM43.03 4.11h-4.41V.09h4.41v4.02ZM38.62 6.1h4.41v16.65h-4.41V6.09ZM35.84.02c.22.02.53.04.92.07v3.54c-.24-.03-.65-.05-1.23-.07-.58-.02-.97.11-1.19.38-.22.27-.33.57-.33.89v1.41h2.86v3.07h-2.86v13.43h-4.32V9.31h-2.44V6.24h2.38V5.17c0-1.78.3-3.01.9-3.68.63-1 2.15-1.5 4.57-1.5.27 0 .52 0 .75.02ZM25.3.02c.22.02.53.04.92.07v3.54c-.24-.03-.65-.05-1.23-.07-.58-.02-.97.11-1.19.38-.22.27-.33.57-.33.89v1.41h2.86v3.07h-2.86v13.43h-4.32V9.31h-2.44V6.24h2.38V5.17c0-1.78.3-3.01.9-3.68.63-1 2.15-1.5 4.57-1.5.27 0 .52 0 .75.02ZM4.46 6.09v10.04c0 .95.11 1.66.33 2.14.4.85 1.17 1.27 2.32 1.27 1.48 0 2.49-.6 3.04-1.8.28-.65.43-1.51.43-2.58V6.09h4.41v16.65h-4.23v-2.35c-.04.05-.14.2-.3.46-.16.25-.36.48-.58.67-.68.61-1.34 1.03-1.97 1.25-.63.22-1.38.34-2.23.34-2.46 0-4.11-.89-4.96-2.66-.48-.98-.72-2.42-.72-4.32V6.09h4.46Z" />
    <path
      d="M.78.51h13.29v2.74H.78z"
      style={{
        fill: "#fed626",
      }}
    />
  </svg>
)

const config: DocsThemeConfig = {
  project: {
    link: 'https://github.com/UffizziCloud/uffizzi'
  },
  chat: {
    link: "https://join.slack.com/t/uffizzi/shared_invite/zt-24toel26u-4JB2pLqdUnrt2qJcWoLcDA",
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" strokeWidth="2" stroke="currentColor"><rect width="3" height="8" x="13" y="2" rx="1.5" /><path d="M19 8.5V10h1.5A1.5 1.5 0 1 0 19 8.5" /><rect width="3" height="8" x="8" y="14" rx="1.5" /><path d="M5 15.5V14H3.5A1.5 1.5 0 1 0 5 15.5" /><rect width="8" height="3" x="14" y="13" rx="1.5" /><path d="M15.5 19H14v1.5a1.5 1.5 0 1 0 1.5-1.5" /><rect width="8" height="3" x="2" y="8" rx="1.5" /><path d="M8.5 5H10V3.5A1.5 1.5 0 1 0 8.5 5" /></svg>
    )
  },
  docsRepositoryBase: 'https://github.com/UffizziCloud/documentation/tree/main',
  useNextSeoProps() {
    const { asPath } = useRouter()
    if (asPath !== '/') {
      return {
        titleTemplate: '%s – Uffizzi'
      }
    }
  },
  logo: Logo,
  head: function useHead() {
    const { title } = useConfig()
    const { route } = useRouter()
    const socialCard = 'https://github.com/gadkins/docs/blob/main/public/images/og.png'

    return (
      <>
        <meta name="msapplication-TileColor" content="#fff" />
        <meta name="theme-color" content="#fff" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Language" content="en" />
        <meta
          name="description"
          content="Build developer platforms in minutes, not months."
        />
        <meta
          name="og:description"
          content="Build developer platforms in minutes, not months."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={socialCard} />
        <meta name="twitter:site:domain" content="uffizzi.com" />
        <meta name="twitter:url" content="https://uffizzi.com" />
        <meta
          name="og:title"
          content={title ? title + ' – Uffizzi' : 'Uffizzi'}
        />
        <meta name="og:image" content={socialCard} />
        <meta name="apple-mobile-web-app-title" content="Uffizzi" />
        <link rel="icon" href="/images/favicon.svg" type="image/svg+xml" />
        <link rel="icon" href="/images/favicon.png" type="image/png" />
        <link
          rel="icon"
          href="/favicon.svg"
          type="image/svg+xml"
          media="(prefers-color-scheme: dark)"
        />
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          media="(prefers-color-scheme: dark)"
        />
      </>
    )
  },
  search: {
    component: SearchDialog,
    emptyResult: "No results found",
    error: "An error occurred",
    loading: "Loading...",
    placeholder: "Search..."
  },
  editLink: {
    text: 'Edit this page on GitHub →'
  },
  feedback: {
    content: 'Question? Give us feedback →',
    labels: 'feedback'
  },
  sidebar: {
    titleComponent({ title, type }) {
      if (type === 'separator') {
        return <span className="cursor-default">{title}</span>
      }
      return <>{title}</>
    },
    defaultMenuCollapseLevel: 1,
    toggleButton: false,
  },
  primaryHue: 198,
  primarySaturation: 8,
  banner: {
    key: 'k8s-testing',
    text: (
      <a href="/testing/ingress-nginx">
        ⚡️ <strong>Achieving 6x faster tests</strong> ⚡️ Learn how to accelerate e2e testing with virtual clusters →
      </a>
    )
  },
  footer: {
    text: (
      <div className="flex w-full flex-col items-center sm:items-start">
        <div>
          <a
            className="flex items-center gap-1 text-current"
            target="_blank"
            rel="noopener noreferrer"
            title="uffizzi.com homepage"
            href="https://uffizzi.com"
          >
          </a>
        </div>
        <p className="mt-6 text-xs">
          © {new Date().getFullYear()} Uffizzi
        </p>
      </div>
    )
  },
  nextThemes: {
    defaultTheme: 'dark',
  },
  toc: {
    backToTop: true
  }
}

export default config