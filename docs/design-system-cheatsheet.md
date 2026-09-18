# Cheatsheet do design system — PWA atual

> Auditoria estática de `apps/pwa`, em 18 de setembro de 2026. Este documento descreve o que está implementado hoje; não é ainda uma especificação aprovada para o produto gamificado/RPG.

[Abrir referência visual do design system](resources/design-system-cheatsheet.html)

## Leitura rápida

- **Tema:** interface mobile escura, técnica e minimalista, com verde-lima neon como cor de ação e progresso.
- **Superfície-alvo:** 400 px de largura máxima; no desktop, o conteúdo aparece dentro de um mockup de celular.
- **Tipografia:** Plus Jakarta Sans para texto e Space Grotesk como fonte oficial de display.
- **Base de UI:** 5 componentes próprios em `components/app`, 17 telas de produto e 51 primitivas Radix/shadcn disponíveis no repositório.
- **Estado atual:** tokens de cor e raio são centralizados; tipografia, espaçamento e tamanhos de componentes ainda usam muitos valores avulsos.

---

## 1. Foundations

### 1.1 Cores semânticas

Todos os valores usam `oklch`, definidos em `src/styles.css`. As cores abaixo são os tokens-fonte; as classes Tailwind correspondentes são geradas pelo bloco `@theme inline`.

| Papel                       | Token CSS                                           | Classe Tailwind                                         | Valor                    |
| --------------------------- | --------------------------------------------------- | ------------------------------------------------------- | ------------------------ |
| Canvas do app               | `--background`                                      | `bg-background`                                         | `oklch(0.16 0.008 250)`  |
| Canvas global mais profundo | —                                                   | `body`                                                  | `oklch(0.11 0.006 250)`  |
| Texto principal             | `--foreground`                                      | `text-foreground`                                       | `oklch(0.98 0 0)`        |
| Superfície / card           | `--surface`, `--card`, `--popover`                  | `bg-surface`, `bg-card`, `bg-popover`                   | `oklch(0.205 0.01 250)`  |
| Superfície elevada          | `--surface-2`, `--secondary`, `--muted`, `--accent` | `bg-surface-2`, `bg-secondary`, `bg-muted`, `bg-accent` | `oklch(0.255 0.012 250)` |
| Divisória / borda / input   | `--line`, `--border`, `--input`                     | `border-line`, `border-border`, `border-input`          | `oklch(0.29 0.012 250)`  |
| Texto secundário            | `--subtle`, `--muted-foreground`                    | `text-subtle`, `text-muted-foreground`                  | `oklch(0.63 0.017 250)`  |
| Ação, sucesso e progresso   | `--lime`, `--primary`, `--ring`                     | `bg-lime`, `text-lime`, `bg-primary`, `ring-ring`       | `oklch(0.87 0.21 126)`   |
| Estado hover do lima        | `--lime-hover`                                      | `bg-lime-hover`                                         | `oklch(0.82 0.2 126)`    |
| Texto sobre ação lima       | `--primary-foreground`                              | `text-primary-foreground`                               | `oklch(0.16 0.01 250)`   |
| Erro / destrutivo           | `--destructive`                                     | `bg-destructive`, `text-destructive`                    | `oklch(0.62 0.22 27)`    |
| Texto sobre erro            | `--destructive-foreground`                          | `text-destructive-foreground`                           | `oklch(0.98 0 0)`        |

Tokens auxiliares herdados e disponíveis: `card-foreground`, `popover-foreground`, `secondary-foreground`, `accent-foreground`, `sidebar`, `sidebar-foreground`, `sidebar-primary`, `sidebar-primary-foreground`, `sidebar-accent`, `sidebar-accent-foreground`, `sidebar-border` e `sidebar-ring`. Eles aparecem principalmente nas primitivas de UI, não nas telas de produto.

### 1.2 Paleta para gráficos

