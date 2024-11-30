console.log(__nsx_tui_styles.templates.all)
document.querySelectorAll('*').forEach(element => {
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
      'br-br': 'borderBottomRightRadius'
    },

    attributify: true,
    attributifyPrefix: 'tui-',
    aliases: {
      ...__nsx_tui_styles.templates.all,
      cls1: 'bg-red-500',
      cls2: 'box-200px cls1'
    }
  }).useDOM()
})
