---
layout: chapitre
chapter: 8
title: "Nombres complexes"
permalink: /2bpc/chapitre8/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/8.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Ensemble des nombres complexes

* Ensemble des nombres imaginaires purs:
$i\mathbb{R}=\lbrace ib\ /\ b\in\mathbb{R}\text{ et }i^2=-1\rbrace$.
* Ensemble des nombres complexes: $\mathbb{C}=\lbrace a+ib\ /\ (a;b)\in\mathbb{R}^2\text{ et }i^2=-1\rbrace$.
* On a $i\mathbb{R}\subset\mathbb{C}$, $\mathbb{R}\subset\mathbb{C}$ et $i\mathbb{R}\cap\mathbb{R}=\lbrace 0 \rbrace$.

### Formes d'un nombre complexes

* Forme algébrique: $z = \mathrm{Re}(z) + i\ \mathrm{Im}(z)$.
* Forme trigonométrique: $z = \lvert z\rvert\ \left(\cos(\arg(z)) + i\ \sin(\arg(z))\right)$.
* Forme exponentielle: $z = \lvert z\rvert\ e^{i\ \arg(z)}$.

### Conjugué, module, argument

* Conjugué: $\overline{z} = \mathrm{Re}(z) - i\ \mathrm{Im}(z)$.
* Module: $\lvert z\rvert = \small\sqrt{\left(\mathrm{Re}(z)\right)^2 + \left(\mathrm{Im}(z)\right)^2}$ et $\lvert z\rvert^2=z\overline{z}$.
* Argument ($z\neq0$): $\cos(\arg(z)) = \frac{\mathrm{Re}(z)}{\lvert z\rvert}$ et $\sin(\arg(z)) = \frac{\mathrm{Im}(z)}{\lvert z\rvert}$.
* Relation d'Euler: $e^{i\ \arg(z)}=\cos(\arg(z)) + i\ \sin(\arg(z))$.

### Caractérisation des réels et des imaginaire purs

* Un nombre complexe $z$ est un réel $\left(z\in\mathbb{R}\right)$, si et seulement si l'une des propositions suivantes est vérifiée:
    * $\mathrm{Im}(z)=0$,
    * $\overline{z}=z$,
    * $\arg(z)\equiv 0[\pi]$.
* Un nombre complexe $z$ est un imaginaire pur $\left(z\in i\mathbb{R}\right)$, si et seulement si l'une des propositions suivantes est vérifiée:
    * $\mathrm{Re}(z)=0$,
    * $\overline{z}=-z$,
    * $\arg(z)\equiv \frac{\pi}{2}[\pi]$.

### Opérations sur les complexes