| Token       | Valor                       | Uso atual                                   |
| ----------- | --------------------------- | ------------------------------------------- |
| `--chart-1` | `oklch(0.87 0.21 126)`      | Lima; progresso e linha principal           |
| `--chart-2` | `oklch(0.6 0.118 184.704)`  | Disponível; não usado diretamente nas telas |
| `--chart-3` | `oklch(0.398 0.07 227.392)` | Disponível; não usado diretamente nas telas |
| `--chart-4` | `oklch(0.828 0.189 84.429)` | Disponível; não usado diretamente nas telas |
| `--chart-5` | `oklch(0.769 0.188 70.08)`  | Disponível; não usado diretamente nas telas |

`NeonLineChart` usa diretamente o lima e `line`, em vez de consumir `chart-1` e `chart-2`.

### 1.3 Tipografia

| Papel                | Token / classe                                                                             | Uso no produto                                      |
| -------------------- | ------------------------------------------------------------------------------------------ | --------------------------------------------------- |
| Fonte de interface   | `--font-sans`: Plus Jakarta Sans                                                           | Corpo, rótulos, botões e dados                      |
| Fonte de display     | `--font-display`: Space Grotesk                                                            | Aplicada a `h1` e `h2`; use `text-display` em destaques grandes sem semântica de heading |
| Hierarquia de peso   | `font-normal`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`, `font-black` | Corpo → destaque e títulos                          |
| Espaçamento de letra | `tracking-tight`, `tracking-wide`, `tracking-[0.18em]`                                     | Títulos, microtexto e marca                         |
| Entrelinha           | `leading-tight`, `leading-snug`, `leading-relaxed`, `leading-[1.12]`, `leading-[1.18]`     | Títulos, descrições e notas                         |

#### Escala encontrada

| Faixa          | Tamanhos em uso                                                                                                           | Papel observável                              |
| -------------- | ------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------- |
| Micro          | `10px`, `10.5px`, `11px`, `11.5px`, `12px`, `12.5px`                                                                      | navegação, metadados, notas, unidades e ajuda |
| Corpo compacto | `13px`, `13.5px`, `14px`, `14.5px`, `15px`, `17px`                                                                        | rótulos, inputs, linhas de lista e CTAs       |
| Título         | `text-base`, `text-lg`, `text-xl`, `text-2xl`, `text-3xl`; além de `22px`, `23px`, `26px`, `29px`, `30px`, `31px`, `38px` | seções e cabeçalhos de tela                   |

**Nota de sistema:** há 19 tamanhos tipográficos arbitrários. Para a próxima fase, condensar em uma escala nomeada — por exemplo: `caption`, `label`, `body`, `body-strong`, `section-title`, `screen-title`, `hero`.

### 1.4 Raios e forma

O token-base é `--radius: 1rem` (16 px).

| Token Tailwind | Cálculo / valor                       |
| -------------- | ------------------------------------- |
| `rounded-sm`   | 12 px                                 |
| `rounded-md`   | 14 px                                 |
| `rounded-lg`   | 16 px                                 |
| `rounded-xl`   | 20 px                                 |
| `rounded-2xl`  | 24 px                                 |
| `rounded-3xl`  | 28 px                                 |
| `rounded-4xl`  | 32 px                                 |
| `rounded-full` | cápsulas, tabs, avatares, indicadores |

Também existem raios locais: `1px`, `2px`, `3px`, `18px`, `20px`, `28px` e `44px`. O raio de `44px` pertence ao frame de celular em desktop; `18px` e `20px` aparecem em cartões especiais.

### 1.5 Elevação, transparência e efeitos

| Token / padrão                                                   | Definição / uso                                                        |
| ---------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-2xl` | elevação de cards, frame, CTAs e elementos flutuantes                  |
| `glow-lime`                                                      | sombra lima `0 0 24px -4px oklch(0.87 0.21 126 / 0.35)`; CTA principal |
| `border-line`, `border-white/10`, `border-lime/50`               | contorno funcional, técnico e de destaque                              |
| `bg-surface/60`, `bg-surface/95`, `backdrop-blur-md`             | navegação e painel com vidro escuro                                    |
| `mesh-pattern`                                                   | grade de 8 px, lima a 12% de opacidade                                 |
| `wireframe-grid`                                                 | grade de 16 px, lima a 9%, máscara radial                              |
| `wireframe-effect`                                               | avatar em escala de cinza, alto contraste e luminosidade               |
| `avatar-blend-bottom`, `avatar-blend-side`                       | máscaras de integração do avatar com o fundo                           |
| `pulse-ring`                                                     | pulso de 2,2 s para ponto corporal selecionável                        |
| `scan-line`                                                      | animação vertical de 4 s para efeito de escaneamento                   |

