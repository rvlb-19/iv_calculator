# Tutorial
1. Escolha um dos *Pokémon* da lista;
2. Especifique as seguintes informações:
    * *Hit Points* (HP);
    * *Combat Points* (CP);
    * Quantidade de *Stardust* para usar o *Power-Up* (*Stardust*);
    * Nível atual do *Pokémon* (*Level*);
3. Ao clicar no botão **Calcular**, será exibida uma listagem com as combinações de *Individual Values* (IVs) de *Stamina*, *Attack* e *Defense* possíveis para o Pokémon em questão.

# Ajuda
#### Sobre os IVs
##### O que são os IVs
O termo IV é uma abreviação da expressão _Individual Value_, que representa um número que varia de 0 a 15, caracterizando efetivamente um "gene" de um _Pokémon_.

Cada um possui três IVs: _Stamina_, _Attack_ e _Defense_, que contribuem para os valores de HP e CP. Cada um dos IVs é determinado no momento em que o _Pokémon_ é gerado pelo jogo e **não** pode ser modificado por meios normais.

##### Para que servem os IVs
Como dito anteriormente, IVs representam os "genes" dos _Pokémon_. Quanto maior o valor, mais eficiente no determinado atributo ele será. 

No nível máximo (atualmente 40), cada IV representa um acréscimo de até 15 pontos no atributo correspondente.

##### Combinações de IVs
Após o preenchimento das informações necessárias, serão calculadas as combinações possíveis dos três IVs para o seu _Pokémon_. É importante notar, porém, que a mecânica do jogo faz com que os valores de HP e CP sejam no mínimo 10. Logo, combinações que tornem os valores abaixo de 10 são validadas, fazendo com que uma quantidade muito grande de combinações seja exibida.

#### Determinando o _Level_
Cada *Pokémon* do jogo possui um nível não-informado de forma explícita. Existem algumas formas de descobrir esse valor:
* Um _Pokémon_ quando obtido (via captura ou ovo), sempre terá um nível inteiro (1,2,3, etc);
* Um _Pokémon_ nunca poderá ultrapassar o nível atual do treinador em mais de 1.5;
* Um _Power-Up_ aumenta o nível do _Pokémon_ em 0.5 nível;
* O _level_ do _Pokémon_ pode ser estimado pelo arco apresentado na tela de visualização do _Pokémon_. Quanto mais preenchido, maior o _level_. Vale notar que a escala do arco vai diminuindo à medida que o nível do treinador aumenta.

O valor de _Stardust_ necessário para usar um _Power-Up_ está atrelado a uma faixa de _levels_, que é determinada automaticamente pela calculadora quando o campo é preenchido.

#### Para que serve o CP
O CP é um valor utilizado para determinar o quão forte um _Pokémon_ é. Efetivamente, porém o que realmente importa são os valores utilizados para calcular o CP: os atributos _Stamina_, _Attack_ e _Defense_.

Suponha que você capturou um _Bulbasaur_ e o chamou de _Bruteroot_: os três atributos de _Bruteroot_ são calculados somando os respectivos _Base Stat_ da espécie _Bulbasaur_ com os respectivos IVs de _Bruteroot_. O resultado da soma é então multiplicado por uma constante determinada pelo _level_ atual do _Pokémon_. São esses três atributos que tornarão o Pokémon eficiente (ou não) na captura e defesa de _Gyms_.

O CP (e o HP), são úteis principalmente na hora de determinar as possíveis combinações de IVs de cada um dos atributos.

# Informações Legais
Este software foi desenvolvido para fins de aprendizado nos conceitos de Programação Web.

_Pokémon_ e todos os nomes, marcas e produtos atrelados, são propriedades de terceiros. A comercialização deste software é proibida de todas as formas.
