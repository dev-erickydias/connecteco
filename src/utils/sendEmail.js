import nodemailer from 'nodemailer';

export default async (req, res) => {
  if (req.method === 'POST') {
    const { nome, rua, bairro, cidade, estado, nomeEmpresa, cnpj, diasFuncionamento } = req.body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: 'Informações de Cadastro',
      text: `
        Informações Pessoais:
        Nome: ${nome}
        Endereço: ${rua}, ${bairro}, ${cidade}, ${estado}

        Informações da Empresa:
        Nome da Empresa: ${nomeEmpresa}
        CNPJ: ${cnpj}
        Dias de Funcionamento: ${diasFuncionamento}
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'E-mail enviado com sucesso!' });
    } catch (error) {
      res.status(500).json({ message: 'Erro ao enviar o e-mail', error });
    }
  } else {
    res.status(405).json({ message: 'Método não permitido' });
  }
};

