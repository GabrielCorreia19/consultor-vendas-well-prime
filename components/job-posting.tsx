"use client"

import Image from "next/image"
import { Mail, MapPin, Briefcase, CheckCircle, Gift, TrendingUp, Users, Star, Sparkles, Dumbbell, Target, MessageCircle } from "lucide-react"

export function JobPosting() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#d4a853]/20 via-transparent to-transparent" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#d4a853]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#d4a853]/5 rounded-full blur-3xl" />

        <div className="relative container mx-auto px-4 py-12 lg:py-16">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#d4a853]/20 border border-[#d4a853]/40 rounded-full mb-8">
              <Sparkles className="w-4 h-4 text-[#d4a853]" />
              <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-wider">Estamos Contratando - CLT</span>
            </div>

            {/* Logos */}
            <div className="flex items-center justify-center gap-6 lg:gap-10 mb-8">
              {/* Logo Prime Academia */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 bg-[#d4a853]/30 rounded-full blur-xl animate-pulse" />
                <Image
                  src="/images/logo-well-prime.jpg"
                  alt="Prime Academia Logo"
                  fill
                  className="object-contain rounded-full relative z-10 ring-4 ring-[#d4a853]/50"
                  priority
                />
              </div>

              {/* Divisor */}
              <div className="w-px h-24 lg:h-32 bg-gradient-to-b from-transparent via-[#d4a853]/50 to-transparent" />

              {/* Logo Decisão Brasil - Circular com fundo branco e borda azul */}
              <div className="relative w-32 h-32 lg:w-40 lg:h-40">
                <div className="absolute inset-0 bg-[#2a3870]/30 rounded-full blur-xl animate-pulse" />
                <div className="relative z-10 w-full h-full rounded-full bg-white ring-6 ring-[#2a3870]/70 flex items-center justify-center overflow-hidden p-3">
                  <Image
                    src="/images/logo-decisao-brasil.png"
                    alt="Decisão Brasil Recursos Humanos Logo"
                    fill
                    className="object-cover p-2"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black mb-4 text-balance">
              <span className="text-[#d4a853]">CONSULTOR</span>
              <br />
              <span className="text-white">DE VENDAS</span>
            </h1>

            {/* Location */}
            <div className="flex items-center gap-2 text-white/80 mb-4">
              <MapPin className="w-5 h-5 text-[#d4a853]" />
              <span className="text-lg font-medium">Salvador - BA</span>
            </div>

            {/* Experience Badge */}
            <div className="px-6 py-3 bg-gradient-to-r from-[#d4a853] to-[#e8c379] rounded-full">
              <span className="text-[#0a0a0a] font-bold text-lg">
                +25 Anos no Mercado
              </span>
            </div>

            {/* Salary Highlight Section */}
            <div className="mt-10 w-full max-w-md">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d4a853] via-[#e8c379] to-[#d4a853] rounded-2xl blur-lg opacity-50 animate-pulse" />

                {/* Card */}
                <div className="relative bg-gradient-to-br from-[#151515] to-[#1a1a1a] rounded-2xl p-6 border-2 border-[#d4a853]">
                  <div className="text-center">
                    <span className="text-[#d4a853] text-sm font-semibold uppercase tracking-widest">Remuneração Total</span>

                    <div className="mt-3 flex items-baseline justify-center gap-1">
                      <span className="text-[#d4a853] text-2xl font-bold">R$</span>
                      <span className="text-5xl lg:text-6xl font-black text-white">3.250</span>
                      <span className="text-white/60 text-lg">,00</span>
                    </div>

                    <div className="mt-3 flex items-center justify-center gap-2">
                      <div className="h-px w-8 bg-[#d4a853]/50" />
                      <span className="text-white/70 text-sm">Salário + Comissões + Benefícios</span>
                      <div className="h-px w-8 bg-[#d4a853]/50" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-2 gap-8">
          {/* O que você vai ter */}
          <div className="bg-gradient-to-br from-[#151515] to-[#1a1a1a] rounded-3xl p-8 border border-[#d4a853]/20 hover:border-[#d4a853]/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#d4a853]/20 rounded-xl flex items-center justify-center">
                <Star className="w-6 h-6 text-[#d4a853]" />
              </div>
              <h2 className="text-2xl font-bold text-[#d4a853]">Vai Ter</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Treinamento em sistema de vendas",
                "Script Comercial",
                "Chance de desenvolver habilidades do perfil DISC",
                "Atendimento on-line/presencial"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a853] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Requisitos */}
          <div className="bg-gradient-to-br from-[#151515] to-[#1a1a1a] rounded-3xl p-8 border border-[#d4a853]/20 hover:border-[#d4a853]/40 transition-colors">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-[#d4a853]/20 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-[#d4a853]" />
              </div>
              <h2 className="text-2xl font-bold text-[#d4a853]">Requisitos</h2>
            </div>
            <ul className="space-y-4">
              {[
                "Experiência em vendas ou atendimento",
                "Boa comunicação e persuasão",
                "Proatividade e foco em resultados",
                "Prospecção Ativa"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-[#d4a853] mt-0.5 flex-shrink-0" />
                  <span className="text-white/90">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Benefícios */}
        <div className="mt-8 bg-gradient-to-br from-[#151515] to-[#1a1a1a] rounded-3xl p-8 border border-[#d4a853]/20">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 bg-[#d4a853]/20 rounded-xl flex items-center justify-center">
              <Gift className="w-6 h-6 text-[#d4a853]" />
            </div>
            <h2 className="text-2xl font-bold text-[#d4a853]">Benefícios</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { icon: TrendingUp, text: "Salário fixo CLT + comissões sobre vendas" },
              { icon: Gift, text: "Premiação semanal por equipe via PIX" },
              { icon: TrendingUp, text: "Plano de crescimento no grupo" },
              { icon: Users, text: "Treinamento completo + perfil DISC" },
              { icon: Gift, text: "Cesta básica" },
              { icon: Star, text: "Programa de bem-estar e qualidade de vida" },
              { icon: Dumbbell, text: "Treino gratuito na academia" },
              { icon: Target, text: "Comissões e Bônus por metas batidas" },
              { icon: Users, text: "Networking constante com alunos e profissionais" }
            ].map((benefit, index) => (
              <div
                key={index}
                className="flex items-start gap-3 p-4 bg-[#0a0a0a]/50 rounded-xl border border-[#d4a853]/10 hover:border-[#d4a853]/30 transition-colors"
              >
                <benefit.icon className="w-5 h-5 text-[#d4a853] mt-0.5 flex-shrink-0" />
                <span className="text-white/90 text-sm">{benefit.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-[#d4a853]/10 via-[#d4a853]/20 to-[#d4a853]/10 rounded-3xl p-8 lg:p-12 border border-[#d4a853]/30">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Faça parte do nosso time!
            </h3>
            <p className="text-white/70 mb-8 max-w-xl mx-auto">
              Envie seu currículo e venha crescer com a gente
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:contato@decisaobrasil.com.br?subject=Consultor de Vendas / SSA"
                className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#d4a853] to-[#e8c379] text-[#0a0a0a] font-bold rounded-full hover:shadow-lg hover:shadow-[#d4a853]/30 transition-all hover:scale-105"
              >
                <Mail className="w-5 h-5" />
                Enviar Currículo
              </a>
              <a
                href="https://wa.me/5571999912091?text=Olá! Tenho interesse na vaga de Consultor de Vendas."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#25D366] text-white font-bold rounded-full hover:shadow-lg hover:shadow-[#25D366]/30 transition-all hover:scale-105"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp
              </a>
            </div>

            <div className="mt-6 text-white/60 text-sm space-y-2">
              <p>
                <span className="text-[#d4a853] font-semibold">Email:</span> contato@decisaobrasil.com.br
              </p>
              <p>
                <span className="text-[#d4a853] font-semibold">Assunto:</span> Consultor de Vendas / SSA
              </p>
              <p>
                <span className="text-[#25D366] font-semibold">WhatsApp:</span> (71) 9 9991-2091
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#d4a853]/20 py-6 mt-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-white/50 text-sm">
            © {new Date().getFullYear()} Prime Academia. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  )
}
