# Click Pago

Projeto criado em equipe durante o hackaton da getnet.

### Inspiração

A ideia do hackaton era criar soluções tecnológicas para o problema dos pequenos empreendedores durante a pandemia com ênfase maior
no problema da oferta de crédito. Então nossa solução foi criar uma plataforma onde pessoas físicas pudessem assumir a folha de pagamento (ou parte dela)
de empreendedores prometendo um retorno em um tempo pré-determinado.
A aplicação é basicamente um local onde empreendedores laçam suas folhas de pagamento com o prazo de devolução e ganho percentual e pessoas
fisicas escolhem qual folha de pagamento irá investir seu dinheiro. A aplicação tambem exibirá guias e tutoriais para os pequenos empreendedores
aprendam como gerenciar sua empresa.

### Interface

A interface e a lógica de navegação foram criadas utilizando o framework ReactJS, styled-components e o react-router-dom na construção das [SPA](https://www.portalgsti.com.br/2017/08/single-page-application-spa.html).

### Navegação

1. `Home page`: A home page mostra as opções de login e cadastro.
2. `Cadastro de pessoa fisica`: A tela simula uma pagina de cadastro de uma pessoa física.
3. `Cadastro da empresa`: Dá um exemplo de como uma empresa faria pra se cadastrar.
4. `Login`: Nessa tela você loga na sua conta e ela redirecionará a sua pagina correspondente, seja empresa ou pessoa fisica.
Para acessar a tela de pessoa juridica digite: empreendedor@gmail.com. E pessoa fisica digite: investidor@gmail.com. Não é necessário
digitar uma senha para continuar.

### Deployment

A pagina está disponivel para ser acessada na [Vercel](https://getnet-hackathon.vercel.app)
