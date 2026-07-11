/* @ds-bundle: {"format":4,"namespace":"BasimShabirDesignSystem_41feaf","components":[{"name":"Button","sourcePath":"components/buttons/Button.jsx"},{"name":"CarouselArrow","sourcePath":"components/buttons/CarouselArrow.jsx"},{"name":"IconButton","sourcePath":"components/buttons/IconButton.jsx"},{"name":"TextLink","sourcePath":"components/buttons/TextLink.jsx"},{"name":"CaseStudyCard","sourcePath":"components/cards/CaseStudyCard.jsx"},{"name":"ContactLauncher","sourcePath":"components/cards/ContactLauncher.jsx"},{"name":"FeatureCard","sourcePath":"components/cards/FeatureCard.jsx"},{"name":"InsightCard","sourcePath":"components/cards/InsightCard.jsx"},{"name":"ProjectCard","sourcePath":"components/cards/ProjectCard.jsx"},{"name":"StatCell","sourcePath":"components/data/StatCell.jsx"},{"name":"CookieConsent","sourcePath":"components/forms/CookieConsent.jsx"},{"name":"TextInput","sourcePath":"components/forms/TextInput.jsx"},{"name":"CategoryTab","sourcePath":"components/nav/CategoryTab.jsx"},{"name":"Footer","sourcePath":"components/nav/Footer.jsx"},{"name":"TopNav","sourcePath":"components/nav/TopNav.jsx"},{"name":"CtaBand","sourcePath":"components/surface/CtaBand.jsx"},{"name":"HeroBand","sourcePath":"components/surface/HeroBand.jsx"},{"name":"MStripe","sourcePath":"components/surface/MStripe.jsx"}],"sourceHashes":{"components/buttons/Button.jsx":"4d464841bfb8","components/buttons/CarouselArrow.jsx":"35879ef0e121","components/buttons/IconButton.jsx":"47d0722eab5a","components/buttons/TextLink.jsx":"a0776d1bb4d4","components/cards/CaseStudyCard.jsx":"72f00baaaf73","components/cards/ContactLauncher.jsx":"98683a164303","components/cards/FeatureCard.jsx":"705f8a917b85","components/cards/InsightCard.jsx":"6dc7fb697e7c","components/cards/ProjectCard.jsx":"0330fe70d30f","components/data/StatCell.jsx":"81e91fe78437","components/forms/CookieConsent.jsx":"ca0ceb541653","components/forms/TextInput.jsx":"839bff4c44df","components/nav/CategoryTab.jsx":"8c393cb6b2a5","components/nav/Footer.jsx":"404c0438c99b","components/nav/TopNav.jsx":"181583573fe1","components/surface/CtaBand.jsx":"7d38f1260683","components/surface/HeroBand.jsx":"046eaadd422c","components/surface/MStripe.jsx":"cd4dd8569e52","ui_kits/portfolio/app.jsx":"df340eb95b7b","ui_kits/portfolio/data.js":"abe8f85d9b70"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.BasimShabirDesignSystem_41feaf = window.BasimShabirDesignSystem_41feaf || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/buttons/Button.jsx
try { (() => {
/**
 * Button â€” the signature rectangular CTA. Uppercase, letterspaced, no radius.
 * Variants: primary (filled black with white outline+text) Â· outline (transparent + white outline) Â· onLight (black fill + white text used on light contexts).
 */
function Button({
  variant = "primary",
  size = "md",
  disabled = false,
  href,
  onClick,
  children,
  icon,
  iconTrailing = true,
  fullWidth = false,
  style,
  ...rest
}) {
  const height = size === "sm" ? 40 : 48;
  const padY = size === "sm" ? 12 : 16;
  const padX = size === "sm" ? 24 : 32;
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "var(--space-xs)",
    height,
    padding: `${padY}px ${padX}px`,
    fontFamily: "var(--font-display)",
    fontSize: "var(--fs-button)",
    fontWeight: "var(--weight-bold)",
    lineHeight: 1,
    letterSpacing: "var(--ls-button)",
    textTransform: "uppercase",
    border: "1px solid var(--on-dark)",
    borderRadius: "var(--radius-none)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--duration-base) var(--ease-standard), color var(--duration-base) var(--ease-standard), opacity var(--duration-base) var(--ease-standard)",
    width: fullWidth ? "100%" : "auto",
    textDecoration: "none",
    userSelect: "none",
    boxSizing: "border-box"
  };
  const variants = {
    primary: {
      background: "var(--canvas)",
      color: "var(--on-dark)"
    },
    outline: {
      background: "transparent",
      color: "var(--on-dark)"
    },
    onLight: {
      background: "var(--canvas)",
      color: "var(--on-dark)",
      borderColor: "var(--canvas)"
    }
  };
  const merged = {
    ...base,
    ...(variants[variant] || variants.primary),
    ...style
  };
  const Tag = href ? "a" : "button";
  const props = {
    onClick: disabled ? undefined : onClick,
    style: merged,
    disabled: Tag === "button" ? disabled : undefined,
    href: Tag === "a" ? href : undefined,
    "aria-disabled": disabled || undefined,
    ...rest
  };
  return /*#__PURE__*/React.createElement(Tag, props, icon && !iconTrailing ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: "inline-flex"
    }
  }, icon) : null, /*#__PURE__*/React.createElement("span", null, children), icon && iconTrailing ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      display: "inline-flex"
    }
  }, icon) : null);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/Button.jsx", error: String((e && e.message) || e) }); }

// components/buttons/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton â€” 48Ã—48 circular icon control. The only non-rectangular button shape.
 */
function IconButton({
  size = 48,
  label,
  onClick,
  disabled = false,
  variant = "default",
  href,
  style,
  children,
  ...rest
}) {
  const bg = variant === "elevated" ? "var(--surface-elevated)" : "var(--surface-card)";
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: size,
    height: size,
    background: bg,
    color: "var(--on-dark)",
    border: "none",
    borderRadius: "var(--radius-full)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.4 : 1,
    transition: "background var(--duration-base) var(--ease-standard)",
    padding: 0,
    boxSizing: "border-box",
    textDecoration: "none"
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    "aria-label": label,
    title: label,
    href: href,
    onClick: disabled ? undefined : onClick,
    style: {
      ...base,
      ...style
    },
    disabled: Tag === "button" ? disabled : undefined
  }), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/buttons/CarouselArrow.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** CarouselArrow â€” chevron-glyph specialization of IconButton. */
