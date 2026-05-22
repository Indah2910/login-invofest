import Button from "../components/ui/Button";

export default function Competition () {
    return (
        <div>
           <section
                     id="hero"
                     className="py-10 flex gap-10 justify-between items-center "
                   >
                     <div className="w-2/3 flex flex-col gap-6">
                        <h1 className="text-4xl-800 text-5xl font-bold">IT Competition</h1>
                        <h2 className="text-4xl text-red-800 "></h2>
                       <img
                         src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
                         alt=""
                         className="w-96"
                       />
                       <p>
                         Invofest (Informatics Vocational Festival) adalah festival tahunan
                         yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
                         Indonesia dalam menghadapi era digital. Dengan mengusung tema
                         “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
                         Tomorrow ”.
                       </p>
           
                       <div className="flex gap-3">
                         <Button label="Info Selengkapnya" variant="primary" />
                         <Button label="Hubungi Panitia" variant="outline" />
                       </div>
                     </div>
                     <div className="w-1/3">
                       <img
                         src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
                         alt=""
                       />
                     </div>
                   </section>
        </div>
    )
}