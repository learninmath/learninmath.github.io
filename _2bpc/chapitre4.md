---
layout: chapitre
chapter: 4 
title: "Suites numériques et limites"
permalink: /2bpc/chapitre4/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur <a href="{{ site.url }}{{ site.baseurl }}/2bpc/4.pdf" target="_blank"><i class="fa-solid fa-file-pdf"></i></a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## Méthodes et techniques

### Raisonnement par récurrence
Soit $p$ un entier et $I$ un intervalle.

On considère la suite $(u_n)_{n\geq p}$.

Pour montrer par récurrence la proposition $\forall n\geq p: u_n\in I$, on répond au deux questions suivantes:

 - **Initialisation**: Vérifier que pour $n=p$, on $u_p\in I$.
 - **Hérédité**: Soit $n\geq p$, on suppose que $u_n\in I$, montrer que $u_{n+1}\in I$.

{% include important.html
content="Pour une suite de type $u_{n+1}=f(u_n)$, on utilise, pour montrer l'**hérédité**, le fait que $f(I)\subset I$. Ce qui donne pour tout $n\geq p$ que: 
$u_n\in I\implies f(u_n)\in f(I)\implies u_{n+1}\in I$. "
type="primary"%}

### Monotonie d'une suite

#### Méthode générale

Pour déterminer la monotonie d'une suite $(u_n)_{n\geq p}$, on répond aux deux questions suivantes:

- Soit $n\geq p$, calculer et factoriser $u_{n+1}-u_n$.
- Étudier le signe de l'expression obtenue et déduire:
    - Si $\forall n\geq p:\ u_{n+1}\geq u_n$, alors la suite $(u_n)_{n\geq p}$ est croissante.
    - Si $\forall n\geq p:\ u_{n+1}\leq u_n$, alors la suite $(u_n)_{n\geq p}$ est décroissante.

{% include important.html
content="

Pour une suite de type $u_{n+1}=f(u_n)$, on utilise, pour déterminer sa monotonie, la comparaison entre $f(x)$ et $x$, pour tout $x$ de $I$.

- Ce qui donne pour tout $n\geq p$ que:

"
type="primary"%}

#### Méthode pour les suite de type $\boldsymbol{u_{n+1}=f(u_n)}$

Voici un exemple de tableau :

| Entête 1 | Entête 2 |
|---|---|
| Cellule 1 | Cellule 2 |
| Cellule 3 | Cellule 4 |

### Section 1.3: Encore des maths

Une formule en bloc :

$$ E = mc^2 $$
