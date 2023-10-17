/**
 * Background component for rendering a background with wave images.
 *
 * @returns {JSX.Element} JSX element representing the background with wave images.
 */
const Background = () => {
  return (
    <section className="absolute w-full h-screen overflow-hidden z-[-1]">
    <article className="absolute top-0 left-0 w-full h-[100px] bg-[length:1000px_100px] transform rotate-180" style={
      {
        backgroundImage: "url('/wave.png')",
      }
    }></article> {/* top-wave */}
    <article className="absolute bottom-0 left-0 w-full h-[100px] bg-[length:1000px_100px]" style={
      {
        backgroundImage: "url('/wave.png')",
      }
    }></article> {/* bottom-wave */}
  </section>
  )
}

export default Background