<template>
  <div>
    <header id="mastheader" class="container">
      <div id="site-branding">
        <slot name="branding" />
      </div>
      <nav id="site-navigation">
        <slot name="navItems" />
      </nav>
    </header>
  </div>
</template>

<style lang="scss" scoped>
#mastheader {
  position: relative;
  width: 100vw;
  overflow: hidden;
}

#mastheader #site-branding {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

#mastheader .site-logo {
  position: relative;
  display: inline-block;
  min-width: 84px;
}

#mastheader .site-logo a {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  color: transparent;
}

#mastheader #site-navigation ul {
  position: absolute;
  right: -100%;

  margin-top: 0;
  padding-left: 0;

  list-style: none;

  transition: right ease-in-out 200ms;
}

#site-menu-toggle:checked ~ #mastheader {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 9999;
  overscroll-behavior: contain;
  overflow-y: auto;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

#site-menu-toggle:checked ~ section {
  margin-top: 100px;
}

#site-menu-toggle:checked ~ #mastheader #site-branding {
  background-color: #dcecfc;
}

#site-menu-toggle:checked ~ #mastheader #site-navigation {
  position: relative;
  height: 100%;
  width: 100%;
}

#site-menu-toggle:checked ~ #mastheader #site-navigation ul {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;

  width: 80%;

  padding: 1rem;

  background-color: #2257bc;
}

#site-menu-toggle:checked ~ #mastheader #site-navigation ul li {
  margin-bottom: 2rem;
}

#site-menu-toggle:checked ~ #mastheader #site-navigation ul li a {
  color: white;
  text-decoration: none;
}

#site-menu-toggle:checked ~ #mastheader #site-branding .sideM svg path:first-child {
  transform: rotate(45deg) translateY(15px);
  transform-origin: center;
}

#site-menu-toggle:checked ~ #mastheader #site-branding .sideM svg path:nth-child(2) {
  display: none;
}

#site-menu-toggle:checked ~ #mastheader #site-branding .sideM svg path:last-child {
  transform: rotate(135deg) translate(3px, -12px);
  transform-origin: center;
}

@media screen and (min-width: 960px) {
  .sideM {
    display: none;
  }

  #mastheader {
    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  #mastheader #site-navigation,
  #mastheader #site-navigation ul {
    position: static;
    display: flex;
    align-items: stretch;
  }

  #mastheader #site-navigation ul li {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 10px;
  }

  #mastheader #site-navigation ul li a,
  #mastheader #site-navigation ul li a:visited {
    display: flex;
    align-items: center;
    justify-content: center;

    padding: 7px 15px;

    background-color: #2257bc;
    border-radius: 10px;

    color: white;

    text-decoration: none;

    transition: background-color ease-in-out 300ms;
  }

  #mastheader #site-navigation ul li a:hover {
    color: white;
    background-color: #4d628b;
  }
}
</style>
