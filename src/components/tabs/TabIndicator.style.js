export const style = `
.indicator {
  position: relative;
  display: block;
  height: 0.25rem;
  left: 0;
  background-color: var(--brand);
  filter: drop-shadow(var(--shadow-around-level-1) var(--brand));
  transition: left var(--long-duration) var(--ease-in-out-quint);
}
`;
