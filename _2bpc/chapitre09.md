---
layout: chapitre
chapter: 9
title: "Calcul intégral"
permalink: /2bpc/chapitre9/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/9.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Intégrale d'une fonction continue et positive

#### Définition

Soit $f$ une fonction continue et positive sur un intervalle $[a;b]$.

L'**intégrale** de $f$ de $a$ à $b$ est l'aire $\mathcal{A}$ (en unités d'aire) du domaine délimité par:
* la courbe $\mathcal{C}_f$,
* l'axe des abscisses,
* les droites d'équations $x=a$ et $x=b$.

On note:

$$
\mathcal{A} = \int_a^b f(x)\,dx
$$

#### Théorème fondamental

Soit $f$ une fonction continue sur $[a;b]$ et $F$ une primitive de $f$ sur $[a;b]$.

$$
\int_a^b f(x)\,dx = \left[F(x)\right]_a^b = F(b) - F(a)
$$

### Propriétés des intégrales

#### Linéarité

Soient $f$ et $g$ deux fonctions continues sur $[a;b]$ et $k \in \mathbb{R}$.

* $\displaystyle\int_a^b (f(x) + g(x))\,dx = \int_a^b f(x)\,dx + \int_a^b g(x)\,dx$
* $\displaystyle\int_a^b k\cdot f(x)\,dx = k\int_a^b f(x)\,dx$

#### Relation de Chasles

Soit $f$ une fonction continue sur un intervalle contenant $a$, $b$ et $c$.

$$
\int_a^c f(x)\,dx = \int_a^b f(x)\,dx + \int_b^c f(x)\,dx
$$

#### Positivité et ordre

Soient $f$ et $g$ deux fonctions continues sur $[a;b]$.

* $\left(\forall x \in [a;b]:\ f(x) \geq 0\right) \implies \displaystyle\int_a^b f(x)\,dx \geq 0$.
* $\left(\forall x \in [a;b]:\ f(x) \leq g(x)\right) \implies \displaystyle\int_a^b f(x)\,dx \leq \int_a^b g(x)\,dx$.

### Valeur moyenne d'une fonction

Soit $f$ une fonction continue sur $[a;b]$.

La **valeur moyenne** de $f$ sur $[a;b]$ est:

$$
\mu = \frac{1}{b-a}\int_a^b f(x)\,dx
$$

### Intégration par parties

Soient $u$ et $v$ deux fonctions dérivables sur $[a;b]$ telles que $u'$ et $v'$ soient continues.

$$
\int_a^b u(x)v'(x)\,dx = \left[u(x)v(x)\right]_a^b - \int_a^b u'(x)v(x)\,dx
$$

**Méthode :** Choisir $u$ et $v'$ de sorte que $\int u'(x)v(x)\,dx$ soit plus simple à calculer que $\int u(x)v'(x)\,dx$. On peut le faire grâce à la règle **LATE**, qui permet de classer les fonctions par ordre de priorité :

| **L** | **A** | **T** | **E** |
|:---:|:---:|:---:|:---:|
| **L**ogarithme | **A**lgèbre | **T**rigonométrique | **E**xponentielle |
| $x\mapsto\ln(x)$,<br>$x\mapsto\log_a(x)$<br>$(a\in\mathbb{R}^+_\ast\smallsetminus\lbrace1\rbrace)$ | Polynôme,<br>$x\mapsto x^r$<br>$(r\in\mathbb{Q})$ | $x\mapsto\sin(x)$,<br>$x\mapsto\cos(x)$,<br>$x\mapsto\tan(x)$ | $x\mapsto e^x$,<br>$x\mapsto a^x$<br>$(a\in\mathbb{R}^+_\ast\smallsetminus\lbrace1\rbrace)$ |

On peut organiser les calculs à l'aide du tableau suivant:

<div style="display: flex; justify-content: center;">
  <table style="border-collapse: collapse; text-align: center;">
    <thead>
      <tr>
        <th style="text-align:center">Dérivation</th>
        <th style="text-align:center">Intégration</th>
        <th style="text-align:center">Produit</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td rowspan="2" style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?u(x)" alt="u(x)"></td>
        <td style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?v'(x)" alt="v'(x)"></td>
        <td style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?u(x)v'(x)" alt="u(x)v'(x)"></td>
      </tr>
      <tr>
        <td rowspan="2" style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?v(x)" alt="v(x)"></td>
        <td style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?u(x)v(x)" alt="u(x)v(x)"></td>
      </tr>
      <tr>
        <td style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?u'(x)" alt="u'(x)"></td>
        <td style="text-align:center"><img src="https://latex.codecogs.com/svg.latex?u'(x)v(x)" alt="u'(x)v(x)"></td>
      </tr>
    </tbody>
  </table>
</div>