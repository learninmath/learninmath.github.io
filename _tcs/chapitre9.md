---
layout: chapitre
chapter: 9
title: "Trigonométrie"
permalink: /tcs/chapitre9/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur
<a href="{{ site.url }}{{ site.baseurl }}/tcs/9.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Cercle trigonométrique

Le cercle trigonométrique est un cercle de centre $O$ et de rayon $1$, muni d'un repère orthonormé $(O;\vec{i},\vec{j})$.

* Le cercle est orienté dans le **sens inverse des aiguilles d'une montre** (sens direct).
* On associe à $0$ le point $A$ du cercle de coordonnées $(1;0)$. Le point $A$ , et on écrit $A(0)$.
* À chaque réel $x$, on associe un unique point $M$ sur le cercle trigonométrique.
    * Le réel $x$ est alors appelé **abscisse curviligne** du point $M$, et on écrit $M(x)$.
    * Le point $A(0)$ est appelé **origine** du cercle trigonométrique, c'est celui coordonnées $(1;0)$.
    * La longueur de l'arc orienté $\overset{\curvearrowright}{AM}$ est égale à $x$.
    * La mesure de l'angle $\left(\widehat{\vec{i}, \overrightarrow{AM}}\right)$ en radians est égale à $x\text{ rad}$.
    * Les réels $x$ et $x+2k\pi$, où $k\in\mathbb{Z}$, correspondent au même point $M$ du cercle.

### Cosinus, sinus et tangente

Soit $x$ un nombre réel et $M$ le point du cercle trigonométrique associé à $x$.

* Le **cosinus** de $x$, noté $\cos(x)$, est l'abscisse du point $M$.
* Le **sinus** de $x$, noté $\sin(x)$, est l'ordonnée du point $M$.
* La **tangente** de $x$, notée $\tan(x)$, est la pente de la demi droite $[OM)$.

### Propriétés fondamentales

Pour tout réel $x$:

* $-1 \leq \cos(x) \leq 1$ et $-1 \leq \sin(x) \leq 1$
* $\cos^2(x) + \sin^2(x) = 1$
* $\tan(x) = \frac{\sin(x)}{\cos(x)}$, pour $x \neq \frac{\pi}{2} + k\pi$, $k \in \mathbb{Z}$.
* Pour tout entier relatif $k$:
    * $\cos(x + 2k\pi) = \cos(x)$
    * $\sin(x + 2k\pi) = \sin(x)$
    * $\tan(x + k\pi) = \tan(x)$

### Valeurs remarquables

$$
\begin{array}{|c|c|c|c|c|c|}
\hline
x & \ 0\  & \frac{\pi}{6} & \frac{\pi}{4} & \frac{\pi}{3} & \frac{\pi}{2} \\
\hline
\sin(x) & 0 & \frac{1}{2} & \frac{\sqrt{2}}{2} & \frac{\sqrt{3}}{2} & 1 \\
\hline
\cos(x) & 1 & \frac{\sqrt{3}}{2} & \frac{\sqrt{2}}{2} & \frac{1}{2} & 0 \\
\hline
\tan(x) & 0 & \frac{\sqrt{3}}{3} & 1 & \sqrt{3} & \text{---} \\
\hline
\end{array}
$$

### Angles associés

Pour tout réel $x$:

| $x$ | $-x$ | $\pi-x$ | $\pi+x$ | $\frac{\pi}{2}-x$ | $\frac{\pi}{2}+x$ |
|:---:|:----:|:-------:|:-------:|:-----------------:|:-----------------:|
| $\sin(x)$ | $-\sin(x)$ | $\sin(x)$ | $-\sin(x)$ | $\cos(x)$ | $\cos(x)$ |
| $\cos(x)$ | $\cos(x)$ | $-\cos(x)$ | $-\cos(x)$ | $\sin(x)$ | $-\sin(x)$ |
| $\tan(x)$ | $-\tan(x)$ | $-\tan(x)$ | $\tan(x)$ | $\frac{1}{\tan(x)}$ | $-\frac{1}{\tan(x)}$ |

### Équations trigonométriques

Soit $a$ un réel.

#### Équation $\cos(x) = \cos(a)$

Les solutions de l'équation $\cos(x) = \cos(a)$ sont:

$$
x = a + 2k\pi \quad \text{ou} \quad x = -a + 2k\pi, \quad k \in \mathbb{Z}
$$

#### Équation $\sin(x) = \sin(a)$

Les solutions de l'équation $\sin(x) = \sin(a)$ sont:

$$
x = a + 2k\pi \quad \text{ou} \quad x = \pi - a + 2k\pi, \quad k \in \mathbb{Z}
$$

#### Équation $\tan(x) = \tan(a)$

Les solutions de l'équation $\tan(x) = \tan(a)$ sont:

$$
x = a + k\pi, \quad k \in \mathbb{Z}
$$

### Inéquations trigonométriques

Pour résoudre une inéquation trigonométrique, on utilise le cercle trigonométrique pour déterminer les intervalles de solutions.
