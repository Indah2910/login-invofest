import { Building, Calendar, Clock, MapPin } from "lucide-react";
import Button from "../components/ui/Button";
import CardSpeaker from "../components/ui/SpeakerCard";
import Collapse from "../components/ui/Collapse";

const InfoBox = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 border-l-8 border-l-red-900 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-red-900 p-3 rounded-lg text-white">
      <Icon size={24} />
    </div>
    <span className="text-gray-700 font-semibold text-lg">{title}</span>
  </div>
);

export default function Talkshow() {
  const pembicara = [
    {
      nama: "Moh. Ichsan Maulana",
      role: "Human Capital Information System (HCIS), PT. Garuda Daya Pratama Sejahtera",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20ichsan.png",
    },
    {
      nama: "M. Zaim Zamzami",
      role: "Programmer, PT. Pertamina Drilling Service Indonesia",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20zaim%20zamzami.png",
    },
    {
      nama: "Daffa Zuhdan Muhtar",
      role: "Android Developer, PT. Astra Internasional ",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20daffa.png",
    },
    {
      nama: "Bayu Adi Prasetiyo",
      role: "Software Engineer, KOMPAS.ID",
      imageUrl:
        "https://www.invofest-harkatnegeri.com/assets/talkshow/talkshow%20bayu.png",
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
    <div>
      <section
        id="hero"
        className="py-10 flex gap-10 justify-between items-center"
      >
        <div className="w-2/3 flex flex-col gap-6">
          <h1 className="text-red-800 text-5xl font-bold">IT Talkshow</h1>
          <h2 className="text-4xl text-red-800 font-semibold italic">
            “Humanizing Technology: Kolaborasi Manusia dan AI di Masa Depan”
          </h2>

          <p className="text-xl">
            Talkshow “Humanizing Technology: Kolaborasi Manusia dan AI di Masa
            Depan” Sebuah diskusi interaktif yang mengeksplorasi cara
            mengintegrasikan nilai-nilai kemanusiaan seperti etika, empati, dan
            kreativitas ke dalam pengembangan kecerdasan buatan. yang bertujuan
            menginspirasi audiens untuk membangun dan memanfaatkan AI sebagai
            alat kolaboratif yang memperkuat potensi unik manusia, bukan sebagai
            penggantinya.
          </p>

          <div className="flex gap-3">
            <Button label="Daftar Sekarang" variant="primary" />
          </div>
        </div>

        <div className="w-1/3">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Talkshow.png"
            alt=""
          />
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center border-t border-gray-100 pt-16 mt-6 relative z-10">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Tentang IT TALKSHOW
        </h2>
        <div className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl mx-auto">
          <p>
            Seiring teknologi, khususnya kecerdasan buatan (AI), yang semakin
            meresap ke dalam setiap aspek kehidupan kita, muncul sebuah
            pertanyaan fundamental: Apakah kita sedang menciptakan teknologi
            yang melayani manusia, atau justru sebaliknya? Untuk menjawab
            pertanyaan tersebut, kami mempersembahkan talkshow berskala
            nasional: “Humanizing Technology: Kolaborasi Manusia dan AI di Masa
            Depan.” Acara ini dirancang bukan untuk membahas teknologi sebagai
            entitas yang dingin dan terpisah, melainkan untuk menggali bagaimana
            kita dapat menanamkan nilai-nilai kemanusiaan—seperti empati, etika,
            dan kreativitas—ke dalam inti pengembangan AI. Kami akan mengupas
            tuntas visi masa depan di mana AI tidak menjadi pesaing, tetapi
            menjadi mitra kolaboratif yang memperkuat potensi unik manusia.
          </p>
        </div>
      </section>

      <section id="pembicara" className="py-50">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Temui Pembicara Khusus Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10  px-3">
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

       <section className="max-w-6xl mx-auto px-6 py-30">
        <h2 className="text-red-900 text-4xl  py-10 font-bold mb-10 text-center">
          Pelaksanaan IT Talkshow
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoBox icon={Calendar} title="KSenin, 24 November 2025" />
          <InfoBox icon={Clock} title="08.00 WIB - 12.00 WIB" />
          <InfoBox icon={MapPin} title="Aula Gedung C" />
          <InfoBox
            icon={Building}
            title="Kampus 1 (Mataram) Universitas Harkat Negeri"
          />
        </div>
      </section>


      <section className="w-full bg-slate-50 py-16 lg:py-40 px-6 lg:px-12 relative z-10">
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