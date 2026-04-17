import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    
    // Simulação de delay para processamento do email/banco de dados
    await new Promise((resolve) => setTimeout(resolve, 1500));

    console.log("Novo lead recebido:", body);

    return NextResponse.json({ message: "Contato enviado com sucesso." }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "Erro ao processar contato." }, { status: 500 });
  }
}