function CarouselArrow({
  direction = "next",
  onClick,
  label,
  ...rest
}) {
  const glyph = direction === "next" ? "â†’" : "â†";
  const resolvedLabel = label || (direction === "next" ? "Next" : "Previous");
  return /*#__PURE__*/React.createElement(__ds_scope.IconButton, _extends({
    label: resolvedLabel,
    onClick: onClick
  }, rest), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 18,
      fontWeight: 400,
      lineHeight: 1
    }
  }, glyph));
}
Object.assign(__ds_scope, { CarouselArrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/CarouselArrow.jsx", error: String((e && e.message) || e) }); }

// components/buttons/TextLink.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextLink â€” inline uppercase letterspaced link with trailing arrow. Always white.
 */
function TextLink({
  href = "#",
  onClick,
  children,
  showArrow = true,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    onClick: onClick,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-xs)",
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-dark)",
      textDecoration: "none",
      transition: "opacity var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", null, children), showArrow ? /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true
  }, "\u2192") : null);
}
Object.assign(__ds_scope, { TextLink });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/buttons/TextLink.jsx", error: String((e && e.message) || e) }); }

// components/cards/CaseStudyCard.jsx
try { (() => {
/**
 * CaseStudyCard â€” edge-to-edge photo with bottom-left overlay caption. No card frame.
 */
function CaseStudyCard({
  image,
  imageAlt = "",
  caption,
  category,
  href = "#",
  aspect = "21 / 9",
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      position: "relative",
      display: "block",
      width: "100%",
      aspectRatio: aspect,
      background: image ? `#000 url(${image}) center/cover no-repeat` : "var(--surface-card)",
      color: "var(--on-dark)",
      textDecoration: "none",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: "linear-gradient(180deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.65) 100%)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: "var(--space-lg)",
      bottom: "var(--space-lg)",
      right: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, category ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body-strong)"
    }
  }, category) : null, caption ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-title-md)",
      fontWeight: "var(--weight-regular)",
      lineHeight: "var(--lh-title-relaxed)",
      color: "var(--on-dark)"
    }
  }, caption) : null));
}
Object.assign(__ds_scope, { CaseStudyCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/CaseStudyCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ContactLauncher.jsx
try { (() => {
/**
 * ContactLauncher â€” right-side sidebar card ("Get in touch") on marketing pages.
 * Adapted from the BMW M chatbot-launcher pattern.
 */
function ContactLauncher({
  eyebrow = "Get in touch",
  title = "Start a project.",
  prompt = "Advisory sprint, engagement, or a research collab â€” let's talk.",
  buttonLabel = "Contact",
  onClick,
  href
}) {
  return /*#__PURE__*/React.createElement("aside", {
    style: {
      background: "var(--surface-card)",
      color: "var(--on-dark)",
      padding: "var(--space-lg)",
      border: "1px solid var(--hairline-strong)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body)"
    }
  }, eyebrow), /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-title-lg)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-title)",
      textTransform: "uppercase",
      color: "var(--on-dark)",
      margin: 0
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-light)",
      color: "var(--body)",
      margin: 0
    }
  }, prompt), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    size: "sm",
    onClick: onClick,
    href: href
  }, buttonLabel)));
}
Object.assign(__ds_scope, { ContactLauncher });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ContactLauncher.jsx", error: String((e && e.message) || e) }); }

// components/cards/FeatureCard.jsx
try { (() => {
/**
 * FeatureCard â€” 16:9 photo top, category eyebrow, title, description.
 * Used in 3-up "MORE FROM THE STUDIO" magazine-style grids.
 */
function FeatureCard({
  image,
  imageAlt = "",
  category,
  title,
  description,
  href = "#",
  linkLabel = "Read more",
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--surface-card)",
      borderRadius: "var(--radius-none)",
      color: "var(--on-dark)",
      textDecoration: "none",
      border: "1px solid var(--hairline-strong)",
      transition: "border-color var(--duration-base) var(--ease-standard)",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 9",
      background: `#000 url(${image}) center/cover no-repeat`
    },
    role: "img",
    "aria-label": imageAlt
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-lg)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, category ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body)"
    }
  }, category) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-title-lg)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-title)",
      color: "var(--on-dark)",
      margin: 0
    }
  }, title), description ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-md)",
      fontWeight: "var(--weight-light)",
      lineHeight: "var(--lh-body)",
      color: "var(--body)",
      margin: 0
    }
  }, description) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-sm)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href
  }, linkLabel))));
}
Object.assign(__ds_scope, { FeatureCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/FeatureCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/InsightCard.jsx
try { (() => {
/**
 * InsightCard â€” text-forward journal card. Small thumbnail, category, headline, excerpt.
 */
function InsightCard({
  image,
  imageAlt = "",
  category,
  headline,
  excerpt,
  date,
  href = "#",
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      gap: "var(--space-lg)",
      padding: "var(--space-lg)",
      background: "var(--canvas)",
      border: "1px solid var(--hairline)",
      color: "var(--on-dark)",
      textDecoration: "none",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: 140,
      minWidth: 140,
      aspectRatio: "4 / 3",
      background: `#000 url(${image}) center/cover no-repeat`
    },
    role: "img",
    "aria-label": imageAlt
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, category ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body)"
    }
  }, category, date ? /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--muted)",
      marginLeft: 12,
      letterSpacing: "var(--ls-caption)"
    }
  }, "\xB7 ", date) : null) : null, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-title-lg)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-title)",
      margin: 0
    }
  }, headline), excerpt ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-light)",
      color: "var(--body)",
      margin: 0
    }
  }, excerpt) : null));
}
Object.assign(__ds_scope, { InsightCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/InsightCard.jsx", error: String((e && e.message) || e) }); }

// components/cards/ProjectCard.jsx
try { (() => {
/**
 * ProjectCard â€” the "new model" card, adapted for portfolio projects.
 * 16:10 hero image on plain --canvas (no surface fill), display-md title, spec line.
 */
function ProjectCard({
  image,
  imageAlt = "",
  name,
  specs,
  href = "#",
  linkLabel = "Explore this project",
  style
}) {
  return /*#__PURE__*/React.createElement("a", {
    href: href,
    style: {
      display: "flex",
      flexDirection: "column",
      background: "var(--canvas)",
      color: "var(--on-dark)",
      textDecoration: "none",
      gap: "var(--space-lg)",
      ...style
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    style: {
      width: "100%",
      aspectRatio: "16 / 10",
      background: `#000 url(${image}) center/cover no-repeat`
    },
    role: "img",
    "aria-label": imageAlt
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-md)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-display-md)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--on-dark)",
      margin: 0
    }
  }, name), specs ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-light)",
      color: "var(--body)"
    }
  }, specs) : null), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    href: href
  }, linkLabel));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/cards/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// components/data/StatCell.jsx
