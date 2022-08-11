export const style = `
button {
  user-select: text;
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  color: inherit;
  font-family: inherit;
}

.tab {
  background-color: var(--surface1);
  font-weight: var(--font-weight-semibold);
  font-size: var(--font-size-m);
  position: relative;
  overflow: hidden;
  text-overflow: ellipsis;
  text-transform: uppercase;
  cursor: pointer;
  width: 100%;
  height: 3rem;
  transition: all var(--default-duration) var(--ease-in-out-quint);
  transition-property: background-color, color, opacity;
  will-change: background-color, color, opacity;
}
.tab .content {
  width: 100%;
  height: 100%;
  text-align: center;
  user-select: none;
}
.tab[aria-selected=true] {
  position: relative;
  background-color: var(--surface2);
}
.tab[aria-selected=true]::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  opacity: 20%;
  background-color: inherit;
  background-image: linear-gradient(transparent 40%, rgba(51,153,119, .5) 80%);
  background-size: 100% 10%;
  filter: brightness(120%);
  animation: scroll-vhs 6s linear infinite;
}
.tab[aria-selected=true] .content {
  position: relative;
  filter: drop-shadow(0.08rem 0 0 rgba(255, 0, 0, 0.75)) drop-shadow(-0.05rem -0.08rem 0 rgba(0, 255, 0, 0.75)) drop-shadow(0.05rem 0.08rem 0 rgba(0, 0, 255, 0.75));
  animation: glitch-color var(--super-long-duration) infinite;
}
.tab[aria-selected=true] .content::after, .tab[aria-selected=true] .content::before {
  content: attr(data-content);
  color: var(--text1);
  width: inherit;
  height: inherit;
  position: absolute;
  background: inherit;
  overflow: hidden;
}
.tab[aria-selected=true] .content::before {
  left: -0.1rem;
  animation: glitch-noise-before 2s infinite linear alternate-reverse, glitch-color var(--super-long-duration) infinite;
}
.tab[aria-selected=true] .content::after {
  left: 0.1rem;
  animation: glitch-noise-after 2s infinite linear alternate-reverse, glitch-color var(--super-long-duration) infinite;
}
.tab--active {
  color: var(--brand);
}
.tab--disabled {
  opacity: 40%;
  cursor: not-allowed;
}

@keyframes glitch-color {
  0% {
    filter: drop-shadow(0.08rem 0 0 rgba(255, 0, 0, 0.75)) drop-shadow(-0.05rem -0.08rem 0 rgba(0, 255, 0, 0.75)) drop-shadow(0.05rem 0.08rem 0 rgba(0, 0, 255, 0.75));
  }
  14% {
    filter: drop-shadow(-0.05rem -0.08rem 0 rgba(255, 0, 0, 0.75)) drop-shadow(0.05rem 0.05rem 0 rgba(0, 255, 0, 0.75)) drop-shadow(-0.05rem -0.05rem 0 rgba(0, 0, 255, 0.75));
  }
  15% {
    filter: drop-shadow(-0.05rem -0.08rem 0 rgba(255, 0, 0, 0.75)) drop-shadow(0.05rem 0.05rem 0 rgba(0, 255, 0, 0.75)) drop-shadow(-0.05rem -0.05rem 0 rgba(0, 0, 255, 0.75));
  }
  49% {
    filter: drop-shadow(0.05rem 0.08rem 0 rgba(255, 0, 0, 0.75)) drop-shadow(0.08rem 0 0 rgba(0, 255, 0, 0.75)) drop-shadow(0.05rem 0.08rem 0 rgba(0, 0, 255, 0.75));
  }
  50% {
    filter: drop-shadow(0.05rem 0.08rem 0 rgba(255, 0, 0, 0.75)) drop-shadow(0.08rem 0 0 rgba(0, 255, 0, 0.75)) drop-shadow(0.05rem 0.08rem 0 rgba(0, 0, 255, 0.75));
  }
  99% {
    filter: drop-shadow(-0.05rem 0 0 rgba(255, 0, 0, 0.75)) drop-shadow(-0.05rem -0.05rem 0 rgba(0, 255, 0, 0.75)) drop-shadow(-0.05rem -0.08rem 0 rgba(0, 0, 255, 0.75));
  }
  100% {
    filter: drop-shadow(-0.05rem 0 0 rgba(255, 0, 0, 0.75)) drop-shadow(-0.05rem -0.05rem 0 rgba(0, 255, 0, 0.75)) drop-shadow(-0.05rem -0.08rem 0 rgba(0, 0, 255, 0.75));
  }
}
@keyframes glitch-noise-before {
  0% {
    clip: rect(1rem, 100rem, 1rem, 0);
  }
  5% {
    clip: rect(2rem, 100rem, 1rem, 0);
  }
  10% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  15% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  20% {
    clip: rect(1rem, 100rem, 3rem, 0);
  }
  25% {
    clip: rect(1rem, 100rem, 3rem, 0);
  }
  30% {
    clip: rect(2rem, 100rem, 2rem, 0);
  }
  35% {
    clip: rect(1rem, 100rem, 2rem, 0);
  }
  40% {
    clip: rect(2rem, 100rem, 3rem, 0);
  }
  45% {
    clip: rect(3rem, 100rem, 3rem, 0);
  }
  50% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  55% {
    clip: rect(3rem, 100rem, 3rem, 0);
  }
  60% {
    clip: rect(2rem, 100rem, 2rem, 0);
  }
  65% {
    clip: rect(2rem, 100rem, 3rem, 0);
  }
  70% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  75% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  80% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  85% {
    clip: rect(1rem, 100rem, 2rem, 0);
  }
  90% {
    clip: rect(2rem, 100rem, 2rem, 0);
  }
  95% {
    clip: rect(3rem, 100rem, 3rem, 0);
  }
  100% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
}
@keyframes glitch-noise-after {
  0% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  5% {
    clip: rect(2rem, 100rem, 2rem, 0);
  }
  10% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  15% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  20% {
    clip: rect(3rem, 100rem, 3rem, 0);
  }
  25% {
    clip: rect(1rem, 100rem, 2rem, 0);
  }
  30% {
    clip: rect(1rem, 100rem, 3rem, 0);
  }
  35% {
    clip: rect(1rem, 100rem, 3rem, 0);
  }
  40% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  45% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  50% {
    clip: rect(1rem, 100rem, 1rem, 0);
  }
  55% {
    clip: rect(1rem, 100rem, 2rem, 0);
  }
  60% {
    clip: rect(1rem, 100rem, 2rem, 0);
  }
  65% {
    clip: rect(2rem, 100rem, 2rem, 0);
  }
  70% {
    clip: rect(1rem, 100rem, 3rem, 0);
  }
  75% {
    clip: rect(3rem, 100rem, 1rem, 0);
  }
  80% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  85% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  90% {
    clip: rect(3rem, 100rem, 2rem, 0);
  }
  95% {
    clip: rect(1rem, 100rem, 3rem, 0);
  }
  100% {
    clip: rect(3rem, 100rem, 3rem, 0);
  }
}
@keyframes scroll-vhs {
  from {
    background-position: top;
  }
  to {
    background-position: bottom;
  }
}
`;
