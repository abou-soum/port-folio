# 🌐 Portfolio Professionnel - Aboubacar Soumahoro

Portfolio moderne, responsive, épuré et professionnel conçu pour **Aboubacar Soumahoro**, combinant une double expertise : **Support Informatique N1/N2** & **Développement Web Front-End**.

---

## 🚀 Fonctionnalités & Spécifications

- **Design Dark & Tech Moderne** : Palette de couleurs professionnelle avec fond sombre (`#0f172a`), cartes (`#1e293b`) et accents en bleu cyan (`#38bdf8`) et bleu électrique (`#3b82f6`).
- **One-Page Responsive & Fluide** : Entièrement optimisé pour smartphones, tablettes et ordinateurs de bureau grâce à **Bootstrap 5**.
- **Bibliothèque d'icônes** : Intégration complète de **FontAwesome 6** pour illustrer chaque compétence et outil.
- **Micro-interactions & UX** :
  - Barre de navigation avec effet de flou dynamique au scroll et défilement fluide (*Smooth Scroll*).
  - Terminal interactif illustrant la double compétence Support & Intégration Web.
  - Bouton retour en haut (*Back to top*).
  - Formulaire de contact avec simulation d'envoi et notifications instantanées.
  - Timeline chronologique pour les expériences professionnelles et la formation.

---

## 📁 Architecture du Projet

```text
port-folio/
│
├── index.html          # Structure HTML5 sémantique du site
├── css/
│   └── style.css       # Styles personnalisés, thème tech & variables CSS
├── js/
│   └── main.js         # Logique d'interaction JS (navbar, feedback, back-to-top)
└── README.md           # Documentation et guide de déploiement
```

---

## 🖥️ Prévisualisation Locale

### Option 1 : Ouvrir directement dans le navigateur
Double-cliquez simplement sur le fichier `index.html` ou ouvrez-le avec votre navigateur préféré (Chrome, Edge, Firefox).

### Option 2 : Serveur local léger (Live Server ou Python)
Si vous disposez de Python :
```bash
python -m http.server 8000
```
Puis accédez à : `http://localhost:8000`

---

## 📦 Déploiement sur GitHub Pages

1. **Initialiser Git et commiter les fichiers :**
   ```bash
   git init
   git add .
   git commit -m "feat: portfolio initial Aboubacar Soumahoro"
   ```

2. **Lier votre dépôt GitHub distant :**
   ```bash
   git branch -M main
   git remote add origin https://github.com/VOTRE_NOM_UTILISATEUR/portfolio.git
   git push -u origin main
   ```

3. **Activer GitHub Pages :**
   - Rendez-vous sur votre dépôt GitHub : `Settings` > `Pages`.
   - Sous **Build and deployment** / **Branch**, sélectionnez la branche `main` et le dossier `/ (root)`.
   - Cliquez sur **Save**. Votre portfolio sera accessible en ligne gratuitement !

---

## ✏️ Personnalisation Rapide

- **Numéro de téléphone et Email** : Modifiez les balises `mailto:` et `tel:` dans la section Contact de `index.html`.
- **Lien du CV PDF** : Placez votre fichier `cv_aboubacar_soumahoro.pdf` à la racine et pointez le bouton *"Télécharger mon CV"* vers ce fichier (`href="cv_aboubacar_soumahoro.pdf" download`).
- **Liens GitHub & LinkedIn** : Remplacez les URLs factices par vos profils réels.
