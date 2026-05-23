import Button from "../components/ui/Button";
import Collapse from "../components/ui/Collapse";

interface LombaCardProps {
  image: string;
  title: string;
  description: string;
}

const LombaCard: React.FC<LombaCardProps> = ({ image, title, description }) => (
  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 flex flex-col gap-4 group hover:shadow-xl transition-shadow duration-300">
    <div className="overflow-hidden h-60 w-full flex justify-center items-center">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
    </div>
    <div className="flex flex-col gap-2 grow">
      <h3 className="text-xl font-semibold text-gray-900 group-hover:text-red-900 transition-colors">
        {title}
      </h3>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
    <Button label="INFO SELENGKAPNYA" variant="primary" />
  </div>
);

export default function Competition() {
  const kompetisiList = [
    {
      image:
        "https://www.invofest-harkatnegeri.com/assets/competition-card/software_dev.png",
      title: "Poster Design Competition",
      description:
        "Poster Design Competition ini adalah kompetisi untuk menciptakan suatu karya dalam bentuk poster digital yang komunikatif dan inspiratif, guna menyuarakan gagasan atau solusi visual terhadap permasalahan yang ada sekarang ini.",
    },
    {
      image:
        "https://www.invofest-harkatnegeri.com/assets/competition-card/ui_ux.png",
      title: "UI/UX Design Competition",
      description:
        "UI/UX Design Competition ini adalah kompetisi untuk menciptakan dan merancang inovasi sebuah produk digital yang dapat berupa website maupun mobile apps serta dapat membuat nyaman calon pengguna.",
    },
    {
      image:
        "https://www.invofest-harkatnegeri.com/assets/competition-card/web_design.png",
      title: "Web Design Competition",
      description:
        "Web Design Competition ini adalah kompetisi untuk menciptakan suatu perangkat lunak berbasis website yang menggunakan desain menarik, unik, dan responsive pada semua device serta sesuai dengan tema kompetisi.",
    },
  ];

  const collapseItems = [
    {
      title: "Apa itu Invofest?",
      description:
        "Invofest (Informatics Vocational Festival) adalah festival tahunan yang bertujuan untuk menginspirasi dan memberdayakan generasi muda Indonesia dalam menghadapi era digital.",
    },
    {
      title: "Kapan dan di mana Infovest akan diselenggarakan?",
      description:
        "Invofest akan diselenggarakan pada tanggal 28-29 September 2025 di Universitas Harkat Negeri, Tegal.",
    },
    {
      title: "Siapa saja yang dapat mengikuti Infovest?",
      description:
        "Invofest terbuka untuk umum, terutama bagi pelajar dan mahasiswa yang tertarik dengan dunia teknologi.",
    },
    {
      title: "Apa saja kegiatan yang akan ada di Infovest?",
      description:
        "Infovest akan menghadirkan berbagai kegiatan menarik seperti kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan para ahli teknologi.",
    },
    {
      title: "Bagaimana cara mendaftar untuk Infovest?",
      description:
        "Untuk mendaftar Infovest, silakan kunjungi situs web resmi kami dan ikuti petunjuk pendaftaran yang tersedia.",
    },
    {
      title: "Apakah ada biaya pendaftaran untuk Infovest?",
      description:
        "Untuk informasi lebih lanjut mengenai biaya pendaftaran Infovest, silakan kunjungi situs web resmi kami.",
    },
  ];

  return (
    <div className="flex flex-col gap-20 py-10">
      <section
        id="hero"
        className="px-6 lg:px-12 flex flex-col md:flex-row gap-10 justify-between items-center max-w-7xl mx-auto"
      >
        <div className="md:w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Competition</h1>
          <h2 className="text-4xl text-red-900 font-semibold italic">
            "From Creation to Innovation"
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <strong>“From Creation to Innovation”</strong>. Tema ini bertujuan
            mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
            guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
            mewujudkan masa depan yang berkelanjutan.
          </p>
          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
            alt="Maskot Competition"
            className="w-full max-w-xs drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center border-t border-gray-100 pt-16 mt-6 relative z-10">
        <h2 className="text-red-900 text-4xl text-center mb-6 font-bold">
          DESKRIPSI KOMPETISI
        </h2>
        <div className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl mx-auto">
          <p>
            Kompetisi atau perlombaan yang ada dalam kegiatan{" "}
            <strong>INVOFEST (Infomatics Vocational Festival) 2025</strong>{" "}
            adalah diantaranya National Poster Design Competition, UI UX Design
            Competition, dan juga UI/UX Design Competition.
          </p>
          <p>
            Kompetisi dalam INVOFEST ini mengusung tema{" "}
            <strong>“From Creation to Innovation”</strong>. Tema ini bertujuan
            mengajak generasi muda untuk mengembangkan inovasi dan kreativitas
            guna membentuk kelompok yang memiliki potensi luar biasa, yang mampu
            mewujudkan masa depan yang berkelanjutan. Melalui pendekatan ini,
            diharapkan generasi ini akan berperan dalam menciptakan
            solusi-solusi baru untuk tantangan masa kini dan mendatang, baik
            dalam hal teknologi, lingkungan, pendidikan, maupun tanggung jawab
            sosial.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-12 py-16 bg-gray-50 rounded-3xl relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <div className="text-center flex flex-col gap-4 max-w-xl mx-auto">
            <h2 className="text-red-900 text-4xl text-center  font-bold">
              DAFTAR KOMPETISI
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Berikut Adalah Daftar Kompetisi Yang Ada Pada Event INVOFEST.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 mt-6">
            {kompetisiList.map((lomba, index) => (
              <LombaCard
                key={index}
                image={lomba.image}
                title={lomba.title}
                description={lomba.description}
              />
            ))}
          </div>
          <section className="w-full bg-slate-50 py-16 lg:py-24 px-6 lg:px-12 relative z-10">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-16">
                <p className="text-red-900 font-bold mb-4 text-[15px] uppercase tracking-widest">
                  FAQ
                </p>
                <h2 className="text-[32px] md:text-[40px] font-bold text-slate-800 mb-6 leading-tight">
                  Punya Pertanyaan? Lihat <br />
                  <span className="text-red-900">Disini</span>
                </h2>
                <p className="text-slate-500 text-[15px] md:text-[16px] max-w-xl mx-auto leading-relaxed">
                  Ada banyak informasi yang terkait dengan INVOFEST, Anda dapat
                  melihat daftar pertanyaan di bawah ini.
                </p>
              </div>
            </div>
            <div />
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
              {collapseItems.map((item, index) => (
                <Collapse
                  key={index}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </section>
        </div>
      </section>
    </div>
  );
}