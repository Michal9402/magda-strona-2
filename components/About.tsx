import magdaImg1 from '../assets/img/magda1.jpeg'
export default function About() {
  return (
    <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-3">
      <div className="dummy absolute top-2/3 md:top-3/4" id="about"></div>
      <div className="my-auto md:col-span-2">
        <div className="mx-auto mb-20 flex flex-col items-center justify-center md:w-3/4">
          <h1 className="mt-5 mb-10 text-4xl font-bold">O mnie</h1>
          <h2 className="mt-5 text-3xl">Magdalena Kobylińska</h2>
          <p className=" mt-16 px-3 text-center md:text-left">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio eius
            numquam illum officia neque debitis autem sunt incidunt animi a
            vitae, inventore ex. Inventore, doloribus optio ratione eum nihil
            debitis? Necessitatibus atque assumenda ex. Illo tempora distinctio
            eius et velit cum est deserunt adipisci recusandae eligendi mollitia
            voluptas, unde aperiam nam, in soluta blanditiis suscipit itaque
            laudantium fugit deleniti ad! Minima cum mollitia beatae nemo porro,
            volupt
          </p>
        </div>
      </div>

      <div className=" my-auto px-5 ">
        <img className="rounded-full" src={magdaImg1.src} alt="magda" />
      </div>
    </div>
  )
}
