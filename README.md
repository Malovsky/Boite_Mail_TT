# Test technique Front-end

---

Déroulé et organisation
Ce test se compose de 2 parties:

un MVP
des features "bonus"
La partie MVP est obligatoire afin de completer le test. Les features "bonus" sont quant à elles non obligatoire et peuvent être complétées indépendamment, "à la carte".

## Présentation et contexte de l'application

L'outil est une application web de gestion des messages clients qui nous sont envoyés depuis la plateforme wethenew, elle permet principalement la visualisation de tous les messages envoyés.

Les messages peuvent être de plusieurs types: email, SMS, voix ... Par conséquent, cela s'applique à l'équipe du service client de Wethenew. Chaque administrateur du service client peut afficher ses propres messages.

Par conséquent, le but de cet exercice est d'utiliser l'API (RESTFUL) JSON disponible pour implémenter le code client de l'application.

## MVP requirements

- Intégrer la version mobile et la version desktop.

- Je peux changer le compte administrateur à partir du menu déroulant, puis je peux voir une liste de messages dédiée pour le compte administrateur sélectionné.

- Je clique sur un message et visualise les détails du message

- Un compteur de messages non lus qui sera mis à jour de façon persistante, lorsque vous cliquez sur un nouveau message non lu (envoyer une requête à l'API pour conserver les données)

## FEATURES BONUS A LA CARTE

#### INFINITE SCROLL

- Je peux faire défiler la liste des messages sur quelques pages à l'infini (jusqu'a la fin de la liste)

#### ROUTING

- Intégrer la lecture d'un message en donnant la possibilité d'y accéder depuis l'URL (routing)

## Contenu

Les maquettes sont fournies au format [PDF](maquettes/wtn-crm-fe-test.pdf) et au format [FIGMA](https://www.figma.com/) afin de récupérer les assets et avoir le details pour aider l'implémentation.

## Bonus Appréciés

- Dates sur la liste des messages (ex: "Hier", "Il y a 2 heures")
- Tests (fonctionnels, unitaires)
- Fidélité des écrans avec les maquettes fournies
- Bonnes pratiques d'accessibilité

## Contraintes techniques

- Tooling/Framework base du test sur ReactJs, mais pour le reste à vous de décider !
- Utiliser l'API fourni
- Qualité du code