### 1.6 Espaço e dimensões

O projeto usa a escala padrão Tailwind para a maior parte de `p-*`, `m-*`, `gap-*`, `space-y-*` e `grid`. Não há tokens próprios de espaçamento declarados.

Valores locais importantes: frame `max-w-[400px]`, frame desktop `sm:h-[852px]`, hero corporal `h-[340px]`, gráficos `h-[120px]` ou `h-[170px]`, CTAs de `50–54px`, ícones principalmente `14–20px` e alvos de toque de voltar `32px`.

Há muitos valores posicionais específicos em pixels e porcentagens para o corpo mapeável e o avatar. Eles são **tokens de layout de ilustração**, não devem virar tokens globais de espaçamento.

---

## 2. Componentes próprios do produto

### 2.1 Shell, navegação e marca

| Componente      | Função                                                 | Variantes / regras                                                                         |
| --------------- | ------------------------------------------------------ | ------------------------------------------------------------------------------------------ |
| `PhoneFrame`    | shell responsivo que limita a experiência a um celular | largura máxima 400 px; altura total no mobile; 852 px, borda e raio 44 px no desktop       |
| `StatusBar`     | status bar visual simulada                             | hora, sinal, Wi‑Fi e bateria; texto 15 px semibold                                         |
| `EvoluaMark`    | símbolo SVG da marca                                   | 20 × 20 px, lima                                                                           |
| `BrandLogo`     | símbolo + nome da marca                                | gap 8 px; logotipo em 16 px extrabold, `tracking-[0.18em]`                                 |
| `BackButton`    | retorno por rota ou histórico                          | ícone ChevronLeft 20 px; alvo 32 × 32 px; `active:scale-95`                                |
| `TopNav`        | barra superior centralizada                            | back opcional, marca centralizada, espaçadores laterais                                    |
| `HomeIndicator` | indicador visual de gesto iOS                          | barra 128 × 4 px, branco a 30%                                                             |
| `BottomNav`     | navegação primária                                     | quatro destinos: Personagem, Medidas, Evolução, Perfil; ativo em lima, inativo em `subtle` |

### 2.2 Feedback, dados e visualização

| Componente      | Função                       | Tokens e comportamento                                                                 |
| --------------- | ---------------------------- | -------------------------------------------------------------------------------------- |
| `ProgressRing`  | progresso circular           | SVG 24 px; trilho `line`, progresso `lime`, stroke 2,5 px, extremidade arredondada     |
| `NeonLineChart` | gráfico de série temporal    | linha lima de 2,5 px, área com gradiente, grid tracejada; dados recebidos por `points` |
| `GoogleIcon`    | ícone de autenticação Google | SVG multicolorido 16 px                                                                |
| `AppleIcon`     | ícone de autenticação Apple  | SVG 16 px que herda `currentColor`                                                     |

### 2.3 Componentes locais dentro de telas

Estes componentes ainda não estão promovidos para `components/app`, mas repetem padrões que são candidatos a virar parte do sistema:

