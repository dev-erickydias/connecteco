import "./privacyPolicy.css"
export default function PrivacyPolicy() {
    return (
        <div className="privacy-policy">
            <h1 className="privacy-policy__main-title">Política de Privacidade</h1>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Introdução</h2>
                <p className="privacy-policy__text">A Connect Eco valoriza a sua privacidade e está comprometida em proteger os seus dados pessoais. Esta política de privacidade descreve como coletamos, usamos, armazenamos e compartilhamos suas informações.</p>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Dados Coletados</h2>
                <p className="privacy-policy__text">Coletamos os seguintes tipos de dados pessoais:</p>
                <ul className="privacy-policy__list">
                    <li className="privacy-policy__list-item">Nome</li>
                    <li className="privacy-policy__list-item">Endereço de e-mail</li>
                    <li className="privacy-policy__list-item">Número de telefone</li>
                    <li className="privacy-policy__list-item">Endereço postal</li>
                    <li className="privacy-policy__list-item">Dados de navegação (cookies, endereço IP, etc.)</li>
                </ul>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Finalidade da Coleta de Dados</h2>
                <p className="privacy-policy__text">Usamos seus dados pessoais para as seguintes finalidades:</p>
                <ul className="privacy-policy__list">
                    <li className="privacy-policy__list-item">Melhorar nossos serviços</li>
                    <li className="privacy-policy__list-item">Enviar comunicações de marketing</li>
                    <li className="privacy-policy__list-item">Realizar análises e pesquisas</li>
                    <li className="privacy-policy__list-item">Cumprir obrigações legais</li>
                </ul>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Compartilhamento de Dados</h2>
                <p className="privacy-policy__text">Podemos compartilhar seus dados pessoais com:</p>
                <ul className="privacy-policy__list">
                    <li className="privacy-policy__list-item">Nossos parceiros e fornecedores de serviços</li>
                    <li className="privacy-policy__list-item">Autoridades legais, se necessário</li>
                    <li className="privacy-policy__list-item">Empresas do mesmo grupo econômico</li>
                </ul>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Segurança dos Dados</h2>
                <p className="privacy-policy__text">Adotamos medidas técnicas e organizacionais para proteger seus dados pessoais contra acessos não autorizados, perda ou destruição.</p>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Direitos dos Usuários</h2>
                <p className="privacy-policy__text">Você tem o direito de:</p>
                <ul className="privacy-policy__list">
                    <li className="privacy-policy__list-item">Acessar seus dados pessoais</li>
                    <li className="privacy-policy__list-item">Solicitar a correção de dados incorretos</li>
                    <li className="privacy-policy__list-item">Solicitar a exclusão de seus dados</li>
                    <li className="privacy-policy__list-item">Solicitar a portabilidade dos seus dados</li>
                    <li className="privacy-policy__list-item">Opor-se ao processamento de seus dados</li>
                </ul>
                <p className="privacy-policy__text">Para exercer seus direitos, entre em contato conosco através do e-mail <a href="mailto:ecoconnect7@gmail.com" className="privacy-policy__link">ecoconnect7@gmail.com</a>.</p>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Retenção de Dados</h2>
                <p className="privacy-policy__text">Manteremos seus dados pessoais pelo período necessário para cumprir as finalidades descritas nesta política, salvo se houver outra exigência legal.</p>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Transferência Internacional de Dados</h2>
                <p className="privacy-policy__text">Seus dados pessoais podem ser transferidos e processados em outros países que oferecem um nível de proteção de dados adequado.</p>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Alterações na Política de Privacidade</h2>
                <p className="privacy-policy__text">Esta política de privacidade pode ser atualizada periodicamente. Notificaremos você sobre quaisquer alterações significativas através de nossos canais de comunicação habituais.</p>
            </section>

            <section className="privacy-policy__section">
                <h2 className="privacy-policy__section-title">Contato</h2>
                <p className="privacy-policy__text">Se você tiver dúvidas ou preocupações sobre esta política de privacidade, entre em contato conosco pelo e-mail <a href="mailto:ecoconnect7@gmail.com" className="privacy-policy__link">ecoconnect7@gmail.com</a>.</p>
            </section>

            <p className="privacy-policy__update-date">Data da última atualização: 01/06/2024</p>
        </div>
    );
}
