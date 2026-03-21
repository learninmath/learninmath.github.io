---
layout: chapitre
chapter: 5
title: "Fonctions primitives"
permalink: /2bpc/chapitre5/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/5.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

- Déterminer une primitive d'une fonction $f$ sur un intervalle $I$, revient à exprimer $f$ comme la dérivée d'une autre fonction.

  En d'autres termes, Si l’on trouve une fonction $F$ dérivable sur $I$ telle que $\forall x\in I: f(x)=F'(x)$, alors la fonction $F$ est une primitive de $f$ sur $I$. 
- Si une fonction $F$ est une primitive d'une autre fonction $f$ sur un intervalle $I$, alors toutes les primitives de $f$ sur $I$ sont les fonctions $x\mapsto F(x)+c$ définies sur $I$, où $c\in\mathbb{R}$.

## Exercices résolus

### Exercice 1 de la série

Soit $f$ la fonction définie sur $\mathbb{R}$ par $f(x)=\frac{x}{\sqrt{x^2+1}}+1$.

#### 1. Montrer que $f$ admet des primitives sur $\mathbb{R}$.

On considère les fonctions $u$ et $v$ définies sur $\mathbb{R}$ par $u(x)=x$ et $v(x)=\sqrt{x^2+1}$.
* La fonction $u$ est une fonction polynôme, continue sur $\mathbb{R}$.
* La fonction $v$ est continue sur $\mathbb{R}$ car:
  * La fonction $x\mapsto x^2+1$ est une fonction polynôme, continue sur $\mathbb{R}$.
  * La fonction $x\mapsto x^2+1$ vérifie: $\forall x\in\mathbb{R}:\ x^2+1>0$.
* La fonction $v$ vérifie: $\forall x\in\mathbb{R}:\ v(x)\neq 0$.

Donc $\frac{u}{v}$ est continue sur $\mathbb{R}$.

D'où la fonction $f:x\mapsto\frac{u(x)}{v(x)}+1$ est continue sur $\mathbb{R}$.

#### 2. Déterminer toutes les primitives de $f$ sur $\mathbb{R}$.

Soit $x\in\mathbb{R}$, on a:

