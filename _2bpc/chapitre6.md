---
layout: chapitre
chapter: 6
title: "Fonctions logarithmes"
permalink: /2bpc/chapitre6/
---

## Document PDF à remplir

Ouvrir le PDF en cliquant sur 
<a href="{{ site.url }}{{ site.baseurl }}/2bpc/6.pdf" target="_blank">
<i class="fa-solid fa-file-pdf"></i>
</a>.

Il se peut que des erreurs soient présentes dans le PDF ; elles seront corrigées en classe.

## À retenir

### Fonction logarithme népérien

La fonction logarithme népérien, notée $\ln$, est la primitive de la fonction $x\mapsto \frac1{x}$ sur $]0;+\infty[$ qui vérifie $\ln(1)=0$.

#### Propriétés algébriques

Pour tous réels $a$ et $b$ strictement positifs et pour tout nombre rationnel $r$, on a:
* $\ln(a\times b)=\ln(a)+\ln(b)$,
* $\ln(a^r)=r\ln(a)$,
* $\ln\left(\frac{a}{b}\right)=\ln(a)-\ln(b)$,
* $\ln\left(\frac1{b}\right)=-\ln(b)$.
* $\ln(e^r)=r$, où $e$ est le nombre d'Euler.

#### Propriétés analytiques

* La fonction $\ln$ est définie sur $]0;+\infty[$.
* La fonction $\ln$ est continue sur $]0;+\infty[$.
* La fonction $\ln$ est dérivable sur $]0;+\infty[$, et $\forall x\in]0;+\infty[:\ \ln'(x)=\frac1{x}$.
* La fonction $\ln$ est strictement croissante sur $]0;+\infty[$.
* La fonction $\ln$ a les limites suivantes:
    * $\lim\limits_{x\to 0^+}\ln(x)=-\infty$,
    * $\lim\limits_{x\to 0^+}x\ln(x)=0^-$,
    * $\lim\limits_{x\to 1}\frac{\ln(x)}{x-1}=1$,
    * $\lim\limits_{x\to +\infty}\ln(x)=+\infty$,
    * $\lim\limits_{x\to +\infty}\frac{\ln(x)}{x}=0^+$.

### Fonction logarithme de base $a$

Soit $a$ un réel strictement positif, différent de 1.

La fonction logarithme de base $a$, notée $\log_a$, est la fonction définie sur $]0;+\infty[$ par $\log_a(x)=\frac{\ln(x)}{\ln(a)}$.

#### Propriétés algébriques

Pour tous réels $x$ et $y$ strictement positifs et pour tout nombre rationnel $r$, on a:
* $\log_a(x\times y)=\log_a(x)+\log_a(y)$,
* $\log_a(x^r)=r\log_a(x)$,
* $\log_a\left(\frac{x}{y}\right)=\log_a(x)-\log_a(y)$,
* $\log_a\left(\frac1{x}\right)=-\log_a(x)$,
* $\log_a(a^r)=r$,
* $\log_{a^r}(x)=\frac1{r}\log_a(x)$,
* $\log_{\frac1{a}}(x)=-\log_a(x)$,