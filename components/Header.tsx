import pieknoMobileImg from '../assets/img/piekno-header-mobile.jpeg'
export default function Header() {
  return (
    <header className="h-[60vh] sm:h-[80vh]">
      <div
        className=" h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${pieknoMobileImg.src})`,
        }}
      ></div>
    </header>
  )
}
