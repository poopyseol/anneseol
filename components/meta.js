import React from 'react'
import Head from 'next/head'

const Meta = ({
  title = 'Anne Seol',
  description = 'Designer based in Vancouver Canada',
  author = 'Anne SueYeun Seol',
}) => (
  <Head>
    <title>{title}</title>
    <meta charSet="UTF-8" />
    <meta name="description" content={description} />
    <meta name="author" content={author} />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link
      rel="preconnect"
      href="https://fonts.gstatic.com"
      crossOrigin="anonymous"
    />
    {/* <meta name='viewport' content='width=device-width, initial-scale=1.0, user-scalable=0, minimum-scale=1.0, maximum-scale=1.0'/> */}
    {/* <meta name='apple-mobile-web-app-capable' content='yes'/> */}
    {/* <meta name='apple-mobile-web-app-status-bar-style' content='black'/> */}
  </Head>
)

export default Meta
