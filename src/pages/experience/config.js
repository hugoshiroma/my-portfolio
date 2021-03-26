import {
  AOCgraduation,
  AOCgraduation2,
  AOCbus,
  AOCtheater,
} from "assets/assets-urls.enum";

export const experiences = [
  {
    job: "Menor aprendiz",
    company: "AOC International",
    startDate: "Jul 2011",
    endDate: "Jun 2013",
    description: (
      <>
        Aqui começa minha jornada frente ao mundo real! Com 14 anos, ainda no
        ensino médio, tomei uma decisão que mudaria minha vida:
        <strong>decidi que iria passar na melhor faculdade do país</strong>. Pra
        isso, precisava juntar dinheiro para me sustentar durante meu período
        acadêmico, então passei num processo seletivo para{" "}
        <strong>
          menor aprendiz na montadora oficial da AOC International
        </strong>{" "}
        em Jundiaí, responsável por produzir computadores, tablets, all-in-ones
        e monitores. Neste processo, era um pré-requisito também{" "}
        <strong>
          passar na prova de CAI (Curso de Aprendizagem Industrial) do SENAI
        </strong>
        . Então, de 7h às 11h eu ficava na empresa adquirindo conhecimento
        prático diretamente na{" "}
        <strong>linha de produção/setor técnico/P&D</strong> ou adquirindo
        conhecimento teórico através de{" "}
        <strong>
          palestras, dinâmicas e avaliações sobre temas corporativos/industriais
          diversos
        </strong>{" "}
        tais como eletrônica básica, documentações industriais básicas (ITs,
        mapas de placas, diagramas gerais de produtos), 5S, programação básica,
        segurança patrimonial, comportamento empresarial, etc. Após isso, de
        12h30 até 16h30 eu permanecia no SENAI pelo{" "}
        <strong>curso de eletricista de manutenção</strong>. Por fim, de 19h às
        22h45 eu permanecia na escola, seguindo esta mesma rotina durante 2
        anos.
      </>
    ),
    photos: [{ src: AOCbus }, { src: AOCtheater }, { src: AOCgraduation }],
  },
  {
    job: "Estagiário",
    company: "Zellar",
    startDate: "Mai 2018",
    endDate: "Out 2019",
    description: (
      <>
        Em meu retorno ao mercado de trabalho após alguns anos dedicado aos
        estudos, entrei em uma startup chamada Zellar. Sendo uma empresa de tecnologia incubada de outra empresa de prestação de serviços de portaria, segurança patrimonial e limpeza, atuávamos integralmente no produto da empresa que atendia pontualmente as necessidades de suas respectivas filiais espalhadas pelo Brasil
      </>
    ),
  },
  {
    job: "Desenvolvedor Jr.",
    company: "Zellar",
    startDate: "Out 2019",
    endDate: "Dez 2019",
    description: "",
    continuation: true,
  },
  {
    job: "Engenheiro de Software Jr.",
    company: "Acesso",
    startDate: "Dez 2019",
    endDate: "Jan 2021",
    description: "",
  },
  {
    job: "Engenheiro de Software Pl.",
    company: "Acesso",
    startDate: "Abr 2021",
    endDate: "atualmente",
    description: "",
    continuation: true,
  },
];
