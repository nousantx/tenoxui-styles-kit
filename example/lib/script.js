console.log(__nsx_tui_styles.templates.all)
document.querySelectorAll('*').forEach((element) => {
  new __tenoxui_core.MakeTenoxUI({
    element,
    ...__nsx_img_tools.tenoxuiConfig,
    property: {
      ...__nsx_img_tools.property,
      'bw-y': ['borderTopWidth', 'borderBottomWidth'],
      'bw-x': ['borderLeftWidth', 'borderRightWidth'],
      'bw-left': 'borderLeftWidth',
      'bw-bottom': 'borderBottomWidth',
      'bw-right': 'borderRightWidth',
      'br-t': ['borderTopRightRadius', 'borderTopLeftRadius'],
      'br-b': ['borderBottomRightRadius', 'borderBottomLeftRadius'],
      'br-l': ['borderBottomLeftRadius', 'borderTopLeftRadius'],
      'br-r': ['borderBottomRightRadius', 'borderTopRightRadius'],
      'br-tl': 'borderTopLeftRadius',
      'br-tr': 'borderTopRightRadius',
      'br-bl': 'borderBottomLeftRadius',
      'br-br': 'borderBottomRightRadius',
      'grid-cols': {
        property: 'gridTemplateColumns',
        value: 'repeat({0}, minmax(0, 1fr))'
      },
      'grid-rows': {
        property: 'gridTemplateRows',
        value: 'repeat({0}, minmax(0, 1fr))'
      },
      'col-start': 'gridColumnStart',
      'col-end': 'gridColumnEnd',
      'row-start': 'gridRowStart',
      'row-end': 'gridRowEnd',
      'col-span': {
        property: 'gridColumn',
        value: 'span {0} / span {0}'
      },
      'row-span': {
        property: 'gridRow',
        value: 'span {0} / span {0}'
      }
    },

    attributify: true,
    attributifyPrefix: 'tui-',
    aliases: {
      ...__nsx_tui_styles.templates.all,
      cls1: 'bg-red-500',
      cls2: 'box-200px cls1',
      'grid-column': '[gridTemplateColumns]-none',
      'grid-cols-none': '[gridTemplateColumns]-none',
      'grid-cols-subgrid': '[gridTemplateRoes]-subgrid',
      'grid-rows-none': '[gridTemplateColumns]-none',
      'grid-rows-subgrid': '[gridTemplateRows]-subgrid',
      'col-span-full': '[gridColumn]-[1_/_-1]]'
    }
  }).useDOM()
})
