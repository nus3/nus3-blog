// HACK:(nus3) Reactをimportしたくない
import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'

const Ogp: React.FC<PageProps<GatsbyTypes.OgpQuery>> = ({ location, data }) => {
  const siteTitle = data?.site?.siteMetadata?.title || `Title`

  const WIDTH = 1200
  const HEIGHT = 630
  const PADDING_TOP = 90
  const PADDING_LEFT = 20
  const LINE_HEIGHT = 1.5
  const TITLE_SIZE = 40

  const [src, setSrc] = React.useState<string | null>(null)

  // NOTE:(nus3) 毎回OGP作るときはここの文字を変えるっていう泥臭い運用なのヨ！
  //   const title = `長いタイトル長いタイトル長い
  // タイトル長いタイトル長いタイ
  // トル長い`
  const title = `スタイリング確認用`

  React.useEffect(() => {
    const elem = document.createElement('canvas')

    const dpr = window.devicePixelRatio || 1

    elem.width = WIDTH
    elem.height = HEIGHT

    const ctx = elem.getContext('2d')

    if (!ctx) return

    ctx.scale(dpr, dpr)

    ctx.clearRect(0, 0, WIDTH, HEIGHT)
    ctx.fillStyle = '#222831'
    ctx.fillRect(0, 0, WIDTH, HEIGHT)

    ctx.font = 'bold 40px Noto Sans JP'
    ctx.textAlign = 'left'
    ctx.fillStyle = '#FFD369'

    const lines = title.split('\n')
    lines.forEach((line, index) => {
      if (index === 0) {
        ctx.fillText(line, PADDING_LEFT, PADDING_TOP)
        return
      }

      const paddingTop = TITLE_SIZE * LINE_HEIGHT * index + PADDING_TOP
      console.log(paddingTop)
      ctx.fillText(line, PADDING_LEFT, paddingTop)
    })

    // HACK:(nus3) ここを更新しないとフォントが当たらない問題
    ctx.font = '34px Lato'
    ctx.fillStyle = '#4ECCA3'
    ctx.fillText('nus3 Blog', 430, 280)

    setSrc(elem.toDataURL())
  }, [])

  return (
    <Layout location={location} title={siteTitle}>
      <Seo title="OGP" />
      <section className="flex flex-col pt-5">
        {src && (
          <div className="flex bg-bgHeader p-5">
            <img alt="ogp" src={src} />
          </div>
        )}
      </section>
    </Layout>
  )
}

export default Ogp

export const pageQuery = graphql`
  query Ogp {
    site {
      siteMetadata {
        title
      }
    }
  }
`
