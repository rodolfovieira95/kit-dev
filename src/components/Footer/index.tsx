import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground mt-8">
      <div className="container mx-auto px-4 py-8 space-y-6">
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <h2 className="text-lg font-bold">Sobre</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Criamos ferramentas inteligentes para ajudar desenvolvedores a
              aumentar a produtividade e simplificar tarefas do dia a dia.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-bold">Navegação</h2>
            <ul className="mt-2 space-y-2 text-sm">
              <li>
                <Link href="/" className="hover:underline">
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link href="/ferramentas" className="hover:underline">
                  Ferramentas
                </Link>
              </li>
              {/* <li>
                <Link href="/sobre" className="hover:underline">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="hover:underline">
                  Contato
                </Link>
              </li> */}
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-bold">Contato</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Tem alguma dúvida ou sugestão? Entre em contato:
            </p>
            {/* <p className="mt-2 text-sm">
              <a
                href="mailto:contato@seudominio.com"
                className="hover:underline"
              >
                contato@seudominio.com
              </a>
            </p>
            <p className="text-sm">
              <a href="tel:+5511999999999" className="hover:underline">
                +55 11 99999-9999
              </a>
            </p> */}
          </div>
        </div>

        {/* Redes sociais */}
        <div className="flex justify-center space-x-6">
          <a
            href="https://github.com/rodolfovieira95"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">GitHub</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.6.11.793-.26.793-.577v-2.234c-3.338.726-4.033-1.41-4.033-1.41-.547-1.39-1.335-1.757-1.335-1.757-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.236 1.84 1.236 1.07 1.834 2.806 1.304 3.49.997.107-.774.418-1.305.76-1.605-2.665-.304-5.466-1.332-5.466-5.931 0-1.311.469-2.381 1.236-3.221-.124-.305-.535-1.528.117-3.18 0 0 1.007-.322 3.301 1.23.956-.266 1.98-.399 3-.404 1.02.005 2.044.138 3 .404 2.293-1.552 3.298-1.23 3.298-1.23.653 1.653.242 2.875.118 3.18.768.84 1.236 1.91 1.236 3.221 0 4.609-2.804 5.624-5.475 5.921.43.37.816 1.1.816 2.22v3.293c0 .319.192.694.8.576C20.566 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/rafvieira95/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground"
          >
            <span className="sr-only">LinkedIn</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.279c-.966 0-1.5-.672-1.5-1.507 0-.845.544-1.507 1.532-1.507s1.5.662 1.5 1.507c0 .835-.532 1.507-1.532 1.507zm13.5 11.279h-3v-5.4c0-1.297-.465-2.182-1.631-2.182-.891 0-1.422.602-1.656 1.181-.086.209-.108.5-.108.791v5.61h-3s.039-9.114 0-10h3v1.414c.398-.614 1.1-1.486 2.675-1.486 1.951 0 3.42 1.27 3.42 4.006v6.066z" />
            </svg>
          </a>
        </div>

        <div className="text-center text-sm text-muted-foreground">
          <p>
            &copy; {new Date().getFullYear()} Rodolfo Vieira. Todos os direitos
            reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
