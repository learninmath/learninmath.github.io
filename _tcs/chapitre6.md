---
layout: chapitre
chapter: 6
title: "Polynômes"
permalink: /tcs/chapitre6/
---

## Documents PDF à remplir

Ouvrir le cours PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/tcs/6.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Ouvrir la série d'exercices PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/tcs/TD6.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Égalité de polynômes

Si on considère les polynômes:
- $P(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_1x+a_0$,
- $Q(x)=b_nx^n+b_{n-1}x^{n-1}+\ldots+b_1x+b_0$,

alors:

$P(x)=Q(x)$, si et seulement si $a_n=b_n$, $a_{n-1}=b_{n-1}$, $\ldots$, $a_1=b_1$ et $a_0=b_0$.

### Division euclidienne

Soient $n$ un entier naturel et $a$ un réel.

La division euclidienne d'un polynôme $P(x)$ de degré $n$ par un binôme $x-a$ donne:
- pour **quotient**, un unique polynôme $Q(x)$ de degré $n-1$ ;
- pour **reste**, le nombre réel $P(a)$.

On peut alors écrire le polynôme $P(x)$ sous la forme $P(x)=(x-a)Q(x)+P(a)$.

### Racine et Factorisation

Soient $P(x)$ un polynôme et $a$ un réel.
- Le réel $a$ est une **racine** ou un **zéro** de $P(x)$, si et seulement si $P(a)=0$.
- Il existe un polynôme $Q(x)$ tel que $P(x)=(x-a)Q(x)$, si et seulement si $a$ est une racine de $P(x)$.
- Le polynôme$P(x)$ est divisible par le binôme $x-a$ si et seulement si $a$ est une racine de $P(x)$.

> [!IMPORTANT] <strong>Important</strong>
> Pour Factoriser un polynôme $P(x)$, on procède de la manière suivante:
>1. Chercher une première racine $a_1$ de $P(x)$.
>2. Déterminer par la division euclidienne le polynôme $Q_1(x)$ tel que $P(x)=(x-a_1)Q_1(x)$.
>3. Chercher une deuxième racine $a_2$ de $Q_1$, qui est évidemment une racine de $P(x)$.
>4. Déterminer par la division euclidienne le polynôme $Q_2(x)$ tel que $Q_1(x)=(x-a_2)Q_2(x)$.
>5. Refaire ls processus jusqu'à trouver la dernière racine $a_{\text{final}}$ de $P(x)$, et déterminer le dernier polynôme $Q_{\text{final}}(x)$. 
>6. La factorisation du polynôme $P(x)$ s'écrit alors $P(x)=(x-a_1)(x-a_2)\cdots(x-a_{\text{final}})Q_{\text{final}}(x)$.
>7. La plupart du temps on obtient que $Q_{\text{final}}(x)=k$ et donc $P(x)=k(x-a_1)(x-a_2)\cdots(x-a_{\text{final}})$, où $k$ est un réel.

### Méthode de Hörner

Soit $\alpha$ un réel. Si on considère le polynôme $P(x)=a_nx^n+a_{n-1}x^{n-1}+\ldots+a_1x+a_0$.
- La Méthode de Hörner consiste à calculer $P(\alpha)$ en effectuant un nombre minimal d'opérations.
- La formule utilisée pour cela est $P(x)=(\ldots((a_nx+a_{n-1})x+a_{n-2})x+\ldots+a_1)x+a_0$.
- Afin de faciliter le calcul, on utilise un **tableau de Hörner**, qui permet d'organiser les coefficients du polynôme et d'effectuer les calculs successifs de manière simple et efficace.
- Cette méthode permet également d'obtenir les coefficients du polynôme quotient de la division euclidienne de $P(x)$ par le binôme $x-\alpha$.

## Exercices résolus

### Exercice 7 de la série

On considère le polynôme $P(x)=x^3-7x+6$.

#### 1. Calculer $P(1)$ et $P(−3)$.

On a $P(x)=x^3-7x+6$.

Alors:

$$
\begin{array}{rcl}
    P(1) & = & 1^3-7\times 1+6 \\
         & = & 1-7+6 \\
         & = & -6+6 \\
         & = & 0.
\end{array}
$$

Et

$$
\begin{array}{rcl}
    P(-3) & = & (-3)^3-7\times (-3)+6 \\
         & = & -27+21+6 \\
         & = & -27+27 \\
         & = & 0.
\end{array}
$$

D'où $P(1)=0$ et $P(-3)=0$.

#### 2. Factoriser $P(x)$ en produit de binômes du premier degré.

On a $P(1)=0$ et $P(-3)=0$, alors $1$ et $-3$ sont des racines de $P(x)$, donc $P(x)$ est divisible à la fois par $x-1$ et par $x+3$.

Ainsi il existe un polynôme $Q(x)$ de degré $1$ (car $P(x)$ est de degré $3$) tel que $P(x)=(x-1)(x+3)Q(x)$. Il suffira alors qu'on détermine $Q(x)$.

on divise d'abord $P(x)$ par $(x-1)$.

$$
\begin{array}{cccccc}
& & x^3 & \cdot & -7x & +6 & \\
- & \left(\right. & x^3 & -x^2 & & & \left.\right) \\
\hline
& & & x^2 & -7x & \\
- & \left(\right. & & x^2 & -x & & \left.\right) \\
\hline
& & & & -6x & +6 \\
- & \left(\right. & & & -6x & +6 & \left.\right) \\
\hline
& & & & & 0
\end{array}
\begin{array}{c}
\begin{array}{|cccc}
&& x & -1 \\
\hline
&x^2 & +x & -6 \\
\\ \\ \\ \\ \\
\end{array}
\end{array}
$$

Ensuite, on divise $x^2+x-6$ par $x+3$ :

$$
\begin{array}{cccccc}
& & x^2 & +x & -6 \\
- & \left(\right. & x^2 & +3x & & \left.\right) \\
\hline
& & & -2x & -6 \\
- & \left(\right. & & -2x & -6 & \left.\right) \\
\hline
& & & & 0
\end{array}
\begin{array}{c}
\begin{array}{|ccc}
& x & +3 \\
\hline
& x & -2 \\
\\ \\ \\
\end{array}
\end{array}
$$

On a donc $Q(x)=x-2$.

D'où $P(x)=(x+1)(x+3)(x-2)$.