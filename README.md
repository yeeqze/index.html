# Meuz'MUN - Guide de personnalisation

## 🎨 Design modernisé !

Votre site a été entièrement redesigné avec :
- ✅ Zéro émojis → Icônes SVG modernes
- ✅ Nouvelles polices (Montserrat + Inter)
- ✅ Couleurs vibrantes (bleus électriques + or)
- ✅ Animations 3D sur les cartes
- ✅ Effets au hover interactifs
- ✅ Hero avec grille animée

## 📸 Ajouter votre logo

1. Mettez votre fichier logo dans le dossier (ex: `logo.png`)
2. Ouvrez chaque fichier HTML
3. Trouvez cette ligne dans la navigation :
   ```html
   <a href="index.html" class="logo">Meuz'<span>MUN</span></a>
   ```
4. Remplacez par :
   ```html
   <a href="index.html" class="logo">
       <img src="logo.png" alt="Meuz'MUN" style="height: 40px;">
   </a>
   ```

## 🖼️ Ajouter des photos

### Dans le hero de l'accueil
Remplacez l'icône globe par une vraie image :
```html
<!-- Ancienne version -->
<div class="content-image">
    <span style="position: relative; z-index: 1;">🌐</span>
</div>

<!-- Nouvelle version -->
<div class="content-image" style="background-image: url('photo-mun.jpg'); background-size: cover;">
</div>
```

### Dans les cartes d'événement
Ajoutez un fond d'image :
```css
.event-card {
    background-image: url('votre-photo.jpg');
    background-size: cover;
    background-position: center;
}
```

## 🎨 Personnaliser les couleurs

Ouvrez `style.css` et modifiez les variables en haut du fichier :
```css
:root {
    --primary-blue: #0066cc;  /* Bleu principal */
    --secondary-blue: #00a8ff; /* Bleu secondaire */
    --accent-gold: #ffa500;    /* Or/Orange */
    --dark: #0a1628;          /* Fond sombre */
}
```

## ✏️ Modifier le contenu

### Page Équipe
Dans `equipe.html`, remplacez "Nom Prénom" par les vrais noms :
```html
<h3>Jean Dupont</h3>
<p>Secrétaire Général</p>
```

### Page Contact
Dans `contact.html`, mettez vos vraies coordonnées :
```html
<a href="mailto:votre.email@lycee.fr">votre.email@lycee.fr</a>
<p>@VotreCompteInstagram sur Instagram</p>
```

## 🚀 Mettre en ligne

1. Téléchargez tous les fichiers modifiés
2. Mettez-les dans votre dossier de projet
3. GitHub Desktop → Commit → Push
4. Attendez 1-2 minutes
5. Votre site est à jour sur `https://444-v.github.io/meuzmun/`

## 💡 Astuces

- Les icônes SVG peuvent être changées sur https://feathericons.com/
- Pour des photos gratuites : https://unsplash.com/
- Les animations se déclenchent au hover (survol)

## 🎯 Prochaines étapes suggérées

1. Ajoutez votre logo
2. Remplacez les photos placeholder
3. Mettez les vrais noms de l'équipe
4. Ajoutez vos contacts réels
5. Testez sur mobile !

Besoin d'aide ? Revenez vers moi ! 😊