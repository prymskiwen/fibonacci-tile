function ListIcon({ color = "#B0ABA7", className = "icon" }) {
  return (
    <svg
      className={className}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 6.11946e-07C18 0.5 18 0.895431 18 2V6C18 7.10457 18 8 18 8L-4.02927e-05 8C-4.02927e-05 8 -4.0341e-05 7.10457 -4.02927e-05 6L-4.01437e-05 2C-4.00954e-05 0.895431 -0.000366211 0 -0.000366211 0L18 6.11946e-07ZM16 6V2L1.99996 2L1.99996 6L16 6Z"
        fill={color}
      />
      <path
        d="M18 10C18 10 18 10.8954 18 12V18C18 18 17.1045 18 16 18H1.99996C0.895389 18 -4.02927e-05 18 -4.02927e-05 18L-4.01437e-05 10C-4.01437e-05 10 0.89539 10 1.99996 10L18 10ZM16 16V12L1.99996 12L1.99996 16H16Z"
        fill={color}
      />
    </svg>
  );
}

export default ListIcon;