| Componente local | Onde                       | Papel                                                                      |
| ---------------- | -------------------------- | -------------------------------------------------------------------------- |
| `Field`          | `entrar.tsx`               | campo com ícone, rótulo e slot de input; é o padrão base para autenticação |
| `SocialButton`   | `entrar.tsx`               | botão de provedor social com ícone à esquerda                              |
| `MetricInput`    | `onboarding/estrutura.tsx` | entrada numérica de métrica com ícone e unidade                            |
| `Step`           | `onboarding/dados.tsx`     | segmento do indicador de etapas; ativo em lima, pendente em `line`         |
| `Row`            | medidas, comparação        | linha de métrica ou comparação; há três implementações diferentes          |
| `SummaryBox`     | `medidas/cintura.tsx`      | cartão compacto de estatística                                             |

---

## 3. Formulários e controles

### 3.1 Campos presentes

| Controle                  | Telas                      | Estado visual atual                                           |
| ------------------------- | -------------------------- | ------------------------------------------------------------- |
| Texto                     | criar conta; dados básicos | fundo `surface`, borda `line`, rótulo compacto                |
| E-mail                    | entrar; criar conta        | mesmo padrão de campo com ícone Mail                          |
| Senha com revelar/ocultar | entrar; criar conta        | ícone Eye/EyeOff, botão auxiliar dentro do campo              |
| Data de nascimento        | dados básicos              | campo de texto mascarado visualmente; ainda não é date picker |
| Seleção de gênero         | dados básicos              | quatro botões de escolha; selecionado usa borda e texto lima  |
| Métrica numérica          | estrutura inicial; medidas | `inputMode="decimal"`, unidade visível (`cm`, `kg`, `m`)      |
| Range                     | comparação corporal        | classe `range-lime`, trilho 4 px, thumb 16 px, brilho lima    |
| Edição in-place           | medidas                    | botão alterna leitura para inputs; ação “Editar” / “Concluir” |

### 3.2 Botões

| Tipo              | Aparência                                                                | Uso                                                        |
| ----------------- | ------------------------------------------------------------------------ | ---------------------------------------------------------- |
| Primário          | `bg-lime`, texto escuro, peso bold/extrabold, frequentemente `glow-lime` | avançar, salvar, concluir, criar conta                     |
| Secundário        | `bg-surface`, borda `line`, texto claro                                  | entrar, comparação, ajustes e ações de lista               |
| Terciário / link  | texto lima ou `subtle`; sem caixa                                        | esqueci senha, voltar ao personagem, alternar autenticação |
| Ícone             | área compacta, texto `subtle` / `foreground`                             | voltar, notificações, mostrar senha                        |
| Segmented control | cápsula com seleção em `surface-2` / lima                                | frente-costas, visão, período, gênero                      |

Estados implementados: `hover`, `active:scale-[0.98–0.99]`, ativo/inativo e revelar/ocultar senha. Estados que ainda não existem de forma consistente: `disabled`, erro de campo, sucesso de validação, loading, vazio e feedback assíncrono.

---

## 4. Blocos e padrões de tela

| Bloco                    | Onde aparece                        | Construção visual                                                                 |
| ------------------------ | ----------------------------------- | --------------------------------------------------------------------------------- |
| Hero de boas-vindas      | `/`                                 | marca, título grande, proposta de valor, três benefícios, CTAs empilhados         |
| Cabeçalho de tela        | quase todas as rotas                | status bar + marca ou voltar + título + subtítulo                                 |
| Card corporal / avatar   | home, onboarding, mapeamento        | superfície escura com avatar recortado, gradientes, marcador e progresso          |
| Card de medida           | home, medidas, evolução             | borda `line`, raio 2xl, valor forte, unidade e ChevronRight                       |
| Lista configurável       | perfil, medidas                     | linhas de 48–56 px com rótulo, valor/ícone e affordance de navegação              |
| Indicador de etapas      | onboarding                          | pequenos segmentos lineares, um ativo em lima                                     |
| Mapa corporal            | `/mapear`                           | avatar central, marcadores posicionados, labels em cápsulas e troca frente/costas |
| Tela de medição regional | abdômen                             | tabs de visualização, bandas posicionadas e CTA para salvar                       |
| Confirmação              | salvo, concluído, personagem criado | check lima, resumo do resultado e CTA de próximo passo                            |
| Série e comparação       | evolução, cintura, braço            | gráfico de linha, métricas em cards e slider temporal                             |

