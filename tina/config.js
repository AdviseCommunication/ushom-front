import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

const menuBaseFields = [
  {
    type: "string",
    name: "label",
    label: "Libellé",
  },
  {
    type: "string",
    name: "url",
    label: "URL",
  },
  {
    type: "boolean",
    name: "blank",
    label: "Nouvel onglet ?",
  }
];

const menuFields = {
  type: "object",
  name: "items",
  label: "Items",
  list: true,
  fields: [
    ...menuBaseFields,
    {
      type: "object",
      name: "items",
      label: "Enfants",
      list: true,
      fields: [
        ...menuBaseFields,
      ]
    },
  ],
};

const imgFields = {
  type: "object",
  name: "img",
  label: "Image",
  fields: [
    {
      type: "image",
      name: "src",
      label: "URL",
    },
    {
      type: "string",
      name: "alt",
      label: "Texte alternatif",
    },
  ],
};

const bannerFields = {
  type: "object",
  name: "banner",
  label: "Bannière",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titre",
    },
    {...imgFields},
    {
      type: "object",
      name: "nav",
      label: "Sections",
      list: true,
      fields: [
        {
          type: "string",
          name: "label",
          label: "Libellé",
        },
        {
          type: "string",
          name: "url",
          label: "URL",
        },
      ],
    },
  ],
};

const seoFields = {
  type: "object",
  name: "seo",
  label: "SEO",
  fields: [
    {
      type: "string",
      name: "title",
      label: "Titre",
    },
    {
      type: "string",
      name: "description",
      label: "Description",
    },
  ],
};

const ctaFields = {
  type: "object",
  name: "cta",
  label: "Appel à l'action",
  fields: [
    {
      type: "string",
      name: "href",
      label: "URL",
    },
    {
      type: "string",
      name: "children",
      label: "Libellé",
    },
    {
      type: "boolean",
      name: "blank",
      label: "Nouvel onglet ?",
    },
    {
      type: "string",
      name: "theme",
      label: "theme",
    },
  ],
};

