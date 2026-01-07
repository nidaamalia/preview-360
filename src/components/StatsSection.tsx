import { Briefcase, Users, MapPin } from "lucide-react";

const stats = [
  {
    icon: Briefcase,
    value: "658+",
    label: "Proyek Selesai",
    description: "Kepuasan pelanggan terjamin",
  },
  {
    icon: Users,
    value: "158+",
    label: "Mitra Tukang",
    description: "Profesional terverifikasi",
  },
  {
    icon: MapPin,
    value: "2 Kota",
    label: "Surabaya & Malang",
    description: "Area layanan kami",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 md:py-24 bg-navy relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-pattern opacity-30" />
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="relative group bg-card/50 backdrop-blur-sm border border-border hover:border-primary/50 rounded-2xl p-8 text-center transition-all duration-300 hover:shadow-card-hover"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Icon */}
              <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 border border-primary/20 mb-6 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-primary" />
              </div>

              {/* Value */}
              <div className="relative">
                <h3 className="text-4xl md:text-5xl font-extrabold text-foreground mb-2">
                  {stat.value}
                </h3>
                <p className="text-lg font-semibold text-foreground mb-1">
                  {stat.label}
                </p>
                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
