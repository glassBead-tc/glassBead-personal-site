import { useEffect, useRef } from 'react'

export default function DigitalRain() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const context = canvas.getContext('2d')
    if (!context) return

    // Set canvas size to match window size
    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    // Matrix rain characters (katakana and some symbols)
    const chars = 'ｦｱｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ1234567890'.split('')
    
    const fontSize = 16
    const columns = canvas.width / fontSize
    
    // Array to store current y position of each column
    const drops: number[] = Array(Math.floor(columns)).fill(1)

    context.font = `${fontSize}px monospace`

    const draw = () => {
      // Semi-transparent black to create fade effect
      context.fillStyle = 'rgba(0, 0, 0, 0.05)'
      context.fillRect(0, 0, canvas.width, canvas.height)

      // Set color for matrix characters
      context.fillStyle = '#0F2'
      
      // Loop over drops
      drops.forEach((y, i) => {
        // Random character
        const char = chars[Math.floor(Math.random() * chars.length)]
        
        // Draw the character
        context.fillText(char, i * fontSize, y * fontSize)

        // Reset to top after hitting bottom
        if (y * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0
        }
        
        // Increment y coordinate
        drops[i]++
      })
    }

    // Animation loop
    const interval = setInterval(draw, 50)

    return () => {
      clearInterval(interval)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full opacity-10 pointer-events-none"
    />
  )
}
