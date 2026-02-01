---
layout: chapitre
chapter: 4 
title: "Suites numériques et limites"
permalink: /2bpc/chapitre4/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/4.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Raisonnement par récurrence

Soit \\(p\\) un entier et \\(I\\) un intervalle.

On considère la suite \\((u_n)_{n\geq p}\\).

Pour démontrer par récurrence la proposition \\(\forall n\geq p: u_n\in I\\), on répond au deux questions suivantes:
 1) **Initialisation**: Vérifier que pour \\(n=p\\), on a bien \\(u_p\in I\\).
 2) **Hérédité**: Soit \\(n\geq p\\), on suppose que \\(u_n\in I\\), montrer que \\(u_{n+1}\in I\\).

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite définie par \\(u_{n+1}=f(u_n)\\), on utilise, pour établir l'**hérédité**, le fait que \\(f(I)\subset I\\). Ainsi pour tout \\(n\geq p\\) que:
>\\[u_n\in I\implies f(u_n)\in f(I)\implies u_{n+1}\in I\\]

### Monotonie d'une suite

Pour déterminer la monotonie d'une suite \\((u_n)_{n\geq p}\\), on procède généralement de la manière suivante:
1) Soit \\(n\geq p\\), calculer puis factoriser \\(u_{n+1}-u_n\\).
2) Étudier le signe de l'expression obtenue et en déduire:
    - si \\(\forall n\geq p:\ u_{n+1}\geq u_n\\), alors la suite est **croissante**.
    - si \\(\forall n\geq p:\ u_{n+1}\leq u_n\\), alors la suite est **décroissante**.

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite définie par \\(u_{n+1}=f(u_n)\\), on peut déterminer sa monotonie en comparant \\(f(x)\\) et \\(x\\) sur un intervalle \\(I\\).
>- Si \\(\forall n\geq p:\ u_n\in I\\) et \\(\forall x\in I:\ f(x)\geq x\\), alors \\(\forall n\geq p:\ u_{n+1}=f(u_n)\geq u_n\\) et la suite est croissante.
>- Si \\(\forall n\geq p:\ u_n\in I\\) et \\(\forall x\in I:\ f(x)\leq x\\), alors \\(\forall n\geq p:\ u_{n+1}=f(u_n)\leq u_n\\) et la suite est décroissante.

### Limites de quelques suites

#### Convergence et divergence

- Une suite \\((u_n)\_{n\geq p}\\) est dite **convergente** si sa limite \\(\lim u_n\\) existe et est un réel.
- Elle dite **divergente** sinon,, c’est-à-dire si elle n'admet pas de limite réelle.

#### Condition suffisante de convergence

Si une suite \\((u_n)\_{n\geq p}\\) est:
- croissante et majorée,
- ou décroissante et minorée,

alors elle est convergente.

#### Critères de convergence

##### Critère des gendarmes

Si \\((u_n)\_{n\geq p}\\), \\((v_n)\_{n\geq p}\\) et \\((w_n)\_{n\geq p}\\) sont des suites telles que:
- \\(\forall n\geq p:\ v_n\leq u_n\leq w_n\\),
- \\(\lim v_n=\lim w_n=l\\), où \\(l\\) est un réel,

alors \\(\lim u_n=l\\).

##### Critères de comparaison

- Si \\((u_n)\_{n\geq p}\\) et \\((v_n)\_{n\geq p}\\) sont deux suites telles que:
    - \\(\forall n\geq p:\ u_n\leq v_n\\),
    - \\(\lim v_n=-\infty\\),

  alors \\(\lim u_n=-\infty\\).
- Si \\((u_n)\_{n\geq p}\\) et \\((v_n)\_{n\geq p}\\) sont deux suites telles que:
    - \\(\forall n\geq p:\ u_n\geq v_n\\),
    - \\(\lim v_n=+\infty\\),

  alors \\(\lim u_n=+\infty\\).

##### Critère de la valeur absolue

Si \\((u_n)\_{n\geq p}\\) et \\((v_n)\_{n\geq p}\\) sont deux suites telles que:
- \\(\forall n\geq p:\ |u_n-l|\leq v_n\\), où \\(l\\) est un réel,
- \\(\lim v_n=0\\),

alors \\(\lim u_n=l\\).

#### Suite de terme général \\(\boldsymbol{n^a;\ (a\in\mathbb{Q}^\ast)}\\)

Pour tout \\(a\\) de \\(\mathbb{Q}^\ast\\):
- Si \\(a>0\\), alors \\(\lim n^a=+\infty\\) ;
- Si \\(a<0\\), alors \\(\lim n^a=0\\).

En particulier, pour tout \\(p\\) de \\(\mathbb{N}^\ast\\):
- \\(\lim n^p=+\infty\\) et \\(\lim \frac1{n^p}=0\\) ;
- \\(\lim \sqrt[p]{n}=+\infty\\) et \\(\lim \frac1{\sqrt[p]{n}}=0\\).

#### Suite de terme général \\(\boldsymbol{a^n;\ (a\in\mathbb{R}^\ast\smallsetminus\\{1\\})}\\)

Pour tout \\(a\\) de \\(\mathbb{R}^\ast\smallsetminus\\{1\\}\\):
- Si \\(a>1\\), alors \\(\lim a^n=+\infty\\) ;
- Si \\(-1<a<1\\), alors \\(\lim a^0=0\\) ;
- Si \\(a\leq -1\\), la suite de terme général \\(a^n\\) n'admet pas de limite.

#### Suite de type \\(\boldsymbol{u_n=f(v_n)}\\)

Si \\((u_n)\_{n\geq p}\\) et \\((v_n)\_{n\geq p}\\) sont deux suites, et si \\(f\\) est une fonction numérique telle que:
- \\(\forall n\geq p:\ u_n=f(v_n)\\),
- \\(\lim v_n=l\\),
- \\(f\\) est définie et continue en \\(l\\),

alors \\(\lim u_n=f(l)\\)

#### Suite de type \\(\boldsymbol{u_{n+1}=f(u_n)}\\)

Si \\((u_n)\_{n\geq p}\\) est une suite, et si \\(f\\) est une fonction définie sur un intervalle $I$ telle que:
- \\(\forall n\geq p:\ u_n\in I\ \text{et}\ u_{n+1}=f(u_n)\\),
- la suite \\((u_n)\_{n\geq p}\\) est convergente,
- la fonction $f$ est continue sur $I$,
- \\(f(I)\subset I\\),

alors \\(\lim u_n\\) est l'unique solution de l'équation \\(f(x)=x\\) dans \\(I\\).