try { (() => {
/**
 * StatCell â€” technical spec cell (value + label). Sits in --surface-soft.
 */
function StatCell({
  value,
  label,
  hint,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface-soft)",
      padding: "var(--space-xl)",
      border: "1px solid var(--hairline-strong)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-sm)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-display-sm)",
      letterSpacing: "var(--ls-display)",
      color: "var(--on-dark)"
    }
  }, value), label ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body)"
    }
  }, label) : null, hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-light)",
      color: "var(--muted)",
      marginTop: 4
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { StatCell });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/StatCell.jsx", error: String((e && e.message) || e) }); }

// components/forms/CookieConsent.jsx
try { (() => {
/**
 * CookieConsent â€” bottom-right dismissible consent card.
 */
function CookieConsent({
  title = "This site uses cookies",
  body = "Analytics tracking is used to understand how visitors reach the portfolio. No personal data is sold or shared.",
  onAccept,
  onDecline
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-label": "Cookie consent",
    style: {
      maxWidth: 380,
      background: "var(--canvas)",
      color: "var(--on-dark)",
      padding: "var(--space-lg)",
      border: "1px solid var(--hairline)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-title-sm)",
      fontWeight: "var(--weight-bold)",
      textTransform: "uppercase",
      letterSpacing: "var(--ls-label)"
    }
  }, title), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-light)",
      lineHeight: "var(--lh-body)",
      color: "var(--body)"
    }
  }, body), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      marginTop: "var(--space-xs)"
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Button, {
    variant: "outline",
    size: "sm",
    onClick: onAccept
  }, "Accept all"), /*#__PURE__*/React.createElement(__ds_scope.TextLink, {
    showArrow: false,
    onClick: onDecline
  }, "Decline non-essential")));
}
Object.assign(__ds_scope, { CookieConsent });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/CookieConsent.jsx", error: String((e && e.message) || e) }); }

// components/forms/TextInput.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * TextInput â€” 48px dark input, sharp corners, hairline border, thickens on focus.
 */
function TextInput({
  label,
  hint,
  error,
  id,
  value,
  onChange,
  placeholder,
  type = "text",
  multiline = false,
  rows = 4,
  ...rest
}) {
  const [focused, setFocused] = React.useState(false);
  const inputId = id || React.useId?.() || "textinput";
  const inputStyle = {
    display: "block",
    width: "100%",
    minHeight: multiline ? "auto" : 48,
    padding: "12px 16px",
    background: "var(--surface-card)",
    color: "var(--on-dark)",
    fontFamily: "var(--font-body)",
    fontSize: "var(--fs-body-md)",
    fontWeight: "var(--weight-light)",
    lineHeight: "var(--lh-body)",
    border: `1px solid ${error ? "var(--danger)" : focused ? "var(--on-dark)" : "var(--hairline)"}`,
    borderRadius: "var(--radius-none)",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color var(--duration-base) var(--ease-standard)",
    resize: multiline ? "vertical" : "none"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-xs)"
    }
  }, label ? /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-dark)"
    }
  }, label) : null, multiline ? /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputStyle
  }, rest)) : /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false),
    style: inputStyle
  }, rest)), error ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--danger)",
      fontWeight: "var(--weight-light)"
    }
  }, error) : hint ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--muted)",
      fontWeight: "var(--weight-light)"
    }
  }, hint) : null);
}
Object.assign(__ds_scope, { TextInput });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/TextInput.jsx", error: String((e && e.message) || e) }); }

// components/nav/CategoryTab.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * CategoryTab â€” text-only uppercase tab. Active state = white text + 2px white underline.
 */
function CategoryTab({
  label,
  active = false,
  onClick,
  href,
  style,
  ...rest
}) {
  const base = {
    display: "inline-block",
    background: "transparent",
    border: "none",
    padding: "12px 0",
    marginRight: "var(--space-xl)",
    fontFamily: "var(--font-display)",
    fontSize: "var(--fs-label)",
    fontWeight: "var(--weight-bold)",
    letterSpacing: "var(--ls-label)",
    textTransform: "uppercase",
    color: active ? "var(--on-dark)" : "var(--body)",
    textDecoration: "none",
    cursor: "pointer",
    borderBottom: active ? "2px solid var(--on-dark)" : "2px solid transparent",
    transition: "color var(--duration-base) var(--ease-standard)"
  };
  const Tag = href ? "a" : "button";
  return /*#__PURE__*/React.createElement(Tag, _extends({}, rest, {
    href: href,
    onClick: onClick,
    style: {
      ...base,
      ...style
    }
  }), label);
}
Object.assign(__ds_scope, { CategoryTab });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/CategoryTab.jsx", error: String((e && e.message) || e) }); }

