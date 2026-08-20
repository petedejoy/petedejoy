"use client"

import { useRef, useCallback } from "react"
import styles from "./BusinessCard.module.css"

// Cursor-tracked tilt + a raking light sweep across the cardstock, so the
// paper grain and letterpress edges catch the light the way they would if
// you were actually turning the card over in your hand.
const BusinessCard = () => {
  const cardRef = useRef(null)
  const frame = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current
    if (!card) return

    const rect = card.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    const px = x / rect.width
    const py = y / rect.height

    if (frame.current) cancelAnimationFrame(frame.current)
    frame.current = requestAnimationFrame(() => {
      const rotateY = (px - 0.5) * 14
      const rotateX = (0.5 - py) * 14
      card.style.setProperty("--rotate-x", `${rotateX}deg`)
      card.style.setProperty("--rotate-y", `${rotateY}deg`)
      card.style.setProperty("--mx", `${px * 100}%`)
      card.style.setProperty("--my", `${py * 100}%`)
      card.style.setProperty("--sheen-opacity", "1")
    })
  }, [])

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty("--rotate-x", "0deg")
    card.style.setProperty("--rotate-y", "0deg")
    card.style.setProperty("--sheen-opacity", "0")
  }, [])

  return (
    <div className={styles.stage}>
      <div
        ref={cardRef}
        className={styles.card}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className={styles.grain} />
        <div className={styles.sheen} />

        <div className={styles.row}>
          <span className={styles.corner}>Est. 2017</span>
          <span className={styles.companyBlock}>
            <span className={styles.company}>Astronomer, Inc.</span>
            <span className={styles.tagline}>Orchestration Company</span>
          </span>
        </div>

        <div className={styles.center}>
          <div className={styles.name}>Pete DeJoy</div>
          <div className={styles.title}>Lead SDR</div>
        </div>

        <div className={styles.bottom}>54 W 21st St, NYC</div>
      </div>
    </div>
  )
}

export default BusinessCard
