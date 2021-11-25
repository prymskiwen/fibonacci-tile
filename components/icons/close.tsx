function CloseIcon({ color = "#B0ABA7", className="icon" }) {
    return (
        <svg className={className} width="10" height="10" viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.528575 0.528514C0.788925 0.268165 1.21103 0.268165 1.47138 0.528514L4.99998 4.05711L8.52858 0.528514C8.78893 0.268165 9.21103 0.268165 9.47138 0.528514C9.73173 0.788864 9.73173 1.21097 9.47138 1.47132L5.94279 4.99992L9.47138 8.52851C9.73173 8.78886 9.73173 9.21097 9.47138 9.47132C9.21103 9.73167 8.78893 9.73167 8.52858 9.47132L4.99998 5.94273L1.47138 9.47132C1.21103 9.73167 0.788925 9.73167 0.528575 9.47132C0.268226 9.21097 0.268226 8.78886 0.528575 8.52851L4.05717 4.99992L0.528575 1.47132C0.268226 1.21097 0.268226 0.788864 0.528575 0.528514Z" 
        fill={color}
        />
        </svg>
    );
  }
  
  export default CloseIcon;