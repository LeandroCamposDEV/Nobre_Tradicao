"use client";

import { useState } from "react";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Contato() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (err) {
      setStatus("error");
    }
  }

  return (
    <>
      <section className="relative pt-32 pb-20 bg-[#050505] border-b border-wood-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white mb-6">Fale <span className="text-wood-gold">Conosco</span></h1>
          <p className="text-primary-gray max-w-2xl mx-auto text-lg leading-relaxed">
            Seu projeto exclusivo começa com uma conversa. Nossa equipe de especialistas 
            está à disposição para agendar uma consultoria em nosso showroom.
          </p>
        </div>
      </section>

      <Section>
        <div className="flex flex-col lg:flex-row gap-16">
          <div className="w-full lg:w-1/3 space-y-10">
            <div>
              <h3 className="text-2xl font-serif text-white mb-6">Informações</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-wood-gold mr-4 mt-1" size={24} />
                  <div>
                    <strong className="block text-white mb-1">Showroom Matriz</strong>
                    <p className="text-primary-gray">
                      Av. Paulista, 1000 - Bela Vista<br />
                      São Paulo - SP, 01310-100
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="text-wood-gold mr-4" size={24} />
                  <div>
                    <strong className="block text-white mb-1">Telefone / WhatsApp</strong>
                    <p className="text-primary-gray">+55 (11) 99999-9999</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="text-wood-gold mr-4" size={24} />
                  <div>
                    <strong className="block text-white mb-1">E-mail Comercial</strong>
                    <p className="text-primary-gray">contato@nobretradicao.com.br</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-serif text-white mb-4">Horário de Atendimento</h3>
              <p className="text-primary-gray">
                Segunda a Sexta: 09h às 19h<br />
                Sábado: 09h às 14h (Com hora marcada)
              </p>
            </div>
          </div>

          <div className="w-full lg:w-2/3 bg-primary-black border border-wood-dark p-8 md:p-12 rounded-sm shadow-2xl">
            <h2 className="text-3xl text-white mb-8">Solicite seu contato</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-primary-gray">Nome Completo</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full bg-[#050505] border border-wood-dark/50 p-3 text-white rounded-sm focus:outline-none focus:border-wood-gold transition-colors"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-primary-gray">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full bg-[#050505] border border-wood-dark/50 p-3 text-white rounded-sm focus:outline-none focus:border-wood-gold transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-primary-gray">Celular / WhatsApp</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  className="w-full bg-[#050505] border border-wood-dark/50 p-3 text-white rounded-sm focus:outline-none focus:border-wood-gold transition-colors"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-primary-gray">Como podemos ajudar?</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  className="w-full bg-[#050505] border border-wood-dark/50 p-3 text-white rounded-sm focus:outline-none focus:border-wood-gold transition-colors resize-none"
                  placeholder="Tem algum ambiente em mente? Ex: Quero reformar minha cozinha..."
                ></textarea>
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full"
                disabled={status === "loading"}
              >
                {status === "loading" ? "Enviando..." : "Enviar Solicitação"}
              </Button>

              {status === "success" && (
                <div className="p-4 bg-green-900/20 border border-green-500/50 text-green-400 rounded-sm mt-4">
                  Sua mensagem foi enviada com sucesso! Um de nossos consultores entrará em contato em breve.
                </div>
              )}
              {status === "error" && (
                <div className="p-4 bg-red-900/20 border border-red-500/50 text-red-400 rounded-sm mt-4">
                  Ocorreu um erro ao enviar sua mensagem. Por favor, tente novamente ou nos chame no WhatsApp.
                </div>
              )}
            </form>
          </div>
        </div>
      </Section>
    </>
  );
}