// components/nav/Footer.jsx
try { (() => {
/**
 * Footer â€” black, 4-column link list + fine print. Never inverts.
 */
function Footer({
  brand = "BASIM SHABIR",
  columns = [{
    title: "Work",
    links: [{
      label: "Case studies",
      href: "#"
    }, {
      label: "Selected projects",
      href: "#"
    }, {
      label: "Open source",
      href: "#"
    }]
  }, {
    title: "Studio",
    links: [{
      label: "About",
      href: "#"
    }, {
      label: "Journal",
      href: "#"
    }, {
      label: "RÃ©sumÃ©",
      href: "#"
    }]
  }, {
    title: "Connect",
    links: [{
      label: "Email",
      href: "#"
    }, {
      label: "LinkedIn",
      href: "#"
    }, {
      label: "GitHub",
      href: "#"
    }]
  }, {
    title: "Legal",
    links: [{
      label: "Privacy",
      href: "#"
    }, {
      label: "Imprint",
      href: "#"
    }]
  }],
  fineprint = "Â© 2026 Basim Shabir. All work presented is portfolio material â€” client identities may be anonymised."
}) {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--canvas)",
      color: "var(--body)",
      padding: "var(--space-xxl) var(--space-xl)",
      borderTop: "1px solid var(--hairline-strong)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)",
      paddingBottom: "var(--space-xl)",
      borderBottom: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: 20,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      color: "var(--on-dark)"
    }
  }, brand), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 60,
      height: 4,
      background: "var(--stripe-gradient)",
      display: "inline-block"
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-xl)",
      padding: "var(--space-xl) 0"
    }
  }, columns.map(col => /*#__PURE__*/React.createElement("div", {
    key: col.title
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--on-dark)",
      marginBottom: "var(--space-md)"
    }
  }, col.title), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: 0,
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)"
    }
  }, col.links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l.label
  }, /*#__PURE__*/React.createElement("a", {
    href: l.href,
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      fontWeight: "var(--weight-light)",
      color: "var(--body)",
      textDecoration: "none"
    }
  }, l.label))))))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: "var(--space-lg)",
      borderTop: "1px solid var(--hairline-strong)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-caption)",
      fontWeight: "var(--weight-regular)",
      letterSpacing: "var(--ls-caption)",
      color: "var(--muted)"
    }
  }, fineprint)));
}
Object.assign(__ds_scope, { Footer });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/Footer.jsx", error: String((e && e.message) || e) }); }

// components/nav/TopNav.jsx
try { (() => {
/**
 * TopNav â€” fixed 64px black bar. Wordmark left, primary menu center-left, utilities right.
 */
function TopNav({
  brand = "BASIM SHABIR",
  items = [{
    label: "Work",
    href: "#work"
  }, {
    label: "About",
    href: "#about"
  }, {
    label: "Journal",
    href: "#journal"
  }, {
    label: "Contact",
    href: "#contact"
  }],
  active,
  onItemClick,
  utilities,
  sticky = true
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      position: sticky ? "sticky" : "relative",
      top: 0,
      zIndex: 40,
      display: "flex",
      alignItems: "center",
      height: 64,
      padding: "0 var(--space-xl)",
      background: "var(--canvas)",
      borderBottom: "1px solid var(--hairline-strong)",
      color: "var(--on-dark)",
      fontFamily: "var(--font-body)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "var(--space-sm)",
      fontFamily: "var(--font-display)",
      fontSize: 16,
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      color: "var(--on-dark)",
      textDecoration: "none",
      marginRight: "var(--space-xxl)"
    }
  }, /*#__PURE__*/React.createElement("span", null, brand), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      width: 36,
      height: 4,
      background: "var(--stripe-gradient)",
      display: "inline-block"
    }
  })), /*#__PURE__*/React.createElement("ul", {
    style: {
      display: "flex",
      gap: "var(--space-xl)",
      listStyle: "none",
      margin: 0,
      padding: 0,
      flex: 1
    }
  }, items.map(it => {
    const isActive = active === it.label;
    return /*#__PURE__*/React.createElement("li", {
      key: it.label
    }, /*#__PURE__*/React.createElement("a", {
      href: it.href,
      onClick: onItemClick ? e => onItemClick(it, e) : undefined,
      style: {
        fontFamily: "var(--font-display)",
        fontSize: "var(--fs-nav)",
        fontWeight: "var(--weight-regular)",
        letterSpacing: "var(--ls-nav)",
        color: isActive ? "var(--on-dark)" : "var(--body)",
        textDecoration: "none",
        paddingBottom: 4,
        borderBottom: isActive ? "2px solid var(--on-dark)" : "2px solid transparent",
        transition: "color var(--duration-base) var(--ease-standard)"
      }
    }, it.label));
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-md)"
    }
  }, utilities));
}
Object.assign(__ds_scope, { TopNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/nav/TopNav.jsx", error: String((e && e.message) || e) }); }

// components/surface/CtaBand.jsx
try { (() => {
/**
 * CtaBand â€” pre-footer call-to-action over full-bleed photography.
 */
function CtaBand({
  headline,
  subhead,
  image,
  action,
  overlay = 0.5,
  minHeight = 420
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      width: "100%",
      minHeight,
      background: image ? `#000 url(${image}) center/cover no-repeat` : "var(--canvas)",
      color: "var(--on-dark)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "80px var(--space-xl)",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: `rgba(0,0,0,${overlay})`
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      textAlign: "center",
      maxWidth: 800
    }
  }, headline ? /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-md)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-display-md)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--on-dark)",
      margin: 0
    }
  }, headline) : null, subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-title-sm)",
      fontWeight: "var(--weight-light)",
      color: "var(--body-strong)",
      marginTop: "var(--space-md)",
      marginBottom: 0
    }
  }, subhead) : null, action ? /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xl)"
    }
  }, action) : null));
}
Object.assign(__ds_scope, { CtaBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/CtaBand.jsx", error: String((e && e.message) || e) }); }

// components/surface/HeroBand.jsx
try { (() => {
/**
 * HeroBand â€” full-bleed photo band with left-aligned uppercase h1 + sub-headline.
 */
function HeroBand({
  eyebrow,
  headline,
  subhead,
  image,
  imageAlt = "",
  actions,
  align = "left",
  minHeight = 620,
  overlay = 0.35,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      position: "relative",
      width: "100%",
      minHeight,
      background: image ? `#000 url(${image}) center/cover no-repeat` : "var(--canvas)",
      color: "var(--on-dark)",
      display: "flex",
      alignItems: "flex-end",
      padding: "var(--space-xxl) var(--space-xl)",
      overflow: "hidden",
      boxSizing: "border-box"
    }
  }, image ? /*#__PURE__*/React.createElement("div", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      inset: 0,
      background: `linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,${overlay}) 60%, rgba(0,0,0,${Math.min(overlay + 0.2, 0.8)}) 100%)`
    }
  }) : null, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative",
      maxWidth: "var(--content-max)",
      width: "100%",
      margin: "0 auto",
      textAlign: align
    }
  }, eyebrow ? /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: "var(--weight-bold)",
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body-strong)",
      marginBottom: "var(--space-md)"
    }
  }, eyebrow) : null, headline ? /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-display-xl)",
      fontWeight: "var(--weight-bold)",
      lineHeight: "var(--lh-display)",
      letterSpacing: "var(--ls-display)",
      textTransform: "uppercase",
      color: "var(--on-dark)",
      margin: 0,
      maxWidth: "18ch"
    }
  }, headline) : null, subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-title-md)",
      fontWeight: "var(--weight-light)",
      lineHeight: "var(--lh-title-relaxed)",
      color: "var(--body-strong)",
      marginTop: "var(--space-lg)",
      marginBottom: 0,
      maxWidth: "48ch"
    }
  }, subhead) : null, actions ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      marginTop: "var(--space-xl)"
    }
  }, actions) : null, children));
}
Object.assign(__ds_scope, { HeroBand });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/HeroBand.jsx", error: String((e && e.message) || e) }); }

