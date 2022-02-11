import magdaImg1 from '../assets/img/IMG_9550.jpeg'

const About: React.FC = () => {
  return (
    <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
      <div className="dummy absolute top-2/3 md:top-3/4" id="about"></div>
      <div className="my-auto lg:col-span-2">
        <div className="mx-auto mb-20 flex flex-col items-center justify-center md:w-3/4">
          <h1 className="mt-5 mb-10 text-4xl font-bold">O mnie</h1>
          <h2 className="mt-5 text-center text-3xl">Magdalena Kobylińska</h2>
          <p className=" mt-16 px-3 text-center text-lg md:text-left">
            Jestem dyplomowanym kosmetologiem oraz linergistką. Prace zawodową
            rozpoczęłam w 2016r. Pracowałam w renomowanych klinikach na terenie
            Warszawy, specjalizując się w kosmetologii Hi-Tech. Wieloletnie
            doświadczenie zawodowe pozwoliło mi opracować autorskie techniki
            zabiegowe.
            <br />
            <br />
            Zapraszam na zabiegi oraz konsultacje do mojego gabinetu w
            <strong> Siedlcach</strong>.
            <br />
            <br /> Istnieje również możliwość realizacji wizyty w
            <strong> Warszawie</strong> na
            <strong> Mokotowie</strong> oraz <strong> Żoliborzu</strong> w
            gabinetach, z którymi współpracuję.
          </p>
        </div>
      </div>

      <div className=" mx-auto my-auto px-5">
        <img className=" rounded-full" src={magdaImg1.src} alt="magda" />
      </div>
    </div>
  )
}
export default About
