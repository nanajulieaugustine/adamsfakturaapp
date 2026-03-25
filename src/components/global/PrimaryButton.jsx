const PrimaryButton = ({onClick, children}) => {
    return (
        <button className="cursor-pointer m-auto transition-all duration-300 ease-in-out rounded-full px-2.5 py-1.5 bg-transparent border border-foreground hover:bg-foreground hover:text-background" onClick={onClick}>{children}</button>
      );
}
 
export default PrimaryButton;