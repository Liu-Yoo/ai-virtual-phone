/* ════════════════════════════════════════════════════════════════════
   ⬇⬇⬇  外观自定义区（你只需要改这里）  ⬇⬇⬇
   ════════════════════════════════════════════════════════════════════ */

/**
 * 1) 桌面背景图片
 */
const DESKTOP_BG_IMAGE = "https://images.unsplash.com/photo-1534447677768-be436bb09401?q=80&w=1000&auto=format&fit=crop";

/**
 * 2) App 图标的圆角大小
 */
const IOS_ICON_RADIUS = "50%";

const DESKTOP_BG_IMAGE_CSS = DESKTOP_BG_IMAGE ? `url("${DESKTOP_BG_IMAGE}")` : "none";

const DESKTOP_APPEARANCE_CSS = `
:root {
  --custom-desktop-bg-image: ${DESKTOP_BG_IMAGE_CSS};
  --custom-ios-icon-radius: ${IOS_ICON_RADIUS};
}
/* ════════════════════════════════════════════════════════════════════
   ⬆⬆⬆  外观自定义区结束，下面是原来的逻辑，未做其它改动  ⬆⬆⬆
   ════════════════════════════════════════════════════════════════════ */
