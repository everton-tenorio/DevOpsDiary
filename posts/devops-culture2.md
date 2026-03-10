---
title: "Devops Culture"
date: 2026-03-11
slug: devops-culture
description: ""
tags: ["devops", ""]
bannerImage: "./devopslifecycle.png"
---

Dentro do contexto de Engenharia de Software, podemos observar que ao longo do tempo houve diversas maneiras de desenvolver e entregar software. A constante evolução permite que hoje praticamente engenheiros de software produzam sem digitar uma linha de código, graças às tecnologias de inteligência artificial, e entreguem software sabendo o mais básico de infraestrutura, graças a plataformas que oferecem infra como serviço.

---

## Fundamentos DevOps

Mas nem sempre foi assim. Desenvolver e entregar exigia praticamente 100% de trabalho manual e em times que conversavam separadamente. Podemos datar os anos 2000 com a ideia do modelo cascata, onde o time de desenvolvimento e o time de operações agiam separadamente e com vários conflitos, era a maneira tradicional.

O modelo cascata consiste no desenvolvimento sequencial: capturar requisitos, criar um design em cima disso, implementar via código, testar, fazer deploy e garantir manutenção.

Os conflitos surgiam de formas bem específicas:

**Silos de equipe** representam a total separação física e funcional entre as equipes de desenvolvimento e operações. Cada equipe trabalhava com suas próprias ferramentas, provocando o isolamento funcional.

**A parede da confusão** é onde possivelmente não havia a preocupação de ter um acordo entre as equipes sobre problemas que surgiam. Desenvolvedor terminava o código, jogava por cima do muro para a operação e dizia: "na minha máquina funciona."

**Conflitos de metas** onde um time focava em criar novas funcionalidades constantemente e o outro focava em manter o sistema estável e para isso novas funcionalidades eram identificadas como risco.

**Comunicação** basicamente só quando era para resolver algo. Nenhum feedback estruturado, nenhuma visibilidade compartilhada.

E por conta da forma sequencial e linear do modelo cascata, era necessário evitar voltar a um processo anterior para não ter que perder tempo. Sendo assim, provavelmente depois de muito tempo poderia ser visto algum problema. Talvez antecipar testes e automações pudesse resolver, mas isso só foi pensado um bom tempo depois...

---

## Manifesto Ágil

Ainda pensando no código, e em como melhorar a bagunça no modelo cascata, podemos perceber que esses conflitos eram ocasionados por pessoas e não apenas por bugs. Pessoas, então, são mais importantes antes de tudo.

Em fevereiro de 2001, 17 desenvolvedores se reuniram em Snowbird, Utah, e lançaram o **Manifesto Ágil**, um documento que propunha uma mudança de mentalidade antes de ser uma mudança de processo.

O manifesto é construído em torno de **4 valores fundamentais**:

 - **Indivíduos e interações** mais que processos e ferramentas
 - **Software funcionando** mais que documentação abrangente
 - **Colaboração com o cliente** mais que negociação de contratos
 - **Responder a mudanças** mais que seguir um plano

<br>

Perceba que os itens da direita não são eliminados, eles ainda têm valor. O que o manifesto diz é que os da esquerda valem mais.

Na prática, isso significa: entregas pequenas e frequentes em vez de uma entrega gigante depois de um ano; feedback contínuo do cliente em vez de um documento de requisitos congelado; times auto-organizados e motivados em vez de engrenagens de uma máquina.

O fator humano agora é observado. Para que as pessoas não fossem tratadas como recursos em uma engrenagem, agora a motivação e confiança devem ser a base. É apresentada uma abordagem de **cultura e valores** e não apenas uma lista de processos.

O Ágil resolveu muito do problema dentro do desenvolvimento. Mas criou um problema novo: com entregas mais rápidas e frequentes, o time de operações passou a ser sobrecarregado com muito mais código para gerenciar em infraestruturas burocráticas e manuais. O Ágil focou em "o que fazer". Mas agora era preciso pensar em "como entregar e manter".

