export default {
  editor: {
    label: { en: 'Navigation Menu', fr: 'Menu de navigation' },
    icon: 'menu',
    bubble: { icon: 'menu' }
  },
  triggerEvents: [
    { name: 'itemClick', label: { en: 'On item click', fr: 'Lors du clic sur un élément' } },
    { name: 'subItemClick', label: { en: 'On sub-item click', fr: 'Lors du clic sur un sous-élément' } },
    { name: 'open', label: { en: 'On submenu open', fr: 'Lors de l\'ouverture du sous-menu' } },
    { name: 'close', label: { en: 'On submenu close', fr: 'Lors de la fermeture du sous-menu' } }
  ],
  properties: {
    // Layout
    orientation: {
      label: { en: 'Orientation', fr: 'Orientation' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'horizontal', label: { en: 'Horizontal', fr: 'Horizontal' } },
          { value: 'vertical', label: { en: 'Vertical', fr: 'Vertical' } }
        ]
      },
      defaultValue: 'horizontal',
      bindable: true,
      section: 'layout'
    },
    
    // Behavior
    trigger: {
      label: { en: 'Trigger', fr: 'Déclencheur' },
      type: 'TextSelect',
      options: {
        choices: [
          { value: 'click', label: { en: 'Click', fr: 'Clic' } },
          { value: 'hover', label: { en: 'Hover', fr: 'Survol' } }
        ]
      },
      defaultValue: 'click',
      bindable: true,
      section: 'behavior'
    },
    single: {
      label: { en: 'Single submenu', fr: 'Sous-menu unique' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'behavior'
    },
    closeOnClick: {
      label: { en: 'Close on click', fr: 'Fermer au clic' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'behavior'
    },
    hoverDelay: {
      label: { en: 'Hover delay (ms)', fr: 'Délai de survol (ms)' },
      type: 'Number',
      defaultValue: 150,
      bindable: true,
      section: 'behavior'
    },
    leaveDelay: {
      label: { en: 'Leave delay (ms)', fr: 'Délai de sortie (ms)' },
      type: 'Number',
      defaultValue: 300,
      bindable: true,
      section: 'behavior'
    },
    
    // Appearance
    showArrows: {
      label: { en: 'Show arrows', fr: 'Afficher les flèches' },
      type: 'OnOff',
      defaultValue: true,
      bindable: true,
      section: 'appearance'
    },
    showIndicator: {
      label: { en: 'Show indicator', fr: 'Afficher l\'indicateur' },
      type: 'OnOff',
      defaultValue: false,
      bindable: true,
      section: 'appearance'
    },
    
    // Submenu
    submenuMinWidth: {
      label: { en: 'Submenu min width', fr: 'Largeur minimale du sous-menu' },
      type: 'Text',
      defaultValue: '400px',
      bindable: true,
      section: 'submenu'
    },
    
    // Style classes
    customClass: {
      label: { en: 'Custom CSS class', fr: 'Classe CSS personnalisée' },
      type: 'Text',
      section: 'style'
    },
    triggerClass: {
      label: { en: 'Trigger CSS class', fr: 'Classe CSS du déclencheur' },
      type: 'Text',
      section: 'style'
    },
    linkClass: {
      label: { en: 'Link CSS class', fr: 'Classe CSS du lien' },
      type: 'Text',
      section: 'style'
    },
    submenuClass: {
      label: { en: 'Submenu CSS class', fr: 'Classe CSS du sous-menu' },
      type: 'Text',
      section: 'style'
    },
    submenuPanelClass: {
      label: { en: 'Submenu panel CSS class', fr: 'Classe CSS du panneau sous-menu' },
      type: 'Text',
      section: 'style'
    },
    submenuContentClass: {
      label: { en: 'Submenu content CSS class', fr: 'Classe CSS du contenu sous-menu' },
      type: 'Text',
      section: 'style'
    },
    groupTitleClass: {
      label: { en: 'Group title CSS class', fr: 'Classe CSS du titre de groupe' },
      type: 'Text',
      section: 'style'
    },
    groupItemClass: {
      label: { en: 'Group item CSS class', fr: 'Classe CSS de l\'élément de groupe' },
      type: 'Text',
      section: 'style'
    },
    submenuItemClass: {
      label: { en: 'Submenu item CSS class', fr: 'Classe CSS de l\'élément de sous-menu' },
      type: 'Text',
      section: 'style'
    },
    indicatorClass: {
      label: { en: 'Indicator CSS class', fr: 'Classe CSS de l\'indicateur' },
      type: 'Text',
      section: 'style'
    }
  },
  
  defaultContent: {
    orientation: 'horizontal',
    trigger: 'click',
    single: true,
    closeOnClick: true,
    hoverDelay: 150,
    leaveDelay: 300,
    showArrows: true,
    showIndicator: false,
    submenuMinWidth: '400px',
    customClass: '',
    triggerClass: '',
    linkClass: '',
    submenuClass: '',
    submenuPanelClass: '',
    submenuContentClass: '',
    groupTitleClass: '',
    groupItemClass: '',
    submenuItemClass: '',
    indicatorClass: ''
  },
  
  settingsOptions: {
    autoByContent: true
  },
  
  actions: [
    {
      label: { en: 'Close all submenus', fr: 'Fermer tous les sous-menus' },
      action: 'closeAllSubmenus'
    }
  ]
} 