---
layout: chapitre
chapter: 11 
title: "Produit scalaire dans l'espace"
permalink: /2bpc/chapitre11/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/11.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Produit scalaire de deux vecteurs

#### Définition
- Le produit scalaire de deux vecteurs $\overrightarrow{u}$ et $\overrightarrow{v}$ dans l'espace est défini comme $\overrightarrow{u} \cdot \overrightarrow{v} = \|\overrightarrow{u}\| \times \|\overrightarrow{v}\| \times \cos(\overrightarrow{u}, \overrightarrow{v})$.
- Propriétés :
  - $\overrightarrow{u} \cdot \overrightarrow{v} = \overrightarrow{v} \cdot \overrightarrow{u}$
  - $\overrightarrow{u} \cdot \overrightarrow{v} = 0$ si et seulement si $\overrightarrow{u}$ et $\overrightarrow{v}$ sont orthogonaux.
  - $\overrightarrow{u} \cdot (\overrightarrow{v} + \overrightarrow{w}) = \overrightarrow{u} \cdot \overrightarrow{v} + \overrightarrow{u} \cdot \overrightarrow{w}$
  - $(k\overrightarrow{u}) \cdot \overrightarrow{v} = k (\overrightarrow{u} \cdot \overrightarrow{v})$

#### Formules importantes
- Théorème d'Al-Kashi : $BC^2 = AB^2 + AC^2 - 2 AB \cdot AC$
- $\overrightarrow{u} \cdot \overrightarrow{u} = \|\overrightarrow{u}\|^2$
- $\overrightarrow{u} \cdot \overrightarrow{v} = \frac{1}{2} (\|\overrightarrow{u}\|^2 + \|\overrightarrow{v}\|^2 - \|\overrightarrow{u} - \overrightarrow{v}\|^2)$
- $\overrightarrow{u} \cdot \overrightarrow{v} = \frac{1}{2} (\|\overrightarrow{u} + \overrightarrow{v}\|^2 - \|\overrightarrow{u}\|^2 - \|\overrightarrow{v}\|^2)$

### Expression analytique du produit scalaire

#### Base orthonormée directe
- Une base $(\overrightarrow{i}, \overrightarrow{j}, \overrightarrow{k})$ est orthonormée si $\overrightarrow{i} \cdot \overrightarrow{j} = \overrightarrow{j} \cdot \overrightarrow{k} = \overrightarrow{k} \cdot \overrightarrow{i} = 0$ et $\|\overrightarrow{i}\| = \|\overrightarrow{j}\| = \|\overrightarrow{k}\| = 1$.
- Elle est directe si elle respecte la règle de la main droite.

#### Coordonnées
- Pour $\overrightarrow{u}(a, b, c)$ et $\overrightarrow{v}(a', b', c')$, $\overrightarrow{u} \cdot \overrightarrow{v} = aa' + bb' + cc'$.
- Norme : $\|\overrightarrow{u}\| = \sqrt{a^2 + b^2 + c^2}$
- Distance entre $A(x_A, y_A, z_A)$ et $B(x_B, y_B, z_B)$ : $AB = \sqrt{(x_B - x_A)^2 + (y_B - y_A)^2 + (z_B - z_A)^2}$

### Étude analytique d’un plan de l’espace

#### Vecteur normal
- Un vecteur $\overrightarrow{n}$ est normal à un plan $(P)$ s'il est orthogonal à tous les vecteurs du plan.
- Équation du plan passant par $A(x_A, y_A, z_A)$ avec normale $\overrightarrow{n}(a, b, c)$ : $a(x - x_A) + b(y - y_A) + c(z - z_A) = 0$

#### Équations et représentations
- Équation à partir de deux vecteurs directeurs $\overrightarrow{u}(\alpha, \beta, \gamma)$ et $\overrightarrow{v}(\alpha', \beta', \gamma')$ :
  $\frac{x - x_A}{\alpha} = \frac{y - y_A}{\beta} = \frac{z - z_A}{\gamma}$ (si non nuls)
- Représentation paramétrique :
  \begin{cases}
  x = x_A + \alpha t + \alpha' t' \\
  y = y_A + \beta t + \beta' t' \\
  z = z_A + \gamma t + \gamma' t'
  \end{cases}

#### Positions relatives
- Deux plans sont parallèles si leurs normales sont colinéaires.
- Deux plans sont perpendiculaires si leurs normales sont orthogonales.
- Distance d'un point $A$ à un plan $ax + by + cz + d = 0$ : $d = \frac{|ax_A + by_A + cz_A + d|}{\sqrt{a^2 + b^2 + c^2}}$

### Étude analytique d’une sphère de l’espace

#### Équations
- Sphère de centre $\Omega(a, b, c)$ et rayon $R$ : $(x - a)^2 + (y - b)^2 + (z - c)^2 = R^2$
- Sphère de diamètre $[AB]$ : $(x - x_A)(x - x_B) + (y - y_A)(y - y_B) + (z - z_A)(z - z_B) = 0$
- Représentation paramétrique :
  \begin{cases}
  x = a + R \cos \alpha \cos \beta \\
  y = b + R \cos \alpha \sin \beta \\
  z = c + R \sin \alpha
  \end{cases}

#### Forme générale
- Équation $x^2 + y^2 + z^2 + ax + by + cz + d = 0$ représente une sphère si $\frac{a^2}{4} + \frac{b^2}{4} + \frac{c^2}{4} - d > 0$, de centre $(-\frac{a}{2}, -\frac{b}{2}, -\frac{c}{2})$ et rayon $\sqrt{\frac{a^2}{4} + \frac{b^2}{4} + \frac{c^2}{4} - d}$.

#### Positions relatives
- Avec une droite : intersection en 0, 1 ou 2 points selon la distance du centre à la droite par rapport au rayon.
- Avec un plan : intersection en un cercle si distance < rayon, tangente si =, vide si >.