// components/surface/MStripe.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * MStripe â€” the 4px signature tricolor divider. The only decorative element in the system.
 */
function MStripe({
  width = "100%",
  height = 4,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "presentation",
    style: {
      width,
      height,
      background: "var(--stripe-gradient)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { MStripe });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/surface/MStripe.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/app.jsx
try { (() => {
/* eslint-disable */
const {
  useState
} = React;
const DS = window.BasimShabirDesignSystem_41feaf;
const {
  TopNav,
  IconButton,
  MStripe,
  HeroBand,
  Button,
  CategoryTab,
  ProjectCard,
  TextLink,
  FeatureCard,
  CaseStudyCard,
  StatCell,
  ContactLauncher,
  InsightCard,
  CtaBand,
  TextInput,
  Footer
} = DS;
const D = window.PortfolioData;

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// Home
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function HomeScreen({
  onNav
}) {
  const featured = D.projects.slice(0, 3);
  const journal = D.journal.slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: "Data & AI consulting \xB7 Melbourne",
    headline: "The ultimate portfolio.",
    subhead: "Basim Shabir engineers applied ML for the production line \u2014 from Monash honours research to shipping engagements for retail, manufacturing, and legal-tech clients.",
    image: D.images.hero,
    minHeight: 640,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      onClick: () => onNav("contact")
    }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNav("work")
    }, "Selected work"))
  }), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Selected work",
    title: "More from the studio.",
    action: /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => onNav("work")
    }, "View all projects")
  }), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, featured.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    image: p.image,
    name: p.name,
    specs: p.specs,
    linkLabel: "Explore this project",
    href: "#",
    style: {
      cursor: "pointer"
    },
    onClick: e => {
      e.preventDefault();
      onNav("case-study", p.id);
    }
  }))), /*#__PURE__*/React.createElement(MStripe, {
    style: {
      marginTop: "var(--space-section)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: containerRow(3)
  }, /*#__PURE__*/React.createElement(StatCell, {
    value: "18",
    label: "Projects shipped",
    hint: "Consulting + research + OSS"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "0.62s",
    label: "P95 latency",
    hint: "Median inference target"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "4\xD7",
    label: "Model uplift",
    hint: "vs. baseline forecasting"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "2025",
    label: "Monash honours",
    hint: "Applied ML \xB7 first-class"
  }))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Journal",
    title: "Field notes.",
    action: /*#__PURE__*/React.createElement(TextLink, {
      onClick: () => onNav("journal")
    }, "Read all posts")
  }), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, journal.map(j => /*#__PURE__*/React.createElement(FeatureCard, {
    key: j.headline,
    image: j.image,
    category: `${j.category} Â· ${j.date}`,
    title: j.headline,
    description: j.excerpt,
    linkLabel: "Read more"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(CaseStudyCard, {
    image: D.images.track,
    aspect: "21 / 9",
    category: "Case study \xB7 Manufacturing",
    caption: "Real-time defect classification on the M42 line \u2014 production ML shipped in 8 weeks.",
    onClick: e => {
      e.preventDefault();
      onNav("case-study", "line-defect");
    },
    style: {
      cursor: "pointer"
    }
  })), /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Start a project.",
    subhead: "Advisory sprint, engagement, or a research collab \u2014 let's talk about scope.",
    image: D.images.heroAlt,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNav("contact")
    }, "Get in touch")
  }));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// Work
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function WorkScreen({
  onNav
}) {
  const [tab, setTab] = useState("All");
  const cats = ["All", "Consulting", "Research", "Case study", "Open source"];
  const filtered = tab === "All" ? D.projects : D.projects.filter(p => p.category.toLowerCase().startsWith(tab.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Selected work",
    title: "Every engagement.",
    subhead: "A rolling index of consulting engagements, research collaborations, and open-source releases from 2023 onward."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-xl)",
      borderBottom: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(CategoryTab, {
    key: c,
    label: c,
    active: tab === c,
    onClick: () => setTab(c)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: containerGrid(3)
  }, filtered.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    image: p.image,
    name: p.name,
    specs: p.specs,
    linkLabel: "Explore this project",
    href: "#",
    style: {
      cursor: "pointer"
    },
    onClick: e => {
      e.preventDefault();
      onNav("case-study", p.id);
    }
  })))), /*#__PURE__*/React.createElement(CtaBand, {
    headline: "Missing something?",
    subhead: "Older work and NDA'd engagements available on request.",
    image: D.images.heroAlt,
    action: /*#__PURE__*/React.createElement(Button, {
      variant: "outline",
      onClick: () => onNav("contact")
    }, "Request full portfolio")
  }));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// Case Study
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function CaseStudyScreen({
  projectId,
  onNav
}) {
  const project = D.projects.find(p => p.id === projectId) || D.projects[0];
  const others = D.projects.filter(p => p.id !== project.id).slice(0, 3);
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(HeroBand, {
    eyebrow: project.category,
    headline: project.name + ".",
    subhead: project.caption,
    image: project.image,
    minHeight: 560
  }), /*#__PURE__*/React.createElement(MStripe, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 340px",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: 700,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body)",
      marginBottom: "var(--space-md)"
    }
  }, "Brief"), /*#__PURE__*/React.createElement("p", {
    style: leadStyle
  }, "The engagement replaced a legacy pipeline with a production ML system running under a strict inference-latency budget. The team ran a 12-week discovery + build cycle, delivered on a fixed scope, and left a runbook the operating team owns."), /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, "Discovery uncovered that 60% of \"model quality\" issues were data-plumbing failures. We stabilised the ingestion side first, then trained a lightweight ensemble that hit the latency target on commodity hardware. The rollout used feature-flags per store cluster, with a full drift-monitoring stack in place from day one."), /*#__PURE__*/React.createElement("div", {
    style: {
      margin: "var(--space-xl) 0",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 1,
      background: "var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement(StatCell, {
    value: "12 wk",
    label: "Engagement length"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "0.4s",
    label: "P95 latency",
    hint: "On commodity hardware"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "+34%",
    label: "Forecast accuracy",
    hint: "vs. legacy baseline"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "0",
    label: "Rollback events",
    hint: "Full-cluster deploy"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--fs-label)",
      fontWeight: 700,
      letterSpacing: "var(--ls-label)",
      textTransform: "uppercase",
      color: "var(--body)",
      marginTop: "var(--space-xl)",
      marginBottom: "var(--space-md)"
    }
  }, "Approach"), /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, "A three-track approach: data plumbing, model architecture, and operating runbook \u2014 running in parallel from week two. The team kept model complexity deliberately low; ensembling three specialised regressors was cheaper than a single deep model and easier to explain to the operating team."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-md)",
      marginTop: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("contact")
  }, "Start a similar project"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav("work")
  }, "\u2190 Back to work"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-lg)",
      background: "var(--surface-soft)",
      border: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowStyle
  }, "Details"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      rowGap: "var(--space-md)",
      marginTop: "var(--space-md)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-sm)",
      color: "var(--body)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, "Client"), /*#__PURE__*/React.createElement("div", null, "Anon \xB7 retail"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, "Sector"), /*#__PURE__*/React.createElement("div", null, "Retail / supply"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, "Team"), /*#__PURE__*/React.createElement("div", null, "2 (Basim + ML eng)"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, "Stack"), /*#__PURE__*/React.createElement("div", null, "Python \xB7 Ray \xB7 MLflow"), /*#__PURE__*/React.createElement("div", {
    style: {
      color: "var(--muted)"
    }
  }, "Year"), /*#__PURE__*/React.createElement("div", null, "2025"))), /*#__PURE__*/React.createElement(ContactLauncher, {
    onClick: () => onNav("contact")
  })))), /*#__PURE__*/React.createElement(SectionHead, {
    eyebrow: "Related",
    title: "More projects."
  }), /*#__PURE__*/React.createElement("div", {
    style: grid3
  }, others.map(p => /*#__PURE__*/React.createElement(ProjectCard, {
    key: p.id,
    image: p.image,
    name: p.name,
    specs: p.specs,
    linkLabel: "Explore this project",
    href: "#",
    style: {
      cursor: "pointer"
    },
    onClick: e => {
      e.preventDefault();
      onNav("case-study", p.id);
    }
  }))));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// Journal
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function JournalScreen({
  onNav
}) {
  const [tab, setTab] = useState("All");
  const cats = ["All", "Research", "Consulting", "Writing"];
  const items = tab === "All" ? D.journal : D.journal.filter(j => j.category.toLowerCase().startsWith(tab.toLowerCase()));
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Journal",
    title: "Field notes.",
    subhead: "Short-form writing on production ML, discovery patterns, and applied research."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-xl)",
      borderBottom: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, cats.map(c => /*#__PURE__*/React.createElement(CategoryTab, {
    key: c,
    label: c,
    active: tab === c,
    onClick: () => setTab(c)
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, items.map(j => /*#__PURE__*/React.createElement(InsightCard, {
    key: j.headline,
    image: j.image,
    category: j.category,
    date: j.date,
    headline: j.headline,
    excerpt: j.excerpt
  })))));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// About
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function AboutScreen({
  onNav
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "About",
    title: "A studio of one.",
    subhead: "Basim Shabir is a Melbourne-based data & AI consultant. Monash 2025. Currently taking on engagements from prototype to scale."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-xxl)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "4 / 5",
      background: `#000 url(${D.images.portrait}) center/cover no-repeat`
    },
    role: "img",
    "aria-label": "Portrait of Basim Shabir"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: leadStyle
  }, "I trained as an applied ML researcher at Monash, and now run a solo consulting practice out of Melbourne. Most engagements sit at the boundary between research-grade models and the production systems that carry them."), /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, "My work tends to look like this: a client has a legacy analytics stack that hit its ceiling, or a research prototype that never made it to production. I run a discovery sprint, build the missing infrastructure, ship the first production model, and hand back a runbook the operating team owns."), /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, "I care about latency budgets, drift monitoring, and the boring middle 60% of an ML system that most consultants avoid. I don't build dashboards. I do build the pipeline behind the dashboard."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xl)",
      display: "flex",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => onNav("contact")
  }, "Start a project"), /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => onNav("work")
  }, "See the work"))))), /*#__PURE__*/React.createElement(MStripe, null), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...eyebrowStyle,
      marginBottom: "var(--space-md)"
    }
  }, "Currently"), /*#__PURE__*/React.createElement("h2", {
    style: h2Style
  }, "Engagements open for Q3 2026."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-xl)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 1,
      background: "var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement(StatCell, {
    value: "12\u201316 wk",
    label: "Typical engagement"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "Q3 26",
    label: "Next opening"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "AUS \xB7 APAC",
    label: "Timezone"
  }), /*#__PURE__*/React.createElement(StatCell, {
    value: "Remote",
    label: "Delivery mode"
  })))));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// Contact
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function ContactScreen({
  onNav
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    brief: ""
  });
  const [sent, setSent] = useState(false);
  const upd = k => e => setForm({
    ...form,
    [k]: e.target.value
  });
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(PageHead, {
    eyebrow: "Contact",
    title: "Start a project.",
    subhead: "Advisory sprint, a full engagement, or a research collab \u2014 sketch the shape below and I'll respond within two working days."
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 960,
      margin: "0 auto",
      display: "grid",
      gridTemplateColumns: "1fr 320px",
      gap: "var(--space-xxl)",
      alignItems: "start"
    }
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-xl)",
      background: "var(--surface-soft)",
      border: "1px solid var(--hairline)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowStyle
  }, "Received"), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2Style,
      marginTop: "var(--space-md)"
    }
  }, "Thanks \u2014 I'll reply within 48 hours."), /*#__PURE__*/React.createElement("p", {
    style: bodyStyle
  }, "A confirmation is on its way to ", form.email || "your inbox", "."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "outline",
    onClick: () => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        company: "",
        brief: ""
      });
    }
  }, "Send another"))) : /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-lg)"
    }
  }, /*#__PURE__*/React.createElement(TextInput, {
    label: "Name",
    value: form.name,
    onChange: upd("name"),
    placeholder: "Basim Shabir"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Email",
    type: "email",
    value: form.email,
    onChange: upd("email"),
    placeholder: "you@studio.com"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Company",
    value: form.company,
    onChange: upd("company"),
    placeholder: "Optional"
  }), /*#__PURE__*/React.createElement(TextInput, {
    label: "Brief",
    multiline: true,
    rows: 6,
    value: form.brief,
    onChange: upd("brief"),
    placeholder: "What are you trying to build, and by when?"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Button, {
    type: "submit"
  }, "Send brief"))), /*#__PURE__*/React.createElement("aside", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-md)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-lg)",
      background: "var(--surface-soft)",
      border: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowStyle
  }, "Direct"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-sm)",
      marginTop: "var(--space-md)",
      fontFamily: "var(--font-body)",
      fontSize: "var(--fs-body-md)",
      color: "var(--body)",
      fontWeight: 300
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "mailto:basim@example.com",
    style: {
      color: "var(--on-dark)"
    }
  }, "basim@example.com"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--body)"
    }
  }, "LinkedIn"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "var(--body)"
    }
  }, "GitHub"))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-lg)",
      background: "var(--surface-card)",
      border: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowStyle
  }, "Currently"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-md)",
      fontFamily: "var(--font-body)",
      fontWeight: 300,
      color: "var(--body)",
      fontSize: 14,
      lineHeight: 1.5
    }
  }, "Next opening: ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--on-dark)"
    }
  }, "Q3 2026"), ". Response window: 48 hours. Melbourne AEST."))))));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// Layout helpers + shared styles
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
const grid3 = {
  padding: "var(--space-section) var(--space-xl)",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "var(--space-lg)",
  maxWidth: "var(--content-max)",
  margin: "0 auto",
  boxSizing: "border-box"
};
const containerRow = () => ({
  maxWidth: "var(--content-max)",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(4, 1fr)",
  gap: 1,
  background: "var(--hairline-strong)"
});
const containerGrid = () => ({
  maxWidth: "var(--content-max)",
  margin: "0 auto",
  display: "grid",
  gridTemplateColumns: "repeat(3, 1fr)",
  gap: "var(--space-lg)"
});
const eyebrowStyle = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--fs-label)",
  fontWeight: 700,
  letterSpacing: "var(--ls-label)",
  textTransform: "uppercase",
  color: "var(--body)"
};
const h2Style = {
  fontFamily: "var(--font-display)",
  fontSize: "var(--fs-display-lg)",
  fontWeight: 700,
  lineHeight: "var(--lh-display-tight)",
  letterSpacing: "var(--ls-display)",
  textTransform: "uppercase",
  color: "var(--on-dark)",
  margin: 0
};
const leadStyle = {
  margin: 0,
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-title-sm)",
  fontWeight: 300,
  lineHeight: 1.5,
  color: "var(--body-strong)",
  marginBottom: "var(--space-md)"
};
const bodyStyle = {
  margin: 0,
  fontFamily: "var(--font-body)",
  fontSize: "var(--fs-body-md)",
  fontWeight: 300,
  lineHeight: 1.6,
  color: "var(--body)",
  marginBottom: "var(--space-md)"
};
function SectionHead({
  eyebrow,
  title,
  action
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "var(--space-section) var(--space-xl) var(--space-lg)",
      borderTop: "1px solid var(--hairline-strong)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto",
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-xl)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: eyebrowStyle
  }, eyebrow), /*#__PURE__*/React.createElement("h2", {
    style: {
      ...h2Style,
      marginTop: "var(--space-sm)"
    }
  }, title)), action));
}
function PageHead({
  eyebrow,
  title,
  subhead
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "var(--space-xxl) var(--space-xl) var(--space-xl)",
      borderBottom: "1px solid var(--hairline-strong)",
      background: "var(--canvas)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--content-max)",
      margin: "0 auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: eyebrowStyle
  }, eyebrow), /*#__PURE__*/React.createElement("h1", {
    style: {
      ...h2Style,
      fontSize: "var(--fs-display-xl)",
      lineHeight: 1,
      marginTop: "var(--space-md)"
    }
  }, title), subhead ? /*#__PURE__*/React.createElement("p", {
    style: {
      ...leadStyle,
      marginTop: "var(--space-lg)",
      maxWidth: "56ch"
    }
  }, subhead) : null));
}

// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
// App shell
// â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”â€”
function App() {
  const [route, setRoute] = useState({
    screen: "home",
    projectId: null
  });
  const navItems = [{
    label: "Work",
    key: "work"
  }, {
    label: "Journal",
    key: "journal"
  }, {
    label: "About",
    key: "about"
  }, {
    label: "Contact",
    key: "contact"
  }];
  const activeLabel = navItems.find(n => n.key === route.screen)?.label || (route.screen === "case-study" ? "Work" : undefined);
  const nav = (screen, projectId = null) => {
    setRoute({
      screen,
      projectId
    });
    window.scrollTo({
      top: 0,
      behavior: "auto"
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--canvas)",
      color: "var(--on-dark)",
      minHeight: "100vh"
    }
  }, /*#__PURE__*/React.createElement(TopNav, {
    brand: "BASIM SHABIR",
    items: navItems,
    active: activeLabel,
    onItemClick: (it, e) => {
      e.preventDefault();
      nav(it.key);
    },
    utilities: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(IconButton, {
      label: "Search"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 16
      }
    }, "\u2315")), /*#__PURE__*/React.createElement(IconButton, {
      label: "Menu"
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 18
      }
    }, "\u2261")))
  }), /*#__PURE__*/React.createElement(MStripe, null), route.screen === "home" && /*#__PURE__*/React.createElement(HomeScreen, {
    onNav: nav
  }), route.screen === "work" && /*#__PURE__*/React.createElement(WorkScreen, {
    onNav: nav
  }), route.screen === "case-study" && /*#__PURE__*/React.createElement(CaseStudyScreen, {
    projectId: route.projectId,
    onNav: nav
  }), route.screen === "journal" && /*#__PURE__*/React.createElement(JournalScreen, {
    onNav: nav
  }), route.screen === "about" && /*#__PURE__*/React.createElement(AboutScreen, {
    onNav: nav
  }), route.screen === "contact" && /*#__PURE__*/React.createElement(ContactScreen, {
    onNav: nav
  }), /*#__PURE__*/React.createElement(Footer, {
    brand: "BASIM SHABIR"
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/data.js
try { (() => {
/* eslint-disable */
// Shared imagery + data for the portfolio UI kit.
window.PortfolioData = {
  images: {
    hero: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=2000&q=80",
    heroAlt: "https://images.unsplash.com/photo-1544731612-de7f96afe55f?w=2000&q=80",
    chip: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    datacenter: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1200&q=80",
    workstation: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=1200&q=80",
    circuit: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    cockpit: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
    track: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=1600&q=80",
    portrait: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=800&q=80",
    codeShot: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    graph: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    boardroom: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?w=1200&q=80"
  },
  projects: [{
    id: "m42-forecast",
    name: "M42 Forecast",
    category: "Consulting Â· Retail",
    specs: "12 weeks Â· retail Â· production ML",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=1200&q=80",
    caption: "Replacing a legacy spreadsheet forecasting stack with a production ML pipeline."
  }, {
    id: "line-defect",
    name: "Line Defect",
    category: "Case study Â· Manufacturing",
    specs: "8 weeks Â· manufacturing Â· real-time",
    image: "https://images.unsplash.com/photo-1541443131876-44b03de101c5?w=1600&q=80",
    caption: "Real-time defect classification for a manufacturing line, running at the edge."
  }, {
    id: "signal-24",
    name: "Signal 24",
    category: "Research Â· NLP",
    specs: "16 weeks Â· applied research",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=1200&q=80",
    caption: "Long-context retrieval with a bespoke reranker for a Melbourne law firm."
  }, {
    id: "cockpit",
    name: "Cockpit",
    category: "Product Â· Analytics",
    specs: "6 weeks Â· advisory sprint",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=1200&q=80",
    caption: "A unified operator dashboard replacing four legacy reporting surfaces."
  }, {
    id: "atlas",
    name: "Atlas",
    category: "Open source",
    specs: "Ongoing Â· MIT",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1200&q=80",
    caption: "A minimal evaluation harness for on-device inference workflows."
  }, {
    id: "monash-thesis",
    name: "Monash Thesis",
    category: "Research Â· Thesis",
    specs: "2024â€“25 Â· honours",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&q=80",
    caption: "Sample-efficient meta-learning for tabular decision tasks in low-data regimes."
  }],
  journal: [{
    category: "Research Â· Journal",
    date: "MAY 2026",
    headline: "On stochastic decoding drift",
    excerpt: "A note on how sampling temperature interacts with prompt-conditioning at inference time.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=80"
  }, {
    category: "Consulting Â· Field notes",
    date: "APR 2026",
    headline: "The first 30 days of any engagement",
    excerpt: "Discovery patterns that tell you whether an ML problem is really a data-plumbing problem.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=900&q=80"
  }, {
    category: "Writing Â· Talk",
    date: "MAR 2026",
    headline: "Notes from a Monash guest lecture",
    excerpt: "On teaching production ML to students who have only ever seen notebooks.",
    image: "https://images.unsplash.com/photo-1531384441138-2736e62e0919?w=900&q=80"
  }, {
    category: "Open source",
    date: "FEB 2026",
    headline: "Atlas v0.4 released",
    excerpt: "Evaluation harness updates, on-device benchmark templates, small-model presets.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=900&q=80"
  }]
};
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Button = __ds_scope.Button;

__ds_ns.CarouselArrow = __ds_scope.CarouselArrow;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.TextLink = __ds_scope.TextLink;

__ds_ns.CaseStudyCard = __ds_scope.CaseStudyCard;

__ds_ns.ContactLauncher = __ds_scope.ContactLauncher;

__ds_ns.FeatureCard = __ds_scope.FeatureCard;

__ds_ns.InsightCard = __ds_scope.InsightCard;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

__ds_ns.StatCell = __ds_scope.StatCell;

__ds_ns.CookieConsent = __ds_scope.CookieConsent;

__ds_ns.TextInput = __ds_scope.TextInput;

__ds_ns.CategoryTab = __ds_scope.CategoryTab;

__ds_ns.Footer = __ds_scope.Footer;

__ds_ns.TopNav = __ds_scope.TopNav;

__ds_ns.CtaBand = __ds_scope.CtaBand;

__ds_ns.HeroBand = __ds_scope.HeroBand;

__ds_ns.MStripe = __ds_scope.MStripe;

})();
