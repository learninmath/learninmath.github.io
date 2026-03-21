---
layout: chapitre
chapter: 10 
title: "Équations différentielles"
permalink: /2bpc/chapitre10/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/10.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Équations différentielles du premier ordre : $y' = ay + b$

#### Définitions
- Une équation de la forme $y' = ay + b$, où $a$ et $b$ sont des réels, est une **équation différentielle du premier ordre**.
- Une fonction $f$ dérivable sur $\mathbb{R}$ vérifiant $f'(x) = a f(x) + b$ pour tout $x \in \mathbb{R}$ est une **solution particulière**.
- La **solution générale** regroupe toutes les solutions particulières et s'écrit avec une constante réelle $C$.

#### Solutions générales
- Pour $y' = 0$ ($a = 0$, $b = 0$) : $f(x) = C$.
- Pour $y' = b$ ($a = 0$, $b \neq 0$) : $f(x) = b x + C$.
- Pour $y' = a y$ ($a \neq 0$, $b = 0$) : $f(x) = C e^{a x}$.
- Pour $y' = a y + b$ ($a \neq 0$, $b \neq 0$) : $f(x) = C e^{a x} - \frac{b}{a}$.

> [!IMPORTANT]  
> Pour tous réels $x_0$ et $y_0$, il existe une unique solution particulière vérifiant $f(x_0) = y_0$.

### Équations différentielles du second ordre : $y'' + a y' + b y = 0$

#### Définitions
- Une équation de la forme $y'' + a y' + b y = 0$ est une **équation différentielle du second ordre**.
- L'**équation caractéristique** associée est $r^2 + a r + b = 0$.
- La **solution générale** s'exprime avec deux constantes réelles $C_1$ et $C_2$.

#### Solutions générales

Si l'équation caractéristique associée admet:

- deux racines réelles $r_1$, $r_2$, alors:

$$
f(x) = C_1 e^{r_1 x} + C_2 e^{r_2 x}.
$$

- une seule racine réelle $r$ : 

$$
f(x) = (C_1 x + C_2) e^{r x}.
$$

- deux racines complexes conjuguées $r$, $\overline{r}$ : 

$$
f(x) = e^{\operatorname{Re}(r) x} (C_1 \cos(\operatorname{Im}(r) x) + C_2 \sin(\operatorname{Im}(r) x)).
$$

> [!IMPORTANT]  
> Pour $y'' + \omega^2 y = 0$ ($\omega > 0$), la solution générale est
> 
> $$
> f(x) = C_1 \cos(\omega x) + C_2 \sin(\omega x).
> $$

> [!IMPORTANT]  
> Pour tous réels $x_0$, $x_1$, $y_0$, $y_1$, il existe une unique solution particulière vérifiant $f(x_0) = y_0$ et $f'(x_1) = y_1$.