---

## 5. Ícones e ilustração

- Biblioteca: `lucide-react`, traço usual entre `1.8` e `2.5`.
- Ícones recorrentes: ChevronRight/Left, Check, Eye/EyeOff, User/UserRound, Ruler, Scale, Bell e Info.
- Ícones de domínio: PersonStanding, Shirt, BarChart3, ClipboardList, Target, Trophy, TrendingUp/Down.
- Imagem de produto: 16 JPEGs de avatar (gêneros/apresentações e biotipos), aplicados com `object-cover`, gradientes e máscaras CSS.

---

## 6. Primitivas de UI presentes no repositório

São componentes Radix/shadcn disponíveis em `src/components/ui`. **Disponíveis não significa usados pelo PWA atual.**

| Categoria             | Primitivas disponíveis                                                                                                     |
| --------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| Ação e seleção        | Button, Toggle, Toggle Group, Checkbox, Radio Group, Switch, Slider, Input OTP                                             |
| Formulários           | Form, Input, Label, Select, Textarea, Calendar                                                                             |
| Sobreposição          | Alert Dialog, Dialog, Drawer, Sheet, Popover, Hover Card, Tooltip, Sonner                                                  |
| Navegação e estrutura | Accordion, Breadcrumb, Collapsible, Menubar, Navigation Menu, Pagination, Sidebar, Tabs, Resizable, Scroll Area, Separator |
| Dados e feedback      | Alert, Avatar, Badge, Card, Chart, Progress, Skeleton, Table                                                               |
| Descoberta / comandos | Carousel, Command, Context Menu, Dropdown Menu, Aspect Ratio                                                               |

As primitivas importadas pelo código hoje são: `Button`, `Dialog`, `Input`, `Label`, `Separator`, `Sheet`, `Skeleton`, `Toggle` e `Tooltip`. A maior parte dessas importações é de infraestrutura de erro, painel lateral ou UI gerada, e não do fluxo principal do produto.

---

## 7. Inventário de telas que consomem o sistema

| Jornada    | Telas                                               |
| ---------- | --------------------------------------------------- |
| Entrada    | boas-vindas, entrar, criar conta                    |
| Onboarding | dados básicos, estrutura inicial, personagem criado |
| Núcleo     | home/personagem, perfil                             |
| Medidas    | índice, braço direito, cintura                      |
| Mapeamento | seleção de região, abdômen, salvo, concluído        |
| Evolução   | índice, comparação corporal                         |

Total: **17 telas de produto**, além de shell, not-found e tratamento de erro.

---

## 8. Decisões para a evolução RPG

Estas são as prioridades de design-system antes de ampliar a interface para gamificação:

1. **Promover padrões locais:** unificar `Field`, `MetricInput`, `Row`, `SummaryBox`, `Step` e os CTAs em componentes de `components/app`.
2. **Nomear a escala tipográfica:** eliminar a dependência de muitos `text-[npx]` e fixar papéis semânticos.
3. **Criar estados de jogo:** XP, nível, missão, streak, recompensa, bloqueado, conquistado, alerta e falha — todos com tokens e componentes definidos.
4. **Separar progressos:** manter lima para ação/progresso pessoal; reservar cores adicionais de gráfico ou status para raridade, desafio e risco, evitando usar apenas verde para tudo.
5. **Documentar acessibilidade:** alvos de toque mínimos, contraste, foco visível, redução de movimento e equivalentes textuais para gráficos/avatares.
6. **Isolar layout de ilustração:** pontos e posicionamentos do mapa corporal devem ser dados de domínio, não classes espalhadas na tela.

## Fonte primária

- Tokens e utilitários: `apps/pwa/src/styles.css`
- Shell e navegação: `apps/pwa/src/components/app/*`
- Primitivas: `apps/pwa/src/components/ui/*`
- Implementações de tela: `apps/pwa/src/routes/*`
