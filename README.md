

# Portfolio Alexandre Dubois – Concepteur Designer CDUI

![Aperçu du site](https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=800\&h=800\&fit=crop\&crop=face)

## Présentation

Ce projet est le **portfolio personnel** d’Alexandre Dubois, Concepteur Designer CDUI spécialisé en UI/UX et design d’interfaces pour jeux vidéo. Il met en avant mes compétences, mon parcours, mon expérience professionnelle et mes réalisations créatives.
Le site est moderne, responsive, optimisé SEO, et inclut un formulaire de contact sécurisé via Formspree.

---

## Fonctionnalités principales

* **Design moderne neon & glassmorphism**
* **Navigation fluide** (smooth scroll, scroll progressif)
* **Effets visuels avancés** (background animé, particules, firework sur la navbar, transitions)
* **Sections Portfolio, Compétences, Expérience, Contact**
* **Formulaire de contact** avec validation, protection anti-spam et envoi sécurisé Formspree
* **Accessibilité renforcée** (contrastes, navigation clavier, ARIA)
* **Optimisation SEO complète** (meta balises, OpenGraph, Twitter Cards, favicon, canonical, manifest)
* **Responsive** : s’adapte à tous les écrans (desktop, mobile, 4K, etc.)
* **Aperçu détaillé des projets portfolio** (modal avec grande image & description)
* **Code HTML/CSS/JS pur, aucune dépendance serveur**

---

## Déploiement rapide

1. **Cloner ou télécharger le projet**

   ```bash
   git clone https://github.com/ton-utilisateur/portfolio-alexandre-dubois.git
   ```

2. **Placer les fichiers sur ton hébergement**

   * Fichier principal : `index.html`
   * Ajouter les favicons et le `site.webmanifest` à la racine si tu veux une PWA complète

3. **Personnalisation du domaine**

   * Modifie la balise `<link rel="canonical">` et les balises Open Graph/Twitter (`href`, `content`) avec ton vrai domaine.
   * Modifie la variable `action` du formulaire Formspree avec **ton propre endpoint Formspree**.

4. **Pour le formulaire de contact**

   * Crée un compte [Formspree](https://formspree.io)
   * Remplace l’URL dans le `<form action="...">` par la tienne (ex : `https://formspree.io/f/xxxxxxx`)
   * Optionnel : adapte la redirection via l’input `<input type="hidden" name="_next" ...>` si besoin

---

## Structure du projet

```
.
├── index.html          # Fichier principal (tout-en-un)
├── favicon.ico         # Favicon classique
├── favicon.svg         # Favicon vectoriel
├── apple-touch-icon.png
├── site.webmanifest    # Manifest pour PWA
```

Toutes les ressources externes (Bootstrap, FontAwesome, Google Fonts, Unsplash…) sont chargées via CDN.

---

## Détails techniques

* **Technos :** HTML5, CSS3, Bootstrap 5, FontAwesome 6, Google Fonts, JavaScript ES6
* **Accessibilité** : couleurs contrastées, ARIA labels, navigation clavier
* **SEO** : balises meta, title/description/keywords, OpenGraph, Twitter Card, canonical, structured data JSON-LD (commenté)
* **Responsive** : media queries poussés pour toutes tailles d’écran
* **Portfolio interactif** : ouverture des projets dans un modal avec description détaillée
* **Formulaire de contact** : validation côté navigateur, feedback d’envoi, gestion d’erreur, protection anti-spam (\_gotcha)

---

## Personnalisation rapide

* **Changer la photo de profil** : remplace l’URL `src` de la balise `<img class="profile-img">`
* **Modifier les réseaux sociaux** : adapte les `href` dans le footer
* **Ajouter de nouveaux projets** : duplique un bloc `.portfolio-item` dans la section Portfolio
* **Changer les compétences** : modifie la section Skills (barres de progression)
* **Textes** : tout le contenu est modifiable directement dans le HTML

---

## Bonnes pratiques / Astuces

* **Score SEO 100% Lighthouse** : grâce aux balises meta et à la structure accessible, tu atteindras un score maximal SEO + Accessibilité
* **Pour PWA** : fournis le fichier `site.webmanifest` et les icônes nécessaires
* **Sécurité** : aucun script tiers non sécurisé, pas de tracking, pas de dépendance serveur

---

## Screenshots

> (Ajoute ici quelques captures d’écran du site, sur mobile et desktop)

---

## Licence

Ce code est fourni à titre de base portfolio.
Utilisation personnelle et adaptation autorisées. Pour une exploitation commerciale, mentionne l’auteur d’origine.

---

## Contact

Alexandre Dubois
📧 [alexandre.dubois@email.com](mailto:alexandre.dubois@email.com)
🌍 [Paris, France](#)
🔗 [LinkedIn](#) | [GitHub](#)

---

## Crédits

* Images : [Unsplash](https://unsplash.com)
* Icônes : [FontAwesome](https://fontawesome.com)
* CSS : [Bootstrap](https://getbootstrap.com)
* Envoi mails : [Formspree](https://formspree.io)

---

*Feel free to fork, adapter et partager !*

---

[Click here to try a new GPT!](https://f614.short.gy/Code)
