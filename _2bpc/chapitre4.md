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
Soit \\(p\\) un entier et \\(I\\) un intervalle.

On considère la suite \\((u_n)_{n\geq p}\\).

Pour montrer par récurrence la proposition \\(\forall n\geq p: u_n\in I\\), on répond au deux questions suivantes:
 - **Initialisation**: Vérifier que pour \\(n=p\\), on \\(u_p\in I\\).
 - **Hérédité**: Soit \\(n\geq p\\), on suppose que \\(u_n\in I\\), montrer que \\(u_{n+1}\in I\\).

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite de type \\(u_{n+1}=f(u_n)\\), on utilise, pour montrer l'**hérédité**, le fait que \\(f(I)\subset I\\). Ce qui donne pour tout \\(n\geq p\\) que:
><br>
>\\)u_n\in I\implies f(u_n)\in f(I)\implies u_{n+1}\in I\\)

### Monotonie d'une suite

Pour déterminer la monotonie d'une suite \\((u_n)_{n\geq p}\\), on répond généralement au deux questions suivantes:
- Soit \\(n\geq p\\), calculer et factoriser \\(u_{n+1}-u_n\\).
- Étudier le signe de l'expression obtenue et déduire:
    - Si \\(\forall n\geq p:\ u_{n+1}\geq u_n\\), alors la suite \\((u_n)_{n\geq p}\\) est croissante.
    - Si \\(\forall n\geq p:\ u_{n+1}\leq u_n\\), alors la suite \\((u_n)_{n\geq p}\\) est décroissante.

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite de type \\(u_{n+1}=f(u_n)\\), on utilise, pour déterminer sa monotonie, la comparaison entre \\(f(x)\\) et \\(x\\), pour tout \\(x\\) de \\(I\\).
>- Si \\(\forall n\geq p:\ u_n\in I\\) et \\(\forall x\in I:\ f(x)\geq x\\), alors \\(\forall n\geq p:\ u_{n+1}=f(u_n)\geq u_n\\).
>- Si \\(\forall n\geq p:\ u_n\in I\\) et \\(\forall x\in I:\ f(x)\leq x\\), alors \\(\forall n\geq p:\ u_{n+1}=f(u_n)\leq u_n\\).

### Limites de quelques suites

#### Suite de terme général \\(\boldsymbol{n^a;\ (a\in\mathbb{Q}^\ast)}\\)

On a pour tout \\(a\\) de \\(\mathbb{Q}^\ast\\):
- Si \\(a>0\\), alors \\(\lim n^a=+\infty\\).
- Si \\(a<0\\), alors \\(\lim n^a=0\\).

En particulier, pour tout \\(p\\) de \\(\mathbb{N}^\ast\\):
- \\(\lim n^p=+\infty\\) et \\(\lim \frac1{n^p}=0\\).
- \\(\lim \sqrt[p]{n}=+\infty\\) et \\(\lim \frac1{\sqrt[p]{n}}=0\\).

#### Suite de terme général \\(\boldsymbol{a^n;\ (a\in\mathbb{R}^\ast\smallsetminus\\{1\\})}\\)

On a pour tout \\(a\\) de \\(\mathbb{R}^\ast\smallsetminus\\{1\\}\\):
- Si \\(a>1\\), alors \\(\lim a^n=+\infty\\).
- Si \\(-1<a<1\\), alors \\(\lim a^0=0\\).
- Si \\(a\leq -1\\), la suite de terme général \\(a^n\\) n'admet pas de limite.

#### Suite de type \\(\boldsymbol{u_n=f(v_n)}\\)

Si \\((u_n)\_{n\geq p}\\) et \\((v_n)\_{n\geq p}\\) sont deux suites, et \\(f\\) est une fonction numérique tels que:
- \\(\forall n\geq p:\ u_n=f(v_n)\\).
- \\(\lim v_n=l\\).
- \\(f\\) est définie et est continue en \\(l\\).

Alors \\(\lim u_n=f(l)\\)

#### Suite de type \\(\boldsymbol{u_{n+1}=f(u_n)}\\)

Si \\((u_n)\_{n\geq p}\\) est une suite, et \\(f\\) est une fonction définie sur un intervalle $I$ tels que:
- \\(\forall n\geq p:\ u_{n+1}=f(u_n)\\).
- la suite \\((u_n)\_{n\geq p}\\) est **convergente**.
- la fonction $f$ est continue sur $I$.
- \\(f(I)\subset I\\).

Alors \\(\lim u_n\\) est l'unique solution de l'équation \\(f(x)=x\\) dans \\(I\\).
