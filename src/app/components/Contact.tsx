"use client";

import { Mail, Linkedin, MessageCircle, ArrowUpRight } from "lucide-react";

export default function Contact() {
  const contactLinks = [
    {
      name: "Email",
      value: "sarwaaulia01@gmail.com",
      href: "mailto:sarwaaulia01@gmail.com",
      icon: <Mail className="w-6 h-6" />,
    },
    {
      name: "LinkedIn",
      value: "Sarwa Aulia Nabila Ramadhani",
      href: "https://www.linkedin.com/in/sarwa-aulia-nabila-ramadhani-86579637a/",
      icon: <Linkedin className="w-6 h-6" />,
    },
    {
      name: "WhatsApp",
      value: "+62 858 1192 4025",
      href: "https://wa.me/6285811924025",
      icon: <MessageCircle className="w-6 h-6" />,
    },
  ];

  return (
    <section id="contact" className="py-28 relative transition-colors duration-500">
      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-[var(--border)] backdrop-blur-md mb-8">
          <span className="relative flex h-3 w-3">
            <span className="animate-ping-slow absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
          </span>
          <span className="text-xs font-bold uppercase tracking-widest" style={{ color: "var(--text-main)" }}>
            Open for Opportunities
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ color: "var(--text-main)" }}>
          Let’s Build Something Together
        </h2>
        
        <p className="max-w-2xl mx-auto mb-16 text-base opacity-80" style={{ color: "var(--text-muted)" }}>
          Currently seeking new challenges and collaborations. Whether you have a question or just want to say hi, my inbox is always open!
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
          {contactLinks.map((contact, i) => (
            <a
              key={i}
              href={contact.href}
              target="_blank"
              style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border)" }}
              className="group p-6 rounded-3xl border backdrop-blur-xl flex items-center justify-between transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
            >
              <div className="flex items-center gap-5">
                <div 
                  className="w-12 h-12 flex items-center justify-center rounded-2xl transition-colors"
                  style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
                >
                  {contact.icon}
                </div>
                <div>
                  <p className="text-xs font-bold opacity-60 uppercase" style={{ color: "var(--text-muted)" }}>{contact.name}</p>
                  <p className="text-sm md:text-base font-semibold" style={{ color: "var(--text-main)" }}>{contact.value}</p>
                </div>
              </div>
              <ArrowUpRight className="w-5 h-5 opacity-0 group-hover:opacity-100 transition-all -translate-y-1" style={{ color: "var(--accent)" }} />
            </a>
          ))}

          <div 
            style={{ backgroundColor: "var(--accent)", color: "var(--nav-bg)" }}
            className="p-6 rounded-3xl flex flex-col justify-center items-center text-center shadow-lg"
          >
            <p className="font-black text-lg">Have a specific project?</p>
            <p className="text-xs opacity-90">Let's hop on a call!</p>
          </div>
        </div>
      </div>
    </section>
  );
}