* Si $z$ et $z'$ sont sous la forme algébrique:
    * Pour simplifier on représente chaque nombre complexe $z$ par $a+ib$, où $a=\mathrm{Re}(z)$ et $b=\mathrm{Im}(z)$.
    * $z+z' = (a+ib) + (a'+ib') = (a +a') + i(b + b')$,
    * $zz' = (a+ib) \times (a'+ib') = (aa'-bb') + i(ab'+ba')$,
    * $\frac{1}{z} = \frac{1}{a+ib} = \frac{a}{a^2+b^2}-i\frac{b}{a^2+b^2} = \frac{1}{\lvert z\rvert^2}\overline{z}$, avec $z\neq0$,
    * $\frac{z'}{z} = \frac{a'+ib'}{a+ib} = \frac{aa'+bb'}{a^2+b^2}-i\frac{ab'-ba'}{a^2+b^2} = \frac{1}{\lvert z\rvert^2}z'\overline{z}$, avec $z\neq0$.

* Si $z$ et $z'$ sont sous la forme trigonométrique:
    * Pour simplifier on représente chaque nombre complexe $z$ par $\left[r;\theta\right]$, où $r=\lvert z\rvert$ et $\theta\equiv\arg(z)[2\pi]$.
    * $\overline{z} = \overline{\left[r;\theta\right]} = \left[r;-\theta\right]$,
    * $-z = -\left[r;\theta\right] = \left[r;\pi+\theta\right]$,
    * $-\overline{z} = -\overline{\left[r;\theta\right]} = \left[r;\pi-\theta\right]$,
    * $\frac{1}{z} = \frac{1}{\left[r;\theta\right]} = \left[\frac{1}{r};-\theta\right]$
    * $zz' = \left[r;\theta\right]\times\left[r';\theta'\right] = \left[r r';\theta+\theta'\right]$,
    * $\frac{z'}{z} = \frac{\left[r';\theta'\right]}{\left[r;\theta\right]} = \left[\frac{r'}{r};\theta'-\theta\right]$.

* Si $z$ et $z'$ sont sous la forme exponentielle:
    * Pour simplifier on représente chaque nombre complexe $z$ par $re^{i\theta}$, où $r=\lvert z\rvert$ et $\theta\equiv\arg(z)[2\pi]$.
    * $\overline{z} = \overline{re^{i\theta}} = re^{-i\theta}$,
    * $-z = -re^{i\theta} = re^{i(\pi+\theta)}$,
    * $-\overline{z} = -\overline{re^{i\theta}} = re^{i(\pi-\theta)}$,
    * $\frac{1}{z} = \frac{1}{re^{i\theta}} = \frac{1}{r}e^{-i\theta}$
    * $zz' = re^{i\theta}\times r'e^{i\theta'} = rr'e^{i(\theta+\theta')}$,
    * $\frac{z'}{z} = \frac{r'e^{i\theta'}}{re^{i\theta}} = \frac{r'}{r}e^{i(\theta'-\theta)}$,

#### Formules importantes

* Formule d'Euler: Pour tout réel $x$, on a

$$
\cos(x) = \frac{e^{ix}+e^{-ix}}{2}
\quad\text{ et }\quad
\sin(x) = \frac{e^{ix}-e^{-ix}}{2i}
$$

* Formules de Moivre: Pour tout réel $x$ et tout entier naturel $n$, on a

$$
\left(\cos(x) + i\ \sin(x)\right)^n
=\cos(nx) + i\ \sin(nx)
$$

### Plan complexe

Le plan est muni d'un repère orthonormé $(O; \vec{u}, \vec{v})$.

* Chaque point $M(x;y)$ du plan est associé à un nombre complexe $z=x+iy$.
    * Le nombre complexe $z$ est appelé *affixe* du point $M$.
    * Le point $M$ est appelé *image* du nombre complexe $z$.
    * On écrit $M(z)$ et $z=\mathrm{aff}(M)$.
* Chaque vecteur $\vec{w}(a;b)$ du plan est associé à un nombre complexe $z=a+ib$.
    * Le nombre complexe $z$ est appelé *affixe* du vecteur $\vec{w}$.
    * Le vecteur $\vec{w}$ est appelé *image vectorielle* du nombre complexe $z$.
    * On écrit $\vec{w}(z)$ et $z=\mathrm{aff}(\vec{w})$.
* L'axe des abscisses $\mathrm{D}(O,\vec{u})$ est appelé *axe réel*.
* L'axe des abscisses $\mathrm{D}(O,\vec{v})$ est appelé *axe imaginaire*.
* Le plan ainsi défini est appelé *plan complexe*.

### Propriétés des affixes

#### Opérations élémentaires
* $\mathrm{aff}\left(\vec{w}+\vec{w'}\right) = \mathrm{aff}(\vec{w})+\mathrm{aff}\left(\vec{w'}\right)$,
* $\mathrm{aff}(k\vec{w}) = k\ \mathrm{aff}(\vec{w})$, avec $k\in\mathbb{R}$,
* $\mathrm{aff}(\overrightarrow{AB}) = \mathrm{aff}(B)-\mathrm{aff}(A)$.

#### Norme, distance et angle

* $\left\lVert\vec{w}\right\rVert=\lvert\mathrm{aff}(\vec{w})\rvert$,
* $AB = \lvert\mathrm{aff}(B)-\mathrm{aff}(A)\rvert$,
* $\left(\overline{\vec{u},\vec{w}}\right) \equiv \arg(\mathrm{aff}(\vec{w}))[2\pi]$,
* $\left(\overline{\vec{u},\overrightarrow{AB}}\right) \equiv \arg\left(\mathrm{aff}(B)-\mathrm{aff}(A)\right)[2\pi]$,
* $\left(\overline{\vec{w},\vec{w'}}\right) \equiv \arg\left(\frac{\mathrm{aff}\left(\vec{w'}\right)}{\mathrm{aff}(\vec{w})}\right)[2\pi]$,
* $\left(\overline{\overrightarrow{AB},\overrightarrow{AC}}\right) \equiv \arg\left(\frac{\mathrm{aff}(C)-\mathrm{aff}(A)}{\mathrm{aff}(B)-\mathrm{aff}(A)}\right)[2\pi]$.

#### Milieu, centre et barycentre

* Si $I$ est le milieu d'un segment $[AB]$, alors 

$$
\mathrm{aff}(I)=\frac{1}{2}(\mathrm{aff}(A)+\mathrm{aff}(B)).
$$

* Si $G$ est le centre de gravité d'un triangle $ABC$, alors

$$
\mathrm{aff}(G)=\frac{1}{3}(\mathrm{aff}(A)+\mathrm{aff}(B)+\mathrm{aff}(C)).
$$

* Si $G$ est le barycentre du système $\lbrace(A;\alpha), (B;\beta)\rbrace$, alors

$$
\mathrm{aff}(G)=\frac{1}{\alpha+\beta}(\alpha\ \mathrm{aff}(A)+\beta\ \mathrm{aff}(B)).
$$

* Si $G$ est le barycentre du système $\lbrace(A;\alpha), (B;\beta), (C;\gamma)\rbrace$, alors

$$
\mathrm{aff}(G)=\frac{1}{\alpha+\beta+\gamma}(\alpha\ \mathrm{aff}(A)+\beta\ \mathrm{aff}(B)+\gamma\ \mathrm{aff}(C)).
$$

#### Colinéarité et orthogonalité de vecteurs

* Deux vecteurs $\vec{w}$ et $\vec{w'}$ sont colinéaires, si et seulement si
    
    $$
    \vec{w'}=k\vec{w},
    \quad\text{où }k\in\mathbb{R}
    $$
    
    ce qui se traduit par
    
    $$
    \frac{\mathrm{aff}\left(\vec{w'}\right)}{\mathrm{aff}(\vec{w})}=k
    \in\mathbb{R}
    $$
    
    ou encore par
    
    $$
    \arg\left(\frac{\mathrm{aff}\left(\vec{w'}\right)}{\mathrm{aff}(\vec{w})}\right) \equiv 0 [\pi]
    $$

* Deux vecteurs $\vec{w}$ et $\vec{w'}$ sont orthogonaux, si et seulement si
    
    $$
    \left(\overline{\vec{w},\vec{w'}}\right) \equiv \frac{\pi}{2}[\pi]
    $$
    
    ce qui se traduit par
    
    $$
    \small
    \arg\left(\frac{\mathrm{aff}\left(\vec{w'}\right)}{\mathrm{aff}(\vec{w})}\right) \equiv \frac{\pi}{2} [\pi]
    $$
    
    ou encore par
    
    $$
    \frac{\mathrm{aff}\left(\vec{w'}\right)}{\mathrm{aff}(\vec{w})}=ik
    \in i\mathbb{R}
    $$

#### alignement et cocyclicité de points

* Des points distincts $A$, $B$ et $C$ sont alignés, si et seulement si
    
    $$
    \overrightarrow{AB}=k\overrightarrow{AC},
    \quad\text{où }k\in\mathbb{R}
    $$
    
    ce qui se traduit par
    
    $$
    \frac{\mathrm{aff}(\overrightarrow{AB})}{\mathrm{aff}(\overrightarrow{AC})}
    =\frac{\mathrm{aff}(B)-\mathrm{aff}(A)}{\mathrm{aff}(C)-\mathrm{aff}(A)}=k
    \in\mathbb{R}
    $$
    
    ou encore par
    
    $$
    \arg\left(\frac{\mathrm{aff}(B)-\mathrm{aff}(A)}{\mathrm{aff}(C)-\mathrm{aff}(A)}\right) \equiv 0 [\pi]
    $$
* Des points distincts $A$, $B$, $C$ et $D$ sont cocycliques, si et seulement si
    
    $$
    \left(\overline{\overrightarrow{AB},\overrightarrow{AC}}\right) \equiv \left(\overline{\overrightarrow{DB},\overrightarrow{DC}}\right)[\pi]
    $$

    ce qui se traduit par

    $$
    \arg\left(\frac{\mathrm{aff}(\overrightarrow{AC})}{\mathrm{aff}(\overrightarrow{AB})}\times\frac{\mathrm{aff}(\overrightarrow{DB})}{\mathrm{aff}(\overrightarrow{DC})}\right) \equiv
    \arg\left(\frac{\mathrm{aff}(C)-\mathrm{aff}(A)}{\mathrm{aff}(B)-\mathrm{aff}(A)}\times\frac{\mathrm{aff}(B)-\mathrm{aff}(D)}{\mathrm{aff}(C)-\mathrm{aff}(D)}\right) \equiv 0 [\pi]
    $$

    ou encore par

    $$
    \frac{\mathrm{aff}(C)-\mathrm{aff}(A)}{\mathrm{aff}(B)-\mathrm{aff}(A)}\times\frac{\mathrm{aff}(B)-\mathrm{aff}(D)}{\mathrm{aff}(C)-\mathrm{aff}(D)}=k
    \in\mathbb{R}
    $$

### Équations dans $\mathbb{C}$

#### Équation de type $z^2=a$

On considère l'équation $(E):\ z^2=a$, où $a$ est un réel.

* Si $a>0$, l'équation $(E)$ admet deux solutions réels

$$
z_1=\sqrt{a}
\quad\text{et}\quad
z_2=-\sqrt{a}.
$$

* Si $a=0$, l'équation $(E)$ admet une seule solution réel

$$
z_0=0.
$$

* Si $a<0$, l'équation $(E)$ admet deux solutions complexes

$$
z_1=i\sqrt{-a}
\quad\text{et}\quad
z_2=-i\sqrt{-a}
$$

#### Équation de type $az^2+bz+c=0$

On considère l'équation $(E):\ az^2+bz+c=0$, où $a$, $b$ et $c$ sont des réels.

Soit $\Delta$ le discriminant de l'équation $(E)$.
* Si $\Delta>0$, l'équation $(E)$ admet deux solutions réels

$$
z_1=\frac{-b+\sqrt{\Delta}}{2a}
\quad\text{et}\quad
z_2=\frac{-b-\sqrt{\Delta}}{2a}.
$$

* Si $\Delta=0$, l'équation $(E)$ admet une seule solution réel

$$
z_0=\frac{-b}{2a}.
$$

* Si $\Delta<0$, l'équation $(E)$ admet deux solutions complexes

$$
z_1=\frac{-b+i\sqrt{-\Delta}}{2a}
\quad\text{et}\quad
z_2=\overline{z_1}=\frac{-b-i\sqrt{-\Delta}}{2a}
$$