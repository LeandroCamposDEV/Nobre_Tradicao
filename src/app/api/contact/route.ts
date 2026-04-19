import { NextRequest, NextResponse } from "next/server";

// ─────────────────────────────────────────────────────────────
// Tipos
// ─────────────────────────────────────────────────────────────

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ValidationError {
  field: string;
  message: string;
}

// ─────────────────────────────────────────────────────────────
// Validação
// ─────────────────────────────────────────────────────────────

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const PHONE_REGEX = /^[\d\s()+-]{8,20}$/;

function validateContactData(data: Record<string, unknown>): {
  valid: boolean;
  errors: ValidationError[];
  sanitized: ContactFormData | null;
} {
  const errors: ValidationError[] = [];

  // Nome
  if (!data.name || typeof data.name !== "string" || data.name.trim().length < 2) {
    errors.push({
      field: "name",
      message: "O nome é obrigatório e deve ter pelo menos 2 caracteres.",
    });
  }

  // E-mail
  if (!data.email || typeof data.email !== "string" || !EMAIL_REGEX.test(data.email.trim())) {
    errors.push({
      field: "email",
      message: "Informe um endereço de e-mail válido.",
    });
  }

  // Telefone
  if (!data.phone || typeof data.phone !== "string" || !PHONE_REGEX.test(data.phone.trim())) {
    errors.push({
      field: "phone",
      message: "Informe um número de telefone válido (mín. 8 dígitos).",
    });
  }

  // Mensagem
  if (!data.message || typeof data.message !== "string" || data.message.trim().length < 10) {
    errors.push({
      field: "message",
      message: "A mensagem é obrigatória e deve ter pelo menos 10 caracteres.",
    });
  }

  if (errors.length > 0) {
    return { valid: false, errors, sanitized: null };
  }

  return {
    valid: true,
    errors: [],
    sanitized: {
      name: (data.name as string).trim(),
      email: (data.email as string).trim().toLowerCase(),
      phone: (data.phone as string).trim(),
      message: (data.message as string).trim(),
    },
  };
}

// ─────────────────────────────────────────────────────────────
// Serviço de E-mail (simulação modular)
// ─────────────────────────────────────────────────────────────

/**
 * Módulo de envio de e-mail transacional.
 *
 * Em produção, substitua o corpo desta função pela integração
 * real com Resend, Nodemailer, SendGrid, etc.
 *
 * Exemplo com Resend:
 *   import { Resend } from "resend";
 *   const resend = new Resend(process.env.RESEND_API_KEY);
 *   await resend.emails.send({ from, to, subject, html });
 */
async function sendContactEmail(data: ContactFormData): Promise<void> {
  // Simulação — loga os dados no servidor
  console.log("──────────────────────────────────────────");
  console.log("📩  Novo contato recebido via formulário");
  console.log("──────────────────────────────────────────");
  console.log(`Nome:     ${data.name}`);
  console.log(`E-mail:   ${data.email}`);
  console.log(`Telefone: ${data.phone}`);
  console.log(`Mensagem: ${data.message}`);
  console.log(`Data:     ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}`);
  console.log("──────────────────────────────────────────");
}

// ─────────────────────────────────────────────────────────────
// Route Handler — POST /api/contact
// ─────────────────────────────────────────────────────────────

export async function POST(request: NextRequest) {
  try {
    // Verifica o Content-Type
    const contentType = request.headers.get("content-type") ?? "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, message: "Content-Type deve ser application/json." },
        { status: 415 }
      );
    }

    // Parse do body
    let body: Record<string, unknown>;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { success: false, message: "O corpo da requisição contém JSON inválido." },
        { status: 400 }
      );
    }

    // Validação dos campos
    const { valid, errors, sanitized } = validateContactData(body);

    if (!valid || !sanitized) {
      return NextResponse.json(
        { success: false, message: "Dados inválidos.", errors },
        { status: 400 }
      );
    }

    // Envio do e-mail (simulado)
    await sendContactEmail(sanitized);

    return NextResponse.json(
      {
        success: true,
        message: "Mensagem recebida com sucesso! Entraremos em contato em breve.",
      },
      { status: 200 }
    );
  } catch (error) {
    // Log interno — nunca expõe detalhes ao cliente
    console.error("[API /api/contact] Erro interno:", error);

    return NextResponse.json(
      {
        success: false,
        message: "Ocorreu um erro interno no servidor. Tente novamente mais tarde.",
      },
      { status: 500 }
    );
  }
}
