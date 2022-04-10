// HACK:(nus3) Reactをimportしたくない
import * as React from 'react'
import { PageProps, graphql } from 'gatsby'

import { Layout } from '../components/Layout'
import Seo from '../components/seo'
import OgpImage from '../images/ogp/ogp.png'

const loadImage = (src: string) => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image()

    function cleanup() {
      image.onload = null
      image.onerror = null
    }

    image.onload = () => {
      cleanup()
      resolve(image)
    }
    image.onerror = (err) => {
      cleanup()
      reject(err)
    }

    image.src = src
  })
}

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
  const title = `ゲッポー 2022年03月`

  React.useEffect(() => {
    const createCanvas = async () => {
      const elem = document.createElement('canvas')

      const dpr = window.devicePixelRatio || 1

      elem.width = WIDTH
      elem.height = HEIGHT

      const ctx = elem.getContext('2d')

      if (!ctx) return

      const image = await loadImage(OgpImage)
      ctx.drawImage(image, 0, 0, WIDTH, HEIGHT)

      ctx.scale(dpr, dpr)

      ctx.font = 'bold 40px Noto Sans JP'
      ctx.textAlign = 'left'
      ctx.fillStyle = '#4ECCA3'

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

      setSrc(elem.toDataURL())
    }

    createCanvas()
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