export default defineConfig({
  branch,
  clientId: null, // Get this from tina.io
  token: null, // Get this from tina.io
  client: { skip: true },
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        label: "Activités",
        name: "activit_s",
        path: "content/activities",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "string",
            name: "preview",
            label: "Description courte",
          },
          {
            type: "object",
            name: "options",
            label: "Options",
            fields: [
              {
                type: "string",
                name: "cat",
                label: "Catégorie",
                options: ["Appui professionnel", "Représentation", "Projets"],
              },
              {
                type: "boolean",
                name: "private",
                label: "Rendre privé ?",
              },
            ],
          },
          {...seoFields},
          {...ctaFields},
          {
            type: "object",
            name: "resources",
            label: "Ressources",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "image",
                name: "file",
                label: "Fichier/Document",
              },
              {
                type: "string",
                name: "url",
                label: "OU lien",
              },
              {
                type: "string",
                name: "children",
                label: "Libellé",
              },
              {
                type: "boolean",
                name: "blank",
                label: "Nouvel onglet ?",
              },
            ],
          },
        ],
      },
      {
        label: "Dossiers",
        name: "dossiers",
        path: "content/threads",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "string",
            name: "preview",
            label: "Description",
            ui: {
              component: "textarea",
            },
          },
          {
            type: "image",
            name: "banner",
            label: "Image à la une",
          },
          {
            type: "object",
            name: "options",
            label: "Options",
            fields: [
              {
                type: "boolean",
                name: "use_banner",
                label: "Image en couverture",
              },
              {
                type: "boolean",
                name: "private",
                label: "Rendre privé",
              },
            ],
          },
          {...seoFields},
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true,
          },
        ],
      },
      {
        label: "Évènements",
        name: "_v_nements",
        path: "content/events",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "string",
            name: "preview",
            label: "Description courte",
          },
          {
            type: "object",
            name: "options",
            label: "Options",
            fields: [
              {
                type: "boolean",
                name: "private",
                label: "Rendre privé ?",
              },
            ],
          },
          {...seoFields},
        ],
      },
      {
        label: "Pages",
        name: "pages",
        path: "content/pages",
        match: {
          include: "**/*",
        },
        fields: [
          {
            type: "rich-text",
            name: "body",
            label: "Body of Document",
            description: "This is the markdown body",
            isBody: true,
          },
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date de publication",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Extrait",
          },
        ],
      },
      {
        label: "Accueil",
        name: "accueil",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "home",
        },
        fields: [
          {
            type: "object",
            name: "banner",
            label: "Bannière",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {...imgFields},
            ],
          },
          {
            type: "object",
            name: "about",
            label: "A propos",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "content",
                label: "Contenu",
                ui: {
                  component: "textarea",
                },
              },
              {...ctaFields}
            ],
          },
          {
            type: "object",
            name: "features",
            label: "Mise en avant",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "content",
                    label: "Contenu",
                  },
                  {
                    type: "image",
                    name: "icon",
                    label: "Icône",
                  },
                  {
                    type: "string",
                    name: "source",
                    label: "Source",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "homeCta",
            label: "CTA",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre de bloc",
              },
              {
                type: "object",
                name: "items",
                label: "Liens",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "libelle",
                    label: "Libellé",
                  },
                  {...imgFields},
                  {...ctaFields},
                ],
              },
            ],
          },
          {
            type: "object",
            name: "territories",
            label: "Territoires",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
            ],
          },
          {...seoFields},
        ],
      },
      {
        label: "Qui Sommes-Nous",
        name: "qui_sommes_nous",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "about",
        },
        fields: [
          {...bannerFields},
          {
            type: "object",
            name: "intro",
            label: "Intro",
            fields: [
              {
                type: "string",
                name: "custom_id",
                nameOverride: "id",
                label: "Identifiant",
              },
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "content",
                label: "Contenu",
                ui: {
                  component: "textarea",
                },
              },
            ],
          },
          {
            type: "object",
            name: "missions",
            label: "Missions",
            fields: [
              {
                type: "string",
                name: "custom_id",
                nameOverride: "id",
                label: "Identifiant",
              },
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "sub",
                label: "Sous-titre",
              },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Titre",
                  },
                  {
                    type: "boolean",
                    name: "hide_title",
                    label: "Masquer le titre",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "Zone de texte",
                    ui: {
                      component: "textarea",
                    },
                  },
                ],
              },
            ],
          },
          {...seoFields},
        ],
      },
      {
        label: "Contact",
        name: "contact",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "contact",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre principal",
          },
          {
            type: "object",
            name: "form",
            label: "Formulaire",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "btnLabel",
                label: "Libellé bouton",
              },
              {
                type: "object",
                name: "fields",
                label: "Champs",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "label",
                    label: "Libéllé",
                  },
                  {
                    type: "string",
                    name: "type",
                    label: "Type de champ",
                    options: ["text", "email", "textarea"],
                  },
                  {
                    type: "boolean",
                    name: "required",
                    label: "Requis",
                  },
                  {
                    type: "boolean",
                    name: "fullsize",
                    label: "Pleine largeur",
                  },
                ],
              },
            ],
          },
          {...seoFields},
        ],
      },
      {
        label: "Territoires",
        name: "territoires",
        path: "content/datas",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "landlords",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "object",
            name: "items",
            label: "Zones",
            list: true,
            fields: [
              {
                type: "string",
                name: "name",
                label: "Nom de la zone",
              },
              {
                type: "object",
                name: "items",
                label: "Territoires",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "name",
                    label: "Nom du territoire",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "Sous-titre",
                  },
                  {
                    type: "boolean",
                    name: "is_pf",
                    label: "Polynésie",
                  },
                  {
                    type: "boolean",
                    name: "is_nc",
                    label: "Nouvelle-Calédonie",
                  },
                  {
                    type: "image",
                    name: "map",
                    label: "Carte SVG",
                  },
                  {
                    type: "object",
                    name: "presentation",
                    label: "Présentation générale",
                    fields: [
                      {
                        type: "string",
                        name: "el0",
                        label: "Superficie",
                      },
                      {
                        type: "string",
                        name: "el1",
                        label: "Nombre d'habitant",
                      },
                      {
                        type: "string",
                        name: "notes",
                        label: "Notes supplémentaires",
                        ui: {
                          component: "textarea",
                        },
                      },
                      {
                        type: "string",
                        name: "el2",
                        label:
                          "Nombre de bailleurs sociaux présent sur le territoire",
                      },
                      {
                        type: "string",
                        name: "el3",
                        label: "Nombre de logements sociaux",
                      },
                      {
                        type: "string",
                        name: "el4",
                        label:
                          "Nombre de logements sociaux nécessitant une réhabilitation",
                      },
                      {
                        type: "string",
                        name: "el5",
                        label: "Loyer moyen au m²",
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "bailleurs",
                    label: "Bailleurs",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "title",
                        label: "Nom du bailleur",
                      },
                      {
                        type: "image",
                        name: "logo",
                        label: "Logo",
                      },
                      {
                        type: "string",
                        name: "website",
                        label: "Site web",
                      },
                      {
                        type: "boolean",
                        name: "masquer",
                        label: "Masquer",
                      },
                      {
                        type: "object",
                        name: "datas",
                        label: "Données",
                        fields: [
                          {
                            type: "string",
                            name: "el0",
                            label: "Nombre de résidences",
                          },
                          {
                            type: "string",
                            name: "el1",
                            label: "Nombre de logements",
                          },
                          {
                            type: "string",
                            name: "el2",
                            label: "Capacité d’accueil maximale",
                          },
                          {
                            type: "string",
                            name: "el3",
                            label: "Taux d’occupation du parc social",
                          },
                          {
                            type: "string",
                            name: "el4",
                            label: "Nombre de logements construits",
                          },
                          {
                            type: "string",
                            name: "el5",
                            label: "Logements PLS construits",
                          },
                          {
                            type: "string",
                            name: "el6",
                            label: "Logements LLS construits",
                          },
                          {
                            type: "string",
                            name: "el7",
                            label: "Logements LLTS construits",
                          },
                          {
                            type: "string",
                            name: "el8",
                            label: "Logements en accession sociale construits",
                          },
                          {
                            type: "string",
                            name: "el9",
                            label:
                              "Logements en cours de construction ou planifiés",
                          },
                          {
                            type: "string",
                            name: "z1",
                            label: "Logement LLT (spécifique NC)",
                          },
                          {
                            type: "string",
                            name: "z2",
                            label: "Logement LLA (spécifique NC)",
                          },
                          {
                            type: "string",
                            name: "z3",
                            label: "Logement construit (spécifique PF)",
                          },
                          {
                            type: "string",
                            name: "z4",
                            label: "Parcelle viabilisée (spécifique PF)",
                          },
                          {
                            type: "string",
                            name: "z5",
                            label: "Logement réhabilité (spécifique PF)",
                          },
                          {
                            type: "string",
                            name: "z6",
                            label:
                              "Logement et parcelle planifiés (spécifique PF)",
                          },
                        ],
                      },
                    ],
                  },
                  {
                    type: "object",
                    name: "gps",
                    label: "Coordonnées",
                    fields: [
                      {
                        type: "number",
                        name: "x",
                        label: "Axe horizontal",
                      },
                      {
                        type: "number",
                        name: "y",
                        label: "Axe vertical",
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Rapport d'activité",
        name: "rapport_d_activit_",
        path: "content/datas",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "report",
        },
        fields: [
          {
            type: "string",
            name: "mainTitle",
            label: "Titre principal",
          },
          {
            type: "string",
            name: "title",
            label: "Titre secondaire",
          },
          {
            type: "string",
            name: "content",
            label: "Contenu",
          },
          {...imgFields},
          {
            type: "object",
            name: "cta",
            label: "CTA",
            fields: [
              {
                type: "image",
                name: "href",
                label: "Document",
              },
              {
                type: "string",
                name: "children",
                label: "Libellé",
              },
              {
                type: "boolean",
                name: "blank",
                label: "Nouvel onglet ?",
              },
              {
                type: "string",
                name: "theme",
                label: "Thème",
                options: ["wide", "primary", "black", "white"],
              },
            ],
          },
        ],
      },
      {
        label: "Agir",
        name: "agir",
        path: "content/datas",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "act",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "number",
            name: "cols",
            label: "Nb de colonnes",
          },
          {
            type: "object",
            name: "items",
            label: "Blocs",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "image",
                name: "icon",
                label: "Icône",
              },
              {
                type: "object",
                name: "list",
                label: "Actions",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Texte",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Organigramme",
        name: "organigramme",
        path: "content/datas",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "organizational",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "object",
            name: "items",
            label: "Personnes",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Prénom Nom",
              },
              {
                type: "string",
                name: "jobtitle",
                label: "Fonction",
              },
              {
                type: "image",
                name: "photo",
                label: "Photo",
              },
            ],
          },
          {
            type: "boolean",
            name: "hide",
            label: "Masquer",
          },
        ],
      },
      {
        label: "Interlocuteurs",
        name: "interlocuteurs",
        path: "content/datas",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "interlocutors",
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Titre",
          },
          {
            type: "object",
            name: "zone",
            label: "Type",
            list: true,
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "title",
                    label: "Titre",
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        label: "Menus",
        name: "menus",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "nav",
        },
        fields: [
          {
            type: "object",
            name: "main",
            label: "Menu principal",
            fields: [
              {...menuFields},
            ],
          },
          {
            type: "object",
            name: "footer",
            label: "Menu pied-de-page",
            fields: [
              {...menuFields},
            ],
          },
          {
            type: "object",
            name: "social",
            label: "Menu social",
            fields: [
              {
                type: "object",
                name: "items",
                label: "Items",
                list: true,
                fields: [
                  {
                    type: "image",
                    name: "icon",
                    label: "Icône",
                  },
                  ...menuBaseFields
                ],
              },
            ],
          },
          {
            type: "object",
            name: "memberArea",
            label: "Espace membre",
            fields: [
              {
                type: "boolean",
                name: "activate",
                label: "Activer",
              },
            ],
          },
        ],
      },
      {
        label: "Paramètres",
        name: "param_tres",
        path: "content",
        format: "json",
        ui: {
          allowedActions: {
            create: false,
            delete: false,
          },
        },
        match: {
          include: "main",
        },
        fields: [
          {
            type: "object",
            name: "app",
            label: "Informations générales",
            fields: [
              {
                type: "string",
                name: "description",
                label: "Description",
              },
              {
                type: "string",
                name: "siteName",
                label: "Titre du site",
              },
              {
                type: "string",
                name: "gaId",
                label: "ID Google Tag Manager",
              },
              {
                type: "image",
                name: "banner",
                label: "Image par défaut",
              },
            ],
          },
          {
            type: "object",
            name: "address",
            label: "Adresse",
            fields: [
              {
                type: "string",
                name: "street",
                label: "Rue",
              },
              {
                type: "string",
                name: "city",
                label: "CP Ville",
              },
            ],
          },
          {
            type: "object",
            name: "activities",
            label: "Activités",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre de page",
              },
            ],
          },
          {
            type: "object",
            name: "threads",
            label: "Dossiers",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
            ],
          },
          {
            type: "object",
            name: "events",
            label: "Évènements",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre de page",
              },
            ],
          },
          {
            type: "object",
            name: "habitat",
            label: "Habiter en OM",
            fields: [
              {
                type: "string",
                name: "title",
                label: "Titre",
              },
              {
                type: "string",
                name: "presentationTitle",
                label: "Titre présentation",
              },
              {
                type: "object",
                name: "presentation",
                label: "Libellés présentation",
                fields: [
                  {
                    type: "string",
                    name: "el0",
                    label: "Superficie",
                  },
                  {
                    type: "string",
                    name: "el1",
                    label: "Nb habitant",
                  },
                  {
                    type: "string",
                    name: "el2",
                    label: "Nb bailleurs présent sur le territoire",
                  },
                  {
                    type: "string",
                    name: "el3",
                    label: "Nb global",
                  },
                  {
                    type: "string",
                    name: "el4",
                    label: "Nb nécessitant réhabilitation",
                  },
                  {
                    type: "string",
                    name: "el5",
                    label: "Loyer moyen",
                  },
                ],
              },
              {
                type: "string",
                name: "bailleursTitle",
                label: "Titre bailleurs",
              },
              {
                type: "object",
                name: "bailleurs",
                label: "Libellés bailleurs",
                fields: [
                  {
                    type: "string",
                    name: "el0_title",
                    label: "Titre infos générales",
                  },
                  {
                    type: "string",
                    name: "el0",
                    label: "Nb résidence",
                  },
                  {
                    type: "string",
                    name: "el1",
                    label: "Nb logement",
                  },
                  {
                    type: "string",
                    name: "el2",
                    label: "Capacité max",
                  },
                  {
                    type: "string",
                    name: "el3",
                    label: "Taux d’occupation",
                  },
                  {
                    type: "string",
                    name: "el4_title",
                    label: "Titre infos logements",
                  },
                  {
                    type: "string",
                    name: "el4",
                    label: "Nb construit",
                  },
                  {
                    type: "string",
                    name: "el5",
                    label: "Nb PLS",
                  },
                  {
                    type: "string",
                    name: "el6",
                    label: "Nb LLS",
                  },
                  {
                    type: "string",
                    name: "el7",
                    label: "Nb LLTS",
                  },
                  {
                    type: "string",
                    name: "el8",
                    label: "Nb en accession sociale",
                  },
                  {
                    type: "string",
                    name: "el9_title",
                    label: "Titre planifié",
                  },
                  {
                    type: "string",
                    name: "el9",
                    label: "Nb en cours ou planifié",
                  },
                  {
                    type: "string",
                    name: "z1",
                    label: "Nb LLT (spécifique NC)",
                  },
                  {
                    type: "string",
                    name: "z2",
                    label: "Nb LLA (spécifique NC)",
                  },
                  {
                    type: "string",
                    name: "z3",
                    label: "Nb logement construit (spécifique PF)",
                  },
                  {
                    type: "string",
                    name: "z4",
                    label: "Nb parcelle viabilisée (spécifique PF)",
                  },
                  {
                    type: "string",
                    name: "z5",
                    label: "Nb logement réhabilité (spécifique PF)",
                  },
                  {
                    type: "string",
                    name: "z6",
                    label: "Titre planifié (spécifique PF)",
                  },
                  {
                    type: "string",
                    name: "z7",
                    label: "Nb en cours/planifié (spécifique PF)",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "consent",
            label: "RGPD",
            fields: [
              {
                type: "string",
                name: "accept",
                label: "accept",
              },
              {
                type: "string",
                name: "content",
                label: "content",
                ui: {
                  component: "textarea",
                },
              },
              {
                type: "string",
                name: "decline",
                label: "decline",
              },
              {
                type: "string",
                name: "manage",
                label: "manage",
              },
              {
                type: "string",
                name: "more",
                label: "more",
              },
              {
                type: "object",
                name: "customize",
                label: "Libellés",
                fields: [
                  {
                    type: "string",
                    name: "menuTitle",
                    label: "menuTitle",
                  },
                  {
                    type: "string",
                    name: "title",
                    label: "title",
                  },
                  {
                    type: "string",
                    name: "content",
                    label: "content",
                  },
                  {
                    type: "string",
                    name: "validate",
                    label: "validate",
                  },
                ],
              },
              {
                type: "object",
                name: "services",
                label: "Services",
                list: true,
                fields: [
                  {
                    type: "string",
                    name: "custom_id",
                    nameOverride: "id",
                    label: "id",
                  },
                  {
                    type: "string",
                    name: "label",
                    label: "label",
                  },
                ],
              },
            ],
          },
          {
            type: "object",
            name: "post",
            label: "Pagination",
            fields: [
              {
                type: "string",
                name: "nextPost",
                label: "nextPost",
              },
              {
                type: "string",
                name: "previousPost",
                label: "previousPost",
              },
            ],
          },
          {
            type: "object",
            name: "fourZeroFour",
            label: "Page 404",
            fields: [
              {
                type: "string",
                name: "title",
                label: "title",
              },
              {
                type: "string",
                name: "content",
                label: "content",
              },
              {
                type: "string",
                name: "cta",
                label: "cta",
              },
              {
                type: "string",
                name: "metaTitle",
                label: "metaTitle",
              },
            ],
          },
          {
            type: "object",
            name: "switcher",
            label: "Toggles",
            fields: [
              {
                type: "string",
                name: "label",
                label: "label",
              },
            ],
          },
          {
            type: "string",
            name: "followTitle",
            label: "Titre bloc social",
          },
          {
            type: "string",
            name: "viewMore",
            label: "Libellé bouton +",
          },
        ],
      },
    ],
  },
});