$$
\begin{array}{rcl}
f(x) & = & \frac{x}{\sqrt{x^2+1}}+1 \\
     & = & \frac12\times\frac{2x}{\sqrt{x^2+1}}+1 \\
     & = & \frac{(x^2+1)'}{2\sqrt{x^2+1}}+(x)' \\
     & = & \left(\sqrt{x^2+1}\right)'+(x)' \\
     & = & \left(\sqrt{x^2+1}+x\right)'.
\end{array}
$$

D'où, toutes les primitives de $f$ sur $\mathbb{R}$ sont les fonctions $F$ définies sur $\mathbb{R}$ par $F(x)=\sqrt{x^2+1}+x+c$, où $c\in\mathbb{R}$.

#### 3. Déterminer $F$ la primitive de $f$ sur $\mathbb{R}$ qui vérifie $F(0) = 3$.

La fonction $F$ est une primitive de $f$ sur $\mathbb{R}$, elle s'écrira alors sous la forme $F(x)=\sqrt{x^2+1}+x+c$, où $c\in\mathbb{R}$.

Déterminons le réel $c$ tel que $F(0) = 3$.

On a:

$$
\begin{array}{rcl}
F(0) = 3 & \iff & \sqrt{0^2+1}+0+c = 3 \\
         & \iff & \sqrt{1}+c = 3 \\
         & \iff & 1+c = 3 \\
         & \iff & c = 3-1 \\
         & \iff & c = 2.
\end{array}
$$

D'où $\forall x\in\mathbb{R}:\ F(x)=\sqrt{x^2+1}+x+3$.

### Exercice 5 de la série

Soit $f$ et $u$ les fonctions définies sur $\mathbb{R}$ par $f(x)=\frac{x}{(x^2+3)\sqrt[3]{x^2+3}}$ et $u(x)=\sqrt[3]{x^2+3}$.

#### 1. Montrer que $\forall x\in\mathbb{R}:\ f(x)=\frac{3u′(x)}{2(u(x))^2}$

On sait que la fonction $u$ est dérivable sur $\mathbb{R}$ car:
* la fonction $x\mapsto x^2+3$ est dérivable sur $\mathbb{R}$.
* la fonction $x\mapsto x^2+3$ vérifie: $\forall x\in\mathbb{R}:\ x^2+3>0$.

Soit $x\in\mathbb{R}$, on a:

$$
\begin{array}{rcl}
u'(x) & = & \left(\sqrt[3]{x^2+3}\right)' \\
      & = & \frac{(x^2+3)'}{3\left(\sqrt[3]{x^2+3}\right)^2} \\
      & = & \frac{2x}{3(u(x))^2}.
\end{array}
$$

Donc $u'(x)=\frac{2x}{3(u(x))^2}$, ce qui implique que $x=\frac32 u'(x) (u(x))^2$.

Et on voit bien que:

$$
\begin{array}{rcl}
(x^2+3)\sqrt[3]{x^2+3} & = & \left(\sqrt[3]{x^2+3}\right)^3\sqrt[3]{x^2+3} \\
                       & = & \left(\sqrt[3]{x^2+3}\right)^4 \\
                       & = & (u(x))^4.
\end{array}
$$

Alors

$$
\begin{array}{rcl}
f(x) & = & \frac{x}{(x^2+3)\sqrt[3]{x^2+3}} \\
     & = & \frac{\frac32 u'(x) (u(x))^2}{(u(x))^4} \\
     & = & \frac{3 u'(x)}{2(u(x))^2}.
\end{array}
$$

D'où $\forall x\in\mathbb{R}:\ f(x)=\frac{3u′(x)}{2(u(x))^2}$.

#### 2. En déduire toutes les primitives de $f$ sur $\mathbb{R}$.

Soit $x\in\mathbb{R}$, on a:

$$
\begin{array}{rcl}
f(x) & = & \frac{3u′(x)}{2(u(x))^2} \\
     & = & -\frac32\left(-\frac{u′(x)}{(u(x))^2}\right) \\
     & = & -\frac32\left(\frac1{u(x)}\right)' \\
     & = & \left(-\frac3{2 u(x)}\right)' \\
     & = & \left(-\frac3{2\sqrt[3]{x^2+3}}\right)'.
\end{array}
$$

D'où, toutes les primitives de $f$ sur $\mathbb{R}$ sont les fonctions $F$ définies sur $\mathbb{R}$ par $F(x)=-\frac3{2\sqrt[3]{x^2+3}}+c$, où $c\in\mathbb{R}$.

#### 3. Déterminer $F$ la primitive de $f$ sur $\mathbb{R}$ qui vérifie $F(0)=\frac12$.

La fonction $F$ est une primitive de $f$ sur $\mathbb{R}$, elle s'écrira alors sous la forme $F(x)=-\frac3{2\sqrt[3]{x^2+3}}+c$, où $c\in\mathbb{R}$.

Déterminons le réel $c$ tel que $F(0)=\frac12$.

On a:

$$
\begin{array}{rcl}
F(0) = \frac12 & \iff & -\frac3{2\sqrt[3]{0^2+3}}+c = \frac12 \\
               & \iff & -\frac{\sqrt[3]{3}^3}{2\sqrt[3]{3}}+c = \frac12 \\
               & \iff & -\frac{\sqrt[3]{3}^2}{2}+c = \frac12 \\
               & \iff & c = \frac12+\frac{\sqrt[3]{3}^2}{2} \\
               & \iff & c = \frac{1+\sqrt[3]{3}^2}{2}.
\end{array}
$$

D'où $\forall x\in\mathbb{R}:\ F(x)=\sqrt{x^2+1}+x+\frac{1+\sqrt[3]{3}^2}{2}$.