import { FC, useEffect, useState } from 'react'
import styles from './styles.module.css'
import OgpImage from './ogp.png'

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

export const Ogp: FC = () => {
  const WIDTH = 1200
  const HEIGHT = 630
  const PADDING_TOP = 90
  const PADDING_LEFT = 20
  const LINE_HEIGHT = 1.5
  const TITLE_SIZE = 40

  const [src, setSrc] = useState<string | null>(null)

  // NOTE:(nus3) 毎回OGP作るときはここの文字を変えるっていう泥臭い運用なのヨ！
  const title = `2023年の活動を
LoLに例えてふりかえる`

  useEffect(() => {
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
    <section className={styles.wrapper}>
      {src && (
        <div className={styles.ogpCanvas}>
          <img alt="ogp" src={src} />
        </div>
      )}
    </section>
  )
}
