---
layout: chapitre
chapter: 7
title: "Droites dans le plan"
permalink: /tcs/chapitre7/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/tcs/7.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Colinéarité de deux vecteurs

* Deux vecteurs $\vec{u}$ et $\vec{u}$ sont colinéaires si $\rm{det}(\vec{u},\vec{v})=0$.
* Deux vecteurs $\vec{u}$ et $\vec{u}$ ne sont pas colinéaires si $\rm{det}(\vec{u},\vec{v})\neq 0$.

### Alignement de trois points

* Trois points sont alignés si deux vecteurs, formés à partir de ces points, sont colinéaires.
* Trois points ne sont pas alignés si deux vecteurs, formés à partir de ces points, ne sont pas colinéaires.

### Position relative de deux droites

* Deux droites sont parallèles si leurs vecteurs directeurs sont colinéaires.
* Deux droites sont sécantes si leurs vecteurs directeurs ne sont pas colinéaires.

### Représentation paramétrique d'une droite

* Une représentation paramétrique d'une droite $(D)$, passant par un point $A\begin{pmatrix}x_A \\ y_A\end{pmatrix}$ et de vecteur directeur $\vec{u}\begin{pmatrix}a \\ b\end{pmatrix}$, est: 

$$
(D):\
\begin{cases}
x=x_A+at \\ y=y_A+bt
\end{cases}
(t\in\mathbb{R})
$$
* Chaque valeur de $t$ donne un point de coordonnées $(x;y)$ de la droite $(D)$.
* Les coefficients de $t$ donnent un vecteur directeur de coordonnées $(a;b)$ de $(D)$.

### Équation cartésienne d'une droite

* Une équation cartésienne d'une droite $(D)$, passant par un point $A\begin{pmatrix}x_A \\ y_A\end{pmatrix}$ et de vecteur directeur $\vec{u}\begin{pmatrix}a \\ b\end{pmatrix}$, est donnée par:

$$
(D):\
\left\lvert
\begin{array}{cc}
x-x_A & a \\ y-y_A & b
\end{array}
\right\rvert
=0
$$

* Toute droite du plan à une équation cartésienne de la forme $\alpha x+\beta y+\gamma =0$.
* Chaque valeur de $x$ correspond à une valeur de $y$, donnant un point de coordonnées $(x;y)$ de la droite $(D)$.
* Les coefficients de $x$ et $y$ donnent un vecteur directeur de coordonnées $(-\beta;\alpha)$ de $(D)$.

## Exercices résolus