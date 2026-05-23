import Button from "../components/ui/Button";
import Card from "../components/ui/Card";
import Collapse from "../components/ui/Collapse";

export default function Beranda() {
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
        "Untuk mendaftar Infovest, silakan kunjungi situs web resmi kami dan ikuti petunjuk pendaftaran yang tersedia."
    },
    {
      title: "Apakah ada biaya pendaftaran untuk Infovest?",
      description:
        "Untuk informasi lebih lanjut mengenai biaya pendaftaran Infovest, silakan kunjungi situs web resmi kami."
    },
  ];

  return (
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/text-image.png"
            alt=""
            className="w-96"
          />

          <p className="text-xl">
            Invofest (Informatics Vocational Festival) adalah festival tahunan
            yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
            Indonesia dalam menghadapi era digital. Dengan mengusung tema{" "}
            <strong>
              “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
              Tomorrow”
            </strong>
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
            className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
          />
        </div>
      </section>

      <section className="w-full  py-10 lg:py-20 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto">
          <div className="mb-14 max-w-5xl">
            <h2 className="text-[40px] md:text-[46px] font-semibold text-[#8b2551] mb-6 tracking-tight">
              Tentang <span className="font-bold">INVOFEST</span>
            </h2>
            <p className="text-slate-600/90 text-lg">
              Invofest 2025, yang diselenggarakan oleh sarjana terapan Teknik
              Informatika Universitas Harkat Negeri, adalah festival tahunan
              yang bertujuan untuk menginspirasi dan memberdayakan generasi muda
              Indonesia dalam menghadapi era digital. Dengan mengusung tema {""}
              <strong>
                “Beyond Limits, Beyond Intelligence: Innovate for a Smarter
                Tomorrow ”
              </strong>
              . Invofest 2025 menghadirkan berbagai kegiatan menarik seperti
              kompetisi IT, workshop IT, dan seminar nasional & talkshow dengan
              para ahli teknologi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            <Card>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                IT Seminar
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Seminar nasional ini membahas “Human-AI Integration: Merancang
                Arsitektur Kolaboratif, Bukan Kompetitif” untuk mengembangkan
                potensi diri dan pengetahuan teknologi lebih dalam lagi.
              </p>
              <Button label="INFO SELENGKAPNYA" />
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                IT Talkshow
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di
                Masa Depan” membahas peran manusia dalam memanfaatkan AI untuk
                solusi berkelanjutan dan peningkatan teknologi.
              </p>
              <Button label="INFO SELENGKAPNYA" />
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                IT Competition
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Kompetisi “From Creation to Innovation” mengajak generasi muda
                untuk mengembangkan inovasi dan kreativitas guna membentuk
                kelompok yang memiliki potensi luar biasa, yang mampu mewujudkan
                masa depan yang berkelanjutan.
              </p>
              <Button label="INFO SELENGKAPNYA" />
            </Card>

            <Card>
              <h3 className="text-lg font-semibold text-red-900 mb-2">
                IT Workshop
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Workshop 'AI for a Sustainable Future: The Role of Z Generation
                in the Digital Era' membekali Gen Z dengan keterampilan praktis
                AI untuk menciptakan solusi berkelanjutan.
              </p>
              <Button label="INFO SELENGKAPNYA" />
            </Card>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-2/3 flex flex-col gap-6 max-w-2xl">
            <h1 className="text-red-900 text-5xl font-bold">IT Seminar</h1>
            <p className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
              Seminar Nasional Teknologi Informasi ini mengangkat tema{" "}
              <strong className="text-slate-800 font-bold">
                "Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
                Kompetitif".
              </strong>{" "}
              Kami bertujuan untuk menggeser fokus dari ketakutan akan kompetisi
              menjadi eksplorasi peluang kolaborasi. Seminar ini akan mengupas
              tuntas bagaimana kita dapat merancang sistem, etika, dan
              lingkungan kerja di mana AI berfungsi sebagai mitra yang
              memperkuat kecerdasan, kreativitas, dan produktivitas
              manusia—bukan sebagai pengganti.
            </p>
            <Button label="DAFTAR IT SEMINAR" />
          </div>

          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative w-full max-w-[320px]">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
                alt=""
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-full max-w-105 h-full flex items-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full"></div>
              </div>
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
                alt="Maskot IT Talkshow"
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex-1 max-w-2xl flex flex-col justify-center">
            <h1 className="text-red-900 text-4xl md:text-5xl font-bold mb-6">
              IT Talkshow
            </h1>

            <p className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
              Talkshow berskala nasional:{" "}
              <strong>
                “Humanizing Technology: Kolaborasi Manusia dan AI di Masa
                Depan.”
              </strong>{" "}
              Acara ini dirancang bukan untuk membahas teknologi sebagai entitas
              yang dingin dan terpisah, melainkan untuk menggali bagaimana kita
              dapat menanamkan nilai-nilai kemanusiaan— seperti empati, etika,
              dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas
              tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi
              menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
              Talkshow ini bertujuan untuk menginspirasi generasi muda dan para
              penggiat teknologi untuk tidak hanya menjadi pengguna, tetapi juga
              menjadi arsitek masa depan digital yang lebih manusiawi. Mari
              bergabung untuk meningkatkan pengetahuan, mengembangkan potensi
              diri, dan menjadi bagian dari dialog penting dalam membentuk era
              kolaborasi manusia dan AI.
            </p>

            <Button label="DAFTAR IT TALKSHOW" />
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          <div className="w-2/3 flex flex-col gap-6 max-w-2xl">
            <h1 className="text-red-900 text-5xl font-bold">IT Workshop</h1>
            <p className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
              Workshop "AI for a Sustainable Future: The Role of Z Generation in
              the Digital Era” ini menjembatani antara potensi Generasi Z dan
              kekuatan AI untuk menciptakan masa depan yang berkelanjutan.
              Peserta akan dibekali wawasan dan alat untuk mentransformasi
              ide-ide inovatif menjadi solusi lingkungan yang nyata dan terukur
              di era digital.
            </p>
            <Button label="DAFTAR IT WORKSHOP" />
          </div>

          <div className="flex-1 flex justify-center items-center relative">
            <div className="relative w-full max-w-[320px]">
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Workshop.png"
                alt=""
                className="relative z-10 w-full h-auto drop-shadow-2xl hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="w-full py-16 lg:py-24 px-6 lg:px-12 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-stretch gap-12 lg:gap-20">
          <div className="flex-1 flex justify-center relative">
            <div className="relative w-full max-w-105 h-full flex items-center">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-72 h-72 bg-pink-500/20 blur-[100px] rounded-full"></div>
              </div>
              <img
                src="https://www.invofest-harkatnegeri.com/assets/Maskot-Lomba.png"
                alt=""
                className="relative z-10 w-full h-full object-contain drop-shadow-2xl transition duration-500 hover:scale-105"
              />
            </div>
          </div>

          <div className="flex-1 max-w-2xl flex flex-col justify-center">
            <h1 className="text-red-900 text-4xl md:text-5xl font-bold mb-6">
              IT Competition
            </h1>

            <p className="text-slate-600/90 text-[16px] md:text-[18px] leading-relaxed mb-8">
              <strong>"From Creation to Innovation"</strong> adalah sebuah
              kompetisi IT yang dirancang untuk menjembatani jurang antara ide
              kreatif dan inovasi nyata. Ajang ini menantang para talenta
              digital untuk tidak hanya menciptakan sesuatu yang baru, tetapi
              juga mengembangkannya menjadi solusi yang berdampak,
              berkelanjutan, dan bernilai guna tinggi.
            </p>

            <Button label="DAFTAR IT COMPETITION" />
          </div>
        </div>
      </section>

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
  );
}