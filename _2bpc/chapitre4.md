---
layout: chapitre
chapter: 4 
title: "Suites numériques et limites"
permalink: /2bpc/chapitre4/
---

## Document PDF à remplir

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

<object data="{{ site.url }}{{ site.baseurl }}/2bpc/4.pdf" width="100%" height="800" type="application/pdf"></object>

## Méthodes et techniques

### Raisonnement par récurrence
Soit $p$ un entier et $I$ un intervalle.

Pour montrer par récurrence la proposition $\forall n\geq p: u_n\in I$, on répond au deux questions suivantes:

 - **Initialisation**: Vérifier que pour $n=p$, on $u_p\in I$.
 - **Hérédité**: Soit $n\geq p$, on suppose que $u_n\in I$, montrer que $u_{n+1}\in I$.

{% include callout.html content="This is my callout. It has a border on the left whose color you define by passing a type parameter. I typically use this style of callout when I have more information that I want to share, often spanning multiple paragraphs. " type="primary" %}

Pour une suite $(u_n)_{n\geq p}$ de type $u_{n+1}=f(u_n)$, on utilise le fait que $f(I)\subset I$.

Ce qui donne pour tout $n\geq p$ que: $u_n\in I\implies f(u_n)\in f(I)\implies u_{n+1}\subset I$.

### Monotonie d'une suite

#### Méthode générale

Pour déterminer la monotonie d'une suite $(u_n)_{n\geq p}$, on répond aux deux questions suivantes:

- Soit $n\geq p$, calculer et factoriser $u_{n+1}-u_n$.
- Étudier le signe de l'expression obtenue et déduire:
    - Si $\forall n\geq p:\ u_{n+1}\geq u_n$, alors la suite $(u_n)_{n\geq p}$ est croissante.
    - Si $\forall n\geq p:\ u_{n+1}\leq u_n$, alors la suite $(u_n)_{n\geq p}$ est décroissante.

#### Méthode pour les suite de type \bm{$u_{n+1}=f(u_n)$}

Voici un exemple de tableau :

| Entête 1 | Entête 2 |
|---|---|
| Cellule 1 | Cellule 2 |
| Cellule 3 | Cellule 4 |

### Section 1.3: Encore des maths

Une formule en bloc :

$$ E = mc^2 $$
