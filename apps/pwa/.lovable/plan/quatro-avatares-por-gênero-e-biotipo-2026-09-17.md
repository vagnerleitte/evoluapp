# Quatro avatares por gênero e biotipo

## Objetivo

Ampliar o protótipo para usar quatro personagens: masculino e feminino “em forma”, já existentes, mais masculino e feminino “acima do peso”. O biotipo será definido automaticamente pelas medidas de altura e peso.

## Implementação

- Gerar conjuntos visuais coerentes para os novos personagens masculino e feminino acima do peso, mantendo o mesmo estilo 3D e os enquadramentos usados nas telas atuais.
- Salvar altura e peso informados no cadastro e calcular o IMC para selecionar o biotipo; IMC a partir de 25 usará o personagem acima do peso.
- Manter os personagens atuais para IMC abaixo de 25 e como padrão enquanto ainda não houver medidas válidas.
- Combinar gênero e biotipo na escolha centralizada de imagens, para que todas as telas já conectadas ao personagem mudem automaticamente.
- Para “Outro” e “Prefiro não informar”, preservar os personagens neutros atuais, sem criar novas variações fora do escopo pedido.
- Tornar os campos de altura e peso editáveis e atualizar a prévia do personagem imediatamente conforme os valores mudarem.

## Validação

- Testar no fluxo móvel as quatro combinações: masculino/feminino, em forma/acima do peso.
- Confirmar persistência após avançar, recarregar e abrir as telas de início, medidas, mapeamento, comparação e perfil.
- Conferir carregamento das imagens, ausência de erros e integridade visual nos principais enquadramentos.

## Detalhes técnicos

- Persistência local, seguindo a solução já usada para gênero no protótipo.
- Normalização de entradas brasileiras com vírgula decimal.
- Seleção derivada de `peso / altura²`, sem pedir uma escolha adicional ao usuário.