---

## Senhoras e senhores, com vocês... DevOps!

Um cara chamado **Patrick Debois** que também observou isso, porém foi lá em 2009, promoveu um evento(**DevOpsDays**), em Gent, na Bélgica, justamente para discutir os problemas e soluções para o Ágil em produção.

Em 2009 surge o termo necessário para uma cultura onde o time de operações também tivesse sua voz ouvida, um real entendimento entre as duas equipes, uma junção para que tudo fosse compreendido. O nome não poderia ser outro: **DevOps**.

DevOps como **filosofia**, culturalmente age sobre três pilares que o DevOps Handbook chama de *The Three Ways*:

**Primeiro caminho - Fluxo:** pensar no trabalho como um sistema contínuo, do desenvolvimento até o usuário final, eliminando gargalos e desperdícios ao longo do caminho.

**Segundo caminho - Feedback:** criar ciclos rápidos e constantes de retorno. Se algo quebrou em produção, o time precisa saber disso em minutos, não em dias. Feedback rápido significa correção rápida.

**Terceiro caminho - Aprendizado contínuo:** criar uma cultura onde falhar é aceitável desde que se aprenda com isso. Experimentar, medir, melhorar, repetidamente.

Pessoas não somente participam de algo interagindo e comunicando com clientes, mantendo software funcionando e entregando coisas o tempo todo, mas sim **colaborando e compartilhando responsabilidade**. Todo mundo "fala o mesmo idioma", que é código. E é através do código que a simplicidade, a facilidade em produzir e entregar devem ser cada vez mais eficientes, sendo cada indivíduo responsável por aquilo que vai fazer.

---

## Automatizar é necessário

Aqui está o ponto que transforma DevOps de uma boa ideia em uma vantagem real: **automação**.

Imagine que todo commit no repositório desencadeie automaticamente uma sequência de ações: o código é compilado, testes são executados, vulnerabilidades são verificadas, e o resultado é empacotado e entregue em um ambiente. Nenhuma dessas etapas depende de alguém abrindo um terminal manualmente.

Os benefícios são diretos:

**Velocidade:** tarefas que levavam horas ou dias passam a levar minutos. Um deploy que exigia um roteiro manual de 40 passos vira um botão, ou nem isso, vira algo que acontece automaticamente.

**Confiabilidade:** humanos cometem erros, especialmente em tarefas repetitivas e sob pressão. Uma pipeline automatizada executa o mesmo processo da mesma forma toda vez. Sem "esqueci de reiniciar o serviço", sem "copiei o arquivo errado".

**Rastreabilidade:** quando tudo está no código, tudo tem histórico. Quem alterou o que, quando, e por quê. Isso vale tanto para o código da aplicação quanto para a infraestrutura.

**Tempo liberado para o que importa:** quando o trabalho mecânico é automatizado, engenheiros têm tempo para aprender, experimentar, melhorar sistemas e pensar em arquitetura, em vez de passar a tarde fazendo deploy manual.

**Feedback antecipado:** se um teste falha, você sabe em minutos. Se uma vulnerabilidade é introduzida, a pipeline detecta antes de chegar em produção. O problema é encontrado quando ainda é barato de corrigir.

---

## CI/CD

Em 8 fases, é possível ter código desenvolvido, construído, testado, auditado e empacotado em versões, isso é o **CI (Integração Contínua)** e na prática testando integralmente esse código implementando em ambientes de produção (simulados ou não), ou entregando diretamente para o mundo, seja de forma manual ou automatizada, **CD (Entrega ou Deploy Contínuo)**.

Chamamos as 8 fases de **Ciclo de Vida DevOps**:

```
Plan → Code → Build → Test → Release → Deploy → Operate → Monitor
```
<br>

É no CD que também são aprimoradas algumas estratégias de entrega, tais como:

