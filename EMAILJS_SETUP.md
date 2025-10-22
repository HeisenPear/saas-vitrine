# Configuration EmailJS

## Étape 1 : Créer un compte EmailJS

1. Allez sur https://www.emailjs.com/
2. Créez un compte gratuit (200 emails/mois)
3. Vérifiez votre email

## Étape 2 : Ajouter un service Gmail

1. Dans le dashboard EmailJS, allez dans **"Email Services"**
2. Cliquez sur **"Add New Service"**
3. Sélectionnez **"Gmail"**
4. Connectez votre compte Gmail : **renaissance-toursweb@gmail.com**
5. Notez le **Service ID** (exemple : `service_abc123`)

## Étape 3 : Créer un template d'email

1. Allez dans **"Email Templates"**
2. Cliquez sur **"Create New Template"**
3. Configurez le template avec ces variables :

### Template de base recommandé :

**Subject :** `Nouvelle demande de contact - {{from_name}}`

**Content :**
```
Nouvelle demande de contact depuis le site Renaissance

Nom : {{from_name}}
Email : {{from_email}}
Téléphone : {{phone}}
Type de projet : {{project_type}}
Budget : {{budget}}

Message :
{{message}}

---
Email envoyé automatiquement depuis renaissance-web.fr
```

4. Notez le **Template ID** (exemple : `template_xyz456`)

## Étape 4 : Récupérer la Public Key

1. Allez dans **"Account"** → **"General"**
2. Trouvez votre **Public Key** (exemple : `user_123abc`)

## Étape 5 : Configurer les variables d'environnement

### En local (développement) :

1. Ouvrez le fichier `.env` à la racine du projet
2. Remplacez les valeurs par vos vrais IDs :

```env
PUBLIC_EMAILJS_SERVICE_ID=service_VOTRE_ID_ICI
PUBLIC_EMAILJS_TEMPLATE_ID=template_VOTRE_ID_ICI
PUBLIC_EMAILJS_PUBLIC_KEY=VOTRE_PUBLIC_KEY_ICI
```

### Sur Vercel (production) :

1. Allez dans votre projet Vercel
2. Settings → Environment Variables
3. Ajoutez les 3 variables :
   - `PUBLIC_EMAILJS_SERVICE_ID` = votre service ID
   - `PUBLIC_EMAILJS_TEMPLATE_ID` = votre template ID
   - `PUBLIC_EMAILJS_PUBLIC_KEY` = votre public key
4. Redéployez le projet

## Étape 6 : Tester

1. Lancez le projet en local : `npm run dev`
2. Allez sur la page contact : http://localhost:4321/contact
3. Remplissez et soumettez le formulaire
4. Vérifiez que vous avez reçu l'email sur **renaissance-toursweb@gmail.com**

## Troubleshooting

### Le formulaire dit "Configuration EmailJS manquante"
→ Vérifiez que vos variables d'environnement sont bien définies dans le fichier `.env`

### L'email n'arrive pas
→ Vérifiez que :
- Le service Gmail est bien connecté dans EmailJS
- Le template utilise les bonnes variables ({{from_name}}, {{from_email}}, etc.)
- Vous n'avez pas dépassé la limite de 200 emails/mois

### Erreur 403 ou 401
→ Vérifiez que votre Public Key est correcte

## Variables utilisées dans le template

Le formulaire envoie ces variables à EmailJS :

- `from_name` : Nom complet de l'utilisateur
- `from_email` : Email de l'utilisateur
- `phone` : Téléphone (optionnel)
- `project_type` : Type de projet (site-vitrine, seo, abonnement, autre)
- `budget` : Budget estimé
- `message` : Message de l'utilisateur
- `to_email` : renaissance-toursweb@gmail.com (fixe)

## Support

- Documentation EmailJS : https://www.emailjs.com/docs/
- Dashboard EmailJS : https://dashboard.emailjs.com/
