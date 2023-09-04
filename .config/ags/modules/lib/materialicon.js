export const MaterialIcon = (icon, size, props = {}) => ags.Widget.Label({
    ...props,
    className: `icon-material txt-${size} txt`,
    label: icon,
})