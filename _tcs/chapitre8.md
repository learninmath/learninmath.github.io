---
layout: chapitre
chapter: 8
title: "Equations inéquations et systèmes"
permalink: /tcs/chapitre8/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/tcs/8.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Racine et signe d'un binôme

On considère le binôme $ax+b$, où $a$ et $b$ sont des réels.

#### Racine d'un binôme

Une racine du binôme $ax+b$ est un réel $x$ vérifiant l'équation $ax+b=0$.
* Si $a\neq0$, ce binôme admet une seule racine $x_0=-\frac{b}{a}$.
* Si $a=0$ et $b=0$, tous les nombres réels sont des racines de ce binôme.
* Si $a=0$ et $b\neq0$, cette équation n'admet pas de racine.

#### Équation de premier degré à une inconnue
On considère l'équation $ax+b=0$.
* Si $a\neq0$, l'équation admet une seule solution $x_0$, et on écrit $S=\left\lbrace x_0 \right\rbrace$.
* Si $a=0$ et $b=0$, l'équation admet une infinité de solutions, et on écrit $S=\mathbb{R}$.
* Si $a=0$ et $b\neq0$, cette équation n'admet pas de solution, et on écrit $S=\emptyset$.

#### Signe d'un binôme de premier degré

* Si $a>0$, le tableau de signe de $ax+b$ est le suivant:

$$
\begin{array}{c|lcccr}
    x & -\infty & & x_0 & & +\infty \\
    \hline
    ax+b & & - & 0 & + & 
\end{array}
$$

* Si $a<0$, le tableau de signe de $ax+b$ est le suivant:

$$
\begin{array}{c|lcccr}
    x & -\infty & & x_0 & & +\infty \\
    \hline
    ax+b & & + & 0 & - & 
\end{array}
$$

#### Inéquation de premier degré à une inconnue

Résoudre une inéquation sous l'une des formes $ax+b\geq 0$, $ax+b>0$, $ax+b\leq 0$ ou $ax+b<0$, revient à isoler $x$ en faisant attention au signe de $a$, et traduire le résultat en intervalle.

### Racines, factorisation et signe d'un trinôme

On considère le trinôme $ax^2+bx+c$, où $a$, $b$ et $c$ sont des réels avec $a\neq 0$.

#### Discriminant d'un trinôme de second degré

le discriminant du trinôme $ax^2+bx+c$ est le nombre réel noté $\Delta$ défini par:
$$
\Delta=b^2-4ac.
$$

#### Racines d'un trinôme de second degré

Une racine du binôme $ax^2+bx+c$ est un réel $x$ vérifiant l'équation $ax^2+bx+c=0$.
* Si $\Delta>0$, ce trinôme admet deux racines: $x_1=\frac{-b+\sqrt{\Delta}}{2a}$ et $x_2=\frac{-b-\sqrt{\Delta}}{2a}$.
* Si $\Delta=0$, ce trinôme admet une seule racine: $x_0=\frac{-b}{2a}$.
* Si $\Delta<0$, ce trinôme n'admet pas de racine.

#### Factorisation d'un trinôme de second degré

* Si $\Delta>0$, ce trinôme admet deux racines $x_1$ et $x_2$, et on a:

$$
ax^2+bx+c=a(x-x_1)(x-x_2).
$$

* Si $\Delta=0$, ce trinôme admet une seule racine $x_0$, et on a:

$$
ax^2+bx+c=a(x-x_0)^2.
$$

* Si $\Delta<0$, ce trinôme n'admet pas de racine et

$$
ax^2+bx+c \text{ est impossible à factoriser}.
$$

#### Signe d'un trinôme de second degré

* Si $\Delta>0$, ce trinôme admet deux racines $x_1$ et $x_2$ (on suppose que $x_1<x_2$), et son tableau de signe est le suivant:
  * Si $a>0$
    
    $$
    \begin{array}{c|lcccccr}
        x & -\infty & & x_1 & & x_2 & & +\infty \\
        \hline
        ax^2+bx+c & & + & 0 & - & 0 & + &
    \end{array}
    $$

  * Si $a<0$
    
    $$
    \begin{array}{c|lcccccr}
        x & -\infty & & x_1 & & x_2 & & +\infty \\
        \hline
        ax^2+bx+c & & - & 0 & + & 0 & - &
    \end{array}
    $$

* Si $\Delta=0$, ce trinôme admet une seule racine $x_0$, et son tableau de signe est le suivant:
  * Si $a>0$
    
    $$
    \begin{array}{c|lcccr}
        x & -\infty & & x_0 & & +\infty \\
        \hline
        ax^2+bx+c & & + & 0 & + &
    \end{array}
    $$

  * Si $a<0$
    
    $$
    \begin{array}{c|lcccr}
        x & -\infty & & x_0 & & +\infty \\
        \hline
        ax^2+bx+c & & - & 0 & - &
    \end{array}
    $$

* Si $\Delta<0$, ce trinôme n'admet pas de racine et son tableau de signe est le suivant:
  * Si $a>0$
    
    $$
    \begin{array}{c|lcccr}
        x & -\infty & & & & +\infty \\
        \hline
        ax^2+bx+c & & & + & &
    \end{array}
    $$

  * Si $a<0$
    
    $$
    \begin{array}{c|lcccr}
        x & -\infty & & & & +\infty \\
        \hline
        ax^2+bx+c & & & - & &
    \end{array}
    $$

#### Équation de second degré à une inconnue

On considère l'équation $ax^2+bx+c=0$.
* Si $\Delta>0$, cette équation admet deux solutions $x_1$ et $x_2$, et $S=\left\lbrace x_1; x_2 \right\rbrace$.
* Si $\Delta=0$, cette équation admet une seule solution $x_0$, et $S=\left\lbrace x_0 \right\rbrace$.
* Si $\Delta<0$, cette équation n'admet pas de solution et $S=\emptyset$.

#### Inéquation de second degré à une inconnue

Résoudre une inéquation sous l'une des formes $ax^2+bx+c\geq 0$, $ax^2+bx+c>0$, $ax^2+bx+c\leq 0$, ou $ax^2+bx+c<0$, revient à étudier le signe du trinôme $ax^2+bx+c$, et déduire l'intervalle (ou les intervalles) sur lequel (ou lesquels) l'inéquation est vérifiée.

### Équations d'autres types

Soient $P(x)$ et $Q(x)$ les polynômes.


| Équations | | Simplification 
|:---:|:---:|:---:
| $P(x)\times Q(x) =0$ | si et seulement si | $P(x)=0$ ou $Q(x)=0$
| $\frac{P(x)}{Q(x)}=0$ et $Q(x)\neq 0$ | si et seulement si | $P(x)=0$
| $\lvert P(x)\rvert=0$ | si et seulement si | $P(x)=0$
| $\lvert P(x)\rvert=Q(x)$ et $Q(x)>0$ | si et seulement si | $P(x)=Q(x)$ et $P(x)=-Q(x)$