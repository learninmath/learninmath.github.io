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

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite de type $u_{n+1}=f(u_n)$, on utilise, pour montrer l'**hérédité**, le fait que $f(I)\subset I$. Ce qui donne pour tout $n\geq p$ que:
><br>
>$u_n\in I\implies f(u_n)\in f(I)\implies u_{n+1}\in I$

### Monotonie d'une suite

Pour déterminer la monotonie d'une suite $(u_n)_{n\geq p}$, on répond généralement au deux questions suivantes:
- Soit $n\geq p$, calculer et factoriser $u_{n+1}-u_n$.
- Étudier le signe de l'expression obtenue et déduire:
    - Si $\forall n\geq p:\ u_{n+1}\geq u_n$, alors la suite $(u_n)_{n\geq p}$ est croissante.
    - Si $\forall n\geq p:\ u_{n+1}\leq u_n$, alors la suite $(u_n)_{n\geq p}$ est décroissante.

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite de type $u_{n+1}=f(u_n)$, on utilise, pour déterminer sa monotonie, la comparaison entre $f(x)$ et $x$, pour tout $x$ de $I$.
>- Si $\forall n\geq p:\ u_n\in I$ et $\forall x\in I:\ f(x)\geq x$, alors $\forall n\geq p:\ u_{n+1}=f(u_n)\geq u_n$.
>- Si $\forall n\geq p:\ u_n\in I$ et $\forall x\in I:\ f(x)\leq x$, alors $\forall n\geq p:\ u_{n+1}=f(u_n)\leq u_n$.

### Limites des quelques suites définies explicitement

#### Suite de terme général $\boldsymbol{n^a;\ (a\in\mathbb{Q}^\ast)}$

On a pour tout $a$ de $\mathbb{Q}^\ast$:
- Si $a>0$, alors $\lim n^a=+\infty$.
- Si $a<0$, alors $\lim n^a=0$.

En particulier, pour tout $p$ de $\mathbb{N}^\ast$:
- $\lim n^p=+\infty$ et $\lim \frac1{n^p}=0$.
- $\lim \sqrt[p]{n}=+\infty$ et $\lim \frac1{\sqrt[p]{n}}=0$.

Voici un exemple de tableau :

| Entête 1 | Entête 2 |
|---|---|
| Cellule 1 | Cellule 2 |
| Cellule 3 | Cellule 4 |

### Section 1.3: Encore des maths

Une formule en bloc :

$$ E = mc^2 $$
