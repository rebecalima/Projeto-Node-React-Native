Passo a Passo para o uso dessa aplicação.

Preparando o ambiente:
Instalar um package manager -> Para saber as dependências que serão instaladas. Windows: Chocolatey
    Executar o PowerShell como administrador e colocar o comando: 
        Set-ExecutionPolicy Bypass -Scope Process -Force; iex ((New-Object System.Net.WebClient).DownloadString('https://chocolatey.org/install.ps1'))
Instalar o node com Chocolatey: 
    cinst nodejs.install
Installar o yarn (Gerenciador de pacotes avançado e rápido) com Cholatey 
    choco install yarn

Observações extras:
    Baixar tema do drácula no visual studio
    Obter extensão do drácula e json viewer
    Material Icon Theme - visual studio

Começando o projeto:
    yarn init -y  -> (Cria o package.json(está em toda aplicação que envolve js), contém informações de todas as dependências)
    yarn add express (Micro-framework que ajuda a trabalhar com rotas (Rest API))

    yarn add nodemon -D (Nodemon acompanha as alterações do projeto e atualiza)
        Parar usá-lo é preciso também adicioná-lo ao package dentro de scripts:{<nomeQqr>: nodemon server.js}
        e "yarn <nomeQqr>"

Obs: Instalar o Postman ou Insomnia para testar as API's

Criando a base de dados:
    Criando um cluster no MongoDB Atlas e depois uma base de dados
    Pode baixar o mongodb compass para visualizar as informações
    yarn add mongoose -> odm(Ferramenta que vai facilitar o uso do banco de dandos usando o javascript que vai converter pra sql)

Facilitando as requisições de API:
    yarn add axios