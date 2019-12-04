export const parseSecondaryConfig = ({
  secondarySidebar,
  secondaryPersistentScreenFit,
  secondaryPersistentPushed,
  secondaryOpened,
  setSecondaryOpened,
  secondaryCollapsed,
  setSecondaryCollapsed,
  secondaryClipped,
  secondaryAutoCollapseDisabled,
  secondaryCollapseBreakpoint,
  getSecondarySidebarWidth,
  getSecondarySidebarGap,
  ...rest
} = {}) => ({
  ...rest,
  sidebar: secondarySidebar,
  persistentScreenFit: secondaryPersistentScreenFit,
  persistentPushed: secondaryPersistentPushed,
  opened: secondaryOpened,
  collapsed: secondaryCollapsed,
  clipped: secondaryClipped,
  setOpened: setSecondaryOpened,
  setCollapsed: setSecondaryCollapsed,
  autoCollapseDisabled: secondaryAutoCollapseDisabled,
  collapseBreakpoint: secondaryCollapseBreakpoint,
  getSidebarWidth: getSecondarySidebarWidth,
  getSidebarGap: getSecondarySidebarGap,
});

export const secondaryAdapter = {
  mapArgs: fn => args => fn(parseSecondaryConfig(args)),
};

const getSidebarWidth = ({
  collapsed,
  hidden,
  collapsible,
  width,
  collapsedWidth,
}) => {
  if (hidden) return 0;
  return collapsible && collapsed ? collapsedWidth : width;
};

export default (ctx = {}) => {
  const { sidebar = {}, opened, collapsed } = ctx;
  const width = getSidebarWidth({ ...sidebar, collapsed });
  return {
    ...sidebar,
    width,
    calculateGap: ({ persistentPushed } = {}) => {
      switch (sidebar.variant) {
        case 'temporary':
          return 0;
        case 'permanent':
          return width;
        case 'persistent':
          return opened && persistentPushed ? width : 0;
        default:
          return undefined;
      }
    },
    calculateAffectedWidth: ({
      persistentScreenFit,
      persistentPushed,
    } = {}) => {
      switch (sidebar.variant) {
        case 'temporary':
          return '100%';
        case 'permanent':
          return width;
        case 'persistent':
          return opened && persistentScreenFit && persistentPushed
            ? width
            : '100%';
        default:
          return undefined;
      }
    },
  };
};
