---
layout: chapitre
chapter: 6
title: "Polynômes"
permalink: /tcs/chapitre6/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/tcs/6.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Égalité de polynômes

Si on considère les polynômes:
- \\(P(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_1x+a_0\\),
- \\(Q(x)=b_nx^n+b_{n-1}x^{n-1}+\ldots+b_1x+b_0\\),

alors:

\\(P(x)=Q(x)\\), si et seulement si \\(a_n=b_n\\), \\(a_{n-1}=b_{n-1}\\), \\(\ldots\\), \\(a_1=b_1\\) et \\(a_0=b_0\\).

### Division euclidienne

Soient \\(n\\) un entier naturel et \\(a\\) un réel.

La division euclidienne d'un polynôme \\(P(x)\\) de degré \\(n\\) par un binôme \\(x-a\\) donne:
- pour **quotient**, un unique polynôme \\(Q(x)\\) de degré \\(n-1\\) ;
- pour **reste**, le nombre réel \\(P(a)\\).

On peut alors écrire le polynôme \\(P(x)\\) sous la forme \\(P(x)=(x-a)Q(x)+P(a)\\).

### Racine et Factorisation

Soient \\(P(x)\\) un polynôme et \\(a\\) un réel.
- Le réel \\(a\\) est une **racine** ou un **zéro** de \\(P(x)\\), si et seulement si \\(P(a)=0\\).
- Il existe un polynôme \\(Q(x)\\) tel que \\(P(x)=(x-a)Q(x)\\), si et seulement si \\(a\\) est une racine de \\(P(x)\\).
- Le polynôme\\(P(x)\\) est divisible par le binôme \\(x-a\\) si et seulement si \\(a\\) est une racine de \\(P(x)\\).

> [!IMPORTANT] <strong>Important</strong>
> Pour une suite définie par \\(u_{n+1}=f(u_n)\\), on utilise, pour établir l'**hérédité**, le fait que \\(f(I)\subset I\\). Ainsi pour tout \\(n\geq p\\) que:
>\\[u_n\in I\implies f(u_n)\in f(I)\implies u_{n+1}\in I\\]

### Méthode de Hörner

Soit \\(\alpha\\) un réel. Si on considère le polynôme \\(P(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_1x+a_0\\).
- La Méthode de Hörner consiste à calculer \\(P(\alpha)\\) en effectuant un nombre minimal d’opérations.
- La formule utilisée pour cela est \\(P(x)=(\ldots((a_nx+a_{n-1})x+a_{n-2})x+\ldots+a_1)x+a_0\\).
- Afin de faciliter le calcul, on utilise un **tableau de Hörner**, qui permet d’organiser les coefficients du polynôme et d’effectuer les calculs successifs de manière simple et efficace.
- Cette méthode permet également d’obtenir les coefficients du polynôme quotient de la division euclidienne de \\(P(x)\\) par le binôme \\(x-\alpha\\).

## Exercices résolus

<!-- ### Exercice 4 de la série -->