import Document, { Head, Main, NextScript } from 'next/document'
//global styling
import '../scss/style.scss'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name='viewport' content='width=device-width, initial-scale=1' />
          <meta charSet='utf-8' />
          <link rel='stylesheet' href='/_next/static/style.css' />
          <title>My page title</title>
        </Head>
        <body>
          <Main/>
          <NextScript />
        </body>
      </html>
    )
  }
}
