import Header from "../components/Header";
import Button from "../components/ui/Button";
import CardSpeaker from "../components/ui/SpeakerCard";
import Collapse from "../components/ui/Collapse";
import Card from "../components/ui/Card";

interface Pembicara {
  nama: string;
  role: string;
  imageUrl: string;
}

function App() {
  const pembicara: Pembicara[] = [
    {
      nama: "Dery Agung Triyadi",
      role: "AWS Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/Seminar%20Dery.png",
    },
    {
      nama: "Sowam Habibi",
      role: "Google Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/seminar/seminar%20sowam.png",
    },
    {
      nama: "Lhuqita Fazry",
      role: "Mobile Development Developer, Founder Rumah Coding Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/workshop/workshop%20mobile.png",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana Invofest akan diselenggarakan?",
      description:
        "Invofest akan diselenggarakan pada tanggal 28-29 September 2025 di Universitas Harkat Negeri, Tegal.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Invofest?",
      description:
        "Invofest terbuka untuk umum, terutama bagi pelajar dan mahasiswa yang tertarik dengan dunia teknologi.",
    },
  ];

  const cardItems = [
    {
      title: "IT Seminar",
      description:
        "Seminar nasional ini membahas “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan potensi diri dan pengetahuan teknologi lebih dalam lagi.",
    },
    {
      title: "IT Talkshow",
      description:
        "Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk solusi berkelanjutan dan peningkatan teknologi.",
    },
    {
      title: "IT Competition",
      description:
        "Kompetisi “From Creation to Innovation” mengajak generasi muda untuk mengembangkan inovasi dan kreativitas guna membentuk kelompok yang memiliki potensi luar biasa.",
    },
    {
      title: "IT Workshop",
      description:
        "Workshop 'AI for a Sustainable Future: The Role of Z Generation in the Digital Era' membekali Gen Z dengan keterampilan praktis AI untuk menciptakan solusi berkelanjutan.",
    },
  ];

  const pelaksanaanList = [
    {
      title: "Mobile Development",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
    {
      title: "Artificial Intelligence",
      date: "Selasa, 25 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.2",
    },
    {
      title: "Cyber Security",
      date: "Rabu, 26 November 2025",
      time: "08.00 WIB - 16.30 WIB",
      location: "Lab Kom D.1",
    },
  ];

  return (
    <>
      <Header />

      <div className="max-w-7xl mx-auto px-4">
        {/* HERO */}
        <section
          id="hero"
          className="py-10 flex flex-col lg:flex-row gap-10 justify-between items-center"
        >
          <div className="lg:w-2/3 flex flex-col gap-6">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
              alt="Invofest"
              className="w-96"
            />

            <p className="text-gray-700 leading-8">
              Invofest (Informatics Vocational Festival) adalah festival
              tahunan yang bertujuan untuk menginspirasi dan memberdayakan
              generasi muda Indonesia dalam menghadapi era digital. Dengan
              mengusung tema “Beyond Limits, Beyond Intelligence: Innovate for
              a Smarter Tomorrow”.
            </p>

            <div className="flex gap-3">
              <Button label="Info Selengkapnya" variant="primary" />
              <Button label="Hubungi Panitia" variant="outline" />
            </div>
          </div>

          <div className="lg:w-1/3">
            <img
              src="https://www.invofest-harkatnegeri.com/assets/Maskot-Hero.png"
              alt="Maskot"
            />
          </div>
        </section>

        {/* SPEAKER */}
        <section id="pembicara" className="py-24">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">
            Pembicara
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {pembicara.map((item, index) => (
              <CardSpeaker
                key={index}
                nama={item.nama}
                role={item.role}
                imageUrl={item.imageUrl}
              />
            ))}
          </div>
        </section>

        {/* EVENT CARDS */}
        <section
          id="cards"
          className="py-24 grid grid-cols-1 md:grid-cols-2 gap-10"
        >
          {cardItems.map((item, index) => (
            <Card key={index} className="w-full">
              <h3 className="text-2xl text-red-900 mb-4 font-bold">
                {item.title}
              </h3>

              <p className="text-gray-700 leading-7">
                {item.description}
              </p>

              <Button
                label="Info Selengkapnya"
                variant="primary"
                className="mt-4"
              />
            </Card>
          ))}
        </section>

        {/* WORKSHOP */}
        <section className="py-24">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-12">
            Pelaksanaan IT Workshop
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pelaksanaanList.map((item, index) => (
              <Card key={index} className="w-full">
                <h3 className="text-2xl font-bold text-red-900 mb-4">
                  {item.title}
                </h3>

                <div className="flex flex-col gap-2 text-gray-700">
                  <p>
                    <span className="font-semibold">Tanggal:</span>{" "}
                    {item.date}
                  </p>

                  <p>
                    <span className="font-semibold">Waktu:</span>{" "}
                    {item.time}
                  </p>

                  <p>
                    <span className="font-semibold">Lokasi:</span>{" "}
                    {item.location}
                  </p>
                </div>

                <Button
                  label="Daftar Sekarang"
                  variant="primary"
                  className="mt-4"
                />
              </Card>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="py-24 flex flex-col gap-4">
          <h2 className="text-4xl font-bold text-red-900 text-center mb-10">
            Frequently Asked Questions
          </h2>

          {collapseItems.map((item, index) => (
            <Collapse
              key={index}
              title={item.title}
              description={item.description}
            />
          ))}
        </section>
      </div>
    </>
  );
}

export default App;