- **Blue/Green:** dois ambientes idênticos, um ativo e um em standby. A nova versão sobe no standby, e o tráfego é redirecionado instantaneamente. Precisou reverter? É só redirecionar o tráfego de volta, questão de segundos.
- **Canary:** a nova versão é entregue para uma fatia pequena dos usuários primeiro. Se funcionar bem, expande gradualmente. Se quebrar, o impacto foi mínimo.
- **Rolling:** atualização gradual dos servidores, um a um, sem derrubar o serviço.

### Considerando segurança na pipeline

Mais para frente vou abordar o que chamam de DevSecOps. Pessoalmente prefiro dizer que não precisa mudar o nome, basta simplesmente pensar e considerar que é necessário pensar em segurança desde a hora que o profissional de tecnologia vai ligar o computador até a hora que o usuário vai encerrar o uso do software, sempre que possível.

É possível adotar segurança na esteira CI/CD para que o código seja validado após ser testado e auditado, antes mesmo de ser entregue em produção. Dessa forma observar se vulnerabilidades são encontradas, se riscos de exposição de informações estão presentes, se há instalações maliciosas e etc, são técnicas para aplicar segurança.

Nas outras tarefas do devopsdiary.site vamos verificar as questões de segurança em CI/CD.

---

## Ecossistema de Ferramentas DevOps

Para fazer funcionar todo o processo na esteira CI/CD nas 8 fases, é necessário fazer uso de ferramentas que foram surgindo para cada necessidade:

| Categoria | Ferramentas |
|---|---|
| Source control | Git, GitHub, GitLab |
| CI/CD | GitHub Actions, GitLab CI, Jenkins, CircleCI |
| Configuration management | Ansible, Chef, Puppet |
| Containerization | Docker, Podman |
| Orchestration | Kubernetes |
| IaC | Terraform, CloudFormation |
| Monitoring | Prometheus, Grafana, ELK Stack |

---

## Pensar em DevOps como fator além de humano, mas também organizacional

Não se tem DevOps sem estar dentro de um lugar onde é necessário ter o que fazer, seja nosso trabalho, nossa própria startup. Temos o que fazer para quem precisa, e isso é **business**.

As práticas DevOps no ambiente organizacional podem estrategicamente facilitar em termos de custos e de produtividade. Vale aqui mencionar, em todas as práticas pensadas no campo da administração para que uma organização faça as coisas do jeito certo, livros como **The Goal**(teoria das restrições), **Accelerate**(dados científicos sobre performance de times de engenharia), **The Phoenix Project** e **DevOps Handbook** servem para pensar DevOps como fator organizacional.

---

## Um caso de uso da adoção do DevOps: Netflix

Falando em organização, temos a **Netflix**, que adotou DevOps após um problema em seu sistema monolítico que sofreu uma corrupção grave no banco de dados em 2008, e isso os forçou a migrar para microsserviços na AWS ao longo de vários anos. Esse problema, em vez de ser ignorado, foi abraçado, fazendo com que a Netflix criasse técnicas com foco nas falhas.

A chamada **Engenharia do Caos** fez com que a Netflix não só mudasse sua arquitetura implementando nas equipes de tecnologia as práticas DevOps, mas foi além: novas falhas eram propositalmente pensadas e aplicadas para que os sistemas pudessem ter maior resiliência(**Chaos Monkey**, 2011).

É pensando no pior cenário de destruição possível que processos automatizados tornam os sistemas da Netflix sempre vivos. Praticamente um exército foi construído para que qualquer coisa fosse destruída e reconstruída em tempo recorde. Isso fez com que as falhas ficassem baratas, o ROI em sistemas resilientes permitiu para a empresa ter cada vez mais usuários utilizando sempre o streaming, reclamando apenas do que estão assistindo, talvez.

<iframe width="270" height="480" src="https://www.youtube.com/embed/CkVh6Lm-R3I?si=oQj4GFxDDtfJ0cR7" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

---


Agile Manifesto - https://agilemanifesto.org/
The Netflix Simian Army - https://netflixtechblog.com/the-netflix-simian-army-16e57fbab116
