import Button from "../components/ui/Button";
import CardSpeaker from "../components/ui/SpeakerCard";
import { Calendar, Clock, MapPin, Building } from "lucide-react";
import Collapse from "../components/ui/Collapse";

const InfoBox = ({ icon: Icon, title }: { icon: any; title: string }) => (
  <div className="flex items-center gap-4 bg-white p-5 rounded-xl border border-gray-100 border-l-8 border-l-red-900 shadow-sm hover:shadow-md transition-all duration-300">
    <div className="bg-red-900 p-3 rounded-lg text-white">
      <Icon size={24} />
    </div>
    <span className="text-gray-700 font-semibold text-lg">{title}</span>
  </div>
);

export default function Seminar() {
  const pembicara = [
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
        "Untuk mendaftar Infovest, silakan kunjungi situs web resmi kami dan ikuti petunjuk pendaftaran yang tersedia."
    },
    {
      title: "Apakah ada biaya pendaftaran untuk Infovest?",
      description:
        "Untuk informasi lebih lanjut mengenai biaya pendaftaran Infovest, silakan kunjungi situs web resmi kami."
    },
  ];

  return (
    <div className="flex flex-col gap-20 py-10">
      <section
        id="hero"
        className="px-6 lg:px-12 flex flex-col md:flex-row gap-10 justify-between items-center max-w-7xl mx-auto"
      >
        <div className="md:w-2/3 flex flex-col gap-6">
          <h1 className="text-red-900 text-5xl font-bold">IT Seminar</h1>
          <h2 className="text-4xl text-red-900 font-semibold italic">
            “Human-AI Integration: Merancang Arsitektur Kolaboratif, Bukan
            Kompetitif”
          </h2>
          <p className="text-xl text-gray-700 leading-relaxed">
            Seminar nasional yang membahas strategi dan arsitektur teknologi
            untuk menciptakan sistem di mana manusia dan AI bekerja sebagai
            mitra yang sinergis. Bertujuan mengubah paradigma dari persaingan
            menjadi kolaborasi, serta meningkatkan pengetahuan peserta dalam
            merancang teknologi AI yang berpusat pada manusia.
          </p>
          <div className="flex gap-3">
            <Button label="Info Selengkapnya" variant="primary" />
            <Button label="Hubungi Panitia" variant="outline" />
          </div>
        </div>
        <div className="md:w-1/3 flex justify-center">
          <img
            src="https://www.invofest-harkatnegeri.com/assets/Maskot-Seminar.png"
            alt="Maskot Seminar"
            className="w-full max-w-xs drop-shadow-2xl"
          />
        </div>
      </section>

      <section className="px-6 lg:px-12 max-w-5xl mx-auto text-center border-t border-gray-100 pt-16 mt-6 relative z-10">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Tentang IT SEMINAR
        </h2>
        <div className="text-gray-800 text-lg md:text-xl leading-relaxed space-y-6 max-w-4xl mx-auto">
          <p>
            Seminar bertajuk “Human-AI Integration: Merancang Arsitektur
            Kolaboratif, Di tengah pesatnya kemajuan kecerdasan buatan (AI),
            narasi yang sering muncul adalah tentang persaingan antara manusia
            dan mesin. Kekhawatiran akan penggantian peran manusia oleh
            teknologi cerdas menjadi diskusi utama di berbagai sektor. Namun,
            bagaimana jika kita mengubah paradigma tersebut? Seminar Nasional
            Teknologi Informasi ini hadir untuk menjawab tantangan itu dengan
            mengangkat tema "Human-AI Integration: Merancang Arsitektur
            Kolaboratif, Bukan Kompetitif.” Kami bertujuan untuk menggeser fokus
            dari ketakutan akan kompetisi menjadi eksplorasi peluang kolaborasi.
            Seminar ini akan mengupas tuntas bagaimana kita dapat merancang
            sistem, etika, dan lingkungan kerja di mana AI berfungsi sebagai
            mitra yang memperkuat kecerdasan, kreativitas, dan produktivitas
            manusia—bukan sebagai pengganti.
          </p>
        </div>
      </section>

      <section id="pembicara" className="py-10">
        <h2 className="text-red-900 text-4xl text-center mb-12 font-bold">
          Temui Pembicara Kami
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-6 max-w-5xl mx-auto">
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
          Pelaksanaan IT Seminar
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <InfoBox icon={Calendar} title="Kamis, 27 November 2025" />
          <InfoBox icon={Clock} title="08.00 WIB - 12.00 WIB" />
          <InfoBox icon={MapPin} title="Aula Gedung C" />
          <InfoBox
            icon={Building}
            title="Kampus 1 (Mataram) Universitas Harkat Negeri"
          />
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